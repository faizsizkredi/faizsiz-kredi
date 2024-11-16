import { Helmet } from "react-helmet";
import BankCard from "@/components/BankCard";
import { Bank } from "@/types/bank";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Building2, Landmark, CircleDollarSign, Wallet } from "lucide-react";

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
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{`${bankName} ${amount} TL Faizsiz Kredi Başvurusu 2024`}</title>
        <meta
          name="description"
          content={`${bankName} ${amount} TL faizsiz kredi başvurusu yapın! 2024 yılına özel ${amount} TL faizsiz kredi kampanyası, başvuru şartları ve detayları.`}
        />
        <link rel="canonical" href={`https://yourwebsite.com/bank/${bankName.toLowerCase().replace(/\s+/g, '-')}/${amount}-tl-faizsiz-kredi`} />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">{bankName} {amount} TL Faizsiz Kredisi</h1>
        
        <div className="mb-12">
          <BankCard {...currentBank} />
        </div>

        <h2 className="text-2xl font-bold mb-6">{amount} TL Faizsiz Kredi Veren Bankalar</h2>
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