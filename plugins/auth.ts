import type { $Fetch } from 'nitropack'

export default defineNuxtPlugin((nuxtApp) => {
  const auth = useAuth()

  // Middleware de rota para autenticação
  addRouteMiddleware('auth', (to) => {
    const publicRoutes = ['/login', '/register', '/forgot-password']
    
    if (!auth.isAuthenticated && !publicRoutes.includes(to.path)) {
      return navigateTo('/login')
    }
    
    if (auth.isAuthenticated && publicRoutes.includes(to.path)) {
      return navigateTo('/')
    }
  })

  return {
    provide: {
      // Função helper para fazer requisições autenticadas
      authFetch: (url: string, options: any = {}) => {
        // Adiciona o token apenas para requisições da API
        const headers = url.startsWith('/api/') && auth.token
          ? { Authorization: `Bearer ${auth.token}` }
          : {}

        return $fetch(url, {
          ...options,
          headers: {
            ...headers,
            ...options.headers,
          },
        })
      }
    }
  }
}) 