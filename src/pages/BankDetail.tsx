import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Building, Home, Car, Store, CreditCard, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BankLoanAmounts from "@/components/bank/BankLoanAmounts";

const BankDetail = () => {
  const { bankSlug } = useParams();
  
  const bankName = bankSlug?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  const currentYear = new Date().getFullYear();
  const pageTitle = `${bankName} Faizsiz Kredi Başvurusu - ${currentYear}`;
  const pageDescription = `${bankName} bankanın en güncel kredi kampanyaları, avantajlı faiz oranları ve özel fırsatları. Tüm kredi seçeneklerini karşılaştırın, size en uygun krediye hemen başvurun.${currentYear} yılına özel kampanyalar ve fırsatlar için acele edin!`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{bankName} Faizsiz Kredi Başvurusu - {currentYear}</h1>
        <p className="text-gray-600 mb-8">{pageDescription}</p>

        {/* Yeni Müşteri Kampanyası */}
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

        {/* Faiz Oranları Grid */}
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

        {/* Banka Hakkında */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">{bankName} Hakkında</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-600 mb-6">
                Ocak 1948'de özel sermayeli bir ticaret bankası olarak Adana'da kuruldu. Amacı bölgedeki pamuk üreticilerine kaynak sağlamak ve destek olmak olan {bankName}, ilk İstanbul şubesini 14 Temmuz 1950'de Sirkeci'de açtı. Kuruluşu gününden bu yana toplumun ve ekonominin gelişimi için bilinç ve sorumlulukla hareket ediyor, paydaşlarına sürdürülebilir değer yaratmak için 72 yıldır çalışıyor.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Banka ATM Sayısı</div>
                  <div className="text-xl font-semibold">5.300</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Banka üye iş yeri sayısı</div>
                  <div className="text-xl font-semibold">350.000</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Diğer Ürünler */}
        <div>
          <h2 className="text-2xl font-bold mb-6">{bankName} Diğer Kredi, Kredi Kartı ve Mevduat Ürünleri</h2>
          <div className="grid grid-cols-4 gap-4">
            <Card className="text-center">
              <CardContent className="p-6">
                <Home className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold">Konut Kredisi</h3>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Car className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold">Taşıt Kredisi</h3>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Store className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold">Kobi Kredisi</h3>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Wallet className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold">Mevduat</h3>
              </CardContent>
            </Card>
          </div>
        </div>

        <BankLoanAmounts bankName={bankName || ""} bankSlug={bankSlug || ""} />
      </main>
    </div>
  );
};

export default BankDetail;