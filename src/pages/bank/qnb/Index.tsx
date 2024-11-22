import BankLoanAmounts from "@/components/bank/BankLoanAmounts";
import BankRatesTable from "@/components/bank/BankRatesTable";

const QNBIndex = () => {
  const rates = [
    {
      name: "QNB",
      productName: "İyi ki Tanışmışız Dedirten Kredi",
      interestRate: "0.00",
      minTerm: "1",
      maxTerm: "6"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <BankRatesTable rates={rates} />
      <BankLoanAmounts bankName="QNB" bankSlug="qnb" />
    </div>
  );
};

export default QNBIndex;