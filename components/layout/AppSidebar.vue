<script setup lang="ts">
import type { NavGroup, NavLink, NavSectionTitle } from '~/types/nav'
import { useAuth } from '~/composables/useAuth'
import { filterMenuByRole, navMenu, navMenuBottom } from '~/constants/menus'

function resolveNavItemComponent(item: NavLink | NavGroup | NavSectionTitle): any {
  if ('children' in item)
    return resolveComponent('LayoutSidebarNavGroup')

  return resolveComponent('LayoutSidebarNavLink')
}

const teams: {
  name: string
  logo: string
  plan: string
}[] = [
  {
    name: 'Acme Inc',
    logo: 'i-lucide-gallery-vertical-end',
    plan: 'Enterprise',
  },
  {
    name: 'Acme Corp.',
    logo: 'i-lucide-audio-waveform',
    plan: 'Startup',
  },
  {
    name: 'Evil Corp.',
    logo: 'i-lucide-command',
    plan: 'Free',
  },
]

// Use o store de autenticação
const auth = useAuth()

// Estado inicial do usuário
const user = ref({
  name: '',
  email: '',
  avatar: '/avatars/avatartion.png', // Avatar padrão
  role: '',
})

// Filtra o menu baseado na role do usuário
const filteredMenu = computed(() => {
  if (!auth.user || !auth.user.role) {
    return []
  }
  return filterMenuByRole(navMenu, auth.user.role)
})

// Watch para atualizar os dados do usuário quando o store auth for atualizado
watch(() => auth.user, (newUser) => {
  if (newUser) {
    // Atualiza os dados exibidos na sidebar imediatamente
    user.value = {
      name: newUser.name || 'Usuário',
      email: newUser.email || 'usuario@exemplo.com',
      avatar: newUser.avatar || '/avatars/avatartion.png',
      role: newUser.role || '',
    }
  }
}, { immediate: true, deep: true })

// Adiciona listener para evento customizado de atualização
if (import.meta.client) {
  window.addEventListener('user-updated', () => {
    // Atualiza apenas os dados locais do usuário sem fazer nova requisição
    if (auth.user) {
      user.value = {
        name: auth.user.name || 'Usuário',
        email: auth.user.email || 'usuario@exemplo.com',
        avatar: auth.user.avatar || '/avatars/avatartion.png',
        role: auth.user.role || '',
      }
    }
  })
}

// Função para recarregar dados do usuário
async function refreshUser() {
  // Evita fazer muitas requisições seguidas
  if (auth.loading) {
    return
  }

  try {
    await auth.refreshUserData()
  } 
  catch (error) {
    console.error('Erro ao carregar dados do usuário:', error)
    // Não bloqueia a execução em caso de erro
  }
}

// Carregar dados do usuário ao montar o componente e a cada 3 minutos
onMounted(() => {
  refreshUser()
})

const { sidebar } = useAppSettings()
</script>

<template>
  <Sidebar :collapsible="sidebar.collapsible" :side="sidebar.side" :variant="sidebar.variant">
    <SidebarHeader>
      <LayoutSidebarNavHeader :teams="teams" />
      <Search />
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup v-for="(nav, indexGroup) in filteredMenu" :key="indexGroup">
        <SidebarGroupLabel v-if="nav.heading">
          {{ nav.heading }}
        </SidebarGroupLabel>
        <component :is="resolveNavItemComponent(item)" v-for="(item, index) in nav.items" :key="index" :item="item" />
      </SidebarGroup>
      <SidebarGroup class="mt-auto">
        <component :is="resolveNavItemComponent(item)" v-for="(item, index) in navMenuBottom" :key="index" :item="item" size="sm" />
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <LayoutSidebarNavFooter :user="user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>

<style scoped>

</style>

