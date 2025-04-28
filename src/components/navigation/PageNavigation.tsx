
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const PageNavigation = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(x => x);
  
  // Skip rendering on homepage
  if (pathnames.length === 0) {
    return null;
  }

  // Türkçe sayfa isimleri için mapping
  const pageNames: {
    [key: string]: string;
  } = {
    "bank": "Bankalar",
    "akbank": "Akbank",
    "garanti": "Garanti BBVA",
    "qnb": "QNB Finansbank",
    "enpara": "Enpara",
    "vakifbank": "VakıfBank",
    "ziraat": "Ziraat Bankası",
    "blog": "Blog",
    "mevduat": "Mevduat",
    "banks": "Banka Listesi",
    "ihtiyac-kredisi": "İhtiyaç Kredisi",
    "konut-kredisi": "Konut Kredisi",
    "tasit-kredisi": "Taşıt Kredisi",
    "kobi-kredisi": "KOBİ Kredisi",
    "kredi-faiz-hesaplama": "Kredi Faiz Hesaplama",
    "en-kolay-kredi": "En Kolay Kredi",
    "en-uygun-kredi": "En Uygun Kredi",
    "riskli-musteriye-kredi": "Riskli Müşteriye Kredi",
    "sifir-faizli-kredi": "Sıfır Faizli Kredi",
    "yeni-musteriye-kredi": "Yeni Müşteriye Kredi",
    "emekliye-faizsiz-kredi": "Emekliye Faizsiz Kredi"
  };

  return (
    <nav className="bg-white border-b border-gray-200 py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center text-sm text-gray-600">
          <Link to="/" className="hover:text-blue-600">Ana Sayfa</Link>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const displayName = pageNames[name] || name;
            
            return (
              <div key={name} className="flex items-center">
                <ChevronRight className="h-4 w-4 mx-1" />
                {isLast ? (
                  <span className="font-medium">{displayName}</span>
                ) : (
                  <Link to={routeTo} className="hover:text-blue-600">
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
