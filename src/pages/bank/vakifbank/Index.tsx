import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BankLoanAmounts from "@/components/bank/BankLoanAmounts";

const VakifbankIndex = () => {
  const currentYear = new Date().getFullYear();
  const bankName = "VakıfBank";
  const bankSlug = "vakifbank";

  const pageTitle = `${bankName} Faizsiz Kredi Başvurusu - ${currentYear}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={`${bankName} bankanın en güncel kredi kampanyaları, avantajlı faiz oranları ve özel fırsatları. Tüm kredi seçeneklerini karşılaştırın, size en uygun krediye hemen başvurun.${currentYear} yılına özel kampanyalar ve fırsatlar için acele edin!`} />
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

export default VakifbankIndex;