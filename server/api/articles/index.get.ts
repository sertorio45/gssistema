import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (_event) => {
  try {
    const articles = await prisma.article.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
    })

    // Formatar a resposta para manter compatibilidade com o frontend
    const formattedArticles = articles.map(article => ({
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
    }))

    return {
      success: true,
      data: formattedArticles,
    }
  } catch (error) {
    console.error('Erro ao buscar artigos:', error)
    return {
      success: false,
      error: error instanceof Error 
        ? `Erro ao buscar artigos: ${error.message}`
        : 'Erro ao buscar artigos',
    }
  }
}) 