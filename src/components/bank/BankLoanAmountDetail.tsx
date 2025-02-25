import { Helmet } from "react-helmet";
import BankCard from "@/components/BankCard";
import { Bank } from "@/types/bank";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Building2, Landmark, CircleDollarSign, Wallet } from "lucide-react";
import { getBankPageUrls } from "@/utils/canonicalUrls";

interface BankLoanAmountDetailProps {
  bankName: string;
  amount: string;
  currentBank: Bank;
  otherBanks: Bank[];
}

const BankLoanAmountDetail = ({
  bankName,
  amount,
  currentBank,
  otherBanks
}: BankLoanAmountDetailProps) => {
  const currentYear = new Date().getFullYear();
  const pageTitle = `${bankName} ${amount} TL Kredi Başvurusu ${currentYear} | Güncel Faiz Oranları`;
  const pageDescription = `${bankName} ${amount} TL kredi başvurusu yapın! ${currentYear} yılına özel ${amount} TL kredi kampanyası, hesaplama araçları, başvuru şartları ve detayları. Hemen başvurun, anında sonuç alın.`;
  
  const bankSlug = bankName.toLowerCase().replace(/\s+/g, '-');
  const { canonical, homepage } = getBankPageUrls(bankSlug, amount);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`${bankName}, ${amount} TL kredi, ihtiyaç kredisi, kredi başvurusu, kredi faiz oranları, ${currentYear}`} />
        
        <link rel="canonical" href={canonical} />
        <link rel="alternate" href={homepage} hrefLang="tr" />
        
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">{bankName} {amount} TL Kredisi</h1>
        
        <div className="mb-12">
          <BankCard {...currentBank} />
        </div>

        <h2 className="text-2xl font-bold mb-6">{amount} TL Kredi Veren Bankalar</h2>
        <div className="space-y-4">
          {otherBanks.map((bank, index) => (
            <BankCard key={index} {...bank} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BankLoanAmountDetail;
