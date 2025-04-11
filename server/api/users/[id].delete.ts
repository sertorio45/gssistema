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

    // Verificar se o usuário existe
    const existingUser = await prisma.user.findUnique({
      where: { id },
    })

    if (!existingUser) {
      return createError({
        statusCode: 404,
        message: 'Usuário não encontrado',
      })
    }

    // Excluir o usuário
    await prisma.user.delete({
      where: { id },
    })

    return {
      success: true,
      message: 'Usuário excluído com sucesso',
    }
  }
  catch (error) {
    console.error('Erro ao excluir usuário:', error)
    return createError({
      statusCode: 500,
      message: 'Erro ao excluir usuário',
    })
  }
}) 