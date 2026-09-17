import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const writingSchema = z.object({
  title: z.string(),
  date: z.date(),
  image: z.string().optional(),
  tags: z.array(z.string()).optional(),
})

export default defineContentConfig({
  collections: {
    writing: defineCollection({
      type: 'page',
      source: 'writing/**/*.md',
      schema: writingSchema,
    }),
  },
})
