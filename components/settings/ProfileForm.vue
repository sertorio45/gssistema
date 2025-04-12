<script setup lang="ts">
import { cn } from '@/lib/utils'
import { toTypedSchema } from '@vee-validate/zod'
import { FieldArray, useForm } from 'vee-validate'
import { h, nextTick, onMounted, ref } from 'vue'
import * as z from 'zod'
import { toast } from '~/components/ui/toast'
import { useAuth } from '~/composables/useAuth'

// Acessa o store de auth
const auth = useAuth()
const loading = ref(false)
const formVisible = ref(false)
const loadingFinished = ref(false)
const isDataLoading = ref(false) // Controla se já estamos carregando dados

// Ignore a variável não utilizada
const _verifiedEmails = ref(['m@example.com', 'm@google.com', 'm@support.com'])

// Dados do usuário para preencher o formulário
const userData = ref({
  username: '',
  email: '',
  bio: '',
  avatar: '',
})

// Formulário
const form = ref(null)

// Inicializa o formulário
const formSchema = toTypedSchema(z.object({
  username: z
    .string()
    .min(2, {
      message: 'Nome de usuário deve ter pelo menos 2 caracteres.',
    })
    .max(30, {
      message: 'Nome de usuário não pode ter mais de 30 caracteres.',
    }),
  email: z
    .string({
      required_error: 'Email é obrigatório.',
    })
    .email('Forneça um email válido.'),
  bio: z.string().max(160, { message: 'Bio não pode ter mais de 160 caracteres.' }).min(4, { message: 'Bio deve ter pelo menos 4 caracteres.' }),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: 'Forneça uma URL válida.' }),
      }),
    )
    .optional(),
}))

// Inicializa o formulário vazio (será preenchido depois)
const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
  initialValues: {
    username: '',
    email: '',
    bio: '',
    urls: [
      { value: 'https://shadcn.com' },
      { value: 'http://twitter.com/shadcn' },
    ],
  },
})

// Função para carregar os dados do usuário no formulário
async function loadUserData() {
  // Evita múltiplas chamadas simultâneas
  if (isDataLoading.value) return
  
  try {
    isDataLoading.value = true
    loadingFinished.value = false
    formVisible.value = false
    
    // Força uma nova requisição apenas se necessário
    if (!auth.user) {
      await auth.refreshUserData()
    }
    
    if (auth.user) {
      // Atualiza os valores do usuário
      userData.value = {
        username: auth.user.name || '',
        email: auth.user.email || '',
        bio: auth.user.bio || '',
        avatar: auth.user.avatar || '',
      }
      
      // Atualiza os valores do formulário
      resetForm({
        values: {
          username: auth.user.name || '',
          email: auth.user.email || '',
          bio: auth.user.bio || 'Conte algo sobre você.',
          urls: [
            { value: 'https://shadcn.com' },
            { value: 'http://twitter.com/shadcn' },
          ],
        },
      })

      // Marca o carregamento como concluído
      loadingFinished.value = true
      
      // Espera o próximo ciclo de renderização antes de mostrar o formulário
      await nextTick()
      
      // Adiciona um delay para a transição
      setTimeout(() => {
        formVisible.value = true
        isDataLoading.value = false // Libera para novos carregamentos
      }, 300)
    }
  }
  catch (error) {
    console.error('Erro ao carregar dados do usuário:', error)
    loadingFinished.value = true
    formVisible.value = true
    isDataLoading.value = false // Libera para novos carregamentos mesmo em caso de erro
  }
}

// Variável para armazenar a referência do evento
let userUpdatedHandlerId = null

// Carregar dados do usuário ao montar o componente
onMounted(() => {
  // Aguarda um pouco para garantir que tudo está pronto
  setTimeout(() => {
    loadUserData()
  }, 100)
})

// Evento para quando os dados do usuário forem atualizados em outro lugar
if (import.meta.client) {
  // Remove o handler anterior se existir
  if (userUpdatedHandlerId) {
    window.removeEventListener('user-updated', userUpdatedHandlerId)
  }
  
  // Define o handler e armazena a referência
  userUpdatedHandlerId = () => {
    // Não recarrega se já estiver em processo de carregamento
    if (isDataLoading.value) return
    
    // Define estados de loading
    loadingFinished.value = false
    formVisible.value = false
    
    // Espera um pouco antes de tentar recarregar
    setTimeout(() => {
      loadUserData()
    }, 100)
  }
  
  // Registra o novo handler
  window.addEventListener('user-updated', userUpdatedHandlerId)
}

const onSubmit = handleSubmit(async (formValues) => {
  try {
    loading.value = true
    
    if (auth.user?.id) {
      const updatedUser = await auth.updateProfile(auth.user.id, {
        name: formValues.username,
        email: formValues.email,
        bio: formValues.bio,
      })
      
      userData.value = {
        username: updatedUser.name || '',
        email: updatedUser.email || '',
        bio: updatedUser.bio || '',
        avatar: updatedUser.avatar || '',
      }
      
      auth.syncUserData()
      
      toast({
        title: 'Perfil atualizado com sucesso!',
        description: 'As alterações já estão disponíveis em todo o sistema.',
      })
    }
  }
  catch (error: any) {
    toast({
      title: 'Erro ao atualizar perfil',
      description: error?.message || 'Tente novamente mais tarde.',
      variant: 'destructive',
    })
  }
  finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="profile-form-wrapper">
    <div>
      <h3 class="text-lg font-medium">Perfil</h3>
      <p class="text-sm text-muted-foreground">
        Assim é como os outros vão te ver no site.
      </p>
    </div>
    <Separator />
    
    <div class="relative mt-6 min-h-[500px]">
      <!-- Skeleton de carregamento -->
      <div
        class="skeleton-container"
        :class="{
          'opacity-0': formVisible,
          'opacity-100': !formVisible
        }"
      >
        <div class="space-y-8">
          <div class="space-y-2">
            <Skeleton class="h-4 w-24" />
            <Skeleton class="h-10 w-full" />
            <Skeleton class="h-3 w-3/4" />
          </div>
          <div class="space-y-2">
            <Skeleton class="h-4 w-16" />
            <Skeleton class="h-10 w-full" />
            <Skeleton class="h-3 w-2/4" />
          </div>
          <div class="space-y-2">
            <Skeleton class="h-4 w-12" />
            <Skeleton class="h-24 w-full" />
            <Skeleton class="h-3 w-3/5" />
          </div>
          <div class="flex gap-2">
            <Skeleton class="h-10 w-32" />
            <Skeleton class="h-10 w-32" />
          </div>
        </div>
      </div>

      <!-- Formulário real -->
      <div
        class="form-container"
        :class="{
          'opacity-0': !formVisible || !loadingFinished,
          'opacity-100': formVisible && loadingFinished
        }"
      >
        <form class="space-y-8" @submit="onSubmit" ref="form">
          <FormField v-slot="{ componentField }" name="username">
            <FormItem>
              <FormLabel>Nome de usuário</FormLabel>
              <FormControl>
                <div class="relative">
                  <Input
                    type="text"
                    placeholder="usuário"
                    v-bind="componentField"
                    :disabled="loading"
                  />
                  <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-background/50">
                    <Skeleton class="h-5 w-3/4" />
                  </div>
                </div>
              </FormControl>
              <FormDescription>
                Este é seu nome de exibição público. Pode ser seu nome real ou um pseudônimo.
              </FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="email">
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <div class="relative">
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    v-bind="componentField"
                    :disabled="loading"
                  />
                  <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-background/50">
                    <Skeleton class="h-5 w-3/4" />
                  </div>
                </div>
              </FormControl>
              <FormDescription>
                Este é o seu email para login e comunicações.
              </FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="bio">
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <div class="relative">
                  <Textarea
                    placeholder="Conte um pouco sobre você"
                    v-bind="componentField"
                    :disabled="loading"
                  />
                  <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-background/50">
                    <Skeleton class="h-20 w-3/4" />
                  </div>
                </div>
              </FormControl>
              <FormDescription>
                Você pode <span>@mencionar</span> outros usuários e organizações para criar links.
              </FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>

          <div>
            <FieldArray v-slot="{ fields, push, remove }" name="urls">
              <div v-for="(field, index) in fields" :key="`urls-${field.key}`">
                <FormField v-slot="{ componentField }" :name="`urls[${index}].value`">
                  <FormItem>
                    <FormLabel :class="cn(index !== 0 && 'sr-only')">
                      URLs
                    </FormLabel>
                    <FormDescription :class="cn(index !== 0 && 'sr-only')">
                      Adicione links para seu site, blog ou perfis sociais.
                    </FormDescription>
                    <div class="relative flex items-center">
                      <FormControl>
                        <Input type="url" v-bind="componentField" :disabled="loading" />
                      </FormControl>
                      <button type="button" class="absolute end-0 py-2 pe-3 text-muted-foreground" @click="remove(index)" :disabled="loading">
                        <Icon name="i-radix-icons-cross-1" class="w-3" />
                      </button>
                    </div>
                    <FormMessage />
                  </FormItem>
                </FormField>
              </div>

              <Button
                type="button"
                variant="outline"
                size="sm"
                class="mt-2 w-20 text-xs"
                @click="push({ value: '' })"
                :disabled="loading"
              >
                Adicionar URL
              </Button>
            </FieldArray>
          </div>

          <div class="flex justify-start gap-2">
            <Button type="submit" :disabled="loading">
              <Icon v-if="loading" name="i-lucide-loader-2" class="mr-2 h-4 w-4 animate-spin" />
              {{ loading ? 'Atualizando...' : 'Atualizar perfil' }}
            </Button>

            <Button
              type="button"
              variant="outline"
              @click="resetForm"
              :disabled="loading"
            >
              Limpar formulário
            </Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-form-wrapper {
  display: block;
  position: relative;
}

.skeleton-container,
.form-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: opacity 0.4s ease-out;
}

.skeleton-container {
  z-index: 10;
}

.form-container {
  z-index: 5;
}

.opacity-0 {
  opacity: 0;
  pointer-events: none;
}

.opacity-100 {
  opacity: 1;
  pointer-events: auto;
}
</style>
