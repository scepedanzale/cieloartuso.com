// src/content.config.ts

import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/blog",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    cover: z.string(),
    readingTime: z.number(),
    tag: z.string(),
    draft: z.boolean(),
  }),
});

const works = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/works",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    settore: z.string(),
    tipo: z.string(),
    year: z.number(),
    cover: z.string(),
    href: z.string(),
    cosaHoFatto: z.array(z.string()), 
  }),
});


export const collections = {
  blog,
  works
};