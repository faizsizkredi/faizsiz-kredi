import BankLoanAmounts from "@/components/bank/BankLoanAmounts";
import BankRatesTable from "@/components/bank/BankRatesTable";

const VakifbankIndex = () => {
  const rates = [
    {
      name: "Vakıfbank",
      productName: "İhtiyaç Kredisi Kampanyası",
      interestRate: "4.99",
      minTerm: "3",
      maxTerm: "12"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <BankRatesTable rates={rates} />
      <BankLoanAmounts bankName="Vakıfbank" bankSlug="vakifbank" />
    </div>
  );
};

export default VakifbankIndex;