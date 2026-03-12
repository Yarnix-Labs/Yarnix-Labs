import { createClient } from '@sanity/client'

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-19',
  useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config)

export default sanityClient
