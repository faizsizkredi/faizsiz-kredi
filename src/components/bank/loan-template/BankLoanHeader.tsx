
import { Building } from "lucide-react";
import { getCurrentMonthYear } from "@/utils/dateUtils";

interface BankLoanHeaderProps {
  bankName: string;
  amount: string;
  iconColor: string;
}

const BankLoanHeader = ({ bankName, amount, iconColor }: BankLoanHeaderProps) => {
  const currentDate = getCurrentMonthYear();
  
  return (
    <header className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <Building className={`w-8 h-8 ${iconColor}`} />
        <h1 className="text-3xl font-bold">{bankName} {amount} TL Faizsiz Kredi</h1>
      </div>
      <p className="text-gray-600 max-w-3xl">
        {bankName} bankasından {amount} TL faizsiz kredi fırsatı! %0 faiz oranı ile {amount} TL kredi kullanma imkanı. 
        {currentDate} ayına özel kampanya ile hemen başvurun, anında sonuç alın.
      </p>
    </header>
  );
};

export default BankLoanHeader;
