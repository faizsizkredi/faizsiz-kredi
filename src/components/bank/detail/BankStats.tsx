import { Card, CardContent } from "@/components/ui/card";

interface BankStatsProps {
  bankName: string;
}

const BankStats = ({ bankName }: BankStatsProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6">{bankName} İhtiyaç Kredisi Faiz Oranları</h2>
      <div className="grid grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">Kredi Tutarı (min - max)</h3>
            <p className="text-xl">1.000 - 500.000 TL</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">Kredi Vadesi (min - max)</h3>
            <p className="text-xl">1 - 36 Ay</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">Faiz (min - max)</h3>
            <p className="text-xl">%3,99</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BankStats;