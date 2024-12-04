import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building } from "lucide-react";

const AkbankIndex = () => {
  const currentYear = new Date().getFullYear();
  const bankName = "Akbank";
  const pageTitle = `${bankName} Faizsiz Kredi Başvurusu - ${currentYear}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{pageTitle}</title>
        <meta 
          name="description" 
          content={`${bankName} bankanın en güncel kredi kampanyaları, avantajlı faiz oranları ve özel fırsatları. Tüm kredi seçeneklerini karşılaştırın, size en uygun krediye hemen başvurun.${currentYear} yılına özel kampanyalar ve fırsatlar için acele edin!`}
        />
      </Helmet>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{pageTitle}</h1>

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
          <h2 className="text-2xl font-bold mb-6">Akbank İhtiyaç Kredisi Faiz Oranları</h2>
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
          <h2 className="text-2xl font-bold mb-6">Akbank Hakkında</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-600 mb-6">
                1948 yılında kurulan Akbank, Türkiye'nin en büyük özel bankalarından biridir. Müşterilerine bireysel, ticari, kurumsal, özel bankacılık ve uluslararası ticaret finansmanı alanlarında geniş bir yelpazede finansal hizmetler sunmaktadır.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Banka ATM Sayısı</div>
                  <div className="text-xl font-semibold">5.300+</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Banka üye iş yeri sayısı</div>
                  <div className="text-xl font-semibold">350.000+</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Diğer Ürünler */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Akbank Diğer Kredi, Kredi Kartı ve Mevduat Ürünleri</h2>
          <div className="grid grid-cols-4 gap-4">
            <Card className="text-center">
              <CardContent className="p-6">
                <Building className="w-8 h-8 mx-auto mb-2 text-red-600" />
                <h3 className="font-semibold">Konut Kredisi</h3>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Building className="w-8 h-8 mx-auto mb-2 text-red-600" />
                <h3 className="font-semibold">Taşıt Kredisi</h3>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Building className="w-8 h-8 mx-auto mb-2 text-red-600" />
                <h3 className="font-semibold">Kobi Kredisi</h3>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Building className="w-8 h-8 mx-auto mb-2 text-red-600" />
                <h3 className="font-semibold">Mevduat</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AkbankIndex;
