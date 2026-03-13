import { useState, useEffect } from 'react'
import { Post } from '../types'
import { postService } from '../services'

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPosts = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await postService.getAllPosts()
      setPosts(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch posts')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return {
    posts,
    loading,
    error,
    refetch: fetchPosts
  }
}

export const usePost = (slug: string) => {
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPost = async () => {
    if (!slug) return

    try {
      setLoading(true)
      setError(null)
      const data = await postService.getPostBySlug(slug)
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

export const usePostsByCategory = (categorySlug: string) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPostsByCategory = async () => {
    if (!categorySlug) return

    try {
      setLoading(true)
      setError(null)
      const data = await postService.getPostsByCategory(categorySlug)
      setPosts(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch posts by category')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPostsByCategory()
  }, [categorySlug])

  return {
    posts,
    loading,
    error,
    refetch: fetchPostsByCategory
  }
}

export const useLatestPosts = (limit: number = 3) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchLatestPosts = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await postService.getLatestPosts(limit)
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
