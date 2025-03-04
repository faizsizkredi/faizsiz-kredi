
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const BankLoanApplicationForm = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <h2 className="text-xl font-bold">Hızlı Başvuru</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Ad Soyad</Label>
            <Input id="name" placeholder="Ad Soyad" />
          </div>
          <div>
            <Label htmlFor="phone">Telefon Numarası</Label>
            <Input id="phone" placeholder="05__ ___ __ __" />
          </div>
          <div>
            <Label htmlFor="email">E-posta</Label>
            <Input id="email" type="email" placeholder="E-posta adresiniz" />
          </div>
          <div>
            <Label htmlFor="tc">T.C. Kimlik No</Label>
            <Input id="tc" placeholder="T.C. Kimlik No" />
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="terms" />
            <Label htmlFor="terms" className="text-xs">
              Aydınlatma metnini okudum ve onaylıyorum.
            </Label>
          </div>
          <Button className="w-full">Başvur</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BankLoanApplicationForm;
