import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface BankLoanAmountsProps {
  bankName: string;
  bankSlug: string;
}

const LOAN_AMOUNTS = [
  { amount: "5000", label: "5.000 TL" },
  { amount: "7500", label: "7.500 TL" },
  { amount: "10000", label: "10.000 TL" },
  { amount: "15000", label: "15.000 TL" },
  { amount: "20000", label: "20.000 TL" },
  { amount: "25000", label: "25.000 TL" },
  { amount: "50000", label: "50.000 TL" },
  { amount: "100000", label: "100.000 TL" }
];

const BankLoanAmounts = ({ bankName, bankSlug }: BankLoanAmountsProps) => {
  console.log("Rendering BankLoanAmounts for:", bankName, bankSlug);
  
  return (
    <Card className="mt-8">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">İlgili Aramalar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {LOAN_AMOUNTS.map((loan) => (
            <Link
              key={loan.amount}
              to={`/bank/${bankSlug}/${loan.amount}-tl-faizsiz-kredi`}
              className="text-blue-600 hover:underline"
            >
              {bankName} {loan.label} faizsiz kredi
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BankLoanAmounts;