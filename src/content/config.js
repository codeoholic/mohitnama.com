import { z, defineCollection } from "astro:content";
const booksCollection = defineCollection({

	schema: z.object({

        author: z.string(),
		description: z.string(),
		publish_date: z.string(),
		title: z.string(),
		url: z.string(),

	})

})

export const collections = {

	"books": booksCollection,

}
