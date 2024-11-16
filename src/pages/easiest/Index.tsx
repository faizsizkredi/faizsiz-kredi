import { Building, Wallet, BadgePercent, CreditCard, PiggyBank } from "lucide-react";
import FilterContent from "@/components/filters/FilterContent";
import { useState } from "react";
import { Bank } from "@/types/bank";

const EASY_BANKS: Bank[] = [
  {
    name: "Kolay Kredi Bank",
    icon: <CreditCard className="w-8 h-8 text-blue-600" />,
    specialOffer: "Anında Onay!",
    interestRate: "%2.45",
    term: "36 Ay",
    amount: "75.000 TL",
    details: [
      "5 dakikada kredi onayı",
      "Minimum evrak",
      "Online başvuru imkanı"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Hızlı Bank",
    icon: <Building className="w-8 h-8 text-green-600" />,
    specialOffer: "SMS ile Başvuru!",
    interestRate: "%2.55",
    term: "24 Ay",
    amount: "50.000 TL",
    details: [
      "SMS ile anında başvuru",
      "Gelir belgesiz kredi",
      "Şubeye gitmeye gerek yok"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Pratik Bank",
    icon: <Wallet className="w-8 h-8 text-purple-600" />,
    specialOffer: "E-Devlet ile Başvuru",
    interestRate: "%2.65",
    term: "48 Ay",
    amount: "100.000 TL",
    details: [
      "E-Devlet ile kolay başvuru",
      "10 dakikada sonuç",
      "7/24 başvuru imkanı"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Digital Bank",
    icon: <BadgePercent className="w-8 h-8 text-red-600" />,
    specialOffer: "Mobil Onay!",
    interestRate: "%2.75",
    term: "36 Ay",
    amount: "60.000 TL",
    details: [
      "Mobil uygulama üzerinden başvuru",
      "Video görüşme ile kimlik teyidi",
      "Anında hesaba transfer"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Smart Bank",
    icon: <PiggyBank className="w-8 h-8 text-orange-600" />,
    specialOffer: "QR ile Başvuru",
    interestRate: "%2.85",
    term: "24 Ay",
    amount: "45.000 TL",
    details: [
      "QR kod ile hızlı başvuru",
      "Yapay zeka ile kredi değerlendirme",
      "Masrafsız kullandırım"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  }
];

const FAQ_ITEMS = [
  {
    question: "En kolay kredi başvurusu nasıl yapılır?",
    answer: "En kolay kredi başvurusu genellikle bankaların mobil uygulamaları veya internet siteleri üzerinden yapılabilmektedir. E-Devlet entegrasyonu, SMS ile başvuru ve QR kod ile başvuru gibi seçenekler mevcuttur."
  },
  {
    question: "Hangi bankalar gelir belgesiz kredi veriyor?",
    answer: "Bazı bankalar, özellikle düşük tutarlı krediler için gelir belgesi talep etmeyebilir. Hızlı Bank ve Smart Bank gibi bankalar, belirli limitler dahilinde gelir belgesiz kredi kullandırabilmektedir."
  },
  {
    question: "Online kredi başvurusu için gerekli belgeler nelerdir?",
    answer: "Online kredi başvurusu için genellikle sadece kimlik bilgileriniz yeterlidir. E-Devlet üzerinden yapılan başvurularda ek belge talep edilmemektedir. Bazı bankalar video görüşme ile kimlik teyidi yapabilmektedir."
  }
];

const EasyIndex = () => {
  const [currentTab] = useState("easiest");

  return (
    <FilterContent
      title="En Kolay Kredi Veren Bankalar 2024"
      description="2024 yılında en kolay ve en hızlı kredi veren bankaların güncel faiz oranları ve başvuru koşulları. Minimum evrak ve hızlı onay ile kredi fırsatları!"
      banks={EASY_BANKS}
      currentTab={currentTab}
      onSortChange={() => {}}
      faqItems={FAQ_ITEMS}
    />
  );
};

export default EasyIndex;