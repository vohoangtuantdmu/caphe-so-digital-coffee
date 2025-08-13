import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Leaf, Users2, UtensilsCrossed } from "lucide-react";

export const About = () => {
  return (
    <div className="min-h-screen bg-brand-cream font-sans">
      {/* Hero Section */}
      <section className="relative py-20 bg-brand-brown/10">
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
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
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
                  những công thức gia truyền được đúc kết qua nhiều năm. Mỗi món
                  ăn đều được chế biến khéo léo, phù hợp khẩu vị của mọi vùng
                  miền từ Bắc – Trung – Nam, giữ trọn vị ngon dân dã mà ấm áp.
                </p>
                <p>
                  Chúng tôi luôn tâm niệm rằng chất lượng làm nên thương hiệu.
                  Từ việc tuyển chọn nguyên liệu tươi ngon nhất mỗi ngày đến
                  việc nêm nếm tinh tế, tất cả đều nhằm mang đến một điểm đến lý
                  tưởng cho bữa ăn gia đình, bạn bè hay đồng nghiệp.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://i.pinimg.com/1200x/7e/b5/c2/7eb5c2556528a5eec40baff9a5ecf628.jpg"
                  alt="Không gian ấm cúng của Cơm Niêu Mạ Làm"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
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
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UtensilsCrossed className="h-8 w-8 text-brand-orange" />
                </div>
                <CardTitle className="font-serif text-brand-brown">
                  Hương Vị Cội Nguồn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Tôn vinh và giữ gìn hương vị truyền thống Việt Nam trong từng
                  món ăn.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-brand-orange" />
                </div>
                <CardTitle className="font-serif text-brand-brown">
                  Nguyên Liệu Tươi Sạch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Cam kết sử dụng những nguyên liệu tuyển chọn, tươi ngon và an
                  toàn nhất.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-brand-orange" />
                </div>
                <CardTitle className="font-serif text-brand-brown">
                  Tận Tâm Phục Vụ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Phục vụ bằng cả trái tim, xem mỗi khách hàng như người thân
                  trong gia đình.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users2 className="h-8 w-8 text-brand-orange" />
                </div>
                <CardTitle className="font-serif text-brand-brown">
                  Sum Vầy Gắn Kết
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Xây dựng không gian ấm cúng, là nơi lý tưởng cho những bữa cơm
                  gia đình.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* --- PHẦN MỚI: THAY THẾ CHO TEAM SECTION --- */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://i.pinimg.com/1200x/f2/bb/49/f2bb49eaf96afedf59f39fc508650364.jpg"
                  alt="Bữa cơm gia đình Việt Nam"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-brand-brown mb-6">
                Hồn Việt Trong Niêu Cơm Đất
              </h2>
              <div className="space-y-4 text-brand-text/80">
                <p>
                  Đối với người Việt, bữa cơm không chỉ để ăn, mà là thời khắc
                  của sự sum vầy. Niêu cơm nóng hổi đặt giữa mâm chính là trung
                  tâm, là nơi hơi ấm tình thân lan tỏa, nơi những câu chuyện
                  được sẻ chia và những nụ cười được trao đi.
                </p>
                <p>
                  Chiếc niêu đất mộc mạc, giản dị nhưng lại chứa đựng sự tinh
                  túy của đất trời. Cơm nấu trong niêu giữ được vị ngọt tự nhiên
                  của hạt gạo, dẻo thơm và nóng hổi đến tận cuối bữa. Đó là nghệ
                  thuật nấu ăn dân gian, là sự trân trọng những gì thiên nhiên
                  ban tặng.
                </p>
                <p>
                  Tại Cơm Niêu Mạ Làm, chúng tôi mong muốn tái hiện và gìn giữ
                  nét văn hóa quý báu đó, để mỗi thực khách khi đến đây không
                  chỉ được thưởng thức món ngon, mà còn được sống lại trong
                  không khí gia đình Việt ấm áp và thân thương.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
