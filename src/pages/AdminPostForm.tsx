import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { RichTextEditor } from "@/components/RichTextEditor";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";

const formSchema = z.object({
  title: z.string().min(1, "Tiêu đề là bắt buộc"),
  slug: z.string().min(1, "Slug là bắt buộc"),
  category: z.string().min(1, "Danh mục là bắt buộc"),
  excerpt: z.string().optional(),
  featured_image_url: z.string().url("URL ảnh không hợp lệ").optional().or(z.literal("")),
  content: z.string().min(1, "Nội dung là bắt buộc"),
  published: z.boolean().default(false),
});

type FormData = z.infer<typeof formSchema>;

const categories = [
  "Kiến thức cà phê",
  "Cách pha chế",
  "Máy móc thiết bị",
  "Hạt cà phê",
  "Tin tức",
  "Khuyến mãi"
];

export const AdminPostForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(!!id);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
      category: "",
      excerpt: "",
      featured_image_url: "",
      content: "",
      published: false,
    },
  });

  const { watch, setValue } = form;
  const titleValue = watch("title");

  // Auto-generate slug from title
  useEffect(() => {
    if (titleValue && !id) {
      const slug = titleValue
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
      setValue("slug", slug);
    }
  }, [titleValue, setValue, id]);

  // Load post data for editing
  useEffect(() => {
    if (id) {
      fetchPost();
    }
  }, [id]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      form.reset({
        title: data.title,
        slug: data.slug,
        category: data.category,
        excerpt: data.excerpt || "",
        featured_image_url: data.featured_image_url || "",
        content: data.content,
        published: data.published,
      });
    } catch (error) {
      console.error('Error fetching post:', error);
      toast({
        title: "Lỗi",
        description: "Không thể tải bài viết",
        variant: "destructive",
      });
      navigate('/admin');
    } finally {
      setInitialLoading(false);
    }
  };

  const onSubmit = async (data: FormData) => {
    if (!user) return;

    setLoading(true);
    try {
      const postData = {
        title: data.title,
        slug: data.slug,
        category: data.category,
        content: data.content,
        author_id: user.id,
        featured_image_url: data.featured_image_url || null,
        excerpt: data.excerpt || null,
        published: data.published,
      };

      if (id) {
        // Update existing post
        const { error } = await supabase
          .from('posts')
          .update(postData)
          .eq('id', id);

        if (error) throw error;

        toast({
          title: "Thành công",
          description: "Đã cập nhật bài viết",
        });
      } else {
        // Create new post
        const { error } = await supabase
          .from('posts')
          .insert(postData);

        if (error) throw error;

        toast({
          title: "Thành công",
          description: "Đã tạo bài viết mới",
        });
      }

      navigate('/admin');
    } catch (error: any) {
      console.error('Error saving post:', error);
      toast({
        title: "Lỗi",
        description: error.message || "Không thể lưu bài viết",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/admin')}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại
        </Button>
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-foreground">
              {id ? 'Chỉnh sửa bài viết' : 'Tạo bài viết mới'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tiêu đề</FormLabel>
                      <FormControl>
                        <Input placeholder="Nhập tiêu đề bài viết..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Slug (URL thân thiện)</FormLabel>
                      <FormControl>
                        <Input placeholder="url-than-thien-cho-bai-viet" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Danh mục</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Chọn danh mục" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="excerpt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mô tả ngắn (tùy chọn)</FormLabel>
                      <FormControl>
                        <Input placeholder="Mô tả ngắn gọn về bài viết..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="featured_image_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>URL ảnh đại diện (tùy chọn)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com/image.jpg" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nội dung</FormLabel>
                      <FormControl>
                        <RichTextEditor
                          content={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="published"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Xuất bản bài viết</FormLabel>
                        <div className="text-sm text-muted-foreground">
                          Bài viết sẽ hiển thị công khai trên website
                        </div>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className="flex gap-4">
                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="bg-primary hover:bg-primary/90"
                  >
                    {loading ? "Đang lưu..." : "Lưu bài viết"}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => navigate('/admin')}
                  >
                    Hủy
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};