import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bike,
  Clock,
  Heart,
  Leaf,
  MapPin,
  Phone,
  Sparkles,
  Star,
  Users2,
  UtensilsCrossed,
} from "lucide-react";

export const AboutPageUltimate = () => {
  return (
    <div className="min-h-screen bg-brand-cream font-sans">
      {/* --- 1. MỞ ĐẦU (ĐÃ CẬP NHẬT) --- */}
      <section className="relative pt-20 pb-16 bg-brand-brown/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-brown mb-6">
              Câu Chuyện Của <span className="text-brand-orange">Mạ</span>
            </h1>
            <p className="text-xl text-brand-text/80 max-w-3xl mx-auto">
              Với hơn 10 năm kinh nghiệm, Cơm Niêu Mạ Làm tự hào mang đến cho
              thực khách những bữa cơm đậm đà hương vị quê nhà, được nấu bằng cả
              trái tim.
            </p>
            {/* --- NỘI DUNG MỚI ĐƯỢC THÊM VÀO ĐÂY --- */}
            <p
              className="mt-6 text-lg text-brand-text/90 max-w-4xl mx-auto 
  bg-white/50 backdrop-blur-sm border border-white/20 
  p-6 rounded-xl shadow-md 
  bg-gradient-to-r from-brand-orange/10 via-white to-brand-brown/5"
            >
              Nếu bạn đang tìm một <strong>quán cơm niêu ngon ở Cát Lái</strong>
              , <strong>cơm niêu gia đình</strong> đậm vị truyền thống, thì
              <strong> Cơm Niêu Mạ Làm</strong> chính là điểm dừng chân lý
              tưởng. Chúng tôi tự hào mang đến những bữa ăn vừa ngon miệng, vừa
              ấm áp tình quê, phù hợp khẩu vị mọi vùng miền – từ Bắc, Trung, đến
              Nam.
            </p>
          </div>
        </div>
      </section>

      {/* --- 2. CÂU CHUYỆN THƯƠNG HIỆU --- */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-brand-brown mb-6">
                Hành Trình Gìn Giữ Hương Vị Việt
              </h2>
              <div className="space-y-4 text-brand-text/80">
                <p>
                  Cơm Niêu Mạ Làm ra đời từ tình yêu và nỗi nhớ những bữa cơm
                  gia đình ấm cúng. Chúng tôi tin rằng mỗi món ăn không chỉ để
                  no bụng, mà còn là ký ức, là văn hóa, là cầu nối yêu thương
                  giữa các thế hệ.
                </p>
                <p>
                  Hành trình của chúng tôi bắt đầu từ căn bếp nhỏ của Mạ, với
                  những công thức gia truyền được đúc kết qua nhiều năm, giữ
                  trọn vị ngon dân dã mà ấm áp, phù hợp khẩu vị mọi vùng miền.
                </p>
                <p>
                  Chúng tôi luôn tâm niệm rằng chất lượng làm nên thương hiệu.
                  Từ việc tuyển chọn nguyên liệu tươi ngon đến việc nêm nếm tinh
                  tế, tất cả đều nhằm mang đến một điểm đến lý tưởng cho bữa ăn
                  gia đình, bạn bè hay đồng nghiệp.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-lg shadow-xl overflow-hidden">
                <img
                  src="https://i.pinimg.com/736x/bc/cc/f3/bcccf3d8f0aadfa5062bfaccb5b171eb.jpg"
                  alt="Căn bếp truyền thống ấm cúng của Mạ Làm"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. ƯU ĐÃI ĐẶC BIỆT --- */}
      <section className="py-8 bg-brand-orange/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <Sparkles className="h-10 w-10 text-brand-orange" />
            <p className="text-lg font-semibold text-brand-brown">
              <span className="font-bold">Ưu đãi đặc biệt tháng 8/2025:</span>{" "}
              Tặng ngay 01 ly nước sâm giải nhiệt cho mỗi phần Cơm Niêu Combo!
            </p>
          </div>
        </div>
      </section>

      {/* --- 4. GIÁ TRỊ CỐT LÕI --- */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-brown mb-4">
              Giá Trị Cốt Lõi
            </h2>
            <p className="text-xl text-brand-text/80">
              Những nguyên tắc dẫn lối cho căn bếp của Mạ trong từng hoạt động.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg p-4">
              <CardHeader className="p-2">
                <div className="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UtensilsCrossed className="h-8 w-8 text-brand-orange" />
                </div>
                <CardTitle className="font-serif text-brand-brown">
                  Hương Vị Cội Nguồn
                </CardTitle>
              </CardHeader>
              <CardContent className="p-2">
                <CardDescription>
                  Tôn vinh và giữ gìn hương vị truyền thống Việt Nam trong từng
                  món ăn.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg p-4">
              <CardHeader className="p-2">
                <div className="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-brand-orange" />
                </div>
                <CardTitle className="font-serif text-brand-brown">
                  Nguyên Liệu Tươi Sạch
                </CardTitle>
              </CardHeader>
              <CardContent className="p-2">
                <CardDescription>
                  Cam kết sử dụng những nguyên liệu tuyển chọn, tươi ngon và an
                  toàn nhất.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg p-4">
              <CardHeader className="p-2">
                <div className="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-brand-orange" />
                </div>
                <CardTitle className="font-serif text-brand-brown">
                  Tận Tâm Phục Vụ
                </CardTitle>
              </CardHeader>
              <CardContent className="p-2">
                <CardDescription>
                  Phục vụ bằng cả trái tim, xem mỗi khách hàng như người thân
                  trong gia đình.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg p-4">
              <CardHeader className="p-2">
                <div className="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users2 className="h-8 w-8 text-brand-orange" />
                </div>
                <CardTitle className="font-serif text-brand-brown">
                  Sum Vầy Gắn Kết
                </CardTitle>
              </CardHeader>
              <CardContent className="p-2">
                <CardDescription>
                  Xây dựng không gian ấm cúng, là nơi lý tưởng cho những bữa cơm
                  gia đình.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* --- 5. HỒN VIỆT TRONG NIÊU CƠM ĐẤT --- */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative lg:order-last">
              <div className="w-full h-96 rounded-lg shadow-xl overflow-hidden">
                <img
                  src="https://i.pinimg.com/1200x/f2/bb/49/f2bb49eaf96afedf59f39fc508650364.jpg"
                  alt="Niêu cơm đất nóng hổi, biểu tượng của bữa cơm gia đình Việt Nam"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:order-first">
              <h2 className="font-serif text-3xl font-bold text-brand-brown mb-6">
                Hồn Việt Trong Niêu Cơm Đất
              </h2>
              <div className="space-y-4 text-brand-text/80">
                <p>
                  Đối với người Việt, bữa cơm không chỉ để ăn, mà là thời khắc
                  của sự sum vầy. Niêu cơm nóng hổi đặt giữa mâm chính là trung
                  tâm, là nơi hơi ấm tình thân lan tỏa.
                </p>
                <p>
                  Chiếc niêu đất mộc mạc lại chứa đựng sự tinh túy của đất trời,
                  giữ trọn vị ngọt tự nhiên của hạt gạo. Đó là nghệ thuật nấu ăn
                  dân gian, là sự trân trọng những gì thiên nhiên ban tặng.
                </p>
                <p>
                  Tại Cơm Niêu Mạ Làm, chúng tôi gìn giữ nét văn hóa quý báu đó,
                  để mỗi thực khách không chỉ thưởng thức món ngon, mà còn được
                  sống lại trong không khí gia đình Việt ấm áp, thân thương.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. ĐÁNH GIÁ CỦA KHÁCH HÀNG --- */}
      <section className="py-16 lg:py-24 bg-brand-brown/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-brown mb-4">
              Khách Hàng Nói Gì Về Mạ Làm?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4 text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <p className="text-brand-text/80 italic mb-4">
                  "Cơm niêu ở đây đúng chuẩn vị nhà nấu, lớp cháy giòn rụm ăn
                  rất đã. Sẽ quay lại nhiều lần nữa."
                </p>
                <p className="font-bold text-brand-brown text-right">
                  - Anh Minh, Quận 2
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4 text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <p className="text-brand-text/80 italic mb-4">
                  "Không gian sạch sẽ, có phòng riêng nên rất hợp để đi ăn trưa
                  với team văn phòng. Đồ ăn lên nhanh, nóng hổi."
                </p>
                <p className="font-bold text-brand-brown text-right">
                  - Chị Lan, TP. Thủ Đức
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-0 shadow-lg p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4 text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <p className="text-brand-text/80 italic mb-4">
                  "Đặt giao hàng mấy lần rồi mà lần nào cũng ưng. Cơm được gói
                  kỹ, giao tới vẫn còn nóng. Rất đáng tiền."
                </p>
                <p className="font-bold text-brand-brown text-right">
                  - Bạn Hùng, Cát Lái
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* --- 7. THÔNG TIN CHI TIẾT (ĐÃ CẬP NHẬT) --- */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-brown mb-4">
              Trải Nghiệm Tại Mạ Làm
            </h2>
            <p className="text-xl text-brand-text/80">
              Những tiện ích và dịch vụ chúng tôi mang đến cho bạn.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* --- NỘI DUNG MỚI ĐƯỢC CẬP NHẬT TẠI ĐÂY --- */}
            <div className="bg-brand-cream p-8 rounded-lg shadow-md">
              <UtensilsCrossed className="h-10 w-10 text-brand-orange mb-4" />
              <h3 className="font-serif text-2xl font-bold text-brand-brown mb-2">
                Không Chỉ Ngon – Còn Đa Dạng
              </h3>
              <p className="text-brand-text/80">
                Tại Cơm niêu Mạ Làm, thực đơn phong phú từ{" "}
                <strong>
                  cơm niêu cá kho tộ, cơm niêu gà xối mỡ, cơm niêu bò kho, hải
                  sản,...
                </strong>{" "}
                đến <strong>cơm niêu rau củ</strong> dành cho khách ăn chay.
                Chúng tôi luôn chọn nguyên liệu tươi, nấu chín tại chỗ để giữ
                trọn hương vị.
              </p>
            </div>
            <div className="bg-brand-cream p-8 rounded-lg shadow-md">
              <Users2 className="h-10 w-10 text-brand-orange mb-4" />
              <h3 className="font-serif text-2xl font-bold text-brand-brown mb-2">
                Không Gian Lý Tưởng
              </h3>
              <p className="text-brand-text/80">
                Trang bị máy lạnh mát mẻ và có phòng riêng (VIP) cho các buổi
                tiệc gia đình, họp mặt bạn bè hoặc tiếp khách cần sự riêng tư.
              </p>
            </div>
            <div className="bg-brand-cream p-8 rounded-lg shadow-md">
              <Bike className="h-10 w-10 text-brand-orange mb-4" />
              <h3 className="font-serif text-2xl font-bold text-brand-brown mb-2">
                Giao Hàng Tận Nơi
              </h3>
              <p className="text-brand-text/80">
                Đặt hàng online tiện lợi qua hotline, chúng tôi sẽ giao những
                niêu cơm nóng hổi đến tận cửa nhà bạn một cách nhanh chóng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 8. KÊU GỌI HÀNH ĐỘNG --- */}

      <section className="py-16 lg:py-24 bg-brand-brown/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-brand-brown mb-10">
            Ghé Mạ Làm để có một bữa cơm chuẩn vị quê nhà!
          </h2>

          <div className="space-y-6 text-left inline-block">
            {/* Dòng địa chỉ */}
            <div className="flex items-start gap-4">
              <MapPin
                className="h-7 w-7 text-brand-orange mt-1 flex-shrink-0"
                aria-hidden="true"
              />
              <div>
                <strong className="text-brand-brown">Địa chỉ:</strong>
                <p className="text-brand-text/90">
                  2 Trương Gia Mô, P. Cát Lái (P. Thạnh Mỹ Lợi, TP. Thủ Đức)
                </p>
              </div>
            </div>

            {/* Dòng giờ mở cửa */}
            <div className="flex items-start gap-4">
              <Clock
                className="h-7 w-7 text-brand-orange mt-1 flex-shrink-0"
                aria-hidden="true"
              />
              <div>
                <strong className="text-brand-brown">Giờ mở cửa:</strong>
                <p className="text-brand-text/90">10:00 – 22:30 (hàng ngày)</p>
              </div>
            </div>

            {/* Dòng Hotline */}
            <div className="flex items-start gap-4">
              <Phone
                className="h-7 w-7 text-brand-orange mt-1 flex-shrink-0"
                aria-hidden="true"
              />
              <div>
                <strong className="text-brand-brown">Hotline:</strong>
                <p className="text-brand-text/90">(0335) 734 979</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
