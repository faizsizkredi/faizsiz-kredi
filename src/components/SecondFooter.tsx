
import { Link } from "react-router-dom";
import { BANK_DATA } from "@/data/bankData";

const SecondFooter = () => {
  const banks = BANK_DATA.map(bank => ({
    name: bank.name,
    path: `/bank/${bank.name.toLowerCase().replace(/\s+/g, '').replace(/[^a-z]/g, '')}`
  }));

  const loanTypes = [
    { name: "İhtiyaç Kredisi", path: "/ihtiyac-kredisi" },
    { name: "Konut Kredisi", path: "/konut-kredisi" },
    { name: "Taşıt Kredisi", path: "/tasit-kredisi" },
    { name: "KOBİ Kredisi", path: "/kobi-kredisi" }
  ];

  const loanAmounts = [
    { name: "5.000 TL Kredi", path: "/bank/akbank/five-thousand-loan" },
    { name: "7.500 TL Kredi", path: "/bank/akbank/seven-thousand-five-hundred-loan" },
    { name: "10.000 TL Kredi", path: "/bank/akbank/ten-thousand-loan" },
    { name: "15.000 TL Kredi", path: "/bank/akbank/fifteen-thousand-loan" },
    { name: "20.000 TL Kredi", path: "/bank/akbank/twenty-thousand-loan" },
    { name: "25.000 TL Kredi", path: "/bank/akbank/twenty-five-thousand-loan" },
    { name: "50.000 TL Kredi", path: "/bank/akbank/fifty-thousand-loan" },
    { name: "100.000 TL Kredi", path: "/bank/akbank/hundred-thousand-loan" }
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

