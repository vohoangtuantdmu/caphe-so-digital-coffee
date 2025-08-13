import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  popular?: boolean;
  hot?: boolean;
}

const menuItems: MenuItem[] = [
  // Cà phê phin
  {
    id: "1",
    name: "Cà Phê Phin Đen",
    description: "Cà phê đen truyền thống, đậm đà hương vị Việt Nam",
    price: 25000,
    category: "coffee-filter",
    popular: true
  },
  {
    id: "2",
    name: "Cà Phê Phin Sữa",
    description: "Cà phê phin kết hợp với sữa đặc, ngọt ngào đậm đà",
    price: 30000,
    category: "coffee-filter",
    popular: true
  },
  {
    id: "3",
    name: "Cà Phê Phin Sữa Đá",
    description: "Phiên bản lạnh của cà phê phin sữa, thanh mát",
    price: 32000,
    category: "coffee-filter"
  },
  
  // Cà phê máy
  {
    id: "4",
    name: "Espresso",
    description: "Shot cà phê đậm đặc, tinh túy của hương vị",
    price: 35000,
    category: "coffee-machine",
    hot: true
  },
  {
    id: "5",
    name: "Americano",
    description: "Espresso pha loãng với nước nóng, nhẹ nhàng",
    price: 40000,
    category: "coffee-machine"
  },
  {
    id: "6",
    name: "Cappuccino",
    description: "Espresso, sữa nóng và bọt sữa, cân bằng hoàn hảo",
    price: 45000,
    category: "coffee-machine",
    popular: true
  },
  {
    id: "7",
    name: "Latte",
    description: "Espresso với nhiều sữa nóng, mềm mại",
    price: 48000,
    category: "coffee-machine"
  },
  
  // Đồ uống khác
  {
    id: "8",
    name: "Trà Đào Cam Sả",
    description: "Trà thảo mộc thơm mát với đào, cam và sả",
    price: 35000,
    category: "tea"
  },
  {
    id: "9",
    name: "Trà Sữa Trân Châu",
    description: "Trà sữa đài loan với trân châu đen dai ngon",
    price: 42000,
    category: "tea",
    popular: true
  },
  {
    id: "10",
    name: "Sinh Tố Bơ",
    description: "Sinh tố bơ tươi, béo ngậy, bổ dưỡng",
    price: 45000,
    category: "smoothie"
  },
  
  // Bánh ngọt
  {
    id: "11",
    name: "Bánh Tiramisu",
    description: "Bánh tiramisu Ý authentic với cà phê espresso",
    price: 55000,
    category: "dessert",
    hot: true
  },
  {
    id: "12",
    name: "Bánh Croissant",
    description: "Bánh croissant bơ Pháp, giòn rụm thơm ngon",
    price: 35000,
    category: "dessert"
  },
  {
    id: "13",
    name: "Bánh Cheesecake",
    description: "Bánh phô mai mềm mịn với base bánh quy",
    price: 50000,
    category: "dessert"
  }
];

const categories = [
  { id: "all", name: "Tất Cả", count: menuItems.length },
  { id: "coffee-filter", name: "Cà Phê Phin", count: menuItems.filter(item => item.category === "coffee-filter").length },
  { id: "coffee-machine", name: "Cà Phê Máy", count: menuItems.filter(item => item.category === "coffee-machine").length },
  { id: "tea", name: "Trà & Đồ Uống", count: menuItems.filter(item => item.category === "tea").length },
  { id: "smoothie", name: "Sinh Tố", count: menuItems.filter(item => item.category === "smoothie").length },
  { id: "dessert", name: "Bánh Ngọt", count: menuItems.filter(item => item.category === "dessert").length }
];

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Thực Đơn <span className="text-primary">Cà Phê Số</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Khám phá menu đa dạng với những hương vị đặc biệt, 
            từ cà phê truyền thống đến các món đồ uống hiện đại
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-sm">
                  {category.name} ({category.count})
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-coffee transition-shadow duration-300">
                  {item.image ? (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-coffee flex items-center justify-center">
                      <span className="text-primary-foreground text-lg font-medium">
                        {item.name}
                      </span>
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <CardDescription className="mt-2">
                          {item.description}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col gap-1">
                        {item.popular && (
                          <Badge variant="default" className="text-xs">
                            Phổ biến
                          </Badge>
                        )}
                        {item.hot && (
                          <Badge variant="destructive" className="text-xs">
                            Hot
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        {formatPrice(item.price)}
                      </span>
                      <Button size="sm">
                        Thêm vào giỏ
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Tabs>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Không tìm thấy món nào trong danh mục này.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Sẵn Sàng Thưởng Thức?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ghé thăm Cà Phê Số ngay hôm nay để trải nghiệm những hương vị tuyệt vời này!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Đặt Bàn Ngay
            </Button>
            <Button size="lg" variant="outline">
              Gọi Điện: (028) 1234 5678
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};