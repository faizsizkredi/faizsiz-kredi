import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
const PageNavigation = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(x => x);

  // Türkçe sayfa isimleri için mapping
  const pageNames: {
    [key: string]: string;
  } = {
    "bank": "Bankalar",
    "akbank": "Akbank",
    "blog": "Blog",
    "mevduat": "Mevduat",
    "banks": "Banka Listesi",
    "ihtiyac-kredisi": "İhtiyaç Kredisi",
    "konut-kredisi": "Konut Kredisi",
    "tasit-kredisi": "Taşıt Kredisi",
    "kobi-kredisi": "KOBİ Kredisi",
    "kredi-faiz-hesaplama": "Kredi Faiz Hesaplama"
  };
  return;
};
export default PageNavigation;