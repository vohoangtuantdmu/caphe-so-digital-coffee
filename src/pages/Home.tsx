import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import { ArrowRight, Coffee, Users, Clock } from "lucide-react";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  featured_image_url: string | null;
  created_at: string;
  category: string;
}

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-coffee text-primary-foreground">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Chào Mừng Đến Với <br />
            <span className="text-accent">Cà Phê Số</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Nơi hòa quyện giữa hương vị cà phê truyền thống và không gian hiện
            đại
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/thuc-don">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Xem Thực Đơn
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/gioi-thieu">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Tìm Hiểu Thêm
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tại Sao Chọn Cà Phê Số?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Chúng tôi mang đến trải nghiệm cà phê tuyệt vời nhất với chất
              lượng hàng đầu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-coffee rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Cà Phê Chất Lượng Cao
              </h3>
              <p className="text-muted-foreground">
                Chọn lọc từ những hạt cà phê tốt nhất, rang xay theo công thức
                truyền thống
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-coffee rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Không Gian Thân Thiện
              </h3>
              <p className="text-muted-foreground">
                Thiết kế hiện đại, ấm cúng, phù hợp cho làm việc và gặp gỡ bạn
                bè
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-coffee rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Phục Vụ Nhanh Chóng
              </h3>
              <p className="text-muted-foreground">
                Đội ngũ barista chuyên nghiệp, phục vụ tận tình và chu đáo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
    </div>
  );
};
