import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface BankHeroProps {
  bankName: string;
}

const BankHero = ({ bankName }: BankHeroProps) => {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-sm text-gray-500 mb-1">Yeni Müşterilere Özel</div>
            <div className="text-xl font-semibold mb-2">Faiz Oranı %0 (Faizsiz)</div>
            <div className="text-lg">Toplam 50.000 TL</div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Koşullar</Button>
            <Button className="bg-orange-500 hover:bg-orange-600">Müşteri Ol</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BankHero;