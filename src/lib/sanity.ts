import { createClient } from '@sanity/client'

const config = {
  projectId: 'v7q2gijs',
  dataset: 'production',
  apiVersion: '2024-03-19',
  useCdn: true,
}

export const sanityClient = createClient(config)

export default sanityClient
