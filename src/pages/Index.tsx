import { useState, useCallback } from "react";
import FilterTabs from "../components/FilterTabs";
import { useInterestRates } from "../utils/api";
import { useToast } from "@/components/ui/use-toast";
import HomeMeta from "@/components/home/HomeMeta";
import HomeFAQ from "@/components/home/HomeFAQ";
import BankList from "@/components/home/BankList";

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
        <h1 className="text-4xl font-bold mb-4">Faizsiz Kredi Veren Bankalar 2024</h1>
        <p className="text-gray-600 mb-8">
          Türkiye'deki bankaların güncel faizsiz kredi kampanyalarını karşılaştırın, size en uygun krediye hemen başvurun. Tüm bankalar, güncel faiz oranları ve kampanya detayları tek sayfada!
        </p>

        <FilterTabs onSortChange={setSortOption} />
        
        <BankList sortOption={sortOption} interestRates={interestRates} />
        
        <HomeFAQ />
      </div>
    </div>
  );
};

export default Index;