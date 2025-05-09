import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    const body = await readBody(event)
    
    if (!id) {
      return {
        success: false,
        error: 'ID não fornecido',
      }
    }
    
    if (!body.title || !body.content || !body.slug) {
      return {
        success: false,
        error: 'Campos obrigatórios não preenchidos',
      }
    }
    
    const article = await prisma.article.update({
      where: { id },
      data: {
        title: body.title,
        content: body.content,
        metaDescription: body.meta_description || null,
        slug: body.slug,
        status: body.status || 'draft',
        categories: body.categories || null,
        tags: body.tags || null,
      },
    })
    
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
    console.error('Erro ao atualizar artigo:', error)
    
    return {
      success: false,
      error: error instanceof Error 
        ? `Erro ao atualizar artigo: ${error.message}`
        : 'Erro ao atualizar artigo',
    }
  }
}) 