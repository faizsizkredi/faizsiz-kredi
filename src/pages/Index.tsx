import { useState, useCallback } from "react";
import FilterTabs from "../components/FilterTabs";
import BankCard from "../components/BankCard";
import { Building, Building2, Landmark, CircleDollarSign, Wallet, BadgePercent, CreditCard, PiggyBank, Banknote, DollarSign } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const BANK_DATA = [
  {
    name: "Ziraat Bankası",
    icon: <Building className="w-8 h-8 text-green-600" />,
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "6 Ay",
    amount: "50.000 TL",
    details: [
      "6 ay vadeli 50.000 TL faizsiz kredi!",
      "Masrafsız başvuru imkanı",
    ],
    promotionScore: 95
  },
  {
    name: "Vakıfbank",
    icon: <Building2 className="w-8 h-8 text-green-700" />,
    specialOffer: "Kamu Çalışanlarına Özel",
    interestRate: "%0",
    term: "12 Ay",
    amount: "60.000 TL",
    details: [
      "12 ay vadeli 60.000 TL faizsiz kredi!",
      "Kamu çalışanlarına özel avantajlar",
    ],
    promotionScore: 90
  },
  {
    name: "Halkbank",
    icon: <Landmark className="w-8 h-8 text-blue-600" />,
    specialOffer: "Esnafa Özel",
    interestRate: "%0",
    term: "9 Ay",
    amount: "40.000 TL",
    details: [
      "Esnafa özel 9 ay vadeli 40.000 TL",
      "Hızlı başvuru ve onay",
    ],
    promotionScore: 85
  },
  {
    name: "İş Bankası",
    icon: <CircleDollarSign className="w-8 h-8 text-blue-700" />,
    specialOffer: "Maximum Kart Sahiplerine Özel",
    interestRate: "%0",
    term: "6 Ay",
    amount: "45.000 TL",
    details: [
      "Maximum kart sahiplerine özel fırsatlar",
      "Online başvuru imkanı",
    ],
    promotionScore: 80
  },
  {
    name: "Garanti BBVA",
    icon: <Wallet className="w-8 h-8 text-teal-600" />,
    specialOffer: "Bonus Kart Sahiplerine Özel",
    interestRate: "%0",
    term: "8 Ay",
    amount: "55.000 TL",
    details: [
      "Bonus kart sahiplerine özel avantajlar",
      "Masrafsız kullandırım",
    ],
    promotionScore: 88
  },
  {
    name: "Yapı Kredi",
    icon: <BadgePercent className="w-8 h-8 text-blue-800" />,
    specialOffer: "World Kart Sahiplerine Özel",
    interestRate: "%0",
    term: "10 Ay",
    amount: "48.000 TL",
    details: [
      "World kart sahiplerine özel kampanya",
      "Anında başvuru imkanı",
    ],
    promotionScore: 82
  },
  {
    name: "QNB Finansbank",
    icon: <CreditCard className="w-8 h-8 text-purple-600" />,
    specialOffer: "CardFinans Sahiplerine Özel",
    interestRate: "%0",
    term: "7 Ay",
    amount: "42.000 TL",
    details: [
      "CardFinans sahiplerine özel fırsatlar",
      "7 ay taksit imkanı",
    ],
    promotionScore: 75
  },
  {
    name: "Denizbank",
    icon: <PiggyBank className="w-8 h-8 text-cyan-600" />,
    specialOffer: "Emeklilere Özel",
    interestRate: "%0",
    term: "12 Ay",
    amount: "35.000 TL",
    details: [
      "Emeklilere özel avantajlar",
      "12 ay vade seçeneği",
    ],
    promotionScore: 78
  },
  {
    name: "TEB",
    icon: <Banknote className="w-8 h-8 text-orange-600" />,
    specialOffer: "KOBI'lere Özel",
    interestRate: "%0",
    term: "6 Ay",
    amount: "70.000 TL",
    details: [
      "KOBİ'lere özel kampanya",
      "6 ay vade seçeneği",
    ],
    promotionScore: 72
  },
  {
    name: "Akbank",
    icon: <DollarSign className="w-8 h-8 text-red-600" />,
    specialOffer: "Axess Sahiplerine Özel",
    interestRate: "%0",
    term: "9 Ay",
    amount: "52.000 TL",
    details: [
      "Axess kart sahiplerine özel fırsatlar",
      "9 ay taksit imkanı",
    ],
    promotionScore: 85
  },
];

const Index = () => {
  const [sortOption, setSortOption] = useState<"recommended" | "promotion" | "bank">("recommended");
  const { toast } = useToast();

  const { data: interestRates, isError } = useQuery({
    queryKey: ['interestRates'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('bank_interest_rates')
        .select('*');
      
      if (error) throw error;
      return data;
    }
  });

  const getSortedBanks = useCallback(() => {
    let updatedBankData = [...BANK_DATA].map(bank => {
      const apiRate = interestRates?.find(rate => 
        rate.bank_name.toLowerCase().includes(bank.name.toLowerCase())
      );
      
      return {
        ...bank,
        interestRate: apiRate ? apiRate.interest_rate : bank.interestRate,
        lastUpdate: apiRate?.last_updated ? new Date(apiRate.last_updated).toLocaleString('tr-TR') : undefined
      };
    });

    switch (sortOption) {
      case "promotion":
        return updatedBankData.sort((a, b) => b.promotionScore - a.promotionScore);
      case "bank":
        return updatedBankData.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return updatedBankData;
    }
  }, [sortOption, interestRates]);

  if (isError) {
    toast({
      title: "Hata",
      description: "Faiz oranları güncellenirken bir hata oluştu.",
      variant: "destructive",
    });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">Faizsiz Kredi Veren Bankalar</h1>
        <p className="text-gray-600 mb-8">
          Bankaların dönemsel faizsiz kredi ürünlerini inceleyebilir, karşılaştırma yaparak sana en uygun krediye anında başvuru yapabilirsin.
        </p>

        <FilterTabs onSortChange={setSortOption} />

        <div className="space-y-4">
          {getSortedBanks().map((bank, index) => (
            <BankCard key={index} {...bank} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;