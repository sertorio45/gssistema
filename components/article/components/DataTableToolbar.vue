<script setup lang="ts">
import type { Table } from '@tanstack/vue-table'
import type { Article } from '../data/schema'
import { computed } from 'vue'
import { statuses } from '../data/data'
import DataTableFacetedFilter from './DataTableFacetedFilter.vue'
import DataTableViewOptions from './DataTableViewOptions.vue'

interface DataTableToolbarProps {
  table: Table<Article>
}

const props = defineProps<DataTableToolbarProps>()
const router = useRouter()

const isFiltered = computed(() => props.table.getState().columnFilters.length > 0)

function navigateToCreate() {
  router.push('/articles/create')
}
</script>

<template>
  <div class="flex flex-wrap items-center justify-between gap-2">
    <div class="flex flex-1 items-center space-x-2">
      <Input
        placeholder="Filtrar artigos..."
        :model-value="(table.getColumn('title')?.getFilterValue() as string) ?? ''"
        class="h-8 w-[150px] lg:w-[250px]"
        @input="table.getColumn('title')?.setFilterValue($event.target.value)"
      />
      <DataTableFacetedFilter
        v-if="table.getColumn('status')"
        :column="table.getColumn('status')"
        title="Status"
        :options="statuses"
      />

      <Button
        v-if="isFiltered"
        variant="ghost"
        class="h-8 px-2 lg:px-3"
        @click="table.resetColumnFilters()"
      >
        Redefinir
        <Icon name="i-radix-icons-cross-2" class="ml-2 h-4 w-4" />
      </Button>
    </div>
    
    <div class="flex items-center space-x-2">
      <Button @click="navigateToCreate" size="sm" class="h-8">
        <Icon name="i-radix-icons-plus" class="mr-2 h-4 w-4" />
        Novo Artigo
      </Button>
      <DataTableViewOptions :table="table" />
    </div>
  </div>
</template> 