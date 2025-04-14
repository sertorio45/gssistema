<script setup lang="ts">
import type { Column } from '@tanstack/vue-table'
import type { Component } from 'vue'
import type { Article } from '../data/schema'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

interface DataTableFacetedFilter {
  column?: Column<Article, any>
  title?: string
  options: {
    label: string
    value: string
    icon?: string
  }[]
}

const props = defineProps<DataTableFacetedFilter>()

const facets = computed(() => props.column?.getFacetedUniqueValues())
const selectedValues = computed(() => new Set(props.column?.getFilterValue() as string[]))
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="outline" size="sm" class="h-8 border-dashed">
        <Icon name="i-radix-icons-plus-circled" class="mr-2 h-4 w-4" />
        {{ title }}
        <template v-if="selectedValues.size > 0">
          <Separator orientation="vertical" class="mx-2 h-4" />
          <Badge
            variant="secondary"
            class="rounded-sm px-1 font-normal lg:hidden"
          >
            {{ selectedValues.size }}
          </Badge>
          <div class="hidden lg:flex space-x-1">
            <Badge
              v-if="selectedValues.size > 2"
              variant="secondary"
              class="rounded-sm px-1 font-normal"
            >
              {{ selectedValues.size }} selecionados
            </Badge>

            <template v-else>
              <Badge
                v-for="item in options
                  .filter((option: any) => selectedValues.has(option.value))"
                :key="item.value"
                variant="secondary"
                class="rounded-sm px-1 font-normal"
              >
                {{ item.label }}
              </Badge>
            </template>
          </div>
        </template>
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-[200px] p-0" align="start">
      <Command>
        <CommandInput placeholder="Buscar..." />
        <CommandList>
          <CommandEmpty>Nenhum resultado.</CommandEmpty>
          <CommandGroup>
            <CommandItem
              v-for="option in options"
              :key="option.value"
              :value="option.value"
              @click="
                () => {
                  const filterValue = column?.getFilterValue() as string[] ?? []
                  const newFilterValue = filterValue.includes(option.value)
                    ? filterValue.filter((value) => value !== option.value)
                    : [...filterValue, option.value]
                  
                  column?.setFilterValue(newFilterValue.length ? newFilterValue : undefined)
                }
              "
            >
              <div
                class="mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary"
                :class="{
                  'bg-primary text-primary-foreground': selectedValues.has(option.value),
                  'opacity-50': !selectedValues.has(option.value) && selectedValues.size > 0,
                }"
              >
                <Icon v-if="selectedValues.has(option.value)" name="i-radix-icons-check" class="h-4 w-4" />
              </div>
              <div class="flex items-center gap-2">
                <i v-if="option.icon" :class="`${option.icon} h-4 w-4 text-muted-foreground`" />
                <span>{{ option.label }}</span>
              </div>
              <div
                v-if="facets?.get(option.value)"
                class="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs"
              >
                {{ facets.get(option.value) }}
              </div>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator v-if="selectedValues.size > 0" />
          <CommandGroup v-if="selectedValues.size > 0">
            <CommandItem
              @click="column?.setFilterValue(undefined)"
              class="justify-center text-center"
            >
              Limpar Filtros
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template> 