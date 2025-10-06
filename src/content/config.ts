import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

const specializationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number(),
    lawyer: z.string().optional(),
    metaDescription: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  specializations: specializationsCollection,
};
