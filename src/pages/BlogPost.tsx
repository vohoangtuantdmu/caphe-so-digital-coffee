import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { vi } from "date-fns/locale";

interface Post {
  id: string;
  title: string;
  content: string;
  slug: string;
  featured_image_url: string | null;
  created_at: string;
  category: string;
  author_id: string;
}

export const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .single();

      if (error) throw error;
      setPost(data);
    } catch (error: any) {
      console.error("Error fetching post:", error);
      setError("Không thể tải bài viết. Bài viết có thể không tồn tại hoặc chưa được xuất bản.");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "dd MMMM, yyyy", { locale: vi });
  };

  const estimateReadingTime = (content: string) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    const wordsPerMinute = 200;
    const wordCount = textContent.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-4 bg-muted rounded w-24 mb-4" />
            <div className="h-8 bg-muted rounded w-3/4 mb-2" />
            <div className="h-4 bg-muted rounded w-1/2 mb-8" />
            <div className="h-64 bg-muted rounded mb-8" />
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-4 bg-muted rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="py-12">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Không tìm thấy bài viết
            </h1>
            <p className="text-muted-foreground mb-8">
              {error || "Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa."}
            </p>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Quay lại Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link to="/blog">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại Blog
          </Button>
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <Badge variant="secondary" className="bg-primary/10 text-primary mb-4">
              {post.category}
            </Badge>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 text-muted-foreground text-sm mb-8">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{formatDate(post.created_at)}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{estimateReadingTime(post.content)} phút đọc</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>Cà Phê Số</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.featured_image_url && (
          <div className="mb-8">
            <img
              src={post.featured_image_url}
              alt={post.title}
              className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-border">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">
                Được đăng trong danh mục <strong>{post.category}</strong>
              </p>
            </div>
            <Link to="/blog">
              <Button variant="outline">
                Xem thêm bài viết
              </Button>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};