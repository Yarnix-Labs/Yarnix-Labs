import { useState, useEffect } from 'react'
import { Post, Category } from '../types'
import { postService } from '../services'

export const useBlog = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const fetchPosts = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await postService.getAllBlogPosts()
      setPosts(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch posts')
    } finally {
      setLoading(false)
    }
  }

  const fetchCategories = async () => {
    try {
      const data = await postService.getAllCategories()
      setCategories(data)
    } catch (err) {
      console.error('Failed to fetch categories:', err)
    }
  }

  const fetchPostsByCategory = async (categorySlug: string) => {
    try {
      setLoading(true)
      setError(null)
      const data = await postService.getBlogPostsByCategory(categorySlug)
      setPosts(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch posts by category')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
    fetchCategories()
  }, [])

  useEffect(() => {
    if (selectedCategory) {
      fetchPostsByCategory(selectedCategory)
    } else {
      fetchPosts()
    }
  }, [selectedCategory])

  const featuredPost = posts.find(post => post.featured) || posts[0]
  const otherPosts = featuredPost ? posts.filter(post => post._id !== featuredPost._id) : posts

  return {
    posts,
    featuredPost,
    otherPosts,
    categories,
    loading,
    error,
    selectedCategory,
    setSelectedCategory,
    refetch: fetchPosts
  }
}

export const useBlogPost = (slug: string) => {
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPost = async () => {
    if (!slug) return

    try {
      setLoading(true)
      setError(null)
      const data = await postService.getBlogPostBySlug(slug)
      setPost(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch post')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPost()
  }, [slug])

  return {
    post,
    loading,
    error,
    refetch: fetchPost
  }
}

export const useLatestBlogPosts = (limit: number = 3) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchLatestPosts = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await postService.getLatestBlogPosts(limit)
      setPosts(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch latest posts')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLatestPosts()
  }, [limit])

  return {
    posts,
    loading,
    error,
    refetch: fetchLatestPosts
  }
}
