import { Building } from "lucide-react";
import BankLoanTemplate from "@/components/bank/BankLoanTemplate";
import { Bank } from "@/types/bank";

const OTHER_BANKS: Bank[] = [
  {
    name: "QNB",
    icon: <Building className="w-8 h-8 text-purple-600" />,
    specialOffer: "5.000 TL Faizsiz Kredi",
    interestRate: "%0",
    term: "6 Ay",
    amount: "5.000 TL",
    details: [
      "%0 faiz ile 6 ay vade",
      "Masrafsız kullandırım",
      "Anında başvuru sonucu"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Ziraat Bankası",
    icon: <Building className="w-8 h-8 text-green-600" />,
    specialOffer: "5.000 TL Faizsiz Kredi",
    interestRate: "%0",
    term: "6 Ay",
    amount: "5.000 TL",
    details: [
      "6 ay vade ile faizsiz kredi",
      "Masrafsız bankacılık",
      "Online başvuru imkanı"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  }
];

const FiveThousandLoan = () => {
  return (
    <BankLoanTemplate
      bankName="VakıfBank"
      amount="5.000"
      iconColor="text-blue-600"
      otherBanks={OTHER_BANKS}
    />
  );
};

export default FiveThousandLoan;