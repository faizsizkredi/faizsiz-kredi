
import { Link } from "react-router-dom";

const SecondFooter = () => {
  const banks = [
    { name: "Akbank", path: "/bank/akbank" },
    { name: "QNB Finansbank", path: "/bank/qnb" },
    { name: "Denizbank", path: "/bank/denizbank" },
    { name: "VakıfBank", path: "/bank/vakifbank" }
  ];

  const loanTypes = [
    { name: "İhtiyaç Kredisi", path: "/ihtiyac-kredisi" },
    { name: "Konut Kredisi", path: "/konut-kredisi" },
    { name: "Taşıt Kredisi", path: "/tasit-kredisi" },
    { name: "KOBİ Kredisi", path: "/kobi-kredisi" }
  ];

  const specialPages = [
    { name: "Tavsiye Edilenler", path: "/recommended" },
    { name: "Kampanyalı Krediler", path: "/promotion" },
    { name: "Kolay Krediler", path: "/easiest" },
    { name: "Faizsiz Krediler", path: "/zeroInterest" },
    { name: "Yeni Müşteri", path: "/newCustomer" },
    { name: "Emekli", path: "/retired" }
  ];

  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Bankalar</h3>
            <ul className="space-y-2">
              {banks.map((bank) => (
                <li key={bank.path}>
                  <Link to={bank.path} className="text-gray-600 hover:text-primary">
                    {bank.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Kredi Türleri</h3>
            <ul className="space-y-2">
              {loanTypes.map((loan) => (
                <li key={loan.path}>
                  <Link to={loan.path} className="text-gray-600 hover:text-primary">
                    {loan.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Özel Sayfalar</h3>
            <ul className="space-y-2">
              {specialPages.map((page) => (
                <li key={page.path}>
                  <Link to={page.path} className="text-gray-600 hover:text-primary">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Diğer Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/kredi-faiz-hesaplama" className="text-gray-600 hover:text-primary">
                  Kredi Faiz Hesaplama
                </Link>
              </li>
              <li>
                <Link to="/mevduat" className="text-gray-600 hover:text-primary">
                  Mevduat
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SecondFooter;
