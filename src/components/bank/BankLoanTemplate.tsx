
import { Building } from "lucide-react";
import { PageMeta } from "@/utils/seoUtils";
import BankLoanAmounts from "./BankLoanAmounts";
import { Bank } from "@/types/bank";
import BankProductGrid from "./BankProductGrid";
import BankProductCard from "./BankProductCard";
import BankCardTrustBadges from "./BankCardTrustBadges";
import BankCardRating from "./BankCardRating";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { getCurrentMonthYear } from "@/utils/dateUtils";

interface BankLoanTemplateProps {
  bankName: string;
  amount: string;
  iconColor: string;
  otherBanks?: Bank[];
}

const BankLoanTemplate = ({
  bankName,
  amount,
  iconColor,
  otherBanks = []
}: BankLoanTemplateProps) => {
  const currentDate = getCurrentMonthYear();
  const formattedAmount = amount.replace(/\./g, "");
  const title = `${bankName} ${formattedAmount} TL Faizsiz Kredi Başvurusu ${new Date().getFullYear()}`;
  const description = `${bankName} ${formattedAmount} TL faizsiz kredi kampanyası ${currentDate} - %0 faiz oranı ile ${formattedAmount} TL kredi kullanma fırsatı. Hemen başvur, anında sonuç al.`;
  const keywords = `${bankName.toLowerCase()} ${formattedAmount} tl kredi, ${bankName.toLowerCase()} faizsiz kredi, ${formattedAmount} tl kredi, faizsiz kredi, sıfır faizli kredi`;
  const pageSlug = `bank/${bankName.toLowerCase()}/${formattedAmount}-tl-faizsiz-kredi`;

  return (
    <div className="min-h-screen bg-gray-50">
      <PageMeta
        title={title}
        description={description}
        keywords={keywords}
        pageSlug={pageSlug}
        pageType="bank"
      />

      <main className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Building className={`w-8 h-8 ${iconColor}`} />
            <h1 className="text-3xl font-bold">{bankName} {formattedAmount} TL Faizsiz Kredi</h1>
          </div>
          <p className="text-gray-600 max-w-3xl">
            {bankName} bankasindan {formattedAmount} TL faizsiz kredi fırsatı! %0 faiz oranı ile {formattedAmount} TL kredi kullanma imkanı. Hemen başvurun, anında sonuç alın.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
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

            <BankLoanAmounts bankName={bankName} currentAmount={formattedAmount} />
          </div>

          <div>
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

            <Card className="mb-8">
              <CardHeader>
                <h2 className="text-xl font-bold">Banka Değerlendirmesi</h2>
              </CardHeader>
              <CardContent>
                <BankCardRating rating={4.7} reviewCount={328} />
                <BankCardTrustBadges />
              </CardContent>
            </Card>

            {otherBanks.length > 0 && (
              <Card>
                <CardHeader>
                  <h2 className="text-xl font-bold">Benzer Faizsiz Krediler</h2>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {otherBanks.map((bank, index) => (
                      <BankProductCard key={index} bank={bank} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Diğer {bankName} Kredi Ürünleri</h2>
          <BankProductGrid bankName={bankName} />
        </div>
      </main>
    </div>
  );
};

export default BankLoanTemplate;
