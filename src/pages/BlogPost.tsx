
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Share2, ChevronRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RelatedPosts from '@/components/blog/RelatedPosts';
import AuthorCard from '@/components/blog/AuthorCard';
import CommentSection from '@/components/blog/CommentSection';
import NewsletterSignup from '@/components/blog/NewsletterSignup';
import SEO from '@/components/common/SEO';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';
import { BlogPostType } from '@/types/blog';
import { blogPosts } from '@/data/blog';
import { useToast } from '@/hooks/use-toast';
import { formatDate } from '@/utils/formatDate';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const postData = blogPosts.find(p => p.slug === slug);
    
    if (postData) {
      setPost(postData);
      
      // Find related posts based on category or tags
      setRelatedPosts(
        blogPosts
          .filter(p => p.slug !== slug)
          .filter(p => 
            p.category === postData.category || 
            p.tags.some(tag => postData.tags.includes(tag))
          )
          .slice(0, 3)
      );
    } else {
      toast({
        title: "Post Not Found",
        description: "The blog post you're looking for doesn't exist.",
        variant: "destructive"
      });
    }
  }, [slug, toast]);

  if (!post) {
    return (
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="py-40">
          <div className="container-custom text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-8">The article you're looking for doesn't exist or has been moved.</p>
            <Link to="/blog" className="btn-primary">
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Define hreflang links for this specific blog post
  const hrefLangs = [
    { lang: 'en', href: `${window.location.origin}/blog/${post.slug}` },
    { lang: 'en-GB', href: `${window.location.origin}/en-gb/blog/${post.slug}` },
    { lang: 'zh', href: `${window.location.origin}/zh/blog/${post.slug}` },
    { lang: 'kn', href: `${window.location.origin}/kn/blog/${post.slug}` },
    { lang: 'te', href: `${window.location.origin}/te/blog/${post.slug}` },
    { lang: 'hi', href: `${window.location.origin}/hi/blog/${post.slug}` },
    { lang: 'de', href: `${window.location.origin}/de/blog/${post.slug}` },
    { lang: 'x-default', href: `${window.location.origin}/blog/${post.slug}` }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO 
        title={`${post.title} - Maxtize Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        ogImage={post.coverImage}
        ogType="article"
        hrefLangs={hrefLangs}
        locale="en_US"
      />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
            <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-orange-300 rounded-full filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
          </div>
          
          <div className="container-custom">
            <ScrollReveal>
              <div className="flex items-center mb-6">
                <Link to="/blog" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors flex items-center">
                  <ArrowLeft size={16} className="mr-2" />
                  Back to Blog
                </Link>
                <ChevronRight size={16} className="mx-2 text-gray-400" />
                <Link to={`/blog?category=${post.category}`} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  {post.category}
                </Link>
              </div>
            </ScrollReveal>

            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {post.title}
                </h1>
              
                <div className="flex flex-wrap items-center gap-4 mb-8 text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span>{formatDate(post.publishDate)}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center">
                    <Tag size={16} className="mr-2" />
                    <span>{post.category}</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-16">
          <div className="container-custom">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src={post.coverImage} 
                    alt={post.title} 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
              <div className="lg:col-span-8">
                <ScrollReveal>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </div>
                </ScrollReveal>
                
                <ScrollReveal>
                  <div className="mt-12 flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Link
                        key={index}
                        to={`/blog?tag=${tag}`}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-orange-100 dark:hover:bg-orange-900/30 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </ScrollReveal>
                
                <ScrollReveal>
                  <div className="mt-12 p-6 border border-gray-200 dark:border-gray-800 rounded-xl flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Share this article</h3>
                      <p className="text-gray-500 dark:text-gray-400">Help spread the word!</p>
                    </div>
                    <div className="flex gap-4">
                      <button className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900/30 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                        <Share2 size={20} />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal>
                  <AuthorCard author={post.author} />
                </ScrollReveal>
                
                <ScrollReveal>
                  <CommentSection postId={post.slug} />
                </ScrollReveal>
              </div>
              
              <div className="lg:col-span-4">
                <ScrollReveal>
                  <NewsletterSignup />
                </ScrollReveal>
                
                <ScrollReveal delay={0.2}>
                  <div className="mt-12 sticky top-24">
                    <h3 className="text-xl font-bold mb-6">Related Articles</h3>
                    <div className="space-y-6">
                      {relatedPosts.map((relatedPost, index) => (
                        <Link key={index} to={`/blog/${relatedPost.slug}`} className="block group">
                          <div className="grid grid-cols-5 gap-4">
                            <div className="col-span-2 rounded-lg overflow-hidden">
                              <img 
                                src={relatedPost.coverImage} 
                                alt={relatedPost.title}
                                className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300" 
                              />
                            </div>
                            <div className="col-span-3">
                              <h4 className="text-base font-semibold group-hover:text-orange-500 transition-colors line-clamp-2">
                                {relatedPost.title}
                              </h4>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                {formatDate(relatedPost.publishDate)}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts Section for Mobile */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50 lg:hidden">
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="text-2xl font-bold mb-8 text-center">You May Also Like</h2>
              <RelatedPosts posts={relatedPosts} />
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
