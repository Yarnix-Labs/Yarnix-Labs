import { sanityClient } from '../lib/sanity'
import { Project, ProjectCategory } from '../types'

export const projectService = {
  // Get all projects
  async getAllProjects(): Promise<Project[]> {
    const query = `*[_type == "project"] | order(order asc, title asc) {
      _id,
      _type,
      title,
      slug,
      image,
      description,
      projectUrl,
      githubUrl,
      category-> {
        _id,
        _type,
        title,
        slug,
        color
      },
      techStack,
      featured,
      order
    }`
    
    return await sanityClient.fetch(query)
  },

  // Get all project categories
  async getAllCategories(): Promise<ProjectCategory[]> {
    const query = `*[_type == "projectCategory"] | order(order asc, title asc) {
      _id,
      _type,
      title,
      slug,
      description,
      color,
      order
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
      githubUrl,
      category-> {
        _id,
        _type,
        title,
        slug,
        color
      },
      techStack,
      featured,
      order
    }`
    
    return await sanityClient.fetch(query, { slug })
  },

  // Get featured projects (limit)
  async getFeaturedProjects(limit: number = 6): Promise<Project[]> {
    const query = `*[_type == "project" && featured == true] | order(order asc, title asc)[0...$limit] {
      _id,
      _type,
      title,
      slug,
      image,
      description,
      projectUrl,
      githubUrl,
      category-> {
        _id,
        _type,
        title,
        slug,
        color
      },
      techStack,
      featured,
      order
    }`
    
    return await sanityClient.fetch(query, { limit })
  },

  // Search projects by title or description
  async searchProjects(searchTerm: string): Promise<Project[]> {
    const query = `*[_type == "project" && (title match $searchTerm || description match $searchTerm)] | order(order asc, title asc) {
      _id,
      _type,
      title,
      slug,
      image,
      description,
      projectUrl,
      githubUrl,
      category-> {
        _id,
        _type,
        title,
        slug,
        color
      },
      techStack,
      featured,
      order
    }`
    
    return await sanityClient.fetch(query, { searchTerm: `*${searchTerm}*` })
  }
}
