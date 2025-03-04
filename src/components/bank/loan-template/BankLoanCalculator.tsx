
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

interface BankLoanCalculatorProps {
  formattedAmount: string;
}

const BankLoanCalculator = ({ formattedAmount }: BankLoanCalculatorProps) => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <h2 className="text-xl font-bold">Kredi Hesaplama</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="amount">Kredi Tutarı</Label>
            <Input id="amount" type="text" defaultValue={`${formattedAmount} TL`} readOnly />
          </div>
          <div>
            <Label htmlFor="interest">Faiz Oranı</Label>
            <Input id="interest" type="text" defaultValue="%0" readOnly />
          </div>
          <div>
            <Label htmlFor="term">Vade</Label>
            <Input id="term" type="text" defaultValue="6 Ay" readOnly />
          </div>
          <div>
            <Label htmlFor="installment">Aylık Taksit</Label>
            <Input id="installment" type="text" defaultValue={`${(parseInt(formattedAmount) / 6).toFixed(2)} TL`} readOnly />
          </div>
          <div>
            <Label htmlFor="total">Toplam Ödeme</Label>
            <Input id="total" type="text" defaultValue={`${formattedAmount} TL`} readOnly />
          </div>

          <div className="flex items-center space-x-2 pt-2">
            <Switch id="notification" defaultChecked={true} />
            <Label htmlFor="notification">
              Başvuru durumumu SMS ile bildir
            </Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BankLoanCalculator;
