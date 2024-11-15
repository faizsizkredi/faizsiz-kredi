import { useState, useCallback } from "react";
import FilterTabs from "../components/FilterTabs";
import BankCard from "../components/BankCard";
import { Building, Building2, Landmark, CircleDollarSign, Wallet, BadgePercent, CreditCard, PiggyBank, Banknote, DollarSign } from "lucide-react";
import { useInterestRates } from "../utils/api";
import { useToast } from "@/components/ui/use-toast";
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

        <div className="space-y-4 mb-12">
          {getSortedBanks().map((bank, index) => (
            <BankCard key={index} {...bank} />
          ))}
        </div>

        <div className="mt-16 mb-8">
          <h2 className="text-2xl font-bold mb-6">Sıkça Sorulan Sorular</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>Faizsiz kredi veren bankalar hangileridir?</AccordionTrigger>
              <AccordionContent>
                2024 yılında faizsiz kredi veren başlıca bankalar: QNB Finansbank, Akbank, Garanti BBVA, İş Bankası, DenizBank, Enpara.com, ON Dijital, CEPTETEB ve Albaraka Türk'tür. Her bankanın sunduğu faizsiz kredi limitleri ve vade süreleri farklılık gösterebilmektedir.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Yeni Müşteriye faizsiz kredi veren bankalar hangileridir?</AccordionTrigger>
              <AccordionContent>
                Yeni müşterilerine özel faizsiz kredi kampanyaları sunan bankalar arasında QNB Finansbank (45.000 TL'ye kadar), Akbank (45.000 TL'ye kadar), Garanti BBVA (45.000 TL'ye kadar), İş Bankası (55.000 TL'ye kadar) ve DenizBank (25.000 TL'ye kadar) bulunmaktadır.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Ziraat Bankası faizsiz kredi başvurusu nasıl yapılır?</AccordionTrigger>
              <AccordionContent>
                Ziraat Bankası faizsiz kredi başvurusu için: 1) Ziraat Bankası mobil uygulaması veya internet şubesinden giriş yapın, 2) "Başvurular" menüsünden "Kredi Başvurusu"nu seçin, 3) Kimlik bilgilerinizi ve gelir belgenizi yükleyin, 4) Kredi tutarı ve vadesini belirleyin, 5) Başvurunuzu tamamlayın. Şubeye giderek de başvuru yapabilirsiniz.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>100 bin TL faizsiz kredi veren bankalar hangileridir?</AccordionTrigger>
              <AccordionContent>
                Güncel kampanyalarda 100.000 TL faizsiz kredi veren banka bulunmamaktadır. Ancak en yüksek faizsiz kredi limitleri İş Bankası (55.000 TL), QNB Finansbank, Akbank ve Garanti BBVA'da (45.000 TL) bulunmaktadır. Daha yüksek tutarlar için düşük faizli kredi seçenekleri değerlendirilebilir.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Akbank faizsiz kredi başvurusu nasıl yapılır?</AccordionTrigger>
              <AccordionContent>
                Akbank faizsiz kredi başvurusu için: 1) Akbank Mobil'i indirin, 2) "Yeni Müşteriyim" seçeneğinden hesap açın, 3) "Krediler" menüsünden "İhtiyaç Kredisi"ni seçin, 4) Faizsiz kredi kampanyasını seçin, 5) Gelir belgenizi yükleyin, 6) Başvurunuzu tamamlayın. Akbank.com üzerinden de başvuru yapabilirsiniz.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>İş Bankası Faizsiz kredi başvurusu nasıl yapılır?</AccordionTrigger>
              <AccordionContent>
                İş Bankası faizsiz kredi başvurusu için: 1) İşCep uygulamasını indirin, 2) "Müşterimiz Olun" seçeneğinden hesap açın, 3) "Krediler" bölümünden "İhtiyaç Kredisi"ni seçin, 4) Faizsiz kredi kampanyasını seçin, 5) Gerekli belgeleri yükleyin, 6) Başvurunuzu onaylayın. isbank.com.tr üzerinden de başvuru yapabilirsiniz.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>20 bin TL faizsiz kredi veren bankalar hangileridir?</AccordionTrigger>
              <AccordionContent>
                20.000 TL ve altı faizsiz kredi veren bankalar: QNB Finansbank, Akbank, Garanti BBVA (20.000 TL), DenizBank (25.000 TL), Enpara.com (10.000 TL), ON Dijital (15.000 TL) ve CEPTETEB bulunmaktadır. Her bankanın vade süreleri ve şartları farklılık gösterebilmektedir.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>0 faizli kredi veren bankalar hangileridir?</AccordionTrigger>
              <AccordionContent>
                2024 yılında %0 faizli kredi veren bankalar arasında QNB Finansbank, Akbank, Garanti BBVA, İş Bankası, DenizBank, Enpara.com, ON Dijital ve CEPTETEB yer almaktadır. Kampanyalar genellikle yeni müşterilere özel olup, kredi tutarları ve vade seçenekleri bankalara göre değişiklik göstermektedir.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>Garanti faizsiz kredi başvurusu nasıl yapılır?</AccordionTrigger>
              <AccordionContent>
                Garanti BBVA faizsiz kredi başvurusu için: 1) Garanti BBVA Mobil'i indirin, 2) "Müşteri Ol" seçeneğinden hesap açın, 3) "Krediler" menüsünden "İhtiyaç Kredisi"ni seçin, 4) Faizsiz kredi kampanyasını seçin, 5) Gelir belgenizi ve diğer gerekli evrakları yükleyin, 6) Başvurunuzu tamamlayın. garantibbva.com.tr üzerinden de başvuru yapabilirsiniz.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Index;
