import { z } from 'zod'

export const articleSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  meta_description: z.string().nullable(),
  slug: z.string(),
  status: z.string(),
  categories: z.string().nullable(),
  tags: z.string().nullable(),
  created_at: z.string().or(z.date()),
  updated_at: z.string().or(z.date()),
})

export type Article = z.infer<typeof articleSchema> 