import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface SetMenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  includes: string[];
  images: string[];
}

const setMenus: SetMenuItem[] = [
  {
    id: "set-4-nguoi",
    name: "Mâm Cơm Sum Họp (4 người)",
    description:
      "Mâm cơm thịnh soạn được thiết kế cho nhóm bạn bè hoặc gia đình nhỏ, hội tụ đủ các hương vị mặn, ngọt, chua, cay, đảm bảo một bữa ăn trọn vẹn và đáng nhớ.",
    price: 599000,
    includes: [
      "Cơm niêu (4 người)",
      "2 Món mặn tự chọn",
      "1 Món xào theo mùa",
      "1 Món canh đậm vị",
      "Tráng miệng",
    ],
    images: ["/Set4Nguoi/Set4Nguoi1.jpg", "/Set4Nguoi/SetCom.png"],
  },
  {
    id: "set-gia-dinh",
    name: "Mâm Cơm Gia Đình (6-8 người)",
    description:
      "Lựa chọn hoàn hảo cho những buổi sum vầy đông đủ. Mâm cơm đầy đặn, đa dạng các món ăn đặc sắc nhất của Mạ, như một lời chúc phúc cho sự đoàn viên.",
    price: 899000,
    includes: [
      "Cơm niêu (6-8 người)",
      "3 Món mặn đặc sắc",
      "2 Món xào/luộc",
      "1 Món canh lớn",
      "Salad khai vị",
      "Trái cây theo mùa",
    ],
    images: [
      "/SetGiaDinh/setGiaDinh1.jpg",
      "/SetGiaDinh/GiaDinh2.jpg",
      "/SetGiaDinh/GiaDinh3.jpg",
      "/SetGiaDinh/GiaDinh4.jpg",
    ],
  },
  {
    id: "set-tu-chon",
    name: "Mâm Cơm Tự Chọn",
    description:
      "Tự tay xây dựng mâm cơm theo khẩu vị riêng của bạn và gia đình. Lựa chọn từ thực đơn các món ăn dân dã, đồng quê được chế biến bởi bếp của Mạ.",
    price: 0,
    includes: [
      "Cá kho tộ",
      "Thịt luộc mắm tôm",
      "Canh cua rau đay",
      "Rau muống xào tỏi",
      "Gà rang gừng",
      "Sườn xào chua ngọt",
      "Và nhiều món khác...",
    ],
    images: [
      "/SetTuChon/SetCom1.png",
      "/SetTuChon/SetCom2.png",
      "/SetTuChon/SetCom3.jpg",
      "/SetTuChon/SetCom4.jpg",
      "/SetTuChon/SetCom5.png",
    ],
  },
  {
    id: "set-chay",
    name: "Mâm Cơm Chay Thanh Tịnh",
    description:
      "Dành cho những ngày muốn thưởng thức ẩm thực nhẹ nhàng và thanh đạm. Mâm cơm chay được chế biến tinh tế từ các loại rau củ tươi ngon, giữ trọn vị ngọt tự nhiên.",
    price: 499000,
    includes: [
      "Cơm niêu (4 người)",
      "Đậu hũ non sốt nấm",
      "Rau củ thập cẩm xào",
      "Nấm kho tiêu xanh",
      "Canh rong biển",
      "Gỏi nấm",
    ],
    images: ["/ComChay/ComChay1.jpg"],
  },
];

export const Menu = () => {
  const formatPrice = (price: number) => {
    if (price === 0) {
      return "Giá theo món";
    }
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="py-20 bg-brand-brown/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-brown mb-6">
            Thực Đơn Của <span className="text-brand-orange">Mạ</span>
          </h1>
          <p className="text-xl text-brand-text/80 max-w-3xl mx-auto">
            Khám phá những mâm cơm được chuẩn bị bằng cả tâm huyết, gói trọn
            hương vị truyền thống Việt Nam trong từng món ăn.
          </p>
        </div>
      </section>

      {/* Menu Section - Bố cục mới cho các Set Cơm */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {setMenus.map((set, index) => (
            <div
              key={set.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Cột Hình ảnh */}
              <div
                className={`grid grid-cols-2 gap-4 ${
                  index % 2 !== 0 ? "lg:col-start-2" : ""
                }`}
              >
                {set.images.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    className={`rounded-lg overflow-hidden shadow-lg ${
                      imgIndex === 0 ? "col-span-2" : "col-span-1"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${set.name} image ${imgIndex + 1}`}
                      className="w-full h-full object-cover aspect-video"
                    />
                  </div>
                ))}
              </div>

              {/* Cột Thông tin */}
              <div className="flex flex-col justify-center">
                <h2 className="font-serif text-3xl font-bold text-brand-brown">
                  {set.name}
                </h2>
                <p className="mt-4 text-brand-text/80">{set.description}</p>

                <ul className="mt-6 space-y-2">
                  {set.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-4xl font-bold font-serif text-brand-orange">
                    {formatPrice(set.price)}
                  </span>
                  <Button
                    size="lg"
                    className="bg-brand-brown hover:bg-brand-brown/90 text-white font-bold"
                  >
                    Chọn Mâm Cơm Này
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-brand-brown mb-4">
            Sẵn Sàng Sum Vầy Bên Mâm Cơm Của Mạ?
          </h2>
          <p className="text-xl text-brand-text/80 mb-8">
            Hãy để Cơm Niêu Mạ Làm mang đến cho bạn và người thân những khoảnh
            khắc ấm cúng và đáng nhớ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold"
            >
              Đặt Bàn Ngay
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white"
            >
              Gọi Điện: (028) 3622 8899
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
