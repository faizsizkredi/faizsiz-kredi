
import { Building, Building2, Landmark, CircleDollarSign, Wallet } from "lucide-react";
import FilterContent from "@/components/filters/FilterContent";
import { useState } from "react";
import { Bank } from "@/types/bank";
import { getCurrentMonthYear } from "@/utils/dateUtils";
import { Helmet } from "react-helmet";
import { getPageUrls } from "@/utils/canonicalUrls";

const ZeroInterestIndex = () => {
  const [currentTab] = useState("zeroInterest");
  const currentDate = getCurrentMonthYear();
  const { canonical, homepage } = getPageUrls('sifir-faizli-kredi', 'generic');
  
  const pageTitle = `Sıfır (0) Faizli Kredi Veren Bankalar ${currentDate}`;
  const pageDescription = `${currentDate} ayına özel faizsiz kredi kampanyaları ve %0 faiz oranlı krediler. En avantajlı faizsiz kredi fırsatları!`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`sıfır faizli kredi, faizsiz kredi, 0 faiz kredi, kredi kampanyaları, ${currentDate}`} />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" href={homepage} hrefLang="tr" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
      </Helmet>
      
      <FilterContent
        title={pageTitle}
        description={pageDescription}
        banks={ZERO_INTEREST_BANKS}
        currentTab={currentTab}
        onSortChange={() => {}}
        faqItems={FAQ_ITEMS}
        additionalContent={
          <div className="mt-12 prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Faizsiz Kredi Kampanyaları ve Başvuru Koşulları</h2>
            <p className="text-gray-700 mb-6">
              2024 yılında birçok banka, özellikle yeni müşterilerine özel faizsiz kredi kampanyaları sunuyor. Yapı Kredi 50.000 TL'ye varan tutarlarda 6 ay vadeli, Garanti BBVA 30.000 TL'ye kadar 3 ay vadeli, QNB Finansbank ise 40.000 TL'ye varan tutarlarda 4 ay vadeli faizsiz kredi imkanı sağlıyor. ING Bank ve HSBC gibi bankalar da benzer kampanyalarla müşterilerine avantajlı fırsatlar sunuyor.
            </p>
            <p className="text-gray-700">
              Faizsiz kredi kampanyalarından yararlanmak için genellikle yeni müşteri olma şartı aranıyor. Başvurular çoğunlukla dijital kanallar üzerinden yapılabiliyor ve hızlı sonuç alınabiliyor. Kredi başvurusu yapmadan önce bankaların sunduğu vade seçeneklerini ve kredi tutarlarını karşılaştırmanız önerilir.
            </p>
          </div>
        }
      />
    </>
  );
};

const ZERO_INTEREST_BANKS: Bank[] = [
  {
    name: "Yapı Kredi",
    icon: <CircleDollarSign className="w-8 h-8 text-blue-800" />,
    specialOffer: "Sıfır Faiz Fırsatı!",
    interestRate: "%0",
    term: "6 Ay",
    amount: "50.000 TL",
    details: [
      "6 ay vade ile %0 faiz",
      "Masrafsız kullandırım",
      "Anında onay"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Garanti BBVA",
    icon: <Landmark className="w-8 h-8 text-green-700" />,
    specialOffer: "Faizsiz Kredi!",
    interestRate: "%0",
    term: "3 Ay",
    amount: "30.000 TL",
    details: [
      "3 ay vade ile faizsiz kredi",
      "Hızlı başvuru süreci",
      "Online onay"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "QNB Finansbank",
    icon: <Wallet className="w-8 h-8 text-purple-600" />,
    specialOffer: "Sıfır Faiz Kampanyası!",
    interestRate: "%0",
    term: "4 Ay",
    amount: "40.000 TL",
    details: [
      "4 ay vade ile %0 faiz",
      "Masrafsız kullandırım",
      "Dijital başvuru imkanı"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "ING Bank",
    icon: <Building className="w-8 h-8 text-orange-600" />,
    specialOffer: "Faizsiz İhtiyaç Kredisi!",
    interestRate: "%0",
    term: "3 Ay",
    amount: "25.000 TL",
    details: [
      "3 ay vade ile faizsiz kredi",
      "Minimum evrak",
      "Online başvuru"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "HSBC",
    icon: <Building2 className="w-8 h-8 text-red-600" />,
    specialOffer: "Sıfır Faiz Avantajı!",
    interestRate: "%0",
    term: "6 Ay",
    amount: "35.000 TL",
    details: [
      "6 ay vade ile faizsiz kredi",
      "Hızlı değerlendirme",
      "Şubesiz başvuru"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  }
];

const FAQ_ITEMS = [
  {
    question: "Sıfır faizli kredi nasıl alınır?",
    answer: "Sıfır faizli kredi kampanyalarından yararlanmak için bankaların web siteleri veya mobil uygulamaları üzerinden başvuru yapabilirsiniz. Genellikle yeni müşterilere özel kampanyalar sunulmaktadır."
  },
  {
    question: "Sıfır faizli kredilerde gizli masraf var mı?",
    answer: "Bazı bankalar dosya masrafı veya kredi tahsis ücreti alabilir. Başvuru öncesi tüm masrafları öğrenmeniz önerilir."
  },
  {
    question: "Sıfır faizli kredi için gereken şartlar nelerdir?",
    answer: "Genellikle düzenli gelir, temiz kredi geçmişi ve minimum kredi notu şartları aranır. Her bankanın kendine özel şartları olabilir."
  }
];

export default ZeroInterestIndex;
