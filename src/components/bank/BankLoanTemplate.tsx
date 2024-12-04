import { Building } from "lucide-react";
import BankLoanAmountDetail from "@/components/bank/BankLoanAmountDetail";
import { Bank } from "@/types/bank";

interface BankLoanTemplateProps {
  bankName: string;
  amount: string;
  iconColor: string;
  otherBanks: Bank[];
}

const BankLoanTemplate = ({ bankName, amount, iconColor, otherBanks }: BankLoanTemplateProps) => {
  const CURRENT_BANK: Bank = {
    name: bankName,
    icon: <Building className={`w-8 h-8 ${iconColor}`} />,
    specialOffer: `${amount} TL Faizsiz Kredi!`,
    interestRate: "%0",
    term: "6 Ay",
    amount: `${amount} TL`,
    details: [
      "Yeni müşterilere özel fırsat",
      "6 ay vade ile faizsiz kredi",
      "Masrafsız kullandırım"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  };

  return (
    <BankLoanAmountDetail
      bankName={bankName}
      amount={amount}
      currentBank={CURRENT_BANK}
      otherBanks={otherBanks}
    />
  );
};

export default BankLoanTemplate;