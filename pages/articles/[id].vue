<script setup lang="ts">
import { useArticle } from '@/composables/useArticle'
import { statuses } from '@/components/article/data/data'

definePageMeta({
  middleware: ['auth'],
  requiredRoles: ['admin', 'funcionario'],
})

const route = useRoute()
const router = useRouter()
const id = route.params.id as string

const { getArticle, deleteArticle } = useArticle()
const { data: article, pending, error, refresh } = await useAsyncData(`article-${id}`, () => getArticle(id))

// Carregar dados sempre que a página for visitada
onMounted(() => {
  refresh()
})

// Encontrar o status para exibição
const statusDisplay = computed(() => {
  if (!article.value) return null
  return statuses.find(s => s.value === article.value.status)
})

// Formatar a data para exibição
const formatDate = (date: string | Date) => {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(new Date(date))
}

// Excluir o artigo
async function handleDelete() {
  if (!confirm('Tem certeza que deseja excluir este artigo?')) return
  
  try {
    const success = await deleteArticle(id)
    if (success) {
      router.push('/articles')
    }
  } catch (error) {
    console.error('Erro ao excluir artigo:', error)
  }
}
</script>

<template>
  <div class="w-full flex flex-col items-stretch gap-4">
    <div class="flex flex-wrap items-end justify-between gap-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Detalhes do Artigo
        </h2>
        <p class="text-muted-foreground">
          Visualize as informações do artigo
        </p>
      </div>
      
      <div class="flex space-x-2">
        <Button 
          variant="outline" 
          @click="router.push('/articles')"
        >
          <Icon name="i-radix-icons-arrow-left" class="mr-2 h-4 w-4" />
          Voltar
        </Button>
        
        <Button 
          v-if="article"
          variant="outline" 
          @click="router.push(`/articles/edit/${id}`)"
        >
          <Icon name="i-radix-icons-pencil-1" class="mr-2 h-4 w-4" />
          Editar
        </Button>
        
        <Button 
          v-if="article"
          variant="destructive" 
          @click="handleDelete"
        >
          <Icon name="i-radix-icons-trash" class="mr-2 h-4 w-4" />
          Excluir
        </Button>
      </div>
    </div>
    
    <div v-if="pending" class="w-full p-8 flex justify-center">
      <Skeleton class="w-full h-[500px]" />
    </div>
    
    <div v-else-if="error || !article">
      <Alert variant="destructive">
        <AlertTitle>Erro</AlertTitle>
        <AlertDescription>
          Não foi possível carregar o artigo. Por favor, tente novamente.
        </AlertDescription>
      </Alert>
    </div>
    
    <div v-else class="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{{ article.title }}</CardTitle>
          <CardDescription>
            <div class="flex items-center gap-2">
              <span v-if="statusDisplay" class="flex items-center">
                <i v-if="statusDisplay.icon" :class="`${statusDisplay.icon} mr-1 h-4 w-4`"></i>
                {{ statusDisplay.label }}
              </span>
              <span class="text-muted-foreground">
                Slug: {{ article.slug }}
              </span>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="space-y-2">
              <h3 class="font-medium">Meta Descrição</h3>
              <p class="text-muted-foreground">{{ article.meta_description || 'Nenhuma' }}</p>
            </div>
            
            <div class="space-y-2">
              <h3 class="font-medium">Categorias</h3>
              <p class="text-muted-foreground">{{ article.categories || 'Nenhuma' }}</p>
            </div>
            
            <div class="space-y-2">
              <h3 class="font-medium">Tags</h3>
              <p class="text-muted-foreground">{{ article.tags || 'Nenhuma' }}</p>
            </div>
            
            <div class="space-y-2">
              <h3 class="font-medium">Criado em</h3>
              <p class="text-muted-foreground">{{ formatDate(article.created_at) }}</p>
            </div>
            
            <div class="space-y-2">
              <h3 class="font-medium">Atualizado em</h3>
              <p class="text-muted-foreground">{{ formatDate(article.updated_at) }}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Conteúdo</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="prose prose-sm max-w-none dark:prose-invert">
            <p>{{ article.content }}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template> 