import { Clock, Users, ThumbsUp } from "lucide-react";

interface BankCardStatsProps {
  interestRate: string;
  term: string;
  amount: string;
  monthlyPayment?: string;
  processingTime?: string;
  targetAudience?: string;
  applicationCount?: string;
}

const BankCardStats = ({
  interestRate,
  term,
  amount,
  monthlyPayment = "Hesaplanıyor...",
  processingTime = "30 dakika",
  targetAudience = "Tüm müşteriler",
  applicationCount = "1000+"
}: BankCardStatsProps) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div>
          <p className="text-sm text-gray-600">Faiz Oranı</p>
          <p className="font-semibold" itemProp="interestRate">{interestRate}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Vade</p>
          <p className="font-semibold" itemProp="term">{term}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Kredi Tutarı</p>
          <p className="font-semibold" itemProp="amount">{amount}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Aylık Taksit</p>
          <p className="font-semibold">{monthlyPayment}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>Onay Süresi: {processingTime}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>Hedef Kitle: {targetAudience}</span>
        </div>
        <div className="flex items-center gap-1">
          <ThumbsUp className="w-4 h-4" />
          <span>{applicationCount} başvuru</span>
        </div>
      </div>
    </div>
  );
};

export default BankCardStats;