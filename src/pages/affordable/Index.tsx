import { Building, Building2, Landmark, CircleDollarSign, Wallet } from "lucide-react";
import FilterContent from "@/components/filters/FilterContent";
import { useState } from "react";
import { Bank } from "@/types/bank";

const AFFORDABLE_BANKS: Bank[] = [
  {
    name: "Ziraat Bankası",
    icon: <Building className="w-8 h-8 text-green-600" />,
    specialOffer: "En Uygun Faiz Oranları!",
    interestRate: "%1.89",
    term: "36 Ay",
    amount: "150.000 TL",
    details: [
      "Düşük faiz oranları",
      "Esnek ödeme seçenekleri",
      "Masrafsız kullandırım"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Halkbank",
    icon: <Building2 className="w-8 h-8 text-blue-600" />,
    specialOffer: "Uygun Faizli Kredi!",
    interestRate: "%1.92",
    term: "48 Ay",
    amount: "125.000 TL",
    details: [
      "Düşük faizli kredi imkanı",
      "48 aya varan vade",
      "Anında başvuru sonucu"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Vakıfbank",
    icon: <Landmark className="w-8 h-8 text-red-600" />,
    specialOffer: "Ekonomik Kredi!",
    interestRate: "%1.95",
    term: "36 Ay",
    amount: "100.000 TL",
    details: [
      "Uygun faiz oranları",
      "Hızlı kredi kullandırım",
      "Online başvuru imkanı"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "İş Bankası",
    icon: <CircleDollarSign className="w-8 h-8 text-purple-600" />,
    specialOffer: "Avantajlı Faiz!",
    interestRate: "%1.98",
    term: "24 Ay",
    amount: "80.000 TL",
    details: [
      "Rekabetçi faiz oranları",
      "Esnek vade seçenekleri",
      "İşCep'ten kolay başvuru"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "TEB",
    icon: <Wallet className="w-8 h-8 text-teal-600" />,
    specialOffer: "Ekonomik Paket!",
    interestRate: "%2.05",
    term: "36 Ay",
    amount: "90.000 TL",
    details: [
      "Uygun faiz oranları",
      "Özel müşteri avantajları",
      "Online başvuru kolaylığı"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  }
];

const FAQ_ITEMS = [
  {
    question: "En uygun kredi faiz oranları nasıl belirlenir?",
    answer: "Kredi faiz oranları bankaların risk değerlendirmesi, piyasa koşulları ve merkez bankası politikalarına göre belirlenir. En uygun oranlar için birden fazla bankayı karşılaştırmanız önerilir."
  },
  {
    question: "En uygun kredi başvurusu için hangi belgeler gerekli?",
    answer: "Genellikle kimlik belgesi, gelir belgesi ve ikametgah belgesi temel gereksinimlerdir. Her bankanın kendine özel ek belge talepleri olabilir."
  },
  {
    question: "Online kredi başvurusu yapılabilir mi?",
    answer: "Evet, birçok banka internet bankacılığı veya mobil uygulamaları üzerinden online kredi başvurusu imkanı sunmaktadır."
  }
];

const AffordableIndex = () => {
  const [currentTab] = useState("affordable");

  return (
    <FilterContent
      title="En Uygun Kredi Veren Bankalar 2024"
      description="2024 yılında en uygun faiz oranlarıyla kredi veren bankaların güncel faiz oranları ve başvuru koşulları. En düşük faizli kredi fırsatları!"
      banks={AFFORDABLE_BANKS}
      currentTab={currentTab}
      onSortChange={() => {}}
      faqItems={FAQ_ITEMS}
    />
  );
};

export default AffordableIndex;