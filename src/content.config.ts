import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const hero = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/hero" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    lang: z.string(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    lang: z.string(),
    order: z.number().optional(),
    category: z.string().optional(),
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
    logo: z.string().optional(),
  }),
});

const partners = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/partners" }),
  schema: z.object({
    name: z.string(),
    url: z.string(),
    logo: z.string().optional(),
    lang: z.string(),
    order: z.number().optional(),
  }),
});

const references = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/references" }),
  schema: z.object({
    name: z.string(),
    url: z.string(),
    logo: z.string().optional(),
    lang: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = {
  'services': services,
  'hero': hero,
  'blog': blog,
  'projects': projects,
  'corporate': corporate,
  'products': products,
  'partners': partners,
  'references': references,
};
