import SanityClient from "@sanity/client";
import createImageUrlBuilder from '@sanity/image-url'

export const client = SanityClient({
  projectId: "g6i6231d",
  dataset: "production",
  apiVersion: "2022-05-31",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
