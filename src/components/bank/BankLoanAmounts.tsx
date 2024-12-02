import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BankLoanAmountsProps {
  bankName: string;
  bankSlug: string;
}

const LOAN_AMOUNTS = [
  { 
    amount: "5000",
    label: "5.000 TL",
    interestRate: "%0",
    term: "6 Ay",
    processingTime: "30 dakika",
    targetAudience: "Tüm müşteriler",
    applicationCount: "1000+",
    lastUpdate: "03.12.2024"
  },
  { 
    amount: "7500",
    label: "7.500 TL",
    interestRate: "%0",
    term: "6 Ay",
    processingTime: "30 dakika",
    targetAudience: "Tüm müşteriler",
    applicationCount: "1000+",
    lastUpdate: "03.12.2024"
  },
  { 
    amount: "10000",
    label: "10.000 TL",
    interestRate: "%0",
    term: "6 Ay",
    processingTime: "30 dakika",
    targetAudience: "Tüm müşteriler",
    applicationCount: "1000+",
    lastUpdate: "03.12.2024"
  }
];

const BankLoanAmounts = ({ bankName, bankSlug }: BankLoanAmountsProps) => {
  return (
    <Card className="mt-8">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-6">{bankName} Kredi Seçenekleri</h2>
        <div className="space-y-4">
          {LOAN_AMOUNTS.map((loan) => (
            <Card key={loan.amount} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
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
                    to={`/bank/${bankSlug}/${loan.amount}-tl-faizsiz-kredi`}
                    className="inline-flex"
                  >
                    <Button className="bg-primary hover:bg-primary/90">
                      Hemen Başvur <ArrowRight className="w-4 h-4 ml-2" />
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
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BankLoanAmounts;