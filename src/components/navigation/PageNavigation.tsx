
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const PageNavigation = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Türkçe sayfa isimleri için mapping
  const pageNames: { [key: string]: string } = {
    "bank": "Bankalar",
    "akbank": "Akbank",
    "blog": "Blog",
    "mevduat": "Mevduat",
    "banks": "Banka Listesi",
    "ihtiyac-kredisi": "İhtiyaç Kredisi",
    "konut-kredisi": "Konut Kredisi",
    "tasit-kredisi": "Taşıt Kredisi",
    "kobi-kredisi": "KOBİ Kredisi",
    "kredi-faiz-hesaplama": "Kredi Faiz Hesaplama",
  };

  return (
    <nav className="bg-gray-50 py-3 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center text-sm">
          <Link to="/" className="text-gray-600 hover:text-primary">
            Ana Sayfa
          </Link>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const displayName = pageNames[name] || name;
            
            return (
              <div key={name} className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                {index === pathnames.length - 1 ? (
                  <span className="text-gray-900 font-medium">{displayName}</span>
                ) : (
                  <Link to={routeTo} className="text-gray-600 hover:text-primary">
                    {displayName}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default PageNavigation;
