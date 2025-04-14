import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    
    if (!id) {
      return {
        success: false,
        error: 'ID não fornecido',
      }
    }
    
    await prisma.article.delete({
      where: { id },
    })
    
    return {
      success: true,
      message: 'Artigo excluído com sucesso',
    }
  } catch (error) {
    console.error('Erro ao excluir artigo:', error)
    return {
      success: false,
      error: error instanceof Error 
        ? `Erro ao excluir artigo: ${error.message}`
        : 'Erro ao excluir artigo',
    }
  }
}) 