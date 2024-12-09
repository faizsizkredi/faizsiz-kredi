import { useState, useCallback } from "react";
import FilterTabs from "../components/FilterTabs";
import { useInterestRates } from "../utils/api";
import { useToast } from "@/components/ui/use-toast";
import HomeMeta from "@/components/home/HomeMeta";
import HomeFAQ from "@/components/home/HomeFAQ";
import BankList from "@/components/home/BankList";
import { getCurrentMonthYear } from "@/utils/dateUtils";

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
          <h2 className="text-2xl font-bold mb-4">En Avantajlı Faizsiz Kredi Fırsatları {currentDate}</h2>
          <p className="text-gray-700 mb-6">
            {new Date().getFullYear()} yılında bankalar, müşterilerine çeşitli faizsiz kredi seçenekleri sunmaktadır. Özellikle yeni müşterilere özel kampanyalar kapsamında, 6 aya varan vade seçenekleriyle faizsiz kredi kullanma imkanı bulunmaktadır. QNB Finansbank, Akbank, Garanti BBVA gibi önde gelen bankalar, düzenli olarak faizsiz kredi kampanyaları düzenlemektedir. Bu kampanyalardan yararlanmak için bankaların dijital kanallarını kullanabilir veya şubelerini ziyaret edebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;