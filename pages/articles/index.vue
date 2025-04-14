<script setup lang="ts">
import { columns } from '@/components/article/components/columns'
import DataTable from '@/components/article/components/DataTable.vue'
import { useArticle } from '@/composables/useArticle'

definePageMeta({
  middleware: ['auth'],
  requiredRoles: ['admin', 'funcionario'],
})

const { getArticles } = useArticle()
const { data, pending, refresh } = await useAsyncData('articles', getArticles)

// Carregar dados sempre que a página for visitada
onMounted(() => {
  refresh()
})
</script>

<template>
  <div class="w-full flex flex-col items-stretch gap-4">
    <div class="flex flex-wrap items-end justify-between gap-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Artigos
        </h2>
        <p class="text-muted-foreground">
          Gerencie todos os artigos do sistema
        </p>
      </div>
    </div>
    
    <div v-if="pending" class="w-full p-8 flex justify-center">
      <Skeleton class="w-full h-[300px]" />
    </div>
    
    <DataTable v-else :data="data || []" :columns="columns" />
  </div>
</template> 