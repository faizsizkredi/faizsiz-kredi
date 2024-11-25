import { Building } from "lucide-react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BankLoanAmounts from "@/components/bank/BankLoanAmounts";
import BankRatesTable from "@/components/bank/BankRatesTable";

const AkbankIndex = () => {
  const rates = [
    {
      name: "Akbank",
      productName: "İhtiyaç Kredisi",
      interestRate: "3.99",
      minTerm: "1",
      maxTerm: "36"
    }
  ];

  const specialOffer = {
    title: "Yeni Müşterilere Özel",
    interestRate: "%0 (Faizsiz)",
    totalAmount: "50.000 TL",
    code: "1054HK50"
  };

  const loanDetails = {
    interestRate: "3,99",
    monthlyPayment: "2.280,37",
    totalPayment: "27.479,44"
  };

  const bankInfo = {
    description: "Ocak 1948'de özel sermayeli bir ticaret bankası olarak Adana'da kuruldu. Amacı bölgedeki pamuk üreticilerine kaynak sağlamak ve destek olmak olan Akbank, ilk İstanbul şubesini 14 Temmuz 1950'de Sirkeci'de açtı. Kuruluğu gününden bu yana toplumun ve ekonominin gelişimi için bilinç ve sorumlulukla hareket ediyor, paydaşlarına sürdürülebilir değer yaratmak için 72 yıldır çalışıyor.",
    atmCount: "5.300",
    customerCount: "350.000"
  };

  return (
    <>
      <Helmet>
        <title>Akbank Kredi Başvurusu 2024 | Güncel Faiz Oranları</title>
        <meta
          name="description"
          content="Akbank kredi başvurusu yapın! 2024 güncel Akbank kredi faiz oranları, hesaplama ve başvuru."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Special Offer Card */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Building className="w-8 h-8 text-red-600" />
                  <div>
                    <p className="text-sm">{specialOffer.title}</p>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold">Faiz Oranı</p>
                      <p className="text-lg font-bold">{specialOffer.interestRate}</p>
                    </div>
                    <p className="font-semibold">Toplam {specialOffer.totalAmount}</p>
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
                  <h2 className="text-xl font-bold">İhtiyaç Kredisi</h2>
                  <div className="flex items-center gap-8 mt-4">
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
              <div className="bg-white p-4 rounded-lg">
                <p className="text-gray-600 mb-2">Kredi Tutarı (min - max)</p>
                <p className="font-semibold">1.000 - 500.000 TL</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-gray-600 mb-2">Kredi Vadesi (min - max)</p>
                <p className="font-semibold">1 - 36 Ay</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-gray-600 mb-2">Faiz (min - max)</p>
                <p className="font-semibold">%3,99</p>
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

          <BankRatesTable rates={rates} />
          <BankLoanAmounts bankName="Akbank" bankSlug="akbank" />
        </div>
      </div>
    </>
  );
};

export default AkbankIndex;