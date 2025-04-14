![nuxt-shadcn-dashboard-social-card](https://nuxt-shadcn-dashboard.vercel.app/social-card.png)

# Nuxt Shadcn UnoCSS - Dashboard

[![built with nuxt][nuxt-src]][nuxt-href]

- [Live demo](https://nuxt-shadcn-dashboard.vercel.app)
- [Component Documentation](https://shadcn-vue.com/docs/introduction)

## Quick Start

```bash [Terminal]
npx degit dianprata/nuxt-shadcn-dashboard my-dashboard-app
cd my-dashboard-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Contributing

1. Clone this repository.
2. Install dependencies `pnpm install`.
3. Use `pnpm run dev` to start dev server.

## Credits

- [Nuxt.js](https://nuxtjs.org/)
- [Shadcn Vue](https://shadcn-vue.com/)
- [UnoCSS](https://unocss.com/)

## License

MIT

[nuxt-src]: https://img.shields.io/badge/Built%20With%20Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com/

# Sistema de Autenticação

## Visão Geral

O sistema de autenticação implementado utiliza JWT (JSON Web Token) para gerenciar o estado de autenticação dos usuários. A arquitetura está dividida em componentes no lado do cliente e do servidor, garantindo segurança e performance.

## Estrutura de Arquivos

```
├── composables/
│   └── useAuth.ts           # Store Pinia para gerenciamento de autenticação no cliente
├── middleware/
│   └── auth.ts              # Middleware de rota para proteção de páginas
├── plugins/
│   └── auth.ts              # Plugin global de autenticação
├── server/
│   ├── api/auth/
│   │   ├── login.post.ts    # Endpoint de login
│   │   ├── register.post.ts # Endpoint de registro
│   │   └── me.get.ts        # Endpoint para obter dados do usuário atual
│   ├── middleware/
│   │   └── auth.ts          # Middleware de servidor para proteger endpoints da API
│   └── utils/
│       └── jwt.ts           # Utilitários para trabalhar com tokens JWT
└── types/
    └── auth.ts              # Interfaces TypeScript para tipagem
```

## Fluxo de Autenticação

1. O usuário envia credenciais (email/senha) via formulário de login ou registro
2. O servidor valida as credenciais e:
   - Em caso de sucesso: gera um token JWT, armazena em cookie e retorna os dados do usuário
   - Em caso de falha: retorna um erro apropriado
3. O cliente armazena o token em um cookie não-HttpOnly (para acesso no navegador)
4. Requisições subsequentes incluem o token via cabeçalho Authorization ou cookie
5. O servidor valida o token em cada requisição protegida e:
   - Se válido: adiciona o usuário ao contexto da requisição
   - Se inválido: retorna erro 401 (Não autorizado)

## Componentes Principais

### Cliente

#### `composables/useAuth.ts`

Store Pinia que gerencia:
- Estado de autenticação do usuário
- Token JWT em cookie
- Operações de login, registro e logout
- Carregamento de dados do usuário
- Atualização de perfil

```typescript
const useAuth = defineStore('auth', () => {
  // Token armazenado em cookie
  const authToken = useCookie('auth_token', { maxAge: 7 * 24 * 60 * 60 })
  
  // Estado baseado no token
  const isAuthenticated = computed(() => !!authToken.value)
  
  // Métodos para login, registro, logout, etc.
});
```

#### `plugins/auth.ts`

Plugin global que:
- Adiciona middleware de rota global para proteção de páginas
- Define rotas públicas que não requerem autenticação
- Fornece helper `$authFetch` para requisições autenticadas

#### `middleware/auth.ts`

Middleware de rota simplificado para proteção de páginas específicas.

### Servidor

#### `server/middleware/auth.ts`

Middleware Nitro que:
- Ignora rotas que não são da API
- Ignora rotas públicas (login, registro)
- Verifica token JWT no cabeçalho Authorization ou cookie
- Busca usuário no banco de dados e adiciona ao contexto

#### Endpoints de Autenticação

- **Login** (`server/api/auth/login.post.ts`):
  - Valida credenciais, gera token JWT e retorna dados do usuário

- **Registro** (`server/api/auth/register.post.ts`):
  - Cria novo usuário, gera token JWT e retorna dados do usuário

- **Me** (`server/api/auth/me.get.ts`):
  - Retorna dados do usuário atual autenticado

#### `server/utils/jwt.ts`

Utilitário para obter o segredo JWT do ambiente.

## Controle de Acesso

O sistema implementa controle de acesso baseado em funções (RBAC) usando o mapeamento de rotas e permissões:

```typescript
const routePermissions: Record<string, string[]> = {
  // Rotas administrativas - apenas admin
  '/admin': ['admin'],
  
  // Rotas para funcionários - admin e funcionário podem acessar
  '/dashboard': ['admin', 'funcionario'],
  
  // Rotas para clientes - todos podem acessar
  '/profile': ['admin', 'funcionario', 'cliente'],
}
```

## Interfaces TypeScript

```typescript
// Credenciais de login
export interface LoginCredentials {
  email: string
  password: string
}

// Dados de registro (estende LoginCredentials)
export interface RegisterData extends LoginCredentials {
  name: string
}

// Resposta de autenticação
export interface AuthResponse {
  user: {
    id: string
    name: string
    email: string
    avatar?: string | null
    bio?: string | null
  }
  token: string
}
```

## Segurança

- Senhas são hashadas com bcryptjs antes de armazenamento
- Tokens JWT expiram após 7 dias
- Cookies são configurados com:
  - Secure: true em produção
  - SameSite: lax
  - Path: /
- Controle de acesso baseado em funções para rotas específicas
- Mensagens de erro genéricas para evitar vazamento de informações

## Exemplos de Uso

### Login de Usuário
```typescript
const auth = useAuth();
await auth.login({
  email: 'usuario@exemplo.com',
  password: 'senha123'
});
```

### Verificação de Autenticação
```typescript
const auth = useAuth();
if (auth.isAuthenticated) {
  // Usuário está logado
}
```

### Requisição Autenticada
```typescript
const { $authFetch } = useNuxtApp();
const data = await $authFetch('/api/dados-protegidos');
```

### Proteção de Rota
```typescript
// No arquivo de página .vue
definePageMeta({
  middleware: 'auth'
});
```

# GS Sistema

## Configuração do TinyMCE (Editor de Texto Rico)

O sistema utiliza o TinyMCE como editor de texto rico para edição de artigos.

### Instalação do TinyMCE (Self-hosted)

Para usar o TinyMCE sem API key, é necessário baixar a versão self-hosted e configurá-la:

1. Baixe a versão mais recente do TinyMCE Community em: https://www.tiny.cloud/get-tiny/self-hosted/

2. Extraia os arquivos e copie o conteúdo para a pasta `/public/tinymce/` do projeto

3. A estrutura de pastas deve ser semelhante a:
   ```
   /public/tinymce/
     ├── icons/
     ├── plugins/
     ├── skins/
     ├── themes/
     ├── tinymce.min.js
     └── ...
   ```

4. O editor já está configurado para buscar o script em `/tinymce/tinymce.min.js`

### Personalização

O componente TinyEditor (`components/ui/tiny-editor/TinyEditor.vue`) pode ser personalizado conforme necessário.
