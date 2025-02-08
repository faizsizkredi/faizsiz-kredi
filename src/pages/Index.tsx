
import { useState, useCallback } from "react";
import FilterTabs from "../components/FilterTabs";
import { useInterestRates } from "../utils/api";
import { useToast } from "@/components/ui/use-toast";
import HomeMeta from "@/components/home/HomeMeta";
import HomeFAQ from "@/components/home/HomeFAQ";
import BankList from "@/components/home/BankList";
import { getCurrentMonthYear } from "@/utils/dateUtils";
import BankRatesTable from "@/components/bank/BankRatesTable";

type SortOption = 
  | "recommended" 
  | "promotion" 
  | "bank" 
  | "risky" 
  | "easiest" 
  | "affordable" 
  | "zeroInterest" 
  | "newCustomer" 
  | "retired";

const Index = () => {
  const [sortOption, setSortOption] = useState<SortOption>("recommended");
  const { data: interestRates, isError } = useInterestRates();
  const { toast } = useToast();
  const currentDate = getCurrentMonthYear();

  if (isError) {
    toast({
      title: "Hata",
      description: "Faiz oranları güncellenirken bir hata oluştu.",
      variant: "destructive",
    });
  }

  const currentRates = [
    { name: "QNB Finansbank", productName: "Hoş Geldin Kredisi", interestRate: "0.00", minTerm: "1", maxTerm: "6" },
    { name: "Akbank", productName: "Dijital Kredi", interestRate: "0.00", minTerm: "1", maxTerm: "6" },
    { name: "Garanti BBVA", productName: "İhtiyaç Kredisi", interestRate: "2.99", minTerm: "3", maxTerm: "36" },
    { name: "Yapı Kredi", productName: "İhtiyaç Kredisi", interestRate: "3.19", minTerm: "3", maxTerm: "36" },
    { name: "Ziraat Bankası", productName: "Tüketici Kredisi", interestRate: "2.89", minTerm: "3", maxTerm: "36" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <HomeMeta />

      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">Faizsiz Kredi Veren Bankalar {currentDate}</h1>
        <p className="text-gray-600 mb-8">
          Türkiye'deki bankaların güncel faizsiz kredi kampanyalarını karşılaştırın, size en uygun krediye hemen başvurun. Tüm bankalar, güncel faiz oranları ve kampanya detayları tek sayfada!
        </p>

        <FilterTabs onSortChange={setSortOption} />
        
        <BankList sortOption={sortOption} interestRates={interestRates} />
        
        <HomeFAQ />

        <div className="mt-12 prose max-w-none">
          <h2 className="text-2xl font-bold mb-6">En Avantajlı Faizsiz Kredi Fırsatları {currentDate}</h2>
          
          <h3 className="text-xl font-semibold mb-4">Faizsiz Kredi Kampanyaları</h3>
          <p className="text-gray-700 mb-6">
            {new Date().getFullYear()} yılında bankalar, müşterilerine çeşitli faizsiz kredi seçenekleri sunmaktadır. Özellikle yeni müşterilere özel kampanyalar kapsamında, 6 aya varan vade seçenekleriyle faizsiz kredi kullanma imkanı bulunmaktadır. QNB Finansbank, Akbank, Garanti BBVA gibi önde gelen bankalar, düzenli olarak faizsiz kredi kampanyaları düzenlemektedir.
          </p>

          <h3 className="text-xl font-semibold mb-4">Güncel Kredi Faiz Oranları</h3>
          <div className="mb-8">
            <BankRatesTable rates={currentRates} />
          </div>

          <h3 className="text-xl font-semibold mb-4">Faizsiz Kredi Başvuru Şartları</h3>
          <p className="text-gray-700 mb-4">
            Faizsiz kredi başvurusu yapabilmek için genel olarak aşağıdaki şartları sağlamanız gerekmektedir:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>18 yaşını doldurmuş olmak</li>
            <li>Düzenli gelir sahibi olmak</li>
            <li>Kredi notu 1300 ve üzeri olmak</li>
            <li>Son 6 ayda kredi ödemelerinde gecikme olmamak</li>
            <li>İlgili bankanın bireysel müşterisi olmak</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">Faizsiz Kredi Avantajları</h3>
          <p className="text-gray-700 mb-4">
            Faizsiz krediler, standart kredilere göre birçok avantaj sunmaktadır:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Faiz ödemeden kredi kullanma imkanı</li>
            <li>Esnek vade seçenekleri</li>
            <li>Hızlı başvuru ve onay süreci</li>
            <li>Masrafsız kredi imkanı</li>
            <li>Online başvuru kolaylığı</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">Kredi Başvurusu İçin Gerekli Belgeler</h3>
          <p className="text-gray-700 mb-4">
            Faizsiz kredi başvurusu için genellikle aşağıdaki belgeler talep edilmektedir:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Nüfus cüzdanı veya kimlik kartı</li>
            <li>Gelir belgesi veya maaş bordrosu</li>
            <li>İkametgah belgesi</li>
            <li>Son 3 aylık banka hesap özeti</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
