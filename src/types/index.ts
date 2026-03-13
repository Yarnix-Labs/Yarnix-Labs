// Basic image source interface for Sanity
export interface SanityImageSource {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

export interface Author {
  _id: string
  _type: 'author'
  name: string
  slug: { current: string }
  image?: SanityImageSource
  bio?: string
}

export interface Category {
  _id: string
  _type: 'category'
  title: string
  slug: { current: string }
  description?: string
  color?: string
  order?: number
}

export interface Post {
  _id: string
  _type: 'blog'
  title: string
  slug: { current: string }
  excerpt: string
  coverImage?: SanityImageSource
  publishedAt: string
  author?: Author
  categories?: Category[]
  content?: any[]
  status?: string
  featured?: boolean
}

export interface ProjectCategory {
  _id: string
  _type: 'projectCategory'
  title: string
  slug: { current: string }
  description?: string
  color?: string
  order?: number
}

export interface Project {
  _id: string
  _type: 'project'
  title: string
  slug: { current: string }
  description: string
  image?: SanityImageSource
  category?: ProjectCategory
  techStack?: string[]
  featured?: boolean
  githubUrl?: string
  liveUrl?: string
}

export interface Service {
  _id: string
  _type: 'service'
  title: string
  slug: { current: string }
  description: string
  image?: SanityImageSource
  icon: string
  features: string[]
  order?: number
}

export interface Testimonial {
  _id: string
  _type: 'testimonial'
  name: string
  role: string
  company?: string
  content: string
  rating?: number
  image?: SanityImageSource
  featured?: boolean
}

export interface TeamMember {
  _id: string
  _type: 'teamMember'
  name: string
  role: string
  description: string
  image: SanityImageSource
  github?: string
  linkedin?: string
  portfolio?: string
  order?: number
}

export type BlockContent = any
