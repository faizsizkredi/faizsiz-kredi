import { Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface LoanCardProps {
  bankName: string;
  loan: {
    amount: string;
    label: string;
    interestRate: string;
    term: string;
    processingTime: string;
    targetAudience: string;
    applicationCount: string;
    lastUpdate: string;
  };
  bankSlug: string;
}

const LoanCard = ({ bankName, loan, bankSlug }: LoanCardProps) => {
  console.log('LoanCard - bankSlug:', bankSlug);
  console.log('LoanCard - bankName:', bankName);
  console.log('LoanCard - loan amount:', loan.amount);

  const getCorrectPath = () => {
    // Ensure we're using the normalized slug for İş Bankası
    const normalizedSlug = bankSlug === 'turkiye-is-bankasi' ? 'isbankasi' : bankSlug;
    return `/bank/${normalizedSlug}/${loan.amount}-tl-faizsiz-kredi`;
  };

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">{bankName}</h3>
              <div className="flex items-center text-yellow-500">
                <span className="text-sm">4.5</span>
              </div>
            </div>
            <p className="text-lg font-medium">{loan.label} Faizsiz Kredi</p>
            <p className="text-sm text-gray-600">Son güncelleme: {loan.lastUpdate}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Badge variant="secondary" className="bg-blue-50 text-blue-600">
            BDDK Onaylı
          </Badge>
          <Link 
            to={getCorrectPath()}
            className="inline-flex"
          >
            <Button className="bg-primary hover:bg-primary/90">
              Hemen Başvur
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-6">
        <div>
          <p className="text-sm text-gray-600">Faiz Oranı</p>
          <p className="font-semibold">{loan.interestRate}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Vade</p>
          <p className="font-semibold">{loan.term}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Kredi Tutarı</p>
          <p className="font-semibold">{loan.label}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Aylık Taksit</p>
          <p className="font-semibold">Hesaplanıyor...</p>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>Onay Süresi: {loan.processingTime}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>Hedef Kitle: {loan.targetAudience}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>{loan.applicationCount} başvuru</span>
        </div>
      </div>
    </Card>
  );
};

export default LoanCard;