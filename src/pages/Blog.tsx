import { Calendar, ArrowRight, Clock, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import ParticleMeteorBackground from "@/components/ParticleMeteorBackground";
import AnimatedBook from "@/components/AnimatedBook";
import { useBlog } from "@/hooks/useBlog";

const Blog = () => {
  const { 
    featuredPost, 
    otherPosts, 
    categories, 
    loading, 
    error, 
    selectedCategory, 
    setSelectedCategory 
  } = useBlog();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getReadTime = (content: any[] | undefined) => {
    if (!content) return '5 min read';
    const wordsPerMinute = 200;
    const wordCount = content?.reduce((acc, block) => {
      if (block._type === 'block' && block.children) {
        return acc + block.children.reduce((wordAcc: number, child: any) => {
          return wordAcc + (child.text?.split(' ').length || 0);
        }, 0);
      }
      return acc;
    }, 0) || 0;
    return `${Math.max(1, Math.ceil(wordCount / wordsPerMinute))} min read`;
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Error loading posts</h2>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-center pt-20 text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0b1411 0%, #0f2d1f 50%, #134e35 100%)" }}
      >
        <ParticleMeteorBackground />
        <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-16" style={{ zIndex: 2 }}>
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm font-medium animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Knowledge Hub
            </span>
            <h1 className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-wide text-white font-medium animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Latest <span className="text-emerald-400">Insights</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Stay updated with our latest articles, tutorials, and industry insights on AI and software development.
            </p>
          </div>
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <AnimatedBook />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 border-b border-border/10">
        <div className="container">
          <div className="flex flex-wrap items-center gap-3 justify-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter size={16} />
              <span>Filter by:</span>
            </div>
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-emerald-500 text-white'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category._id}
                onClick={() => setSelectedCategory(category.slug?.current || null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.slug?.current
                    ? 'bg-emerald-500 text-white'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading 
            title={selectedCategory ? `${categories.find(c => c.slug?.current === selectedCategory)?.title || 'Category'} Articles` : "All Articles"} 
            subtitle={selectedCategory ? `Posts in ${categories.find(c => c.slug?.current === selectedCategory)?.title || 'category'}.` : "Deep dives into technology and innovation."} 
          />

          {loading ? (
            <div className="space-y-10">
              {/* Featured post skeleton */}
              <div className="animate-pulse">
                <div className="grid md:grid-cols-2 rounded-2xl border border-border/50 bg-card overflow-hidden">
                  <div className="h-64 md:h-full bg-muted" />
                  <div className="p-8 md:p-10 space-y-4">
                    <div className="h-8 bg-muted rounded w-1/3" />
                    <div className="h-8 bg-muted rounded w-full" />
                    <div className="h-4 bg-muted rounded w-full" />
                    <div className="h-4 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-1/2" />
                  </div>
                </div>
              </div>
              {/* Grid skeleton */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-48 bg-muted rounded-t-2xl" />
                    <div className="p-6 space-y-3 bg-card rounded-b-2xl">
                      <div className="h-4 bg-muted rounded w-3/4" />
                      <div className="h-3 bg-muted rounded w-1/2" />
                      <div className="h-3 bg-muted rounded w-full" />
                      <div className="h-3 bg-muted rounded w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : otherPosts.length === 0 && !featuredPost ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No posts found in this category.</p>
              <button
                onClick={() => setSelectedCategory(null)}
                className="mt-4 text-emerald-500 hover:text-emerald-600 font-medium"
              >
                View all posts
              </button>
            </div>
          ) : (
            <div className="space-y-10">
              {/* Featured post */}
              {featuredPost && featuredPost.slug?.current && (
                <Link 
                  to={`/blog/${featuredPost.slug.current}`} 
                  className="group block rounded-2xl border border-border/50 bg-card overflow-hidden hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5"
                >
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-full overflow-hidden">
                      <img 
                        src={featuredPost.coverImage?.asset?._ref ? `https://cdn.sanity.io/images/v7q2gijs/production/${featuredPost.coverImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}` : '/placeholder.jpg'} 
                        alt={featuredPost.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50 hidden md:block" />
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      {featuredPost.featured && (
                        <span className="inline-flex self-start text-xs px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-medium mb-4">
                          Featured
                        </span>
                      )}
                      <h3 className="font-bold text-2xl mb-3">{featuredPost.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-5">{featuredPost.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-5">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar size={14} /> {formatDate(featuredPost.publishedAt)}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock size={14} /> {getReadTime(featuredPost.content)}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors self-start">
                        Read Article <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              )}

              {/* Rest of posts */}
              {otherPosts.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {otherPosts.map((post) => post.slug?.current && (
                    <Link 
                      to={`/blog/${post.slug.current}`} 
                      key={post.slug.current} 
                      className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 block" 
                      style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)' }}
                    >
                      <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-emerald-500/20 transition-colors duration-500 pointer-events-none z-10" />
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05), 0 0 40px -10px rgba(16,185,129,0.1)' }} />

                      <div className="relative h-48 overflow-hidden bg-black/20">
                        <img 
                          src={post.coverImage?.asset?._ref ? `https://cdn.sanity.io/images/v7q2gijs/production/${post.coverImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}` : '/placeholder.jpg'} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-95" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1411] via-[#0b1411]/40 to-transparent" />
                        {post.categories && post.categories.length > 0 && (
                          <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-white/50 font-medium backdrop-blur-md">
                            {post.categories[0].title}
                          </span>
                        )}
                      </div>
                      <div className="p-6" style={{ background: 'linear-gradient(180deg, #0f1f19 0%, #0b1411 100%)' }}>
                        <div className="flex items-center gap-4 text-[10px] text-white/25 mb-3 uppercase tracking-wider">
                          <span className="inline-flex items-center gap-1">
                            <Calendar size={10} /> {formatDate(post.publishedAt)}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Clock size={10} /> {getReadTime(post.content)}
                          </span>
                        </div>
                        <h3 className="font-sans font-semibold text-sm text-white/80 mb-1.5 tracking-wide uppercase">{post.title}</h3>
                        <p className="text-xs text-white/30 mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>
                        <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400/70 font-medium group-hover:text-emerald-300 transition-colors uppercase tracking-wider">
                          Read More <ArrowRight size={12} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
