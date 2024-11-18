import { Helmet } from "react-helmet";
import BankLoanAmountDetail from "@/components/bank/BankLoanAmountDetail";
import { Bank } from "@/types/bank";
import { Building, Building2, Landmark } from "lucide-react";

interface LoanAmountPageProps {
  bankName: string;
  amount: string;
  bankSlug: string;
}

const LoanAmountPage = ({ bankName, amount, bankSlug }: LoanAmountPageProps) => {
  console.log(`Rendering ${bankName} ${amount} TL loan page`);

  const currentBank: Bank = {
    name: bankName,
    icon: <Building2 className="w-8 h-8" />,
    specialOffer: `${amount} TL Faizsiz Kredi`,
    interestRate: "0%",
    term: "36 Ay",
    amount: `${amount} TL`,
    details: [
      "Hızlı başvuru imkanı",
      "Masrafsız kullanım",
      "Anında sonuç"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  };

  const otherBanks: Bank[] = [
    // Add other bank offers here
  ];

  return <BankLoanAmountDetail 
    bankName={bankName}
    amount={amount}
    currentBank={currentBank}
    otherBanks={otherBanks}
  />;
};

export default LoanAmountPage;