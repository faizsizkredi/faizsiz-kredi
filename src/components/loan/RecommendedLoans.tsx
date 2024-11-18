import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const RecommendedLoans = () => {
  const recommendedLoans = [
    {
      bank: "QNB",
      logo: "/bank-logos/qnb.png",
      title: "Yeni Müşterilere Özel",
      amount: "50.000",
      term: "36 Ay",
      rate: "3.54",
      monthlyPayment: "2.868,81",
      totalPayment: "103.568,28"
    },
    {
      bank: "Akbank",
      logo: "/bank-logos/akbank.png",
      title: "İhtiyaç Kredisi",
      amount: "50.000",
      term: "36 Ay",
      rate: "3.99",
      monthlyPayment: "3.094,66",
      totalPayment: "111.695,26"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Tavsiye Ettiğimiz İhtiyaç Kredileri/Finansmanları</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {recommendedLoans.map((loan, index) => (
          <Card key={index} className="p-4">
            <div className="flex justify-between items-start mb-4">
              <img src={loan.logo} alt={loan.bank} className="h-8" />
              <Button variant="link" size="sm">Detay</Button>
            </div>
            <h3 className="font-medium mb-4">{loan.title}</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Tutar</span>
                <div className="flex items-center">
                  <span className="font-medium">{loan.amount}</span>
                  <span className="ml-1">TL</span>
                </div>
              </div>
              <div>
                <Select defaultValue={loan.term}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="36 Ay">36 Ay</SelectItem>
                    <SelectItem value="24 Ay">24 Ay</SelectItem>
                    <SelectItem value="12 Ay">12 Ay</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Faiz</span>
                <span className="font-medium">%{loan.rate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Aylık Taksit</span>
                <div className="flex items-center">
                  <span className="font-medium">{loan.monthlyPayment}</span>
                  <span className="ml-1">TL</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Toplam Ödeme</span>
                <div className="flex items-center">
                  <span className="font-medium">{loan.totalPayment}</span>
                  <span className="ml-1">TL</span>
                </div>
              </div>
              <Button className="w-full">Hızlı Başvur</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecommendedLoans;