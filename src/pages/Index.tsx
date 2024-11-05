import { useState } from "react";
import FilterTabs from "../components/FilterTabs";
import BankList from "../components/BankList";

const Index = () => {
  const [sortOption, setSortOption] = useState<"recommended" | "promotion" | "bank">("recommended");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">Faizsiz Kredi Veren Bankalar</h1>
        <p className="text-gray-600 mb-8">
          Bankaların dönemsel faizsiz kredi ürünlerini inceleyebilir, karşılaştırma yaparak sana en uygun krediye anında başvuru yapabilirsin.
        </p>

        <FilterTabs onSortChange={setSortOption} />
        <BankList sortOption={sortOption} />
      </div>
    </div>
  );
};

export default Index;