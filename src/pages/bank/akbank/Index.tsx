import { Building } from "lucide-react";
import BankLoanAmounts from "@/components/bank/BankLoanAmounts";
import BankRatesTable from "@/components/bank/BankRatesTable";

const AkbankIndex = () => {
  const rates = [
    {
      name: "Akbank",
      productName: "İhtiyaç Kredisi",
      interestRate: "4.00",
      minTerm: "1",
      maxTerm: "36"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <BankRatesTable rates={rates} />
      <BankLoanAmounts bankName="Akbank" bankSlug="akbank" />
    </div>
  );
};

export default AkbankIndex;