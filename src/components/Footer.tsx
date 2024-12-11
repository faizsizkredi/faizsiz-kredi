import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Faizsiz Kredi</h3>
            <p className="text-sm text-gray-600">
              Türkiye'nin en kapsamlı faizsiz kredi karşılaştırma platformu.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-primary">
                  Giriş Yap
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-gray-600 hover:text-primary">
                  Üye Ol
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">İletişim</h3>
            <p className="text-sm text-gray-600">
              Email: info@faizsizkredi.com
              <br />
              Tel: +90 (212) 123 45 67
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Faizsiz Kredi. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;