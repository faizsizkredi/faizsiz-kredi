
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bank } from "@/types/bank";
import { useNavigate } from "react-router-dom";

interface BankProductCardProps {
  title?: string;
  interestRate?: string;
  minTerm?: string;
  maxTerm?: string;
  bankSlug?: string;
  onClick?: () => void;
  bank?: Bank; // Add bank prop
}

const BankProductCard = ({
  title,
  interestRate,
  minTerm,
  maxTerm,
  bankSlug,
  onClick,
  bank
}: BankProductCardProps) => {
  const navigate = useNavigate();
  
  // If bank prop is provided, use its values
  const displayTitle = bank?.name || title || "";
  const displayInterestRate = bank?.interestRate || interestRate || "";
  const displayMinTerm = minTerm || "3";
  const displayMaxTerm = maxTerm || bank?.term || "36";
  const displayBankSlug = bankSlug || (bank?.name ? bank.name.toLowerCase().replace(/\s+/g, '-') : "");
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (bank) {
      // Default click handler when bank is provided
      navigate(`/banka/${displayBankSlug}`);
    }
  };

  const loanAmounts = [
    { amount: "5.000", label: "5.000 TL Faizsiz" },
    { amount: "7.500", label: "7.500 TL Faizsiz" },
    { amount: "10.000", label: "10.000 TL Faizsiz" },
    { amount: "20.000", label: "20.000 TL Faizsiz" },
    { amount: "25.000", label: "25.000 TL Faizsiz" },
    { amount: "50.000", label: "50.000 TL Faizsiz" },
    { amount: "100.000", label: "100.000 TL Faizsiz" }
  ];

  return (
    <Card className="bg-white">
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">{displayTitle}</h3>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Faiz Oranı</span>
            <span className="font-semibold">%{displayInterestRate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Min. Vade</span>
            <span className="font-semibold">{displayMinTerm} ay</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Maks. Vade</span>
            <span className="font-semibold">{displayMaxTerm} ay</span>
          </div>
        </div>
        <div className="space-y-2">
          <Button 
            onClick={handleClick}
            className="w-full bg-green-500 hover:bg-green-600 mb-4"
          >
            Detayları gör
          </Button>
          <div className="grid grid-cols-1 gap-2">
            {loanAmounts.map((loan) => (
              <Button
                key={loan.amount}
                variant="outline"
                className="w-full text-sm"
                onClick={() => navigate(`/bank/${displayBankSlug}/${loan.amount.replace(/\./g, '')}-tl-faizsiz-kredi`)}
              >
                {loan.label}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BankProductCard;
