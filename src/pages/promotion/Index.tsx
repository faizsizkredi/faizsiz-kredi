import { Building, Building2, Landmark, CircleDollarSign, Wallet } from "lucide-react";
import FilterContent from "@/components/filters/FilterContent";
import { useState } from "react";
import { Bank } from "@/types/bank";

const PROMOTION_BANKS: Bank[] = [
  {
    name: "Akbank",
    icon: <Building2 className="w-8 h-8 text-red-600" />,
    specialOffer: "10.000 TL Nakit Hediye!",
    interestRate: "%2.45",
    term: "36 Ay",
    amount: "100.000 TL",
    details: [
      "Kredi kullanımında 10.000 TL nakit hediye",
      "Ücretsiz kredi kartı",
      "1 yıl ücretsiz kiralık kasa"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Garanti BBVA",
    icon: <Landmark className="w-8 h-8 text-green-700" />,
    specialOffer: "iPhone 15 Hediye!",
    interestRate: "%2.55",
    term: "24 Ay",
    amount: "75.000 TL",
    details: [
      "Kredi kullanımında iPhone 15 hediye",
      "3 ay ertelemeli ödeme",
      "Ücretsiz havale/EFT"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Yapı Kredi",
    icon: <CircleDollarSign className="w-8 h-8 text-blue-800" />,
    specialOffer: "50.000 Bonus Puan!",
    interestRate: "%2.65",
    term: "48 Ay",
    amount: "150.000 TL",
    details: [
      "50.000 bonus puan hediye",
      "Faizsiz taksit fırsatları",
      "Özel indirim kampanyaları"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "İş Bankası",
    icon: <Building2 className="w-8 h-8 text-purple-800" />,
    specialOffer: "Tatil Hediye!",
    interestRate: "%2.75",
    term: "36 Ay",
    amount: "120.000 TL",
    details: [
      "5 yıldızlı otelde 1 hafta tatil hediye",
      "Ücretsiz araç bakım paketi",
      "Özel sağlık sigortası"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "QNB Finansbank",
    icon: <Wallet className="w-8 h-8 text-purple-600" />,
    specialOffer: "Altın Hediye!",
    interestRate: "%2.85",
    term: "24 Ay",
    amount: "90.000 TL",
    details: [
      "50 gram altın hediye",
      "Ücretsiz kargo çeki",
      "Market alışverişlerinde %10 indirim"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  }
];

const FAQ_ITEMS = [
  {
    question: "Promosyonlu kredi kampanyalarından nasıl yararlanabilirim?",
    answer: "Promosyonlu kredi kampanyalarından yararlanmak için bankaların web siteleri veya mobil uygulamaları üzerinden başvuru yapabilirsiniz. Kampanya şartlarını dikkatle inceleyip, gerekli belgeleri hazırlamanız önemlidir."
  },
  {
    question: "Promosyon hediyelerini ne zaman alabilirim?",
    answer: "Promosyon hediyeleri genellikle kredi kullandırımından sonra 1-3 ay içerisinde teslim edilmektedir. Her bankanın farklı teslim süreleri olabilir, kampanya detaylarını incelemeniz önerilir."
  },
  {
    question: "En yüksek promosyon veren bankalar hangileridir?",
    answer: "2024 yılında en yüksek promosyon veren bankalar arasında Promosyon Bank (10.000 TL nakit), Hediye Bank (iPhone 15) ve Bonus Bank (50.000 bonus puan) öne çıkmaktadır."
  }
];

const PromotionIndex = () => {
  const [currentTab] = useState("promotion");

  return (
    <FilterContent
      title="Promosyonlu Kredi Veren Bankalar 2024"
      description="2024 yılında en yüksek promosyon ve hediye veren bankaların güncel kredi kampanyaları. Nakit para, telefon, altın ve tatil gibi hediyelerle kredi fırsatları!"
      banks={PROMOTION_BANKS}
      currentTab={currentTab}
      onSortChange={() => {}}
      faqItems={FAQ_ITEMS}
    />
  );
};

export default PromotionIndex;