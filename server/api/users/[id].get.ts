import prisma from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')

    if (!id) {
      return createError({
        statusCode: 400,
        message: 'ID do usuário é obrigatório',
      })
    }

    const user = await prisma.user.findUnique({
      where: { id },
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

    if (!user) {
      return createError({
        statusCode: 404,
        message: 'Usuário não encontrado',
      })
    }

    return user
  }
  catch (error) {
    console.error('Erro ao buscar usuário:', error)
    return createError({
      statusCode: 500,
      message: 'Erro ao buscar usuário',
    })
  }
}) 