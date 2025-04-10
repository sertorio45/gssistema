import type { AuthResponse, LoginCredentials, RegisterData } from '~/types/auth'
import { defineStore } from 'pinia'

export const useAuth = defineStore('auth', () => {
  // Usamos um cookie normal (não HttpOnly) para token de autenticação
  // Isso permite acesso tanto pelo cliente quanto pelo servidor
  const authToken = useCookie('auth_token', {
    maxAge: 7 * 24 * 60 * 60, // 7 dias em segundos
    secure: import.meta.env.PROD,
    sameSite: 'lax',
    path: '/',
  })

  const user = ref<AuthResponse['user'] | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Estado de autenticação baseado no token no cookie
  const isAuthenticated = computed(() => !!authToken.value)

  async function login(credentials: LoginCredentials) {
    try {
      loading.value = true
      error.value = null

      const response = await $fetch<AuthResponse>('/api/auth/login', {
        method: 'POST',
        body: credentials,
      })

      // Armazena o token no cookie
      authToken.value = response.token
      user.value = response.user

      // Redireciona para a home
      navigateTo('/')
    }
    catch (e: any) {
      error.value = e.data?.message || 'Erro ao fazer login'
      throw error.value
    }
    finally {
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

      // Armazena o token no cookie
      authToken.value = response.token
      user.value = response.user

      // Redireciona para a home
      navigateTo('/')
    }
    catch (e: any) {
      error.value = e.data?.message || 'Erro ao criar conta'
      throw error.value
    }
    finally {
      loading.value = false
    }
  }

  function logout() {
    // Limpa os dados locais
    authToken.value = null
    user.value = null

    // Redireciona para a página de login
    navigateTo('/login')
  }

  // Carrega os dados do usuário quando houver um token
  const fetchUserData = async () => {
    if (authToken.value && !user.value) {
      try {
        loading.value = true
        // Carrega os dados do usuário
        const userData = await $fetch<AuthResponse['user']>('/api/auth/me', {
          headers: {
            Authorization: `Bearer ${authToken.value}`,
          },
        })
        user.value = userData
      }
      catch (e) {
        // Em caso de erro com o token, faz logout
        console.warn('Erro ao carregar dados do usuário:', e)
        logout()
      }
      finally {
        loading.value = false
      }
    }
  }

  // Carrega dados do usuário na montagem do componente
  onMounted(fetchUserData)

  // Retorna os métodos e propriedades que queremos expor
  return {
    user,
    token: authToken,
    loading,
    error,
    isAuthenticated,
    login,
    register,
    logout,
  }
})
