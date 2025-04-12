<script setup lang="ts">
import { onMounted, watch, onUnmounted } from 'vue'
import { useSidebar } from '~/components/ui/sidebar'
import { useAuth } from '~/composables/useAuth'

defineProps<{
  user: {
    name: string
    email: string
    avatar: string
  }
}>()

const { isMobile, setOpenMobile } = useSidebar()
const auth = useAuth()
const showModalTheme = ref(false)
const isLoading = ref(true)
const avatarLoaded = ref(false)
const isLoadingData = ref(false) // Controle para evitar múltiplas chamadas

// Pré-carrega a imagem do avatar para evitar piscadas
function preloadAvatar(src: string) {
  if (!src) {
    return
  }
  const img = new Image()
  img.onload = () => {
    avatarLoaded.value = true
  }
  img.src = src
}

function handleLogout() {
  auth.logout()
}

// Referências para limpar event listeners e timers
let userUpdatedHandler = null
let loadingTimer = null

// Função segura para carregar dados
async function loadUserData() {
  // Evita múltiplas chamadas simultâneas
  if (isLoadingData.value) {
    return
  }
  
  try {
    isLoadingData.value = true
    isLoading.value = true
    avatarLoaded.value = false
    
    // Limpa timers anteriores
    if (loadingTimer) {
      clearTimeout(loadingTimer)
    }
    
    // Usa Promise para ter mais controle
    await auth.refreshUserData()
    
    // Após carregar, verifica se tem avatar
    if (auth.user?.avatar) {
      preloadAvatar(auth.user.avatar)
    }
    
    // Finaliza o carregamento
    isLoading.value = false
  }
  catch (error) {
    console.error('Erro ao carregar dados do usuário:', error)
    isLoading.value = false
  }
  finally {
    // Liberando para novas chamadas apenas após um delay
    // para evitar múltiplas chamadas em sequência
    loadingTimer = setTimeout(() => {
      isLoadingData.value = false
    }, 500)
  }
}

// Certificar-se de que os dados do usuário estão carregados
onMounted(() => {
  // Carregamento controlado para evitar flickering
  if (!auth.user) {
    loadUserData()
  }
  else {
    isLoading.value = false
    if (auth.user?.avatar) {
      preloadAvatar(auth.user.avatar)
    }
  }
})

// Limpa listeners e timers ao desmontar
onUnmounted(() => {
  if (userUpdatedHandler) {
    window.removeEventListener('user-updated', userUpdatedHandler)
  }
  
  if (loadingTimer) {
    clearTimeout(loadingTimer)
  }
})

// Atualiza os dados quando o usuário mudar
if (import.meta.client) {
  // Remove handler anterior se existir
  if (userUpdatedHandler) {
    window.removeEventListener('user-updated', userUpdatedHandler)
  }
  
  // Cria um novo handler
  userUpdatedHandler = () => {
    // Não recarrega se já estiver em processo de carregamento
    if (isLoadingData.value) {
      return
    }
    loadUserData()
  }
  
  // Registra o handler
  window.addEventListener('user-updated', userUpdatedHandler)
}
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <SidebarMenuButton
            size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div class="flex items-center space-x-4">
              <div class="relative h-10 w-10">
                <Skeleton
                  v-if="isLoading || !avatarLoaded"
                  class="h-10 w-10 rounded-full absolute inset-0"
                />
                <div
                  class="absolute inset-0 transition-opacity duration-200"
                  :class="[isLoading || !avatarLoaded ? 'opacity-0' : 'opacity-100']"
                >
                  <Avatar class="h-10 w-10 rounded-full">
                    <AvatarImage v-if="user.avatar" :src="user.avatar" :alt="user.name" />
                    <AvatarFallback>
                      {{ user.name.split(' ').map((n) => n[0]).join('') }}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <div class="space-y-1">
                <template v-if="isLoading">
                  <Skeleton class="h-4 w-[100px] rounded" />
                  <Skeleton class="h-3 w-[150px] rounded" />
                </template>
                <template v-else>
                  <span class="block font-semibold text-sm">{{ user.name }}</span>
                  <span class="block text-xs text-muted-foreground">{{ user.email }}</span>
                </template>
              </div>
            </div>
            <Icon name="i-lucide-chevrons-up-down" class="ml-auto size-4" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          class="min-w-56 w-[--radix-dropdown-menu-trigger-width] rounded-lg"
          :side="isMobile ? 'bottom' : 'right'"
          align="end"
        >
          <DropdownMenuLabel class="p-0 font-normal">
            <div class="flex items-center space-x-4 px-2 py-2">
              <div class="relative h-10 w-10">
                <Skeleton
                  v-if="isLoading || !avatarLoaded"
                  class="h-10 w-10 rounded-full absolute inset-0"
                />
                <div
                  class="absolute inset-0 transition-opacity duration-200"
                  :class="[isLoading || !avatarLoaded ? 'opacity-0' : 'opacity-100']"
                >
                  <Avatar class="h-10 w-10 rounded-full">
                    <AvatarImage v-if="user.avatar" :src="user.avatar" :alt="user.name" />
                    <AvatarFallback>
                      {{ user.name.split(' ').map((n) => n[0]).join('') }}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <div class="space-y-1">
                <template v-if="isLoading">
                  <Skeleton class="h-4 w-[100px] rounded" />
                  <Skeleton class="h-3 w-[150px] rounded" />
                </template>
                <template v-else>
                  <span class="block font-semibold text-sm">{{ user.name }}</span>
                  <span class="block text-xs text-muted-foreground">{{ user.email }}</span>
                </template>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Icon name="i-lucide-badge-check" />
              Account
            </DropdownMenuItem>
            <DropdownMenuItem as-child>
              <NuxtLink to="/settings" @click="setOpenMobile(false)">
                <Icon name="i-lucide-settings" />
                Settings
              </NuxtLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icon name="i-lucide-bell" />
              Notifications
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <NuxtLink @click="showModalTheme = true" external target="_blank">
                <Icon name="i-lucide-paintbrush" />
                Theme
              </NuxtLink>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem @click="handleLogout">
            <Icon name="i-lucide-log-out" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>

  <Dialog v-model:open="showModalTheme">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Customize</DialogTitle>
        <DialogDescription class="text-xs text-muted-foreground">
          Customize & Preview in Real Time
        </DialogDescription>
      </DialogHeader>
      <ThemeCustomize />
    </DialogContent>
  </Dialog>
</template>

<style scoped>
.transition-opacity {
  transition: opacity 0.2s ease-in-out;
}
</style>
