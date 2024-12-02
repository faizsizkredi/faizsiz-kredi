import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Building, Home, Car, Store, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BankLoanAmounts from "@/components/bank/BankLoanAmounts";

const BankDetail = () => {
  const { bankSlug } = useParams();
  
  const bankName = bankSlug?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  const currentYear = new Date().getFullYear();
  const pageTitle = `${bankName} Kredi Kampanyaları ve Başvuru ${currentYear}`;
  const pageDescription = `${bankName} bankanın en güncel kredi kampanyaları, avantajlı faiz oranları ve özel fırsatları. Tüm kredi seçeneklerini karşılaştırın, size en uygun krediye hemen başvurun.${currentYear} yılına özel kampanyalar ve fırsatlar için acele edin!`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{pageTitle}</h1>
        <p className="text-lg text-gray-600 mb-8">{pageDescription}</p>

        <BankLoanAmounts bankName={bankName || ""} bankSlug={bankSlug || ""} />
      </div>
    </div>
  );
};

export default BankDetail;