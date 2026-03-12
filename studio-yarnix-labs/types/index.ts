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
  slug: {
    current: string
  }
  image?: SanityImageSource
  bio?: any[]
}

export interface Category {
  _id: string
  _type: 'category'
  title: string
  slug: {
    current: string
  }
  description?: string
}

export interface Post {
  _id: string
  _type: 'post'
  title: string
  slug: {
    current: string
  }
  author: Author
  mainImage?: SanityImageSource
  categories: Category[]
  publishedAt: string
  body: any[]
}

export interface Project {
  _id: string
  _type: 'project'
  title: string
  slug: {
    current: string
  }
  image?: SanityImageSource
  description?: string
  projectUrl?: string
  githubUrl?: string
}

export interface BlockContent {
  _type: 'block'
  _key: string
  style?: string
  children: Array<{
    _type: 'span'
    text: string
    marks?: string[]
  }>
  markDefs?: Array<{
    _key: string
    _type: string
    [key: string]: any
  }>
}
