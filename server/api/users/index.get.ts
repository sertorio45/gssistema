import prisma from '../../utils/prisma'

export default defineEventHandler(async () => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        bio: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    })
    return users
  } 
  catch (error) {
    console.error('Erro ao buscar usuários:', error)
    return createError({
      statusCode: 500,
      message: 'Erro ao buscar usuários',
    })
  }
}) 