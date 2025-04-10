import { defineStore } from 'pinia'
import type { LoginCredentials, RegisterData, AuthResponse } from '~/types/auth'

export const useAuth = defineStore('auth', () => {
  const user = ref<AuthResponse['user'] | null>(null)
  const token = ref<string | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const isAuthenticated = computed(() => !!token.value)
  const { $authFetch } = useNuxtApp()

  async function login(credentials: LoginCredentials) {
    try {
      loading.value = true
      error.value = null
      
      const response = await $fetch<AuthResponse>('/api/auth/login', {
        method: 'POST',
        body: credentials,
      })

      user.value = response.user
      token.value = response.token
      
      // Armazena o token no localStorage
      localStorage.setItem('auth_token', response.token)
      
      // Redireciona para a home
      navigateTo('/')
    } catch (e: any) {
      error.value = e.data?.message || 'Erro ao fazer login'
      throw error.value
    } finally {
      loading.value = false
    }
  }

  async function register(data: RegisterData) {
    try {
      loading.value = true
      error.value = null
      
      const response = await $fetch<AuthResponse>('/api/auth/register', {
        method: 'POST',
        body: data,
      })

      user.value = response.user
      token.value = response.token
      
      // Armazena o token no localStorage
      localStorage.setItem('auth_token', response.token)
      
      // Redireciona para a home
      navigateTo('/')
    } catch (e: any) {
      error.value = e.data?.message || 'Erro ao criar conta'
      throw error.value
    } finally {
      loading.value = false
    }
  }

  function logout() {
    user.value = null
    token.value = null
    localStorage.removeItem('auth_token')
    navigateTo('/login')
  }

  // Inicializa o estado de autenticação
  onMounted(async () => {
    const savedToken = localStorage.getItem('auth_token')
    if (savedToken) {
      token.value = savedToken
      try {
        // Carrega os dados do usuário
        const userData = await $fetch<AuthResponse['user']>('/api/auth/me', {
          headers: {
            Authorization: `Bearer ${savedToken}`
          }
        })
        user.value = userData
      } catch {
        logout()
      }
    }
  })

  return {
    user,
    token,
    loading,
    error,
    isAuthenticated,
    login,
    register,
    logout,
  }
}) 