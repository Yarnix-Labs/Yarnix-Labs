import { sanityClient } from '../lib/sanity'
import { ContactInfo } from '../types'

export const contactService = {
  // Get all contact info
  async getAllContactInfo(): Promise<ContactInfo[]> {
    const query = `*[_type == "contactInfo"] | order(order asc, label asc) {
      _id,
      _type,
      label,
      value,
      description,
      icon,
      order
    }`
    
    return await sanityClient.fetch(query)
  }
}
