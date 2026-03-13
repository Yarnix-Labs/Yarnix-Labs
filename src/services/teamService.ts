import { sanityClient } from '../lib/sanity'
import { TeamMember } from '../types'

export const teamService = {
  // Get all team members
  async getAllTeamMembers(): Promise<TeamMember[]> {
    const query = `*[_type == "teamMember"] | order(order asc, name asc) {
      _id,
      _type,
      name,
      role,
      description,
      image,
      github,
      linkedin,
      portfolio,
      order
    }`
    
    return await sanityClient.fetch(query)
  }
}
