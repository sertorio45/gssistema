<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useAuth } from '~/composables/useAuth'

const props = defineProps({
  avatarSize: {
    type: String,
    default: 'md',
  },
  showEmail: {
    type: Boolean,
    default: true,
  },
  direction: {
    type: String,
    default: 'row',
    validator: (value: string) => ['row', 'column'].includes(value),
  },
  nameClass: {
    type: String,
    default: 'truncate font-semibold',
  },
  emailClass: {
    type: String,
    default: 'truncate text-xs',
  },
  gap: {
    type: String,
    default: '2',
  },
  showLoading: {
    type: Boolean,
    default: true,
  },
  // Adicionando debounce para evitar flashs rápidos
  loadingDebounce: {
    type: Number,
    default: 400, // Levemente maior que nos componentes filhos
  },
})

// Acessa o store de auth
const auth = useAuth()
const isLoading = ref(false)
const showLocalSkeleton = ref(false)

// Gerencia o timer de debounce
let debounceTimer = null
let updateTimer = null

// Computa as classes para o layout
const containerClass = computed(() => {
  const layout = props.direction === 'row' ? 'flex items-center' : 'flex flex-col items-center'
  const spacing = `gap-${props.gap}`
  return `${layout} ${spacing}`
})

// Função para iniciar carregamento com debounce
function startLoading() {
  // Apenas mostra o skeleton se o carregamento demorar
  if (debounceTimer) clearTimeout(debounceTimer)
  
  debounceTimer = setTimeout(() => {
    showLocalSkeleton.value = true
  }, props.loadingDebounce)
  
  isLoading.value = true
}

// Função para finalizar carregamento
function finishLoading() {
  if (debounceTimer) {
    clearTimeout(debounceTimer)
    debounceTimer = null
  }
  
  // Pequeno delay para evitar piscadas durante transições
  setTimeout(() => {
    isLoading.value = false
    showLocalSkeleton.value = false
  }, 100)
}

// Função para forçar a atualização dos dados do usuário de forma controlada
async function forceUpdate() {
  if (auth.loading) return // Evita duplicar carregamentos
  
  startLoading()
  try {
    await auth.refreshUserData(true)
    // Aguarda um pouco para evitar piscadas
    await new Promise(resolve => setTimeout(resolve, 50))
  } finally {
    finishLoading()
  }
}

// Limpar timers ao desmontar o componente
onUnmounted(() => {
  if (debounceTimer) clearTimeout(debounceTimer)
  if (updateTimer) clearTimeout(updateTimer)
})

// Atualiza dados do usuário ao montar o componente
onMounted(() => {
  // Só carrega dados se não tivermos dados do usuário
  if (!auth.user) {
    forceUpdate()
  }
})

// Escuta o evento de atualização do usuário com debounce
if (import.meta.client) {
  window.addEventListener('user-updated', () => {
    // Evita múltiplas atualizações em sequência
    if (updateTimer) clearTimeout(updateTimer)
    
    updateTimer = setTimeout(() => {
      if (!isLoading.value) { // Evita iniciar nova carga se já estamos carregando
        forceUpdate()
      }
    }, 300)
  })
}
</script>

<template>
  <div :class="containerClass">
    <UserAvatar
      :size="avatarSize"
      :showLoading="showLoading || showLocalSkeleton"
      :loadingDebounce="loadingDebounce - 100"
    />
    <UserInfo
      :showEmail="showEmail"
      :nameClass="nameClass"
      :emailClass="emailClass"
      :showLoading="showLoading || showLocalSkeleton"
      :loadingDebounce="loadingDebounce - 100"
    />
  </div>
</template> 