<script setup lang="ts">
import type { Row } from '@tanstack/vue-table'
import type { Article } from '../data/schema'
import { computed } from 'vue'
import { articleSchema } from '../data/schema'

interface DataTableRowActionsProps {
  row: Row<Article>
}
const props = defineProps<DataTableRowActionsProps>()

const article = computed(() => articleSchema.parse(props.row.original))
const router = useRouter()

function navigateToEdit() {
  router.push(`/articles/edit/${article.value.id}`)
}

function navigateToView() {
  router.push(`/articles/${article.value.id}`)
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        variant="ghost"
        class="h-8 w-8 flex p-0 data-[state=open]:bg-muted"
      >
        <Icon name="i-radix-icons-dots-horizontal" class="h-4 w-4" />
        <span class="sr-only">Abrir menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-[160px]">
      <DropdownMenuItem @click="navigateToView">
        <Icon name="radix-icons:eye-open" class="mr-2 h-4 w-4" />
        Visualizar
      </DropdownMenuItem>
      <DropdownMenuItem @click="navigateToEdit">
        <Icon name="i-radix-icons-pencil-1" class="mr-2 h-4 w-4" />
        Editar
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem class="text-destructive">
        <Icon name="i-radix-icons-trash" class="mr-2 h-4 w-4" />
        Excluir
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template> 