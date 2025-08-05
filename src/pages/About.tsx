import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Award, Users2, MapPin } from "lucide-react";

export const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Câu Chuyện Của <span className="text-primary">Cà Phê Số</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Từ niềm đam mê với hương vị cà phê Việt Nam truyền thống, chúng tôi đã xây dựng 
              một không gian nơi mọi người có thể tận hưởng những tách cà phê tuyệt vời nhất.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Hành Trình Của Chúng Tôi</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Cà Phê Số ra đời từ tình yêu sâu sắc với văn hóa cà phê Việt Nam. 
                  Chúng tôi tin rằng mỗi tách cà phê không chỉ là thức uống, mà là cầu nối 
                  gắn kết con người với nhau.
                </p>
                <p>
                  Với hơn 5 năm kinh nghiệm trong ngành, đội ngũ của chúng tôi không ngừng 
                  học hỏi và hoàn thiện để mang đến những trải nghiệm cà phê tuyệt vời nhất 
                  cho khách hàng.
                </p>
                <p>
                  Từ việc chọn lọc những hạt cà phê chất lượng cao từ các vùng trồng nổi tiếng 
                  của Việt Nam như Đà Lạt, Buôn Ma Thuột, đến quy trình rang xay và pha chế 
                  theo công thức độc đáo, chúng tôi cam kết mang đến hương vị đích thực.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-coffee rounded-lg shadow-coffee"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-primary-foreground text-lg font-medium">Hình ảnh không gian quán</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Giá Trị Cốt Lõi
            </h2>
            <p className="text-xl text-muted-foreground">
              Những nguyên tắc dẫn dắt chúng tôi trong từng hoạt động
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-coffee rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Đam Mê</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Tình yêu với cà phê thúc đẩy chúng tôi không ngừng sáng tạo và hoàn thiện
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-coffee rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Chất Lượng</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Cam kết sử dụng nguyên liệu tốt nhất và quy trình chế biến chuẩn mực
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-coffee rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users2 className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Cộng Đồng</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Xây dựng không gian gắn kết, nơi mọi người có thể chia sẻ và kết nối
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-coffee rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Bản Sắc</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Tôn vinh và phát huy văn hóa cà phê Việt Nam trong từng sản phẩm
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Đội Ngũ Của Chúng Tôi
            </h2>
            <p className="text-xl text-muted-foreground">
              Những con người tạo nên sự khác biệt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Nguyễn Văn An",
                role: "Chủ Quán & Head Barista",
                description: "Với hơn 10 năm kinh nghiệm trong ngành cà phê, An là người sáng lập và dẫn dắt đội ngũ."
              },
              {
                name: "Trần Thị Bình",
                role: "Quản Lý Vận Hành",
                description: "Bình đảm bảo mọi hoạt động của quán diễn ra suôn sẻ và khách hàng luôn được phục vụ tốt nhất."
              },
              {
                name: "Lê Minh Cường",
                role: "Head of Quality Control",
                description: "Cường chịu trách nhiệm kiểm soát chất lượng từ khâu chọn nguyên liệu đến sản phẩm cuối cùng."
              }
            ].map((member, index) => (
              <Card key={index}>
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-coffee rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ghé Thăm Chúng Tôi
            </h2>
            <p className="text-xl text-muted-foreground">
              Chúng tôi luôn chào đón bạn tại không gian ấm cúng của Cà Phê Số
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Địa Chỉ</h3>
                  <p className="text-muted-foreground">
                    123 Đường Nguyễn Huệ, Quận 1, Thành phố Hồ Chí Minh
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Giờ Mở Cửa</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Thứ Hai - Thứ Sáu: 7:00 - 22:00</p>
                    <p>Thứ Bảy - Chủ Nhật: 8:00 - 23:00</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Liên Hệ</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Điện thoại: (028) 1234 5678</p>
                    <p>Email: hello@capheso.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-warm rounded-lg shadow-warm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-foreground text-lg font-medium">Bản đồ vị trí quán</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};