// import type { AuthResponse } from '~/types/auth'

export default defineEventHandler(async (event) => {
  const user = event.context.user
  if (!user) {
    return createError({
      statusCode: 401,
      message: 'Não autorizado',
    })
  }

  const { password, ...userWithoutPassword } = user
  event.context.user = user
  return userWithoutPassword
})
