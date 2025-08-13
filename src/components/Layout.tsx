import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- Thay đổi: Đã xóa mục "Liên Hệ" ---
  const navigation = [
    { name: "Trang Chủ", href: "/" },
    { name: "Giới Thiệu", href: "/gioi-thieu" },
    { name: "Thực Đơn", href: "/thuc-don" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <UtensilsCrossed className="h-7 w-7 text-brand-brown" />
                <span className="text-xl font-serif font-bold text-brand-brown">
                  Cơm Niêu Mạ Làm
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-brand-text/80 hover:text-brand-brown hover:bg-brand-cream transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pl-4">
                <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold">
                  Đặt Bàn Ngay
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 px-3">
                <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-bold">
                  Đặt Bàn Ngay
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-white border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <UtensilsCrossed className="h-7 w-7 text-brand-brown" />
                <span className="text-xl font-serif font-bold text-brand-brown">
                  Cơm Niêu Mạ Làm
                </span>
              </div>
              <p className="text-brand-text/80">
                Gói trọn tinh hoa ẩm thực Việt, mang đến những bữa cơm ấm áp
                hương vị quê nhà.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-brown mb-4">
                Thông Tin Liên Hệ
              </h3>
              <div className="space-y-2 text-brand-text/80">
                <p>
                  Địa chỉ: 2 Trương Gia Mô, P. Cát Lái, TP. Thủ Đức, TP. HCM
                </p>
                <p>Điện thoại: (0335) 734 979</p>
                <p>Email: comnieumalam@gmail.com</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-brand-brown mb-4">
                Giờ Mở Cửa
              </h3>
              <div className="space-y-2 text-brand-text/80">
                <p>Tất cả các ngày trong tuần</p>
                <p>10:00 - 22:30</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50 text-center text-brand-text/60">
            <p>&copy; 2025 Cơm Niêu Mạ Làm.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
