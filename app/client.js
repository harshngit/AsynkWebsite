import { createClient } from '@sanity/client'

import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
	projectId: "60ojvu2u",
	dataset: 'asynk',
	apiVersion: '2026-03-07',
	userCdn: true,
	// ignoreBrowserTokenWarning: true,
	token: "sk4JjlmVKhS7UU6i4t7hHQ44KYlXjzGCMN6gTEjv2Tdzee3hb1I9QjzbDYNUcVKVH2TqY3Zib4cLWFFpB0FPqPM91LZOzxzwR9VoBghmbWPXxYaVJogvwZfdMSn1t5PsKZyeVbOZYDBN3zpqZjLTVFCuFK7yGdNCxp6PC45UchYsgW0tHeNz"

})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);