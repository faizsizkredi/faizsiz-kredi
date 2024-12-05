import { Building } from "lucide-react";
import BankLoanTemplate from "@/components/bank/BankLoanTemplate";
import { Bank } from "@/types/bank";

const OTHER_BANKS: Bank[] = [
  {
    name: "QNB",
    icon: <Building className="w-8 h-8 text-purple-600" />,
    specialOffer: "15.000 TL Faizsiz Kredi",
    interestRate: "%0",
    term: "6 Ay",
    amount: "15.000 TL",
    details: [
      "%0 faiz ile 6 ay vade",
      "Masrafsız kullandırım",
      "Anında başvuru sonucu"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  }
];

const FifteenThousandLoan = () => {
  return (
    <BankLoanTemplate
      bankName="İş Bankası"
      amount="15.000"
      iconColor="text-blue-700"
      otherBanks={OTHER_BANKS}
    />
  );
};

export default FifteenThousandLoan;