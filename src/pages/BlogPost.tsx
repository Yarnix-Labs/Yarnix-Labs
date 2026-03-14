import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import ParticleMeteorBackground from "@/components/ParticleMeteorBackground";
import { useBlogPost } from "@/hooks/useBlog";
import { PortableText } from "@portabletext/react";

const BlogPost = () => {
  const { slug } = useParams();
  const { post, loading, error } = useBlogPost(slug || "");

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="h-8 w-48 bg-muted rounded mb-4 mx-auto" />
          <div className="h-4 w-32 bg-muted rounded mx-auto" />
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="font-display text-4xl mb-4">
            {error ? "Error Loading Article" : "Article Not Found"}
          </h1>
          {error && <p className="text-muted-foreground mb-6">{error}</p>}
          <Link to="/blog" className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-end pt-20 text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0b1411 0%, #0f2d1f 50%, #134e35 100%)" }}
      >
        <ParticleMeteorBackground />
        <div className="container relative py-16 z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          {post.categories && post.categories.length > 0 && (
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm font-medium mb-4">
              {post.categories[0].title}
            </span>
          )}
          <h1 className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl leading-[0.95] tracking-wide text-white font-medium mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/40">
            {post.author && (
              <span className="inline-flex items-center gap-1.5">
                <User size={14} /> {post.author.name}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} /> {formatDate(post.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} /> {getReadTime(post.content)}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.coverImage?.asset?._ref && (
        <section className="py-12 md:py-16">
          <div className="container max-w-4xl">
            <div className="rounded-2xl overflow-hidden border border-border/50">
              <img 
                src={`https://cdn.sanity.io/images/v7q2gijs/production/${post.coverImage.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}`} 
                alt={post.title} 
                className="w-full h-64 sm:h-80 md:h-[24rem] object-cover" 
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-3xl">
          <div className="prose prose-invert prose-emerald max-w-none">
            {post.content && <PortableText value={post.content} />}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center rounded-2xl border border-border/50 bg-card p-10 md:p-14">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Want to learn more?</h2>
            <p className="text-muted-foreground mb-6">Get in touch to discuss how we can help with your project.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
