import { sanityClient } from '@/lib/sanity'
import { Post, Category } from '../types'

export const postService = {
  // Get all blog posts (new schema)
  async getAllBlogPosts(): Promise<Post[]> {
    const query = `*[_type == "blog" && status == "published"] | order(publishedAt desc) {
      _id,
      _type,
      title,
      slug,
      excerpt,
      coverImage,
      publishedAt,
      author->{
        _id,
        _type,
        name,
        slug,
        image,
        bio
      },
      categories[]->{
        _id,
        _type,
        title,
        slug,
        description
      },
      featured
    }`
    
    return await sanityClient.fetch(query)
  },

  // Get all legacy posts (for backward compatibility)
  async getAllPosts(): Promise<Post[]> {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      _type,
      title,
      slug,
      author->{
        _id,
        _type,
        name,
        slug,
        image,
        bio
      },
      mainImage,
      categories[]->{
        _id,
        _type,
        title,
        slug,
        description
      },
      publishedAt,
      body
    }`
    
    return await sanityClient.fetch(query)
  },

  // Get all categories
  async getAllCategories(): Promise<Category[]> {
    const query = `*[_type == "category"] | order(title asc) {
      _id,
      _type,
      title,
      slug,
      description
    }`
    
    return await sanityClient.fetch(query)
  },

  // Get blog post by slug
  async getBlogPostBySlug(slug: string): Promise<Post | null> {
    const query = `*[_type == "blog" && slug.current == $slug && status == "published"][0] {
      _id,
      _type,
      title,
      slug,
      excerpt,
      coverImage,
      publishedAt,
      content,
      author->{
        _id,
        _type,
        name,
        slug,
        image,
        bio
      },
      categories[]->{
        _id,
        _type,
        title,
        slug,
        description
      },
      featured
    }`
    
    return await sanityClient.fetch(query, { slug })
  },

  // Get legacy post by slug
  async getPostBySlug(slug: string): Promise<Post | null> {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      _type,
      title,
      slug,
      author->{
        _id,
        _type,
        name,
        slug,
        image,
        bio
      },
      mainImage,
      categories[]->{
        _id,
        _type,
        title,
        slug,
        description
      },
      publishedAt,
      body
    }`
    
    return await sanityClient.fetch(query, { slug })
  },

  // Get blog posts by category
  async getBlogPostsByCategory(categorySlug: string): Promise<Post[]> {
    const query = `*[_type == "blog" && status == "published" && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(publishedAt desc) {
      _id,
      _type,
      title,
      slug,
      excerpt,
      coverImage,
      publishedAt,
      author->{
        _id,
        _type,
        name,
        slug,
        image,
        bio
      },
      categories[]->{
        _id,
        _type,
        title,
        slug,
        description
      },
      featured
    }`
    
    return await sanityClient.fetch(query, { categorySlug })
  },

  // Get legacy posts by category
  async getPostsByCategory(categorySlug: string): Promise<Post[]> {
    const query = `*[_type == "post" && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(publishedAt desc) {
      _id,
      _type,
      title,
      slug,
      author->{
        _id,
        _type,
        name,
        slug,
        image,
        bio
      },
      mainImage,
      categories[]->{
        _id,
        _type,
        title,
        slug,
        description
      },
      publishedAt,
      body
    }`
    
    return await sanityClient.fetch(query, { categorySlug })
  },

  // Get latest blog posts (limit)
  async getLatestBlogPosts(limit: number = 3): Promise<Post[]> {
    const query = `*[_type == "blog" && status == "published"] | order(publishedAt desc)[0...$limit] {
      _id,
      _type,
      title,
      slug,
      excerpt,
      coverImage,
      publishedAt,
      author->{
        _id,
        _type,
        name,
        slug,
        image,
        bio
      },
      categories[]->{
        _id,
        _type,
        title,
        slug,
        description
      },
      featured
    }`
    
    return await sanityClient.fetch(query, { limit })
  },

  // Get latest legacy posts (limit)
  async getLatestPosts(limit: number = 3): Promise<Post[]> {
    const query = `*[_type == "post"] | order(publishedAt desc)[0...$limit] {
      _id,
      _type,
      title,
      slug,
      author->{
        _id,
        _type,
        name,
        slug,
        image,
        bio
      },
      mainImage,
      categories[]->{
        _id,
        _type,
        title,
        slug,
        description
      },
      publishedAt,
      body
    }`
    
    return await sanityClient.fetch(query, { limit })
  }
}
