<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useAuth } from '~/composables/useAuth'

const props = defineProps({
  showEmail: {
    type: Boolean,
    default: true,
  },
  nameClass: {
    type: String,
    default: 'truncate font-semibold',
  },
  emailClass: {
    type: String,
    default: 'truncate text-xs',
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
const showLocalSkeleton = ref(false)
const userData = ref({
  name: '',
  email: '',
})

// Gerencia o timer de debounce
let debounceTimer = null

// Função segura para iniciar carregamento com debounce
function startLoading() {
  // Não reinicia o skeleton se já temos dados válidos
  if (auth.user?.name && 
      auth.user?.email && 
      userData.value.name === auth.user.name &&
      userData.value.email === auth.user.email) {
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
    if (auth.user) {
      userData.value = {
        name: auth.user.name || 'Usuário',
        email: auth.user.email || 'email@exemplo.com',
      }
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
  if (newUser) {
    userData.value = {
      name: newUser.name || 'Usuário',
      email: newUser.email || 'email@exemplo.com',
    }
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
  if (!auth.user?.name || !auth.user?.email) {
    loadUserData()
  } else {
    userData.value = {
      name: auth.user.name || 'Usuário',
      email: auth.user.email || 'email@exemplo.com',
    }
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
      if (!auth.user || 
          userData.value.name !== auth.user.name || 
          userData.value.email !== auth.user.email) {
        loadUserData()
      }
    }, 200)
  })
}
</script>

<template>
  <div class="grid flex-1 text-left text-sm leading-tight">
    <!-- Nome do usuário -->
    <template v-if="!showSkeleton">
      <span :class="nameClass">{{ userData.name }}</span>
    </template>
    <Skeleton v-else class="h-4 w-16 my-0.5" />
    
    <!-- Email do usuário (opcional) -->
    <template v-if="showEmail">
      <template v-if="!showSkeleton">
        <span :class="emailClass">{{ userData.email }}</span>
      </template>
      <Skeleton v-else class="h-3 w-24" />
    </template>
  </div>
</template> 