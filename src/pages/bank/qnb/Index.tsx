import { Helmet } from "react-helmet";
import { Building } from "lucide-react";
import BankLoanAmounts from "@/components/bank/BankLoanAmounts";

const QNBIndex = () => {
  const currentYear = new Date().getFullYear();
  const bankName = "QNB";
  const bankSlug = "qnb";

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{bankName} Kredi Başvurusu {currentYear} | Güncel Faiz Oranları</title>
        <meta name="description" content={`${bankName} kredi başvurusu yapın! ${currentYear} yılına özel güncel faiz oranları ve kredi kampanyaları.`} />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        {/* SEO Title and Description */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {bankName} Kredi Kampanyaları ve Başvuru {currentYear}
          </h2>
          <p className="text-lg text-gray-600">
            {bankName} bankanın en güncel kredi kampanyaları, avantajlı faiz oranları ve özel fırsatları. 
            Tüm kredi seçeneklerini karşılaştırın, size en uygun krediye hemen başvurun. 
            {currentYear} yılına özel kampanyalar ve fırsatlar için acele edin!
          </p>
        </div>

        <BankLoanAmounts bankName={bankName} bankSlug={bankSlug} />
      </div>
    </div>
  );
};

export default QNBIndex;