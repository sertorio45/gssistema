<script setup lang="ts">
import { computed, ref } from 'vue'
import * as z from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'
import { useRouter } from 'vue-router'
import { useToast } from '@/components/ui/toast'
import { articleDefaultValues, articleFormSchema } from '@/types/article'
import { statuses } from '../data/data'
import '@/composables/useArticle'
import TinyEditor from '@/components/ui/tiny-editor/TinyEditor.vue'
import slugify from 'slugify'

const props = defineProps({
  initialValues: {
    type: Object,
    default: () => articleDefaultValues,
  },
  isEditing: {
    type: Boolean,
    default: false,
  },
  isSubmitting: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['submit', 'cancel'])

const { generateSlug } = useArticle()
const validationSchema = toTypedSchema(articleFormSchema)
const form = useForm({
  validationSchema,
  initialValues: props.initialValues,
})

const { handleSubmit, resetForm, setFieldValue, values } = form

// Estado para controlar se os campos estão carregando
const isLoading = ref(true)
const isSlugGenerating = ref(false)

// Simular carregamento
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})

// Função para gerar slug a partir do título quando o usuário sair do campo
function handleTitleBlur() {
  if (!props.isEditing && values.title) {
    isSlugGenerating.value = true

    // Simular um pequeno atraso para mostrar o skeleton
    setTimeout(() => {
      setFieldValue('slug', generateSlug(values.title))
      isSlugGenerating.value = false
    }, 300)
  }
}

// Manipular o envio do formulário
const onSubmit = handleSubmit((values) => {
  emit('submit', values)
})

// Limpar o formulário
function onCancel() {
  resetForm()
  emit('cancel')
}

// Categorias disponíveis (normalmente viria de uma API)
const categories = [
  { id: '1', name: 'Tecnologia' },
  { id: '2', name: 'Negócios' },
  { id: '3', name: 'Marketing' },
  { id: '4', name: 'Design' },
]

// Atualizar o conteúdo do editor
function updateContent(content: string) {
  setFieldValue('content', content)
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="space-y-6">
    <div class="grid gap-6 md:grid-cols-[2fr_1fr]">
      <!-- Coluna Esquerda - Conteúdo Principal -->
      <div class="">
        <Card>
          <CardContent class="pt-6">
            <div class="space-y-4">
              <FormField v-slot="{ componentField }" name="title">
                <FormItem>
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Skeleton v-if="isLoading" class="h-10 w-full" />
                    <Input
                      v-else
                      v-bind="componentField"
                      placeholder="Título do artigo"
                      @blur="handleTitleBlur"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>

              <!-- Exibir o slug logo abaixo do título -->
              <FormField v-slot="{ componentField }" name="slug">
                <FormItem class="mt-1">
                  <div class="flex items-center gap-2">
                    <FormLabel class="text-sm font-normal mb-0">Slug:</FormLabel>
                    <Skeleton v-if="isLoading || isSlugGenerating" class="h-6 w-48" />
                    <div v-else class="flex items-center">
                      <Input
                        v-bind="componentField"
                        placeholder="url-do-artigo"
                        class="h-7 text-sm"
                      />
                    </div>
                  </div>
                  <FormDescription v-if="!isEditing" class="text-xs">
                    Gerado automaticamente quando você terminar de escrever o título
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              </FormField>

              <FormField v-slot="{ componentField }" name="meta_description">
                <FormItem>
                  <FormLabel>Meta Descrição</FormLabel>
                  <FormControl>
                    <Skeleton v-if="isLoading" class="h-[82px] w-full" />
                    <Textarea
                      v-else
                      v-bind="componentField"
                      placeholder="Breve descrição do artigo que aparecerá nos resultados de pesquisa"
                      :rows="3"
                    />
                  </FormControl>
                  <FormDescription>
                    Máximo de 160 caracteres
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              </FormField>

              <FormField name="content">
                <FormItem>
                  <Skeleton v-if="isLoading" class="h-[500px] w-full" />
                  <TinyEditor
                    v-else
                    v-model="values.content"
                    :disabled="isSubmitting"
                    placeholder="Conteúdo do artigo em formato rico"
                    :height="500"
                    editor-id="article-content-editor"
                    @update:modelValue="updateContent"
                  />
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
          </CardContent>
        </Card>
      </div>

      <!-- Coluna Direita - Configurações -->
      <div class="space-y-6">
        <!-- Status e Visibilidade -->
        <Card>
          <CardHeader class="pb-3">
            <CardTitle class="text-lg">Publicação</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <FormField v-slot="{ componentField }" name="status">
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Skeleton v-if="isLoading" class="h-10 w-full" />
                    <Select v-else v-bind="componentField">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem
                          v-for="status in statuses"
                          :key="status.value"
                          :value="status.value"
                        >
                          {{ status.label }}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
          </CardContent>
        </Card>

        <!-- Categorias e Tags -->
        <Card>
          <CardHeader class="pb-3">
            <CardTitle class="text-lg">Categorização</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <FormField v-slot="{ componentField }" name="category">
                <FormItem>
                  <FormLabel>Categoria</FormLabel>
                  <FormControl>
                    <Skeleton v-if="isLoading" class="h-10 w-full" />
                    <Select v-else v-bind="componentField">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem
                          v-for="category in categories"
                          :key="category.id"
                          :value="category.id"
                        >
                          {{ category.name }}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>

              <FormField v-slot="{ componentField }" name="tags">
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Skeleton v-if="isLoading" class="h-10 w-full" />
                    <Input
                      v-else
                      v-bind="componentField"
                      placeholder="vue, nuxt, web"
                    />
                  </FormControl>
                  <FormDescription>
                    Separadas por vírgula (ex: vue, nuxt, web)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
          </CardContent>
        </Card>

        <!-- Botões de Ação -->
        <div class="flex items-center justify-end space-x-4 pt-4">
          <Button
            type="button"
            variant="outline"
            @click="onCancel"
            :disabled="isSubmitting || isLoading"
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            :disabled="isSubmitting || isLoading"
            class="min-w-[120px]"
          >
            <template v-if="isSubmitting">
              <Icon name="i-radix-icons-spinner" class="mr-2 h-4 w-4 animate-spin" />
              {{ isEditing ? 'Salvando...' : 'Criando...' }}
            </template>
            <template v-else>
              <Icon :name="isEditing ? 'i-radix-icons-check' : 'i-radix-icons-plus'" class="mr-2 h-4 w-4" />
              {{ isEditing ? 'Salvar Alterações' : 'Criar Artigo' }}
            </template>
          </Button>
        </div>
      </div>
    </div>
  </form>
</template>
