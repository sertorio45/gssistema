<script setup lang="ts">
import { computed, onMounted, ref, watch, onUnmounted } from 'vue'
import { useAuth } from '~/composables/useAuth'

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value),
  },
  fallbackText: {
    type: String,
    default: '',
  },
  showLoading: {
    type: Boolean,
    default: true,
  },
  // Adicionando debounce para evitar flashs rápidos
  loadingDebounce: {
    type: Number,
    default: 300,
  },
})

// Acessa o store de auth
const auth = useAuth()
const isLoading = ref(false)
const localAvatarUrl = ref('')
const showLocalSkeleton = ref(false)

// Gerencia o timer de debounce
let debounceTimer = null

// Computa o tamanho do avatar com base na propriedade size
const avatarSize = computed(() => {
  switch (props.size) {
    case 'sm': return 'h-6 w-6'
    case 'lg': return 'h-12 w-12'
    default: return 'h-8 w-8'
  }
})

// Gera as iniciais do nome do usuário para o fallback
const initials = computed(() => {
  if (props.fallbackText) {
    return props.fallbackText
  }
  if (!auth.user?.name) {
    return ''
  }

  return auth.user.name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
})

// Função segura para iniciar carregamento com debounce
function startLoading() {
  // Não reinicia o skeleton se já temos dados
  if (auth.user?.avatar && localAvatarUrl.value === auth.user.avatar) {
    return
  }
  
  // Apenas mostra o skeleton se o carregamento demorar
  if (debounceTimer) clearTimeout(debounceTimer)
  
  debounceTimer = setTimeout(() => {
    showLocalSkeleton.value = true
  }, props.loadingDebounce)
  
  isLoading.value = true
}

// Função segura para finalizar carregamento
function finishLoading() {
  if (debounceTimer) {
    clearTimeout(debounceTimer)
    debounceTimer = null
  }
  
  isLoading.value = false
  showLocalSkeleton.value = false
}

// Função para carregar os dados do usuário
async function loadUserData() {
  if (auth.loading) return // Evita carregar se já está carregando
  
  startLoading()
  try {
    await auth.refreshUserData()
    if (auth.user?.avatar) {
      localAvatarUrl.value = auth.user.avatar
    }
  } finally {
    finishLoading()
  }
}

// Verifica se deve mostrar o skeleton loader
const showSkeleton = computed(() => 
  (props.showLoading && (auth.loading || showLocalSkeleton.value)),
)

// Observar mudanças no usuário
watch(() => auth.user, (newUser) => {
  if (newUser?.avatar) {
    localAvatarUrl.value = newUser.avatar
  }
}, { immediate: true })

// Limpar timer ao desmontar
onUnmounted(() => {
  if (debounceTimer) {
    clearTimeout(debounceTimer)
  }
})

// Carregar dados ao montar o componente, apenas se não tivermos os dados
onMounted(() => {
  if (!auth.user?.avatar) {
    loadUserData()
  } else {
    localAvatarUrl.value = auth.user.avatar
  }
})

// Atualiza os dados quando o usuário mudar, com debounce
if (import.meta.client) {
  let updateTimer = null
  
  window.addEventListener('user-updated', () => {
    // Evita múltiplas atualizações em sequência
    if (updateTimer) clearTimeout(updateTimer)
    
    updateTimer = setTimeout(() => {
      // Atualiza apenas se necessário
      if (!auth.user?.avatar || localAvatarUrl.value !== auth.user.avatar) {
        loadUserData()
      }
    }, 200)
  })
}
</script>

<template>
  <div class="relative">
    <Avatar class="rounded-full" :class="[avatarSize]">
      <template v-if="!showSkeleton">
        <AvatarImage
          v-if="auth.user?.avatar"
          :src="auth.user.avatar"
          :alt="auth.user?.name || ''"
        />
        <AvatarFallback class="rounded-full">
          {{ initials }}
        </AvatarFallback>
      </template>
      <Skeleton v-else class="rounded-full" :class="[avatarSize]" />
    </Avatar>
  </div>
</template> 