import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    lang: z.string(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string().optional(),
    lang: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    lang: z.string(),
  }),
});

const corporate = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/corporate" }),
  schema: z.object({
    title: z.string(),
    lang: z.string(),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/products" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    lang: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = {
  'services': services,
  'blog': blog,
  'projects': projects,
  'corporate': corporate,
  'products': products,
};
