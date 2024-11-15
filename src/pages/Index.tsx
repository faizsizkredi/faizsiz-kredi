import { useState, useCallback } from "react";
import FilterTabs from "../components/FilterTabs";
import BankCard from "../components/BankCard";
import { Building, Building2, Landmark, CircleDollarSign, Wallet, BadgePercent, CreditCard, PiggyBank, Banknote, DollarSign } from "lucide-react";
import { useInterestRates } from "../utils/api";
import { useToast } from "@/components/ui/use-toast";
import { Helmet } from "react-helmet";

const BANK_DATA = [
  {
    name: "QNB",
    icon: <CreditCard className="w-8 h-8 text-blue-600" />,
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "3-6 Ay",
    amount: "45.000 TL",
    details: [
      "%0 faizli toplam 45.000 TL!",
      "6 ay vadeli 20.000 TL kredi ve 3 ay vadeli 25.000 TL taksitli nakit avans fırsatı!"
    ],
    promotionScore: 95,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Akbank",
    icon: <DollarSign className="w-8 h-8 text-red-600" />,
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "3-6 Ay",
    amount: "45.000 TL",
    details: [
      "%0 faiz ile toplam 45.000 TL!",
      "%0 faizli 6 ay vadeli 20.000 TL ihtiyaç kredisi ve 3 ay vadeli 25.000 TL taksitli avans fırsatı!"
    ],
    promotionScore: 90,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Garanti BBVA",
    icon: <Wallet className="w-8 h-8 text-green-700" />,
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "3-6 Ay",
    amount: "45.000 TL",
    details: [
      "%0 faiz ile toplam 45.000 TL!",
      "%0 faizli 6 ay vadeli 20.000 TL ihtiyaç kredisi ve 3 ay vadeli 25.000 TL taksitli nakit avans fırsatı!"
    ],
    promotionScore: 88,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Türkiye İş Bankası",
    icon: <Building className="w-8 h-8 text-blue-700" />,
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "1-3 ay",
    amount: "55.000 TL",
    details: [
      "55.000 TL'ye varan faizsiz fırsat! İşCep'ten İş Bankalı ol, %0 faizli 25.000 TL'ye varan taksitli nakit avans ve 30.000 TL'ye varan ek hesap'tan yararlan!",
      "Kampanyaya dair ayrıntılı bilgi ve değerlendirme koşullarına 'detay' butonundan ulaşabilirsiniz."
    ],
    promotionScore: 92,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "DenizBank",
    icon: <PiggyBank className="w-8 h-8 text-blue-600" />,
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "3-6 Ay",
    amount: "25.000 TL",
    details: [
      "%0 faizli toplam 35.000 TL'ye varan nakit fırsatı!",
      "6 ay vadeli 10.000 TL kredi ve 3 ay vadeli 25.000 TL'ye varan nakit avans!"
    ],
    promotionScore: 85,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Enpara.com",
    icon: <CircleDollarSign className="w-8 h-8 text-purple-600" />,
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "3 Ay",
    amount: "10.000 TL",
    details: [
      "%0 faizli 3 ay vadeli 10.000 TL'ye varan ihtiyaç kredisi!"
    ],
    promotionScore: 80,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "ON Dijital",
    icon: <Building2 className="w-8 h-8 text-green-600" />,
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "3 Ay",
    amount: "15.000 TL",
    details: [
      "%0 faiz ile 3 Ay Vadeli 15.000 TL İhtiyaç Kredisi"
    ],
    promotionScore: 78,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "CEPTETEB",
    icon: <Landmark className="w-8 h-8 text-green-600" />,
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "3-6 Ay",
    amount: "50.000 TL",
    details: [
      "%0 faiz ile toplam 50.000 TL!",
      "%0 faizli 3 ay vadeli 25.000 TL taksitli nakit avans ve 6 ay vadeli 25.000 TL kredi!"
    ],
    promotionScore: 82,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Albaraka Türk",
    icon: <BadgePercent className="w-8 h-8 text-red-600" />,
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "6 Ay",
    amount: "15.000 TL",
    details: [
      "%0 kâr payı oranı ile vade farksız 6 ay vadeli 15.000 TL!"
    ],
    promotionScore: 75,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  }
];

const Index = () => {
  const [sortOption, setSortOption] = useState<"recommended" | "promotion" | "bank">("recommended");
  const { data: interestRates, isError } = useInterestRates();
  const { toast } = useToast();

  const getSortedBanks = useCallback(() => {
    let updatedBankData = [...BANK_DATA].map(bank => {
      const apiRate = interestRates?.find(rate => 
        rate.bank.toLowerCase().includes(bank.name.toLowerCase())
      );
      
      return {
        ...bank,
        interestRate: apiRate ? apiRate.rate : bank.interestRate,
        lastUpdate: apiRate?.lastupdate || bank.lastUpdate
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
      <Helmet>
        <title>Faizsiz Kredi Veren Bankalar 2024 | Güncel Faiz Oranları ve Kampanyalar</title>
        <meta name="description" content="2024 yılında faizsiz kredi veren bankaların güncel faiz oranları, kampanyaları ve başvuru koşulları. QNB, Akbank, Garanti BBVA ve diğer bankaların faizsiz kredi fırsatları." />
        <meta name="keywords" content="faizsiz kredi, sıfır faizli kredi, banka kredileri, kredi kampanyaları, ihtiyaç kredisi, QNB, Akbank, Garanti BBVA, İş Bankası, DenizBank" />
      </Helmet>

      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">Faizsiz Kredi Veren Bankalar 2024</h1>
        <p className="text-gray-600 mb-8">
          Türkiye'deki bankaların güncel faizsiz kredi kampanyalarını karşılaştırın, size en uygun krediye hemen başvurun. Tüm bankalar, güncel faiz oranları ve kampanya detayları tek sayfada!
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