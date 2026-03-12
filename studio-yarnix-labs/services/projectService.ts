import { sanityClient } from '../lib/sanity'
import { Project } from '../types'

export const projectService = {
  // Get all projects
  async getAllProjects(): Promise<Project[]> {
    const query = `*[_type == "project"] | order(_createdAt desc) {
      _id,
      _type,
      title,
      slug,
      image,
      description,
      projectUrl,
      githubUrl
    }`
    
    return await sanityClient.fetch(query)
  },

  // Get project by slug
  async getProjectBySlug(slug: string): Promise<Project | null> {
    const query = `*[_type == "project" && slug.current == $slug][0] {
      _id,
      _type,
      title,
      slug,
      image,
      description,
      projectUrl,
      githubUrl
    }`
    
    return await sanityClient.fetch(query, { slug })
  },

  // Get featured projects (limit)
  async getFeaturedProjects(limit: number = 6): Promise<Project[]> {
    const query = `*[_type == "project"] | order(_createdAt desc)[0...$limit] {
      _id,
      _type,
      title,
      slug,
      image,
      description,
      projectUrl,
      githubUrl
    }`
    
    return await sanityClient.fetch(query, { limit })
  },

  // Search projects by title or description
  async searchProjects(searchTerm: string): Promise<Project[]> {
    const query = `*[_type == "project" && (title match $searchTerm || description match $searchTerm)] | order(_createdAt desc) {
      _id,
      _type,
      title,
      slug,
      image,
      description,
      projectUrl,
      githubUrl
    }`
    
    return await sanityClient.fetch(query, { searchTerm: `*${searchTerm}*` })
  }
}
