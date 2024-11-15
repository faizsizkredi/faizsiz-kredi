import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

interface BankFilterTabsProps {
  onSortChange: (option: SortOption) => void;
  activeTab: SortOption;
}

const BankFilterTabs = ({ onSortChange, activeTab }: BankFilterTabsProps) => {
  const tabs = [
    { id: "recommended", label: "Önerilen", ariaLabel: "Önerilen sıralama ile bankaları görüntüle" },
    { id: "risky", label: "Riskli", ariaLabel: "Riskli müşteriler için uygun kredileri görüntüle" },
    { id: "easiest", label: "Kolay", ariaLabel: "En kolay kredi başvurusu yapılabilen bankaları görüntüle" },
    { id: "promotion", label: "Promosyon", ariaLabel: "En yüksek promosyonlu kredileri görüntüle" },
    { id: "affordable", label: "Uygun", ariaLabel: "En uygun faiz oranlı kredileri görüntüle" },
    { id: "zeroInterest", label: "Sıfır Faiz", ariaLabel: "Sıfır faizli kredileri görüntüle" },
    { id: "bank", label: "Banka", ariaLabel: "Bankaları alfabetik sırala" },
    { id: "newCustomer", label: "Yeni Müşteri", ariaLabel: "Yeni müşterilere özel kredileri görüntüle" },
    { id: "retired", label: "Emekli", ariaLabel: "Emeklilere özel kredileri görüntüle" },
  ];

  return (
    <Tabs defaultValue={activeTab} onValueChange={(value) => onSortChange(value as SortOption)}>
      <TabsList className="flex flex-wrap gap-1">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            aria-label={tab.ariaLabel}
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default BankFilterTabs;