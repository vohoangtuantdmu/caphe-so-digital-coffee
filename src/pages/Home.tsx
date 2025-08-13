import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  UtensilsCrossed,
  Leaf,
  HeartHandshake,
  Clock,
  MapPin,
} from "lucide-react";

export const Home = () => {
  return (
    // Dùng font-sans làm font mặc định cho toàn trang
    <div className="min-h-screen bg-brand-cream font-sans text-brand-text">
      {/* Hero Section với ảnh nền */}
      <section
        className="relative min-h-[700px] flex items-center justify-center text-white bg-cover bg-center bg-fixed"
        // --- ẢNH NỀN Ở ĐÂY ---
        style={{ backgroundImage: "url('/bgComNieu.jpg')" }}
      >
        {/* Lớp phủ tối để làm nổi bật chữ */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Cơm Niêu Mạ Làm
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Nơi gói trọn tinh hoa ẩm thực Việt, mang đến những bữa cơm ấm áp
            hương vị quê nhà.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/thuc-don">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange/90 text-white font-bold"
              >
                Xem Thực Đơn
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/gioi-thieu">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-black hover:bg-white hover:text-brand-brown font-bold"
              >
                Câu Chuyện Của Mạ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - Thiết kế lại cho ấm cúng hơn */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-brown mb-4">
              Điều Làm Nên Khác Biệt
            </h2>
            <p className="text-xl text-brand-brown/80 max-w-3xl mx-auto">
              Mỗi món ăn tại Cơm Niêu Mạ Làm không chỉ ngon miệng mà còn chứa
              đựng cả tâm huyết và sự trân trọng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-lg hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <UtensilsCrossed className="h-10 w-10 text-brand-orange" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-brown mb-3">
                Hương Vị Truyền Thống
              </h3>
              <p className="text-brand-text/80">
                Thực đơn đa dạng, giữ trọn vị ngon dân dã ấm áp từ ba miền, được
                chế biến từ công thức gia truyền.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-lg hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-10 w-10 text-brand-orange" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-brown mb-3">
                Nguyên Liệu Tươi Ngon
              </h3>
              <p className="text-brand-text/80">
                Chúng tôi cam kết sử dụng nguyên liệu tươi sạch mỗi ngày, được
                lựa chọn kỹ lưỡng từ các nhà cung cấp uy tín.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-lg hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeartHandshake className="h-10 w-10 text-brand-orange" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-brown mb-3">
                Không Gian Ấm Cúng
              </h3>
              <p className="text-brand-text/80">
                Thiết kế mộc mạc, gần gũi, là nơi lý tưởng để gia đình sum vầy,
                bạn bè gặp gỡ và tận hưởng bữa cơm ngon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-brand-brown mb-10">
            Mạ Luôn Chờ Bạn
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <Clock className="h-10 w-10 text-brand-orange mx-auto mb-3" />
              <h4 className="font-bold text-lg text-brand-brown">Giờ Mở Cửa</h4>
              <p className="text-brand-text/80">
                10:00 - 22:30, tất cả các ngày trong tuần
              </p>
            </div>
            <div className="text-center">
              <MapPin className="h-10 w-10 text-brand-orange mx-auto mb-3" />
              <h4 className="font-bold text-lg text-brand-brown">Địa Chỉ</h4>
              <p className="text-brand-text/80">
                2 Trương Gia Mô, P. Thạnh Mỹ Lợi, TP. Thủ Đức, TP. HCM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
