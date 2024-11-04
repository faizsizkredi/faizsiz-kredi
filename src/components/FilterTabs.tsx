import { useState } from "react";

type SortOption = "recommended" | "promotion" | "bank";

interface FilterTabsProps {
  onSortChange: (option: SortOption) => void;
}

const FilterTabs = ({ onSortChange }: FilterTabsProps) => {
  const [activeTab, setActiveTab] = useState<SortOption>("recommended");

  const handleTabClick = (tab: SortOption) => {
    setActiveTab(tab);
    onSortChange(tab);
  };

  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={() => handleTabClick("recommended")}
        className={`px-4 py-2 rounded-md transition-all ${
          activeTab === "recommended"
            ? "bg-primary text-white"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        Önerilen Sıralama
      </button>
      <button
        onClick={() => handleTabClick("promotion")}
        className={`px-4 py-2 rounded-md transition-all ${
          activeTab === "promotion"
            ? "bg-primary text-white"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        Promosyona göre
      </button>
      <button
        onClick={() => handleTabClick("bank")}
        className={`px-4 py-2 rounded-md transition-all ${
          activeTab === "bank"
            ? "bg-primary text-white"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        Banka adına göre
      </button>
    </div>
  );
};

export default FilterTabs;