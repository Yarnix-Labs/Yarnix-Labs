import { sanityClient } from '../lib/sanity'

export interface Testimonial {
  _id: string
  _type: 'testimonial'
  name: string
  role: string
  company?: string
  content: string
  rating?: number
  image?: any
  featured?: boolean
}

export const testimonialService = {
  // Get all testimonials
  async getAllTestimonials(): Promise<Testimonial[]> {
    const query = `*[_type == "testimonial"] | order(featured desc, name asc) {
      _id,
      _type,
      name,
      role,
      company,
      content,
      rating,
      image,
      featured
    }`
    
    return await sanityClient.fetch(query)
  },

  // Get featured testimonials
  async getFeaturedTestimonials(limit: number = 6): Promise<Testimonial[]> {
    const query = `*[_type == "testimonial" && featured == true] | order(name asc)[0...$limit] {
      _id,
      _type,
      name,
      role,
      company,
      content,
      rating,
      image,
      featured
    }`
    
    return await sanityClient.fetch(query, { limit })
  }
}
