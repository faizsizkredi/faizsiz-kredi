
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface BankLoanDetailsProps {
  bankName: string;
  amount: string;
  formattedAmount: string;
}

const BankLoanDetails = ({ bankName, amount, formattedAmount }: BankLoanDetailsProps) => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <h2 className="text-2xl font-bold">{bankName} {formattedAmount} TL Faizsiz Kredi Detayları</h2>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-muted-foreground">Banka</Label>
            <p className="font-semibold">{bankName}</p>
          </div>
          <div>
            <Label className="text-muted-foreground">Kredi Tutarı</Label>
            <p className="font-semibold">{formattedAmount} TL</p>
          </div>
          <div>
            <Label className="text-muted-foreground">Faiz Oranı</Label>
            <p className="font-semibold text-green-600">%0</p>
          </div>
          <div>
            <Label className="text-muted-foreground">Vade</Label>
            <p className="font-semibold">6 Ay</p>
          </div>
          <div>
            <Label className="text-muted-foreground">Aylık Taksit</Label>
            <p className="font-semibold">{(parseInt(formattedAmount) / 6).toFixed(2)} TL</p>
          </div>
          <div>
            <Label className="text-muted-foreground">Toplam Ödeme</Label>
            <p className="font-semibold">{formattedAmount} TL</p>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-semibold">Başvuru Şartları</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>T.C. vatandaşı olmak</li>
            <li>18 yaşını doldurmuş olmak</li>
            <li>Düzenli gelir sahibi olmak</li>
            <li>{bankName} müşterisi olmamak</li>
            <li>Son 6 ayda kredi kartı veya kredi ödemelerinde gecikme yaşamamış olmak</li>
          </ul>
        </div>

        <div className="pt-4">
          <Button size="lg" className="w-full">Hemen Başvur</Button>
          <p className="text-xs text-muted-foreground text-center mt-2">
            Başvurunuz anında değerlendirilecektir.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BankLoanDetails;
