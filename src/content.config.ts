// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      type:z.string(),
      summary:z.string(),
      description: z.string(),
      introduction: z.string(),
      author: z.string(),
      occupation: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      road:z.array(z.string()),
      tags: z.array(z.string()),
      paragraphs: z.array(z.string())
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = { blog };