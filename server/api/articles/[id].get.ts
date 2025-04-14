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
    
    const article = await prisma.article.findUnique({
      where: { id },
    })
    
    if (!article) {
      return {
        success: false,
        error: 'Artigo não encontrado',
      }
    }
    
    // Formatar a resposta para manter compatibilidade com o frontend
    const formattedArticle = {
      id: article.id,
      title: article.title,
      content: article.content,
      meta_description: article.metaDescription,
      slug: article.slug,
      status: article.status,
      categories: article.categories,
      tags: article.tags,
      created_at: article.createdAt,
      updated_at: article.updatedAt
    }
    
    return {
      success: true,
      data: formattedArticle,
    }
  } catch (error) {
    console.error('Erro ao buscar artigo:', error)
    return {
      success: false,
      error: error instanceof Error 
        ? `Erro ao buscar artigo: ${error.message}`
        : 'Erro ao buscar artigo',
    }
  }
}) 