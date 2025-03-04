
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import BankCardRating from "@/components/bank/BankCardRating";
import BankCardTrustBadges from "@/components/bank/BankCardTrustBadges";

const BankLoanRating = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <h2 className="text-xl font-bold">Banka Değerlendirmesi</h2>
      </CardHeader>
      <CardContent>
        <BankCardRating rating={4.7} reviewCount={328} />
        <BankCardTrustBadges />
      </CardContent>
    </Card>
  );
};

export default BankLoanRating;
