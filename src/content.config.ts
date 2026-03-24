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

const maturity = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/maturity" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    cta: z.string(),
    status: z.string(),
    lang: z.string(),
  }),
});

const sections = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/sections" }),
  schema: z.object({
    id: z.string(),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    ref_title: z.string().optional(),
    ref_subtitle: z.string().optional(),
    lang: z.string(),
  }),
});

const features = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/features" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    lang: z.string(),
    items: z.array(z.object({
      id: z.string(),
      title: z.string(),
      desc: z.string(),
      icon: z.string().optional(),
      image: z.string().optional(),
    })),
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

const news = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/news" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: image().optional(),
    lang: z.string(),
    type: z.string().optional().default('news'),
    featured: z.boolean().default(false),
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
  'maturity': maturity,
  'features': features,
  'sections': sections,
  'blog': blog,
  'news': news,
  'corporate': corporate,
  'products': products,
  'partners': partners,
  'references': references,
};
