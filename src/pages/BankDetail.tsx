import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Building, Home, Car, Store, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BankDetail = () => {
  const { bankSlug } = useParams();
  
  const bankName = bankSlug?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  const currentYear = new Date().getFullYear();
  const pageTitle = `${bankName} Kredi Kampanyaları ve Başvuru ${currentYear}`;
  const pageDescription = `${bankName} bankanın en güncel kredi kampanyaları, avantajlı faiz oranları ve özel fırsatları. Tüm kredi seçeneklerini karşılaştırın, size en uygun krediye hemen başvurun.${currentYear} yılına özel kampanyalar ve fırsatlar için acele edin!`;

  const specialOffer = {
    title: "Yeni Müşterilere Özel",
    rate: "Faiz Oranı %0 (Faizsiz)",
    totalAmount: "Toplam 50.000 TL"
  };

  const loanDetails = {
    title: "İhtiyaç Kredisi",
    interestRate: "3,99",
    monthlyPayment: "2.280,37",
    totalPayment: "27.479,44"
  };

  const rates = {
    amount: "1.000 - 500.000 TL",
    term: "1 - 36 Ay",
    rate: "%3,99"
  };

  const bankInfo = {
    description: "Ocak 1948'de özel sermayeli bir ticaret bankası olarak Adana'da kuruldu. Amacı bölgedeki pamuk üreticilerine kaynak sağlamak ve destek olmak olan Akbank, ilk İstanbul şubesini 14 Temmuz 1950'de Sirkeci'de açtı. Kuruluğu gününden bu yana toplumun ve ekonominin gelişimi için bilinç ve sorumlulukla hareket ediyor, paydaşlarına sürdürülebilir değer yaratmak için 72 yıldır çalışıyor.",
    atmCount: "5.300",
    customerCount: "350.000"
  };

  const products = [
    { icon: <Home className="w-6 h-6" />, name: "Konut Kredisi" },
    { icon: <Car className="w-6 h-6" />, name: "Taşıt Kredisi" },
    { icon: <Store className="w-6 h-6" />, name: "Kobi Kredisi" },
    { icon: <CreditCard className="w-6 h-6" />, name: "Mevduat" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{pageTitle}</h1>
        <p className="text-lg text-gray-600 mb-8">{pageDescription}</p>

        {/* Special Offer Card */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Building className="w-8 h-8 text-red-600" />
                <div>
                  <p className="text-sm">{specialOffer.title}</p>
                  <p className="text-lg font-bold">{specialOffer.rate}</p>
                  <p className="font-semibold">{specialOffer.totalAmount}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button className="bg-orange-500 hover:bg-orange-600">Müşteri Ol</Button>
                <Button variant="outline">Koşullar</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Loan Details Card */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">{loanDetails.title}</h2>
                <div className="grid grid-cols-3 gap-8 mt-4">
                  <div>
                    <p className="text-sm text-gray-600">Faiz Oranı</p>
                    <p className="font-bold">%{loanDetails.interestRate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Aylık Taksit</p>
                    <p className="font-bold">{loanDetails.monthlyPayment} TL</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Toplam Ödeme</p>
                    <p className="font-bold">{loanDetails.totalPayment} TL</p>
                  </div>
                </div>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600">Hemen Başvur</Button>
            </div>
          </CardContent>
        </Card>

        <Button variant="outline" className="w-full mb-8">Diğer Bankaların Tekliflerini Gör</Button>

        {/* Interest Rates Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-6">Akbank İhtiyaç Kredisi Faiz Oranları</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-600 mb-2">Kredi Tutarı (min - max)</p>
              <p className="font-semibold">{rates.amount}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-600 mb-2">Kredi Vadesi (min - max)</p>
              <p className="font-semibold">{rates.term}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-600 mb-2">Faiz (min - max)</p>
              <p className="font-semibold">{rates.rate}</p>
            </div>
          </div>
        </div>

        {/* Bank Info Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Akbank Hakkında</h2>
          <p className="text-gray-600 mb-4">{bankInfo.description}</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Banka ATM Sayısı</p>
              <p className="font-bold">{bankInfo.atmCount}</p>
            </div>
            <div>
              <p className="text-gray-600">Banka üye iş yeri sayısı</p>
              <p className="font-bold">{bankInfo.customerCount}</p>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div>
          <h2 className="text-xl font-bold mb-6">Akbank Diğer Kredi, Kredi Kartı ve Mevduat Ürünleri</h2>
          <div className="grid grid-cols-4 gap-4">
            {products.map((product, index) => (
              <Button
                key={index}
                variant="outline"
                className="flex flex-col items-center gap-2 p-4 h-auto"
              >
                {product.icon}
                <span>{product.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetail;