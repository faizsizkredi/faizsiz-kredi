
import { Building, Building2, Landmark, CircleDollarSign, Wallet } from "lucide-react";
import FilterContent from "@/components/filters/FilterContent";
import { useState } from "react";
import { Bank } from "@/types/bank";
import { getCurrentMonthYear } from "@/utils/dateUtils";
import { PageMeta } from "@/utils/seoUtils";

const NewCustomerIndex = () => {
  const [currentTab] = useState("newCustomer");
  const currentDate = getCurrentMonthYear();
  const title = `Yeni Müşteriye Kredi Veren Bankalar ${currentDate}`;
  const description = `${currentDate} ayına özel yeni müşterilere sunulan kredi kampanyaları, faizsiz kredi fırsatları ve avantajlı başvuru koşulları. En uygun yeni müşteri kredisi fırsatları!`;
  const keywords = "yeni müşteri kredisi, ilk kredi, hoş geldin kredisi, faizsiz kredi, dijital bankacılık";

  return (
    <>
      <PageMeta
        title={title}
        description={description}
        keywords={keywords}
        pageSlug="yeni-musteriye-kredi"
        pageType="other"
      />
      <FilterContent
        title={title}
        description={description}
        banks={NEW_CUSTOMER_BANKS}
        currentTab={currentTab}
        onSortChange={() => {}}
        faqItems={FAQ_ITEMS}
        additionalContent={
          <div className="mt-12 prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Yeni Müşterilere Özel Kredi Kampanyaları 2024</h2>
            <p className="text-gray-700 mb-6">
              2024 yılında bankalar, yeni müşterilerine özel avantajlı kredi kampanyaları sunuyor. QNB Finansbank %0 faiz oranıyla 45.000 TL'ye varan, Akbank 35.000 TL'ye varan, ING Bank ise 30.000 TL'ye varan faizsiz kredi imkanı sağlıyor. CEPTETEB ve Enpara gibi dijital bankalar da yeni müşterilerine özel fırsatlar ve masrafsız bankacılık hizmetleri sunuyor.
            </p>
            <p className="text-gray-700">
              Yeni müşteri kredilerinden yararlanmak için bankaların dijital kanallarını kullanabilir, hızlı ve kolay bir şekilde başvurunuzu tamamlayabilirsiniz. Başvuru öncesinde bankaların sunduğu kampanya koşullarını ve kredi limitlerini karşılaştırmanız, size en uygun seçeneği bulmanızda yardımcı olacaktır.
            </p>
          </div>
        }
      />
    </>
  );
};

const NEW_CUSTOMER_BANKS: Bank[] = [
  {
    name: "QNB Finansbank",
    icon: <Wallet className="w-8 h-8 text-purple-600" />,
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
    icon: <Building className="w-8 h-8 text-orange-600" />,
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
    name: "Enpara",
    icon: <Landmark className="w-8 h-8 text-purple-600" />,
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

export default NewCustomerIndex;
