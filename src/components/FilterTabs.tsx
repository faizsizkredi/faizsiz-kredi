import { useState } from "react";

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

interface FilterTabsProps {
  onSortChange: (option: SortOption) => void;
}

const FilterTabs = ({ onSortChange }: FilterTabsProps) => {
  const [activeTab, setActiveTab] = useState<SortOption>("recommended");

  const handleTabClick = (tab: SortOption) => {
    setActiveTab(tab);
    onSortChange(tab);
  };

  const tabs = [
    { id: "recommended", label: "Önerilen Sıralama" },
    { id: "risky", label: "Riskli müşteriye" },
    { id: "easiest", label: "En kolay" },
    { id: "promotion", label: "Promosyona göre" },
    { id: "affordable", label: "En uygun" },
    { id: "zeroInterest", label: "Sıfır (0) faizli" },
    { id: "bank", label: "Banka adına göre" },
    { id: "newCustomer", label: "Yeni müşteriye" },
    { id: "retired", label: "Emekliye" },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id as SortOption)}
          className={`px-4 py-2 rounded-md transition-all ${
            activeTab === tab.id
              ? "bg-primary text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;