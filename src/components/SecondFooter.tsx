
import { Link } from "react-router-dom";
import { BANK_DATA } from "@/data/bankData";

const SecondFooter = () => {
  const getBankSlug = (bankName: string) => {
    return bankName
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/ı/g, 'i')
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/İ/g, 'i')
      .replace(/Ğ/g, 'g')
      .replace(/Ü/g, 'u')
      .replace(/Ş/g, 's')
      .replace(/Ö/g, 'o')
      .replace(/Ç/g, 'c')
      .replace(/[^a-z0-9-]/g, '');
  };

  const banks = BANK_DATA.map(bank => ({
    name: bank.name,
    path: `/bank/${getBankSlug(bank.name)}`
  }));

  const loanTypes = [
    { name: "İhtiyaç Kredisi", path: "/ihtiyac-kredisi" },
    { name: "Konut Kredisi", path: "/konut-kredisi" },
    { name: "Taşıt Kredisi", path: "/tasit-kredisi" },
    { name: "KOBİ Kredisi", path: "/kobi-kredisi" }
  ];

  const loanAmounts = [
    { name: "5.000 TL Kredi", path: "/bank/akbank/5000-tl-faizsiz-kredi" },
    { name: "7.500 TL Kredi", path: "/bank/akbank/7500-tl-faizsiz-kredi" },
    { name: "10.000 TL Kredi", path: "/bank/akbank/10000-tl-faizsiz-kredi" },
    { name: "15.000 TL Kredi", path: "/bank/akbank/15000-tl-faizsiz-kredi" },
    { name: "20.000 TL Kredi", path: "/bank/akbank/20000-tl-faizsiz-kredi" },
    { name: "25.000 TL Kredi", path: "/bank/akbank/25000-tl-faizsiz-kredi" },
    { name: "50.000 TL Kredi", path: "/bank/akbank/50000-tl-faizsiz-kredi" },
    { name: "100.000 TL Kredi", path: "/bank/akbank/100000-tl-faizsiz-kredi" }
  ];

  const utilityPages = [
    { name: "Kredi Faiz Hesaplama", path: "/kredi-faiz-hesaplama" },
    { name: "Mevduat", path: "/mevduat" },
    { name: "Blog", path: "/blog" },
    { name: "Banka Listesi", path: "/banks" }
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
            <h3 className="font-semibold text-lg mb-4">Kredi Tutarları</h3>
            <ul className="space-y-2">
              {loanAmounts.map((amount) => (
                <li key={amount.path}>
                  <Link to={amount.path} className="text-gray-600 hover:text-primary">
                    {amount.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Faydalı Sayfalar</h3>
            <ul className="space-y-2">
              {utilityPages.map((page) => (
                <li key={page.path}>
                  <Link to={page.path} className="text-gray-600 hover:text-primary">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SecondFooter;
