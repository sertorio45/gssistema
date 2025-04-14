<script setup lang="ts">
import ArticleForm from '@/components/article/components/ArticleForm.vue'
import { useArticle } from '@/composables/useArticle'
import type { ArticleForm as ArticleFormType } from '@/types/article'
import { articleDefaultValues } from '@/types/article'

definePageMeta({
  middleware: ['auth'],
  requiredRoles: ['admin', 'funcionario'],
})

const { createArticle } = useArticle()
const router = useRouter()
const isSubmitting = ref(false)

// Função para criar um artigo
async function handleSubmit(values: ArticleFormType) {
  try {
    isSubmitting.value = true
    const result = await createArticle(values)
    
    if (result) {
      router.push('/articles')
    }
  } catch (error) {
    console.error('Erro ao criar artigo:', error)
  } finally {
    isSubmitting.value = false
  }
}

// Cancelar e voltar para a lista
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
            Criar Artigo
          </h2>
          <p class="text-muted-foreground mt-1">
            Crie um novo artigo para publicação no sistema
          </p>
        </div>
      </div>
    </div>
    
    <!-- Card do formulário com sombra suave -->
    <Card class="shadow-sm border-0 overflow-hidden rounded">
      
      <CardContent class="p-0">
        <ArticleForm
          :initial-values="articleDefaultValues"
          :is-editing="false"
          :is-submitting="isSubmitting"
          @submit="handleSubmit"
          @cancel="handleCancel"
        />
      </CardContent>
    </Card>
  </div>
</template> 