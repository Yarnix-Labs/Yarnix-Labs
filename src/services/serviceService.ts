import { sanityClient } from '../lib/sanity'

export interface Service {
  _id: string
  _type: 'service'
  title: string
  slug: { current: string }
  description: string
  image?: any
  icon: string
  features: string[]
  order?: number
}

export const serviceService = {
  // Get all services
  async getAllServices(): Promise<Service[]> {
    const query = `*[_type == "service"] | order(order asc) {
      _id,
      _type,
      title,
      slug,
      description,
      image,
      icon,
      features,
      order
    }`
    
    return await sanityClient.fetch(query)
  },

  // Get service by slug
  async getServiceBySlug(slug: string): Promise<Service | null> {
    const query = `*[_type == "service" && slug.current == $slug][0] {
      _id,
      _type,
      title,
      slug,
      description,
      image,
      icon,
      features,
      order
    }`
    
    return await sanityClient.fetch(query, { slug })
  }
}
