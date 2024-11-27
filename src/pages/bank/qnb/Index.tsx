import { Building } from "lucide-react";
import { Helmet } from "react-helmet";
import BankLoanAmounts from "@/components/bank/BankLoanAmounts";
import BankRatesTable from "@/components/bank/BankRatesTable";

const QNBIndex = () => {
  const currentYear = new Date().getFullYear();
  const pageTitle = `Faizsiz Kredi Veren Bankalar ${currentYear}`;
  const pageDescription = `Türkiye'deki bankaların güncel faizsiz kredi kampanyalarını karşılaştırın, size en uygun krediye hemen başvurun. Tüm bankalar, güncel faiz oranları ve kampanya detayları tek sayfada!`;

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
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`QNB Finansbank, faizsiz kredi, sıfır faizli kredi, kredi başvurusu, yeni müşteri kredisi, ${currentYear}`} />
        <link rel="canonical" href="https://yourwebsite.com/bank/qnb" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{pageTitle}</h1>
        <p className="text-lg text-gray-600 mb-8">{pageDescription}</p>
        
        <BankRatesTable rates={rates} />
        <BankLoanAmounts bankName="QNB" bankSlug="qnb" />
      </div>
    </>
  );
};

export default QNBIndex;