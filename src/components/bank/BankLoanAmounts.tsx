import { Card, CardContent } from "@/components/ui/card";
import { Building } from "lucide-react";
import LoanCard from "./loan/LoanCard";

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
  },
  { 
    amount: "20000",
    label: "20.000 TL",
    interestRate: "%0",
    term: "6 Ay",
    processingTime: "30 dakika",
    targetAudience: "Tüm müşteriler",
    applicationCount: "1000+",
    lastUpdate: "03.12.2024"
  },
  { 
    amount: "25000",
    label: "25.000 TL",
    interestRate: "%0",
    term: "6 Ay",
    processingTime: "30 dakika",
    targetAudience: "Tüm müşteriler",
    applicationCount: "1000+",
    lastUpdate: "03.12.2024"
  },
  { 
    amount: "50000",
    label: "50.000 TL",
    interestRate: "%0",
    term: "6 Ay",
    processingTime: "30 dakika",
    targetAudience: "Tüm müşteriler",
    applicationCount: "1000+",
    lastUpdate: "03.12.2024"
  },
  { 
    amount: "100000",
    label: "100.000 TL",
    interestRate: "%0",
    term: "6 Ay",
    processingTime: "30 dakika",
    targetAudience: "Tüm müşteriler",
    applicationCount: "1000+",
    lastUpdate: "03.12.2024"
  }
];

const BankLoanAmounts = ({ bankName, bankSlug }: BankLoanAmountsProps) => {
  console.log('Current bankSlug:', bankSlug);
  console.log('Current bankName:', bankName);

  return (
    <Card className="mt-8">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-6">{bankName} Kredi Seçenekleri</h2>
        <div className="space-y-4">
          {LOAN_AMOUNTS.map((loan) => (
            <LoanCard
              key={loan.amount}
              bankName={bankName}
              loan={loan}
              bankSlug={bankSlug}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BankLoanAmounts;