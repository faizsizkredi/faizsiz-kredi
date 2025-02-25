
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, ChevronRight } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  const popularLinks = [
    { text: "Konut Kredisi Hesaplama", href: "/konut-kredisi-hesaplama" },
    { text: "İhtiyaç Kredisi Hesaplama", href: "/ihtiyac-kredisi-hesaplama" },
    { text: "Taşıt Kredisi Hesaplama", href: "/tasit-kredisi-hesaplama" },
    { text: "Kredi Kartı Başvurusu", href: "/kredi-karti-basvurusu" },
  ];

  const helpLinks = [
    { text: "Kredi Notu Öğrenme", href: "/kredi-notu" },
    { text: "Sıkça Sorulan Sorular", href: "/sss" },
    { text: "Kullanım Koşulları", href: "/kullanim-kosullari" },
    { text: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* Üst Kısım */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Hakkımızda */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Faizsiz Kredi</h3>
            <p className="text-sm leading-relaxed mb-4">
              Türkiye'nin en kapsamlı faizsiz kredi karşılaştırma platformu. En uygun kredi seçeneklerini sizin için bir araya getiriyoruz.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Popüler Hesaplamalar */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Popüler Hesaplamalar</h3>
            <ul className="space-y-2">
              {popularLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Yardım & Destek */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Yardım & Destek</h3>
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3" />
                <span>+90 (212) 123 45 67</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3" />
                <a href="mailto:info@faizsizkredi.com" className="hover:text-white transition-colors">
                  info@faizsizkredi.com
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 mr-3 mt-1" />
                <span>
                  Levent Mah. Büyükdere Cad. No:123<br />
                  Şişli, İstanbul 34394
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Faizsiz Kredi. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6">
              <Link to="/kvkk" className="text-sm text-gray-400 hover:text-white transition-colors">
                KVKK Aydınlatma Metni
              </Link>
              <Link to="/cerez-politikasi" className="text-sm text-gray-400 hover:text-white transition-colors">
                Çerez Politikası
              </Link>
              <Link to="/iletisim" className="text-sm text-gray-400 hover:text-white transition-colors">
                İletişim
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
