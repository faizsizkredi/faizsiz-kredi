import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
  activeTab?: string;
}

const FilterTabs = ({ onSortChange, activeTab = "recommended" }: FilterTabsProps) => {
  const location = useLocation();
  const [localActiveTab, setLocalActiveTab] = useState<SortOption>(activeTab as SortOption);

  const handleTabClick = (tab: SortOption) => {
    setLocalActiveTab(tab);
    onSortChange(tab);
  };

  const tabs = [
    { id: "recommended", label: "Önerilen Sıralama", path: "/" },
    { id: "risky", label: "Riskli müşteriye", path: "/riskli-musteriye-kredi" },
    { id: "easiest", label: "En kolay", path: "/en-kolay-kredi" },
    { id: "promotion", label: "Promosyona göre", path: "/promosyonlu-krediler" },
    { id: "affordable", label: "En uygun", path: "/en-uygun-kredi" },
    { id: "zeroInterest", label: "Sıfır (0) faizli", path: "/sifir-faizli-kredi" },
    { id: "bank", label: "Banka adına göre", path: "/tum-bankalar" },
    { id: "newCustomer", label: "Yeni müşteriye", path: "/yeni-musteriye-kredi" },
    { id: "retired", label: "Emekliye", path: "/emekliye-faizsiz-kredi" },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tabs.map((tab) => (
        <Link
          key={tab.id}
          to={tab.path}
          className={`px-4 py-2 rounded-md transition-all ${
            (activeTab || localActiveTab) === tab.id
              ? "bg-primary text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
};

export default FilterTabs;