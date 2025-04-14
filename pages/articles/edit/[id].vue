<script setup lang="ts">
import type { ArticleForm as ArticleFormType } from '@/types/article'
import ArticleForm from '@/components/article/components/ArticleForm.vue'
import { useArticle } from '@/composables/useArticle'

definePageMeta({
  middleware: ['auth'],
  requiredRoles: ['admin', 'funcionario'],
})

const route = useRoute()
const router = useRouter()
const isSubmitting = ref(false)
const id = route.params.id as string

const { getArticle, updateArticle } = useArticle()
const { data: article, pending, error } = await useAsyncData(`article-${id}`, () => getArticle(id))

// Formatando os dados do artigo para o formulário
const formattedData = computed(() => {
  if (!article.value) {
    return {}
  }
  
  return {
    title: article.value.title,
    content: article.value.content,
    meta_description: article.value.meta_description,
    slug: article.value.slug,
    status: article.value.status,
    categories: article.value.categories,
    tags: article.value.tags,
  }
})

async function handleSubmit(values: ArticleFormType) {
  try {
    isSubmitting.value = true
    const result = await updateArticle(id, values)
    
    if (result) {
      router.push('/articles')
    }
  } catch (e) {
    console.error('Erro ao atualizar artigo:', e)
  } finally {
    isSubmitting.value = false
  }
}

function handleCancel() {
  router.push('/articles')
}
</script>

<template>
  <div class="container">
    <!-- Breadcrumb e Título -->
    <div class="mb-8">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
            <h2 class="text-2xl font-bold tracking-tight">
            Editar Artigo
          </h2>
          <p class="text-muted-foreground mt-1">
            Atualize as informações do artigo
          </p>
        </div>
        
        <div v-if="article">
          <Button 
            variant="outline" 
            class="mr-2"
            @click="router.push(`/articles/${id}`)"
          >
            <Icon name="i-radix-icons-eye" class="mr-2 h-4 w-4" />
            Visualizar artigo
          </Button>
        </div>
      </div>
    </div>
    
    <!-- Estado de carregamento -->
    <div v-if="pending">
      <Skeleton class="w-full h-[60px] rounded-lg" />
      <Skeleton class="w-full h-[500px] rounded-lg" />
    </div>
    
    <!-- Mensagem de erro -->
    <div v-else-if="error || !article" class="max-w-md mx-auto">
      <Card class="border-destructive/50">
        <CardHeader>
          <CardTitle class="flex items-center text-destructive">
            <Icon name="i-radix-icons-exclamation-triangle" class="mr-2 h-5 w-5" />
            Erro ao carregar
          </CardTitle>
          <CardDescription>
            Não foi possível carregar o artigo solicitado
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Verifique se o artigo existe ou tente novamente mais tarde.</p>
        </CardContent>
        <CardFooter class="border-t bg-muted/50 px-6 py-4">
          <Button variant="default" @click="router.push('/articles')">
            <Icon name="i-radix-icons-arrow-left" class="mr-2 h-4 w-4" />
            Voltar para a lista
          </Button>
        </CardFooter>
      </Card>
    </div>
    
    <!-- Formulário de edição -->
    <Card v-else class="shadow-sm border-0 overflow-hidden">
      
      <CardContent class="p-0">
        <ArticleForm
          :initial-values="formattedData"
          :is-editing="true"
          :is-submitting="isSubmitting"
          @submit="handleSubmit"
          @cancel="handleCancel"
        />
      </CardContent>
    </Card>
  </div>
</template> 