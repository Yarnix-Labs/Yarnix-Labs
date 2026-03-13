import { useState, useEffect } from 'react'
import { testimonialService, Testimonial } from '../services/testimonialService'

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchTestimonials = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await testimonialService.getAllTestimonials()
      setTestimonials(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch testimonials')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const featuredTestimonials = testimonials.filter(t => t.featured)
  const otherTestimonials = testimonials.filter(t => !t.featured)

  return {
    testimonials,
    featuredTestimonials,
    otherTestimonials,
    loading,
    error,
    refetch: fetchTestimonials
  }
}

export const useFeaturedTestimonials = (limit: number = 6) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchFeaturedTestimonials = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await testimonialService.getFeaturedTestimonials(limit)
      setTestimonials(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch featured testimonials')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFeaturedTestimonials()
  }, [limit])

  return {
    testimonials,
    loading,
    error,
    refetch: fetchFeaturedTestimonials
  }
}
