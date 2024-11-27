import { Helmet } from "react-helmet";
import BankLoanAmounts from "@/components/bank/BankLoanAmounts";
import BankRatesTable from "@/components/bank/BankRatesTable";

const QNBIndex = () => {
  const currentYear = new Date().getFullYear();
  const pageTitle = `QNB Finansbank Kredi Başvurusu ${currentYear} | Güncel Faiz Oranları ve Kampanyalar`;
  const pageDescription = `QNB Finansbank kredi başvurusu yapın! ${currentYear} yılına özel güncel QNB kredi faiz oranları, hesaplama araçları, kredi kampanyaları ve avantajlı başvuru seçenekleri. Hemen başvurun, anında sonuç alın.`;

  const rates = [
    {
      name: "QNB",
      productName: "İyi ki Tanışmışız Dedirten Kredi",
      interestRate: "0.00",
      minTerm: "1",
      maxTerm: "6"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`QNB Finansbank, kredi, ihtiyaç kredisi, kredi başvurusu, kredi faiz oranları, ${currentYear}`} />
        <link rel="canonical" href="https://yourwebsite.com/bank/qnb" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>
      <BankRatesTable rates={rates} />
      <BankLoanAmounts bankName="QNB" bankSlug="qnb" />
    </div>
  );
};

export default QNBIndex;