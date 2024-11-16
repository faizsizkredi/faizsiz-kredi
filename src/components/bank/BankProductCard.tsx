import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bank } from "@/types/bank";

interface BankProductCardProps {
  title: string;
  interestRate: string;
  minTerm: string;
  maxTerm: string;
  onClick: () => void;
}

const BankProductCard = ({
  title,
  interestRate,
  minTerm,
  maxTerm,
  onClick
}: BankProductCardProps) => {
  return (
    <Card className="bg-white">
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Faiz Oranı</span>
            <span className="font-semibold">%{interestRate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Min. Vade</span>
            <span className="font-semibold">{minTerm} ay</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Maks. Vade</span>
            <span className="font-semibold">{maxTerm} ay</span>
          </div>
        </div>
        <Button 
          onClick={onClick}
          className="w-full bg-green-500 hover:bg-green-600"
        >
          Detayları gör
        </Button>
      </CardContent>
    </Card>
  );
};

export default BankProductCard;