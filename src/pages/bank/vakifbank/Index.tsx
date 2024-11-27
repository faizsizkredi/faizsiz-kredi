import { Helmet } from "react-helmet";
import BankLoanAmounts from "@/components/bank/BankLoanAmounts";
import BankRatesTable from "@/components/bank/BankRatesTable";

const VakifbankIndex = () => {
  const currentYear = new Date().getFullYear();
  const pageTitle = `VakıfBank Kredi Başvurusu ${currentYear} | Güncel Faiz Oranları ve Kampanyalar`;
  const pageDescription = `VakıfBank kredi başvurusu yapın! ${currentYear} yılına özel güncel VakıfBank kredi faiz oranları, hesaplama araçları, kredi kampanyaları ve avantajlı başvuru seçenekleri. Hemen başvurun, anında sonuç alın.`;

  const rates = [
    {
      name: "Vakıfbank",
      productName: "İhtiyaç Kredisi Kampanyası",
      interestRate: "4.99",
      minTerm: "3",
      maxTerm: "12"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`VakıfBank, kredi, ihtiyaç kredisi, kredi başvurusu, kredi faiz oranları, ${currentYear}`} />
        <link rel="canonical" href="https://yourwebsite.com/bank/vakifbank" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>
      <BankRatesTable rates={rates} />
      <BankLoanAmounts bankName="Vakıfbank" bankSlug="vakifbank" />
    </div>
  );
};

export default VakifbankIndex;