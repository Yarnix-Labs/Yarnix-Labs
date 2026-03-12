import { sanityClient } from '../lib/sanity'
import { Post } from '../types'

export const postService = {
  // Get all posts
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

  // Get post by slug
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

  // Get posts by category
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

  // Get latest posts (limit)
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
