import { Helmet } from "react-helmet";
import BankLoanAmounts from "@/components/bank/BankLoanAmounts";

const DenizbankIndex = () => {
  const currentYear = new Date().getFullYear();
  const bankName = "Denizbank";
  const bankSlug = "denizbank";
  const pageTitle = `${bankName} Faizsiz Kredi Başvurusu - ${currentYear}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content={`${bankName} bankanın en güncel kredi kampanyaları, avantajlı faiz oranları ve özel fırsatları. Tüm kredi seçeneklerini karşılaştırın, size en uygun krediye hemen başvurun.${currentYear} yılına özel kampanyalar ve fırsatlar için acele edin!`}
        />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{pageTitle}</h1>
        <BankLoanAmounts bankName={bankName} bankSlug={bankSlug} />
      </div>
    </div>
  );
};

export default DenizbankIndex;