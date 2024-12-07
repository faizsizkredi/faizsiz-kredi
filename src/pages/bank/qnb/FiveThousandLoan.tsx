import { Building } from "lucide-react";
import BankLoanTemplate from "@/components/bank/BankLoanTemplate";
import { Bank } from "@/types/bank";

const OTHER_BANKS: Bank[] = [
  {
    name: "CEPTETEB",
    icon: <Building className="w-8 h-8 text-green-600" />,
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
    name: "Enpara",
    icon: <Building className="w-8 h-8 text-blue-600" />,
    specialOffer: "Yeni Müşteri Kredisi",
    interestRate: "%0",
    term: "3 Ay",
    amount: "5.000 TL",
    details: [
      "3 ay vade ile faizsiz kredi",
      "Masrafsız bankacılık",
      "Online başvuru imkanı"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  }
];

const FiveThousandLoan = () => {
  return (
    <BankLoanTemplate
      bankName="QNB"
      amount="5.000"
      iconColor="text-purple-600"
      otherBanks={OTHER_BANKS}
    />
  );
};

export default FiveThousandLoan;