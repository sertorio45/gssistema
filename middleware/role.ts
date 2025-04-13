import type { UserRole } from '~/types/auth'

export default defineNuxtRouteMiddleware((to) => {
  const { user, isAuthenticated } = useAuth()
  
  // Verifica se a rota tem meta de roles
  const requiredRoles = to.meta.requiredRoles as UserRole[] | undefined
  
  // Se não tem restrição de roles, apenas verifica se está autenticado
  if (!requiredRoles || requiredRoles.length === 0) {
    return
  }
  
  // Se não está autenticado, redireciona para login
  if (!isAuthenticated) {
    return navigateTo('/login')
  }
  
  // Se o usuário não tem a role necessária, redireciona para 403
  if (!user || !requiredRoles.includes(user.role)) {
    return navigateTo('/403')
  }
}) 