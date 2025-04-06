
import { Building, Building2, Landmark, CircleDollarSign, Wallet } from "lucide-react";
import FilterContent from "@/components/filters/FilterContent";
import { useState } from "react";
import { Bank } from "@/types/bank";
import { getCurrentMonthYear } from "@/utils/dateUtils";
import { PageMeta } from "@/utils/seoUtils";
import { getCanonicalUrl } from "@/utils/canonicalUrls";

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
  const currentDate = getCurrentMonthYear();
  const title = `En Uygun Kredi Veren Bankalar ${currentDate}`;
  const description = `${currentDate} ayına özel en uygun faiz oranlarıyla kredi veren bankaların güncel faiz oranları ve başvuru koşulları. En düşük faizli kredi fırsatları!`;
  const keywords = "uygun kredi, düşük faizli kredi, ekonomik kredi, uygun faiz oranları, kredi karşılaştırma";
  const canonicalUrl = getCanonicalUrl("affordable");

  return (
    <>
      <PageMeta
        title={title}
        description={description}
        keywords={keywords}
        pageSlug="en-uygun-kredi"
        pageType="other"
        canonicalUrl={canonicalUrl}
      />
      <FilterContent
        title={`En Uygun Kredi Veren Bankalar ${currentDate}`}
        description={`${currentDate} ayına özel en uygun faiz oranlarıyla kredi veren bankaların güncel faiz oranları ve başvuru koşulları. En düşük faizli kredi fırsatları!`}
        banks={AFFORDABLE_BANKS}
        currentTab={currentTab}
        onSortChange={() => {}}
        faqItems={FAQ_ITEMS}
        additionalContent={
          <div className="mt-12 prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">En Uygun Kredi Veren Bankalar Hangileri?</h2>
            <p className="text-gray-700 mb-6">
              2024 yılında en uygun kredi veren bankalar arasında Ziraat Bankası, Halkbank ve Vakıfbank gibi kamu bankaları öne çıkıyor. Bu bankalar, düşük faiz oranları ve uzun vade seçenekleriyle dikkat çekiyor. Özellikle Ziraat Bankası %1.89'dan başlayan faiz oranlarıyla, Halkbank ise 48 aya varan vade seçenekleriyle avantajlı krediler sunuyor. Bunun yanında İş Bankası ve TEB gibi özel bankalar da rekabetçi faiz oranları ve esnek ödeme seçenekleriyle tüketicilere cazip fırsatlar sunmaktadır.
            </p>
            <p className="text-gray-700">
              En uygun kredi başvurusu yapmadan önce, bankaların sunduğu faiz oranlarını, vade seçeneklerini ve ek masrafları karşılaştırmanız önerilir. Ayrıca bankaların dijital kanallarını kullanarak online başvuru yapmanız, sürecin daha hızlı ve kolay ilerlemesini sağlayacaktır.
            </p>
          </div>
        }
      />
    </>
  );
};

export default AffordableIndex;
