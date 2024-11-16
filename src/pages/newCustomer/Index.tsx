import { Building, Building2, Landmark, CircleDollarSign, Wallet } from "lucide-react";
import FilterContent from "@/components/filters/FilterContent";
import { useState } from "react";
import { Bank } from "@/types/bank";

const NEW_CUSTOMER_BANKS: Bank[] = [
  {
    name: "QNB Finansbank",
    icon: <Building className="w-8 h-8 text-purple-600" />,
    specialOffer: "Yeni Müşteri Özel!",
    interestRate: "%0",
    term: "6 Ay",
    amount: "45.000 TL",
    details: [
      "%0 faiz ile 45.000 TL kredi",
      "6 ay vade imkanı",
      "Masrafsız kullandırım"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Akbank",
    icon: <Building2 className="w-8 h-8 text-red-600" />,
    specialOffer: "İlk Krediye Özel!",
    interestRate: "%0",
    term: "3 Ay",
    amount: "35.000 TL",
    details: [
      "Yeni müşterilere özel fırsatlar",
      "3 ay vade seçeneği",
      "Online başvuru imkanı"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "ING Bank",
    icon: <Landmark className="w-8 h-8 text-orange-600" />,
    specialOffer: "Hoş Geldin Kredisi!",
    interestRate: "%0",
    term: "4 Ay",
    amount: "30.000 TL",
    details: [
      "Yeni müşterilere özel avantajlar",
      "Dijital başvuru kolaylığı",
      "Hızlı onay süreci"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "CEPTETEB",
    icon: <CircleDollarSign className="w-8 h-8 text-blue-600" />,
    specialOffer: "Dijital Hoş Geldin!",
    interestRate: "%0",
    term: "3 Ay",
    amount: "25.000 TL",
    details: [
      "Şubesiz bankacılık avantajı",
      "Mobil onay imkanı",
      "Anında başvuru sonucu"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Enpara.com",
    icon: <Wallet className="w-8 h-8 text-purple-600" />,
    specialOffer: "Dijital Müşteri Özel!",
    interestRate: "%0",
    term: "6 Ay",
    amount: "40.000 TL",
    details: [
      "Masrafsız bankacılık",
      "7/24 dijital hizmet",
      "Hızlı kredi kullandırım"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  }
];

const FAQ_ITEMS = [
  {
    question: "Yeni müşteri kredisi için hangi belgeler gerekli?",
    answer: "Genellikle kimlik belgesi ve gelir belgesi yeterlidir. Bazı bankalar ek olarak ikametgah belgesi isteyebilir."
  },
  {
    question: "Yeni müşteri kredisi başvurusu nasıl yapılır?",
    answer: "Bankaların mobil uygulamaları veya internet siteleri üzerinden kolayca başvuru yapabilirsiniz. Bazı bankalar video görüşme ile kimlik doğrulama yapabilmektedir."
  },
  {
    question: "Yeni müşteri kredilerinde masraf alınıyor mu?",
    answer: "Bazı bankalar dosya masrafı veya tahsis ücreti alabilir. Başvuru öncesi tüm masrafları öğrenmeniz önerilir."
  }
];

const NewCustomerIndex = () => {
  const [currentTab] = useState("newCustomer");

  return (
    <FilterContent
      title="Yeni Müşteriye Kredi Veren Bankalar 2024"
      description="2024 yılında yeni müşterilere özel kredi veren bankaların güncel kampanyaları ve başvuru koşulları. En avantajlı yeni müşteri kredisi fırsatları!"
      banks={NEW_CUSTOMER_BANKS}
      currentTab={currentTab}
      onSortChange={() => {}}
      faqItems={FAQ_ITEMS}
    />
  );
};

export default NewCustomerIndex;