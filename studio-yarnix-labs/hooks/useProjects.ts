import { useState, useEffect } from 'react'
import { Project } from '../types'
import { projectService } from '../services'

interface ProjectCategory {
  _id: string
  title: string
  slug: { current: string }
  description?: string
  color?: string
  order?: number
}

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [categories, setCategories] = useState<ProjectCategory[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const fetchProjects = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await projectService.getAllProjects()
      setProjects(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch projects')
    } finally {
      setLoading(false)
    }
  }

  const fetchCategories = async () => {
    try {
      const data = await projectService.getAllCategories()
      setCategories(data)
    } catch (err) {
      console.error('Failed to fetch categories:', err)
    }
  }

  useEffect(() => {
    fetchProjects()
    fetchCategories()
  }, [])

  const filteredProjects = selectedCategory
    ? projects.filter(project => project.category?._id === selectedCategory)
    : projects

  return {
    projects: filteredProjects,
    allProjects: projects,
    categories,
    loading,
    error,
    selectedCategory,
    setSelectedCategory,
    refetch: fetchProjects
  }
}

export const useProject = (slug: string) => {
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchProject = async () => {
    if (!slug) return

    try {
      setLoading(true)
      setError(null)
      const data = await projectService.getProjectBySlug(slug)
      setProject(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch project')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProject()
  }, [slug])

  return {
    project,
    loading,
    error,
    refetch: fetchProject
  }
}

export const useFeaturedProjects = (limit: number = 6) => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchFeaturedProjects = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await projectService.getFeaturedProjects(limit)
      setProjects(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch featured projects')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFeaturedProjects()
  }, [limit])

  return {
    projects,
    loading,
    error,
    refetch: fetchFeaturedProjects
  }
}

export const useProjectSearch = (searchTerm: string) => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const searchProjects = async () => {
    if (!searchTerm.trim()) {
      setProjects([])
      return
    }

    try {
      setLoading(true)
      setError(null)
      const data = await projectService.searchProjects(searchTerm)
      setProjects(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search projects')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      searchProjects()
    }, 300)

    return () => clearTimeout(debounceTimer)
  }, [searchTerm])

  return {
    projects,
    loading,
    error,
    search: searchProjects
  }
}
