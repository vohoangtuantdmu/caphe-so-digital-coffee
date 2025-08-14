import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  UtensilsCrossed,
  Leaf,
  HeartHandshake,
  Clock,
  MapPin,
  BookOpen,
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
            Không chỉ là bữa ăn, chúng tôi muốn mang đến cho bạn trải nghiệm cơm
            niêu Việt Nam chuẩn vị, gói ghém sự chân thành trong từng hạt cơm.
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
      {/* --- PHẦN MỚI 1: THƯ VIỆN HÌNH ẢNH "TRẢI NGHIỆM" --- */}
      <section className="py-20 bg-brand-brown/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-brown mb-4">
              Trải Nghiệm Tại Mạ Làm
            </h2>
            <p className="text-xl text-brand-brown/80 max-w-3xl mx-auto">
              Không gian của sự sum vầy, nơi mỗi khoảnh khắc đều trở nên đáng
              nhớ.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
            <div className="col-span-1 md:col-span-2 row-span-2 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://i.pinimg.com/736x/bc/cc/f3/bcccf3d8f0aadfa5062bfaccb5b171eb.jpg"
                alt="Không gian rộng rãi của Cơm Niêu Mạ Làm"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-1 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://i.pinimg.com/1200x/c4/03/24/c40324dae7548493c115481641786375.jpg"
                alt="Cận cảnh niêu cơm nóng hổi"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="col-span-1 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://i.pinimg.com/1200x/a0/93/32/a09332b3cd7aa114d82423bb7b78a7c6.jpg"
                alt="Một góc trang trí mộc mạc tại quán"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="col-span-1 md:col-span-2 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://i.pinimg.com/1200x/7e/ed/df/7eeddfcbcb23a6fb6b247291e9ea381d.jpg"
                alt="Gia đình đang vui vẻ dùng bữa"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- PHẦN MỚI 2: GÓC BẾP CỦA MẠ --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Cột ảnh */}
            <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://i.pinimg.com/1200x/b4/ea/6b/b4ea6b7aa6a4ea19ecd3027e36732a1d.jpg"
                alt="Niêu cá kho tộ đậm đà theo công thức của Mạ"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Cột nội dung */}
            <div className="text-center lg:text-left">
              <h3 className="font-serif text-xl text-brand-orange">
                Góc Bếp Của Mạ
              </h3>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-brown mt-2 mb-6">
                Câu chuyện Niêu Cá Kho Tộ
              </h2>
              <p className="text-lg text-brand-text/80 mb-4">
                "Mạ kể, bí quyết của niêu cá kho ngon không nằm ở đâu xa, mà ở
                sự kiên nhẫn. Lửa phải liu riu, để từng thớ cá ngấm trọn vị nước
                hàng màu cánh gián, quyện với mùi thơm của riềng, của ớt."
              </p>
              <p className="text-lg text-brand-text/80 mb-8">
                Đó không chỉ là một món ăn, mà là cả ký ức về những bữa cơm quê
                nhà, nơi tình yêu thương của Mạ được nêm nếm trong từng hương
                vị.
              </p>
              <Link to="/gioi-thieu">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-bold"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Đọc Thêm Về Hành Trình Của Mạ
                </Button>
              </Link>
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
                2 Trương Gia Mô, P. Cát Lái, TP. Thủ Đức, TP. HCM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
