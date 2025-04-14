import type { Article, ArticleForm } from '~/types/article'

export function useArticle() {
  const { $toast } = useNuxtApp()

  // Listar todos os artigos
  const getArticles = async () => {
    try {
      const { data } = await useFetch('/api/articles')
      return data.value?.data || []
    } catch (error) {
      console.error('Erro ao buscar artigos:', error)
      $toast?.error('Erro ao buscar artigos')
      return []
    }
  }

  // Buscar um artigo específico
  const getArticle = async (id: string) => {
    try {
      const { data } = await useFetch(`/api/articles/${id}`)
      return data.value?.data
    } catch (error) {
      console.error(`Erro ao buscar artigo ID ${id}:`, error)
      $toast?.error('Erro ao buscar artigo')
      return null
    }
  }

  // Criar um novo artigo
  const createArticle = async (article: ArticleForm) => {
    try {
      const { data, error } = await useFetch('/api/articles', {
        method: 'POST',
        body: article,
      })
      
      if (error.value) {
        throw new Error(error.value.message)
      }
      
      if (data.value?.success) {
        $toast?.success('Artigo criado com sucesso')
        return data.value.data
      } 
      
      throw new Error(data.value?.error || 'Erro ao criar artigo')
    } catch (error) {
      console.error('Erro ao criar artigo:', error)
      $toast?.error(error instanceof Error ? error.message : 'Erro ao criar artigo')
      return null
    }
  }

  // Atualizar um artigo existente
  const updateArticle = async (id: string, article: ArticleForm) => {
    try {
      const { data, error } = await useFetch(`/api/articles/${id}`, {
        method: 'PUT',
        body: article,
      })
      
      if (error.value) {
        throw new Error(error.value.message)
      }
      
      if (data.value?.success) {
        $toast?.success('Artigo atualizado com sucesso')
        return data.value.data
      }
      
      throw new Error(data.value?.error || 'Erro ao atualizar artigo')
    } catch (error) {
      console.error(`Erro ao atualizar artigo ID ${id}:`, error)
      $toast?.error(error instanceof Error ? error.message : 'Erro ao atualizar artigo')
      return null
    }
  }

  // Excluir um artigo
  const deleteArticle = async (id: string) => {
    try {
      const { data, error } = await useFetch(`/api/articles/${id}`, {
        method: 'DELETE',
      })
      
      if (error.value) {
        throw new Error(error.value.message)
      }
      
      if (data.value?.success) {
        $toast?.success('Artigo excluído com sucesso')
        return true
      }
      
      throw new Error(data.value?.error || 'Erro ao excluir artigo')
    } catch (error) {
      console.error(`Erro ao excluir artigo ID ${id}:`, error)
      $toast?.error(error instanceof Error ? error.message : 'Erro ao excluir artigo')
      return false
    }
  }

  // Gerar slug com base no título
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  return {
    getArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle,
    generateSlug,
  }
} 