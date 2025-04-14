<script setup lang="ts">
import { useToast } from '~/components/ui/toast'

definePageMeta({
  middleware: ['auth', 'role'],
  requiredRoles: ['admin'],
})

// Definindo interface para o usuário
interface User {
  id: string
  name: string
  email: string
  bio: string | null
  avatar: string | null
  status: number
  role: string
  createdAt: string
  updatedAt: string
}

// Interface para o formulário
interface UserForm {
  name: string
  email: string
  password: string
  bio: string
  avatar: string
  status: number
  role: string
}

// Interface para validação de senha
interface PasswordStrength {
  hasMinLength: boolean
  hasUppercase: boolean
  hasLowercase: boolean
  hasNumbers: boolean
  hasSpecialChars: boolean
  isValid: boolean
}

const { toast } = useToast()
const users = ref<User[]>([])
const isLoading = ref(true)
const isCreateDialogOpen = ref(false)
const isEditDialogOpen = ref(false)
const isDeleteAlertOpen = ref(false)
const selectedUser = ref<User | null>(null)
const originalFormState = ref<UserForm | null>(null)
const passwordStrength = ref<PasswordStrength>({
  hasMinLength: false,
  hasUppercase: false,
  hasLowercase: false,
  hasNumbers: false,
  hasSpecialChars: false,
  isValid: false
})
const isUploading = ref(false)
const avatarPreview = ref<string | null>(null)

// Formulário de criação/edição
const form = ref({
  name: '',
  email: '',
  password: '',
  bio: '',
  avatar: '',
  status: 1,
  role: 'cliente',
})

// Reset do formulário
function resetForm() {
  form.value = {
    name: '',
    email: '',
    password: '',
    bio: '',
    avatar: '',
    status: 1,
    role: 'cliente',
  }
  avatarPreview.value = null
  validatePassword(form.value.password)
}

// Verificar força da senha
function validatePassword(password: string) {
  passwordStrength.value = {
    hasMinLength: password.length >= 12,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumbers: /\d/.test(password),
    hasSpecialChars: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
    isValid: false
  }
  
  // Senha válida se atender a todos os critérios
  passwordStrength.value.isValid = 
    passwordStrength.value.hasMinLength && 
    passwordStrength.value.hasUppercase && 
    passwordStrength.value.hasLowercase && 
    passwordStrength.value.hasNumbers && 
    passwordStrength.value.hasSpecialChars
}

// Gerar senha segura
function generateSecurePassword() {
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789'
  const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
  
  const allChars = upperChars + lowerChars + numbers + specialChars
  let password = ''
  
  // Garantir pelo menos um de cada categoria
  password += upperChars.charAt(Math.floor(Math.random() * upperChars.length))
  password += lowerChars.charAt(Math.floor(Math.random() * lowerChars.length))
  password += numbers.charAt(Math.floor(Math.random() * numbers.length))
  password += specialChars.charAt(Math.floor(Math.random() * specialChars.length))
  
  // Completar até 12 caracteres
  for (let i = password.length; i < 12; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length))
  }
  
  // Embaralhar a senha
  password = password.split('').sort(() => 0.5 - Math.random()).join('')
  
  form.value.password = password
  validatePassword(password)
}

// Fazer upload de avatar
async function uploadAvatar(event: Event) {
  const fileInput = event.target as HTMLInputElement
  if (!fileInput.files || fileInput.files.length === 0) return
  
  const file = fileInput.files[0]
  
  // Validar tipo de arquivo
  if (!file.type.startsWith('image/')) {
    toast({
      title: 'Erro',
      description: 'O arquivo deve ser uma imagem',
      variant: 'destructive',
    })
    return
  }
  
  try {
    isUploading.value = true
    
    // Converter para base64
    const reader = new FileReader()
    reader.readAsDataURL(file)
    
    reader.onload = async () => {
      try {
        const imageData = reader.result
        
        // Mostrar preview
        avatarPreview.value = imageData as string
        
        // Enviar para o servidor
        const response = await $fetch('/api/upload/avatar', {
          method: 'POST',
          body: { imageData }
        })
        
        // Atualizar o campo avatar com a URL retornada
        form.value.avatar = response.avatarUrl
        
        toast({
          title: 'Sucesso',
          description: 'Avatar enviado com sucesso',
        })
      } catch (error: any) {
        console.error('Erro ao processar imagem:', error)
        toast({
          title: 'Erro',
          description: error?.data?.message || 'Não foi possível processar a imagem',
          variant: 'destructive',
        })
      } finally {
        isUploading.value = false
      }
    }
    
    reader.onerror = () => {
      toast({
        title: 'Erro',
        description: 'Erro ao ler o arquivo',
        variant: 'destructive',
      })
      isUploading.value = false
    }
  } catch (error: any) {
    console.error('Erro ao fazer upload do avatar:', error)
    toast({
      title: 'Erro',
      description: error?.data?.message || 'Não foi possível fazer o upload da imagem',
      variant: 'destructive',
    })
    isUploading.value = false
  }
}

// Carregar usuários
async function fetchUsers() {
  isLoading.value = true
  try {
    const response = await $fetch<User[]>('/api/users')
    users.value = response
  }
  catch (error: any) {
    console.error('Erro ao buscar usuários:', error)
    toast({
      title: 'Erro',
      description: 'Não foi possível carregar os usuários',
      variant: 'destructive',
    })
  }
  finally {
    isLoading.value = false
  }
}

// Criar usuário
async function createUser() {
  // Verificar se a senha é válida
  if (!passwordStrength.value.isValid) {
    toast({
      title: 'Erro',
      description: 'A senha não atende aos requisitos de segurança',
      variant: 'destructive',
    })
    return
  }
  
  try {
    await $fetch<User>('/api/users/create', {
      method: 'POST',
      body: form.value,
    })

    toast({
      title: 'Sucesso',
      description: 'Usuário criado com sucesso',
    })

    isCreateDialogOpen.value = false
    resetForm()
    await fetchUsers()
  }
  catch (error: any) {
    console.error('Erro ao criar usuário:', error)
    
    // Mensagens personalizadas para erros comuns
    let errorMessage = 'Não foi possível criar o usuário'
    
    if (error?.data?.message) {
      errorMessage = error.data.message
      
      // Melhorar mensagem para erro de unicidade
      if (errorMessage.includes('email já está em uso')) {
        errorMessage = 'Este email já está cadastrado para outro usuário'
      } else if (errorMessage.includes('nome já está em uso')) {
        errorMessage = 'Este nome já está cadastrado para outro usuário'
      }
    }
    
    toast({
      title: 'Erro',
      description: errorMessage,
      variant: 'destructive',
    })
  }
}

// Função para obter ícone e cor baseado na role
function getRoleIcon(role: string): { icon: string; color: string; badge: string; label: string } {
  switch (role) {
    case 'admin':
      return { 
        icon: 'lucide:shield', 
        color: 'text-purple-600', 
        badge: 'bg-purple-100 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800/60',
        label: 'Administrador' 
      };
    case 'funcionario':
      return { 
        icon: 'lucide:briefcase', 
        color: 'text-blue-600', 
        badge: 'bg-blue-100 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800/60',
        label: 'Funcionário' 
      };
    default:
      return { 
        icon: 'lucide:user', 
        color: 'text-green-600', 
        badge: 'bg-green-100 dark:bg-green-950/30 border-green-200 dark:border-green-800/60',
        label: 'Cliente' 
      };
  }
}

// Abrir edição de usuário
function openEditDialog(user: User) {
  selectedUser.value = user
  form.value = {
    name: user.name,
    email: user.email,
    password: '',
    bio: user.bio || '',
    avatar: user.avatar || '',
    status: user.status,
    role: user.role,
  }
  // Salvar estado original para comparação
  originalFormState.value = { ...form.value }
  avatarPreview.value = user.avatar
  validatePassword(form.value.password)
  isEditDialogOpen.value = true
}

// Verifica se houve alterações no formulário
function hasFormChanges(): boolean {
  if (!selectedUser.value || !originalFormState.value) return false

  // Se tiver senha, verifica se é válida
  if (form.value.password && !passwordStrength.value.isValid) {
    return false
  }

  // Verifica se há alguma diferença entre o estado atual e o original
  return form.value.name !== originalFormState.value.name ||
    form.value.email !== originalFormState.value.email ||
    form.value.bio !== originalFormState.value.bio ||
    form.value.status !== originalFormState.value.status ||
    form.value.avatar !== originalFormState.value.avatar ||
    form.value.role !== originalFormState.value.role ||
    form.value.password.length > 0
}

// Atualizar usuário
async function updateUser() {
  if (!selectedUser.value) {
    return
  }

  try {
    // Garantir que o formulário esteja correto antes de enviar
    const userData: any = {
      name: form.value.name,
      email: form.value.email,
      bio: form.value.bio || null,
      avatar: form.value.avatar || null,
      status: form.value.status === 1 ? 1 : 0, // Garantir que seja sempre 1 ou 0
      role: form.value.role,
    }

    // Adicionar senha apenas se fornecida
    if (form.value.password) {
      userData.password = form.value.password
    }

    isLoading.value = true
    
    // Enviar a atualização
    const _response = await $fetch<User>(`/api/users/${selectedUser.value.id}`, {
      method: 'PATCH',
      body: userData,
    })
    
    // Fechar diálogo e resetar o formulário
    isEditDialogOpen.value = false
    resetForm()
    
    // Forçar o recarregamento completo dos dados
    await fetchUsers()
    
    // Mostrar notificação de sucesso
    toast({
      title: 'Sucesso',
      description: 'Usuário atualizado com sucesso',
    })
  } 
  catch (error: any) {
    console.error('Erro ao atualizar usuário:', error)
    
    // Mensagens personalizadas para erros comuns
    let errorMessage = 'Não foi possível atualizar o usuário'
    
    if (error?.data?.message) {
      errorMessage = error.data.message
      
      // Melhorar mensagem para erro de unicidade
      if (errorMessage.includes('email já está em uso')) {
        errorMessage = 'Este email já está cadastrado para outro usuário'
      } else if (errorMessage.includes('nome já está em uso')) {
        errorMessage = 'Este nome já está cadastrado para outro usuário'
      }
    }
    
    toast({
      title: 'Erro',
      description: errorMessage,
      variant: 'destructive',
    })
  } 
  finally {
    isLoading.value = false
  }
}

// Abrir diálogo de confirmação de exclusão
function openDeleteAlert(user: User) {
  selectedUser.value = user
  isDeleteAlertOpen.value = true
}

// Excluir usuário
async function deleteUser() {
  if (!selectedUser.value) {
    return
  }

  try {
    await $fetch(`/api/users/${selectedUser.value.id}`, {
      method: 'DELETE',
    })

    toast({
      title: 'Sucesso',
      description: 'Usuário excluído com sucesso',
    })

    isDeleteAlertOpen.value = false
    selectedUser.value = null
    await fetchUsers()
  }
  catch (error: any) {
    console.error('Erro ao excluir usuário:', error)
    toast({
      title: 'Erro',
      description: error?.data?.message || 'Não foi possível excluir o usuário',
      variant: 'destructive',
    })
  }
}

// Formatação de data
function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

// Alternar status do usuário diretamente na tabela
async function toggleUserStatus(user: User) {
  try {
    // Indicador de carregamento apenas para este usuário
    const userId = user.id
    
    // Novo status (inverso do atual)
    const newStatus = user.status === 1 ? 0 : 1
    console.error('Status a ser enviado:', { userId, oldStatus: user.status, newStatus })
    
    // Atualizar o status do usuário
    const _response = await $fetch<User>(`/api/users/${userId}`, {
      method: 'PATCH',
      body: { status: newStatus },
    })
    
    // Atualizar a lista de usuários localmente para feedback imediato
    users.value = users.value.map((u) => {
      if (u.id === userId) {
        return { ...u, status: newStatus }
      }
      return u
    })
    
    // Mostrar notificação de sucesso
    toast({
      title: 'Sucesso',
      description: `Status do usuário atualizado com sucesso`,
    })
  } 
  catch (error: any) {
    console.error('Erro ao alterar status do usuário:', error)
    toast({
      title: 'Erro',
      description: error?.data?.message || 'Não foi possível alterar o status do usuário',
      variant: 'destructive',
    })
    
    // Recarregar usuários para garantir dados consistentes
    await fetchUsers()
  }
}

// Carregar usuários ao montar o componente
onMounted(() => {
  fetchUsers()
})
</script>

<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Gerenciamento de Usuários</h1>
      <Button @click="isCreateDialogOpen = true; resetForm()" class="bg-primary hover:bg-primary/90">
        <Icon name="lucide:plus-circle" class="mr-2 h-4 w-4" />
        Novo Usuário
      </Button>
    </div>
    
    <!-- Tabela de usuários -->
    <Card class="border shadow-sm">
      <CardHeader class="pb-0">
        <CardTitle class="text-xl">Usuários</CardTitle>
        <CardDescription>Visualize e gerencie todos os usuários do sistema</CardDescription>
      </CardHeader>
      <CardContent class="p-0">
        <Table>
          <TableHeader class="bg-muted/50">
            <TableRow>
              <TableHead class="w-14">Avatar</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Data de Criação</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Função</TableHead>
              <TableHead class="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <template v-if="isLoading">
              <TableRow v-for="i in 5" :key="i">
                <TableCell><Skeleton class="h-10 w-10 rounded-full" /></TableCell>
                <TableCell><Skeleton class="h-5 w-[250px]" /></TableCell>
                <TableCell><Skeleton class="h-5 w-[180px]" /></TableCell>
                <TableCell><Skeleton class="h-5 w-[150px]" /></TableCell>
                <TableCell><Skeleton class="h-5 w-[80px]" /></TableCell>
                <TableCell><Skeleton class="h-5 w-[100px]" /></TableCell>
                <TableCell class="text-right">
                  <div class="flex justify-end gap-2">
                    <Skeleton class="h-8 w-8 rounded" />
                    <Skeleton class="h-8 w-8 rounded" />
                  </div>
                </TableCell>
              </TableRow>
            </template>
            <TableRow v-else-if="users.length === 0">
              <TableCell colspan="7" class="h-24 text-center">
                <div class="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                  <Icon name="lucide:users-x" class="h-8 w-8" />
                  <p>Nenhum usuário encontrado.</p>
                </div>
              </TableCell>
            </TableRow>
            <template v-else>
              <TableRow v-for="user in users" :key="user.id" class="hover:bg-muted/30 transition-colors">
                <TableCell class="text-center">
                  <Avatar size="sm" shape="circle" class="border-2 border-muted mx-auto">
                    <AvatarImage v-if="user.avatar" :src="user.avatar" />
                    <AvatarFallback class="bg-primary/10 text-primary">
                      {{ user.name.charAt(0).toUpperCase() }}
                    </AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>
                  <div class="font-medium">{{ user.name }}</div>
                </TableCell>
                <TableCell class="text-muted-foreground">{{ user.email }}</TableCell>
                <TableCell class="text-muted-foreground text-sm">{{ formatDate(user.createdAt) }}</TableCell>
                <TableCell>
                  <div class="flex items-center gap-2">
                    <Switch
                      :checked="user.status === 1"
                      @update:checked="toggleUserStatus(user)"
                      class="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-200"
                    />
                    <span class="text-xs font-medium" :class="user.status === 1 ? 'text-green-600' : 'text-red-600'">
                      {{ user.status === 1 ? 'Ativo' : 'Inativo' }}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div class="inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-medium"
                    :class="[getRoleIcon(user.role).badge, getRoleIcon(user.role).color]">
                    <Icon :name="getRoleIcon(user.role).icon" class="h-3.5 w-3.5 mr-1" />
                    {{ getRoleIcon(user.role).label }}
                  </div>
                </TableCell>
                <TableCell class="text-right">
                  <div class="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" @click="openEditDialog(user)" 
                      class="h-8 w-8 text-muted-foreground hover:text-primary">
                      <Icon name="lucide:pencil" class="h-4 w-4" />
                      <span class="sr-only">Editar</span>
                    </Button>
                    <Button variant="ghost" size="icon" @click="openDeleteAlert(user)" 
                      class="h-8 w-8 text-muted-foreground hover:text-destructive">
                      <Icon name="lucide:trash-2" class="h-4 w-4" />
                      <span class="sr-only">Excluir</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </template>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
    
    <!-- Dialog para criar usuário -->
    <Dialog :open="isCreateDialogOpen" @update:open="isCreateDialogOpen = $event">
      <DialogContent class="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Adicionar Novo Usuário</DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para criar um novo usuário.
          </DialogDescription>
        </DialogHeader>
        
        <div class="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 py-4">
          <!-- Coluna do Avatar -->
          <div class="flex flex-col items-center gap-4">
            <Avatar size="lg" class="w-40 h-40 border-2 border-muted">
              <AvatarImage v-if="avatarPreview" :src="avatarPreview" />
              <AvatarFallback class="text-4xl">
                {{ form.name ? form.name.charAt(0).toUpperCase() : 'U' }}
              </AvatarFallback>
            </Avatar>
            
            <div class="flex flex-col items-center gap-2 w-full">
              <label 
                for="new-avatar-upload" 
                class="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium cursor-pointer w-full text-center"
              >
                Selecionar Imagem
              </label>
              <Input
                id="new-avatar-upload"
                type="file"
                accept="image/*"
                class="hidden"
                @change="uploadAvatar"
                :disabled="isUploading"
              />
              <p class="text-xs text-muted-foreground">JPG, PNG ou GIF. Máximo 5MB.</p>
            </div>
            
            <!-- Status do usuário -->
            <div class="w-full mt-4">
              <div class="text-sm font-medium mb-3 text-muted-foreground">STATUS</div>
              <div 
                class="w-full border rounded-md overflow-hidden grid grid-cols-2"
              >
                <button 
                  type="button"
                  class="py-2 px-4 text-center text-sm font-medium transition-colors"
                  :class="form.status === 1 
                    ? 'bg-green-500/20 text-green-700' 
                    : 'bg-background hover:bg-muted/30 border-r'"
                  @click="form.status = 1"
                >
                  <div class="flex items-center justify-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    Ativo
                  </div>
                </button>
                <button 
                  type="button"
                  class="py-2 px-4 text-center text-sm font-medium transition-colors"
                  :class="form.status === 0 
                    ? 'bg-red-500/10 text-red-700' 
                    : 'bg-background hover:bg-muted/30'"
                  @click="form.status = 0"
                >
                  <div class="flex items-center justify-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-red-500"></div>
                    Inativo
                  </div>
                </button>
              </div>
            </div>
            
            <!-- Role do usuário -->
            <div class="w-full mt-4">
              <div class="text-sm font-medium mb-3 text-muted-foreground">FUNÇÃO</div>
              <div class="w-full border rounded-md overflow-hidden grid grid-cols-1 gap-1 p-1">
                <button 
                  type="button"
                  class="py-2 px-4 text-sm font-medium transition-colors rounded flex items-center gap-2"
                  :class="form.role === 'admin' 
                    ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300' 
                    : 'bg-background hover:bg-muted/30'"
                  @click="form.role = 'admin'"
                >
                  <Icon name="lucide:shield" class="h-4 w-4" />
                  Administrador
                </button>
                <button 
                  type="button"
                  class="py-2 px-4 text-sm font-medium transition-colors rounded flex items-center gap-2"
                  :class="form.role === 'funcionario' 
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' 
                    : 'bg-background hover:bg-muted/30'"
                  @click="form.role = 'funcionario'"
                >
                  <Icon name="lucide:briefcase" class="h-4 w-4" />
                  Funcionário
                </button>
                <button 
                  type="button"
                  class="py-2 px-4 text-sm font-medium transition-colors rounded flex items-center gap-2"
                  :class="form.role === 'cliente' 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' 
                    : 'bg-background hover:bg-muted/30'"
                  @click="form.role = 'cliente'"
                >
                  <Icon name="lucide:user" class="h-4 w-4" />
                  Cliente
                </button>
              </div>
            </div>
          </div>
          
          <!-- Coluna de Campos -->
          <div class="space-y-6">
            <!-- Informações Básicas -->
            <div>
              <h3 class="text-sm font-medium mb-3 text-muted-foreground">INFORMAÇÕES PESSOAIS</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="grid gap-2">
                  <Label for="name">Nome</Label>
                  <Input id="name" v-model="form.name" placeholder="Nome completo" />
                </div>
                <div class="grid gap-2">
                  <Label for="email">Email</Label>
                  <Input id="email" v-model="form.email" placeholder="exemplo@email.com" />
                </div>
                <div class="grid gap-2 md:col-span-2">
                  <Label for="bio">Biografia</Label>
                  <Textarea 
                    id="bio" 
                    v-model="form.bio" 
                    placeholder="Uma breve descrição sobre o usuário" 
                    rows="3"
                  />
                </div>
              </div>
            </div>
            
            <!-- Credenciais -->
            <div>
              <h3 class="text-sm font-medium mb-3 text-muted-foreground">CREDENCIAIS</h3>
              <div class="grid gap-2">
                <div class="flex justify-between items-center">
                  <Label for="password">Senha</Label>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    @click="generateSecurePassword"
                    class="px-2 py-1 h-7 text-xs"
                  >
                    Gerar Senha
                  </Button>
                </div>
                <PasswordInput 
                  id="password" 
                  v-model="form.password" 
                  placeholder="********" 
                  @input="validatePassword(form.password)"
                />
                
                <!-- Indicador de força da senha -->
                <div class="mt-2 bg-muted/50 p-3 rounded-md">
                  <div class="text-sm font-medium mb-2">Requisitos de senha:</div>
                  <div class="grid grid-cols-2 gap-x-6 gap-y-1">
                    <div :class="passwordStrength.hasMinLength ? 'text-green-500' : 'text-red-500'" class="text-sm flex items-center">
                      <span class="mr-1 text-xs">{{ passwordStrength.hasMinLength ? '✓' : '✗' }}</span>
                      Mínimo de 12 caracteres
                    </div>
                    <div :class="passwordStrength.hasUppercase ? 'text-green-500' : 'text-red-500'" class="text-sm flex items-center">
                      <span class="mr-1 text-xs">{{ passwordStrength.hasUppercase ? '✓' : '✗' }}</span>
                      Letra maiúscula
                    </div>
                    <div :class="passwordStrength.hasLowercase ? 'text-green-500' : 'text-red-500'" class="text-sm flex items-center">
                      <span class="mr-1 text-xs">{{ passwordStrength.hasLowercase ? '✓' : '✗' }}</span>
                      Letra minúscula
                    </div>
                    <div :class="passwordStrength.hasNumbers ? 'text-green-500' : 'text-red-500'" class="text-sm flex items-center">
                      <span class="mr-1 text-xs">{{ passwordStrength.hasNumbers ? '✓' : '✗' }}</span>
                      Número
                    </div>
                    <div :class="passwordStrength.hasSpecialChars ? 'text-green-500' : 'text-red-500'" class="text-sm flex items-center">
                      <span class="mr-1 text-xs">{{ passwordStrength.hasSpecialChars ? '✓' : '✗' }}</span>
                      Caractere especial
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <DialogFooter class="mt-6">
          <div class="flex gap-2">
            <Button variant="outline" @click="isCreateDialogOpen = false">Cancelar</Button>
            <Button 
              @click="createUser" 
              :disabled="!passwordStrength.isValid"
              class="min-w-24"
            >
              Salvar
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    
    <!-- Dialog para editar usuário -->
    <Dialog :open="isEditDialogOpen" @update:open="isEditDialogOpen = $event">
      <DialogContent class="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Editar Usuário</DialogTitle>
          <DialogDescription>
            Altere os campos que deseja atualizar.
          </DialogDescription>
        </DialogHeader>
        
        <div class="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 py-4">
          <!-- Coluna do Avatar -->
          <div class="flex flex-col items-center gap-4">
            <Avatar size="lg" class="w-40 h-40 border-2 border-muted">
              <AvatarImage v-if="avatarPreview" :src="avatarPreview" />
              <AvatarFallback class="text-4xl">
                {{ form.name ? form.name.charAt(0).toUpperCase() : 'U' }}
              </AvatarFallback>
            </Avatar>
            
            <div class="flex flex-col items-center gap-2 w-full">
              <label 
                for="avatar-upload" 
                class="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium cursor-pointer w-full text-center"
              >
                Alterar Imagem
              </label>
              <Input
                id="avatar-upload"
                type="file"
                accept="image/*"
                class="hidden"
                @change="uploadAvatar"
                :disabled="isUploading"
              />
              <p class="text-xs text-muted-foreground">JPG, PNG ou GIF. Máximo 5MB.</p>
            </div>

            <!-- Status do usuário -->
            <div class="w-full mt-4">
              <div class="text-sm font-medium mb-3 text-muted-foreground">STATUS</div>
              <div 
                class="w-full border rounded-md overflow-hidden grid grid-cols-2"
              >
                <button 
                  type="button"
                  class="py-2 px-4 text-center text-sm font-medium transition-colors"
                  :class="form.status === 1 
                    ? 'bg-green-500/20 text-green-700' 
                    : 'bg-background hover:bg-muted/30 border-r'"
                  @click="form.status = 1"
                >
                  <div class="flex items-center justify-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    Ativo
                  </div>
                </button>
                <button 
                  type="button"
                  class="py-2 px-4 text-center text-sm font-medium transition-colors"
                  :class="form.status === 0 
                    ? 'bg-red-500/10 text-red-700' 
                    : 'bg-background hover:bg-muted/30'"
                  @click="form.status = 0"
                >
                  <div class="flex items-center justify-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-red-500"></div>
                    Inativo
                  </div>
                </button>
              </div>
            </div>
            
            <!-- Role do usuário -->
            <div class="w-full mt-4">
              <div class="text-sm font-medium mb-3 text-muted-foreground">FUNÇÃO</div>
              <div class="w-full border rounded-md overflow-hidden grid grid-cols-1 gap-1 p-1">
                <button 
                  type="button"
                  class="py-2 px-4 text-sm font-medium transition-colors rounded flex items-center gap-2"
                  :class="form.role === 'admin' 
                    ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300' 
                    : 'bg-background hover:bg-muted/30'"
                  @click="form.role = 'admin'"
                >
                  <Icon name="lucide:shield" class="h-4 w-4" />
                  Administrador
                </button>
                <button 
                  type="button"
                  class="py-2 px-4 text-sm font-medium transition-colors rounded flex items-center gap-2"
                  :class="form.role === 'funcionario' 
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' 
                    : 'bg-background hover:bg-muted/30'"
                  @click="form.role = 'funcionario'"
                >
                  <Icon name="lucide:briefcase" class="h-4 w-4" />
                  Funcionário
                </button>
                <button 
                  type="button"
                  class="py-2 px-4 text-sm font-medium transition-colors rounded flex items-center gap-2"
                  :class="form.role === 'cliente' 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' 
                    : 'bg-background hover:bg-muted/30'"
                  @click="form.role = 'cliente'"
                >
                  <Icon name="lucide:user" class="h-4 w-4" />
                  Cliente
                </button>
              </div>
            </div>
          </div>
          
          <!-- Coluna de Campos -->
          <div class="space-y-6">
            <!-- Informações Básicas -->
            <div>
              <h3 class="text-sm font-medium mb-3 text-muted-foreground">INFORMAÇÕES PESSOAIS</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="grid gap-2">
                  <Label for="edit-name">Nome</Label>
                  <Input id="edit-name" v-model="form.name" placeholder="Nome completo" />
                </div>
                <div class="grid gap-2">
                  <Label for="edit-email">Email</Label>
                  <Input id="edit-email" v-model="form.email" placeholder="exemplo@email.com" />
                </div>
                <div class="grid gap-2 md:col-span-2">
                  <Label for="edit-bio">Biografia</Label>
                  <Textarea 
                    id="edit-bio" 
                    v-model="form.bio" 
                    placeholder="Uma breve descrição sobre o usuário" 
                    rows="3"
                  />
                </div>
              </div>
            </div>
            
            <!-- Credenciais -->
            <div>
              <h3 class="text-sm font-medium mb-3 text-muted-foreground">CREDENCIAIS</h3>
              <div class="grid gap-2">
                <div class="flex justify-between items-center">
                  <Label for="edit-password">Senha (deixe em branco para manter)</Label>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    @click="generateSecurePassword"
                    class="px-2 py-1 h-7 text-xs"
                  >
                    Gerar Senha
                  </Button>
                </div>
                <PasswordInput 
                  id="edit-password" 
                  v-model="form.password" 
                  placeholder="Nova senha" 
                  @input="validatePassword(form.password)"
                />
                
                <!-- Indicador de força da senha (apenas se estiver alterando a senha) -->
                <div v-if="form.password" class="mt-2 bg-muted/50 p-3 rounded-md">
                  <div class="text-sm font-medium mb-2">Requisitos de senha:</div>
                  <div class="grid grid-cols-2 gap-x-6 gap-y-1">
                    <div :class="passwordStrength.hasMinLength ? 'text-green-500' : 'text-red-500'" class="text-sm flex items-center">
                      <span class="mr-1 text-xs">{{ passwordStrength.hasMinLength ? '✓' : '✗' }}</span>
                      Mínimo de 12 caracteres
                    </div>
                    <div :class="passwordStrength.hasUppercase ? 'text-green-500' : 'text-red-500'" class="text-sm flex items-center">
                      <span class="mr-1 text-xs">{{ passwordStrength.hasUppercase ? '✓' : '✗' }}</span>
                      Letra maiúscula
                    </div>
                    <div :class="passwordStrength.hasLowercase ? 'text-green-500' : 'text-red-500'" class="text-sm flex items-center">
                      <span class="mr-1 text-xs">{{ passwordStrength.hasLowercase ? '✓' : '✗' }}</span>
                      Letra minúscula
                    </div>
                    <div :class="passwordStrength.hasNumbers ? 'text-green-500' : 'text-red-500'" class="text-sm flex items-center">
                      <span class="mr-1 text-xs">{{ passwordStrength.hasNumbers ? '✓' : '✗' }}</span>
                      Número
                    </div>
                    <div :class="passwordStrength.hasSpecialChars ? 'text-green-500' : 'text-red-500'" class="text-sm flex items-center">
                      <span class="mr-1 text-xs">{{ passwordStrength.hasSpecialChars ? '✓' : '✗' }}</span>
                      Caractere especial
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <DialogFooter class="mt-6 flex items-center justify-between">
          <div class="text-xs text-muted-foreground">
            Última atualização: {{ selectedUser ? formatDate(selectedUser.updatedAt) : '' }}
          </div>
          <div class="flex gap-2">
            <Button variant="outline" @click="isEditDialogOpen = false">Cancelar</Button>
            <Button 
              @click="updateUser" 
              :disabled="!hasFormChanges()"
              class="min-w-24"
            >
              Atualizar
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    
    <!-- Alert Dialog para confirmação de exclusão -->
    <AlertDialog :open="isDeleteAlertOpen" @update:open="isDeleteAlertOpen = $event">
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita. Isso excluirá permanentemente o usuário
            {{ selectedUser?.name }} e removerá seus dados do sistema.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel @click="isDeleteAlertOpen = false">Cancelar</AlertDialogCancel>
          <AlertDialogAction class="bg-destructive text-destructive-foreground hover:bg-destructive/90" @click="deleteUser">
            Excluir
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </div>
</template> 
