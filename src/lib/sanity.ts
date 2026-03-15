import { createClient } from '@sanity/client'

const config = {
  projectId: 'v7q2gijs',
  dataset: 'production',
  apiVersion: '2024-03-19',
  useCdn: true,
}

export const sanityClient = createClient(config)

export const sanityImg = (ref: string) =>
  `https://cdn.sanity.io/images/v7q2gijs/production/${ref
    .replace("image-", "")
    .replace("-jpg", ".jpg")
    .replace("-png", ".png")
    .replace("-webp", ".webp")}`;

export default sanityClient
