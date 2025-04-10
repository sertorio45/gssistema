import type { AuthResponse } from '~/types/auth'

export default defineEventHandler(async (event) => {
  // @ts-ignore - O usuário é adicionado pelo middleware de autenticação
  const user = event.context.user
  
  if (!user) {
    return createError({
      statusCode: 401,
      message: 'Não autorizado',
    })
  }

  const { password, ...userWithoutPassword } = user
  return userWithoutPassword
}) 