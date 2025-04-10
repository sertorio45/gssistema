export default defineNuxtRouteMiddleware((_to) => {
  const { isAuthenticated } = useAuth()

  // Se o usuário não está autenticado
  if (!isAuthenticated) {
    // Redirecionar para a página de login
    return navigateTo('/login')
  }
}) 