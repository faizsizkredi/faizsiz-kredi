import { Building } from "lucide-react";
import BankLoanAmountDetail from "@/components/bank/BankLoanAmountDetail";
import { Bank } from "@/types/bank";

const CURRENT_BANK: Bank = {
  name: "Akbank",
  icon: <Building className="w-8 h-8 text-red-600" />,
  specialOffer: "7.500 TL Faizsiz Kredi!",
  interestRate: "%0",
  term: "6 Ay",
  amount: "7.500 TL",
  details: [
    "Yeni müşterilere özel fırsat",
    "6 ay vade ile faizsiz kredi",
    "Masrafsız kullandırım"
  ],
  lastUpdate: new Date().toLocaleDateString('tr-TR')
};

const OTHER_BANKS: Bank[] = [
  {
    name: "QNB",
    icon: <Building className="w-8 h-8 text-purple-600" />,
    specialOffer: "7.500 TL Faizsiz Kredi",
    interestRate: "%0",
    term: "6 Ay",
    amount: "7.500 TL",
    details: [
      "%0 faiz ile 6 ay vade",
      "Masrafsız kullandırım",
      "Anında başvuru sonucu"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  }
];

const SevenThousandFiveHundredLoan = () => {
  return (
    <BankLoanAmountDetail
      bankName="Akbank"
      amount="7.500"
      currentBank={CURRENT_BANK}
      otherBanks={OTHER_BANKS}
    />
  );
};

export default SevenThousandFiveHundredLoan;