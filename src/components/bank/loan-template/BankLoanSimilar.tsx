
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import BankProductCard from "@/components/bank/BankProductCard";
import { Bank } from "@/types/bank";

interface BankLoanSimilarProps {
  otherBanks: Bank[];
}

const BankLoanSimilar = ({ otherBanks }: BankLoanSimilarProps) => {
  if (otherBanks.length === 0) return null;
  
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold">Benzer Faizsiz Krediler</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {otherBanks.map((bank, index) => (
            <BankProductCard key={index} bank={bank} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BankLoanSimilar;
