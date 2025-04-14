import { z } from 'zod'

export const articleSchema = z.object({
  id: z.string(),
  title: z.string().min(3, 'O título deve ter pelo menos 3 caracteres'),
  content: z.string().min(10, 'O conteúdo deve ter pelo menos 10 caracteres'),
  meta_description: z.string().optional(),
  slug: z.string(),
  status: z.enum(['draft', 'published', 'archived']),
  categories: z.string().optional(),
  tags: z.string().optional(),
  created_at: z.date().or(z.string()),
  updated_at: z.date().or(z.string()),
})

export type Article = z.infer<typeof articleSchema>

export const articleFormSchema = articleSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
}).extend({
  meta_description: z.string().optional(),
  categories: z.string().optional(),
  tags: z.string().optional(),
})

export type ArticleForm = z.infer<typeof articleFormSchema>

export const articleDefaultValues: Partial<ArticleForm> = {
  title: '',
  content: '',
  meta_description: '',
  slug: '',
  status: 'draft',
  categories: '',
  tags: '',
} 