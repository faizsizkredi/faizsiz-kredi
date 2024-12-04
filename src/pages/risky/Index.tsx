import { Building, Building2, Landmark, CircleDollarSign, Wallet } from "lucide-react";
import FilterContent from "@/components/filters/FilterContent";
import { useState } from "react";
import { Bank } from "@/types/bank";

const RISKY_BANKS: Bank[] = [
  {
    name: "Akbank",
    icon: <Building2 className="w-8 h-8 text-red-600" />,
    specialOffer: "Riskli Müşterilere Özel!",
    interestRate: "%2.89",
    term: "36 Ay",
    amount: "50.000 TL",
    details: [
      "Kredi notu düşük müşteriler için özel değerlendirme",
      "Esnek ödeme seçenekleri",
      "Hızlı kredi tahsis süreci"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Yapı Kredi",
    icon: <CircleDollarSign className="w-8 h-8 text-blue-800" />,
    specialOffer: "İkinci Şans Kredisi!",
    interestRate: "%2.95",
    term: "24 Ay",
    amount: "35.000 TL",
    details: [
      "Kredi sicili bozuk müşteriler için özel değerlendirme",
      "24 ay vade imkanı",
      "Minimum evrak ile başvuru"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "QNB Finansbank",
    icon: <Wallet className="w-8 h-8 text-purple-600" />,
    specialOffer: "Temiz Sayfa Kredisi",
    interestRate: "%2.99",
    term: "48 Ay",
    amount: "25.000 TL",
    details: [
      "Kredi geçmişi olmayanlar için özel değerlendirme",
      "48 aya varan vade seçenekleri",
      "Gelir belgesiz başvuru imkanı"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "ING Bank",
    icon: <Building className="w-8 h-8 text-orange-600" />,
    specialOffer: "Yeniden Başla Kredisi",
    interestRate: "%3.15",
    term: "36 Ay",
    amount: "30.000 TL",
    details: [
      "Kara listede olanlar için özel değerlendirme",
      "Esnek ödeme planı",
      "7/24 online başvuru imkanı"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Denizbank",
    icon: <Landmark className="w-8 h-8 text-blue-600" />,
    specialOffer: "Yeni Fırsat Kredisi",
    interestRate: "%3.25",
    term: "24 Ay",
    amount: "20.000 TL",
    details: [
      "Düşük kredi notuna özel değerlendirme",
      "Kefilsiz kredi imkanı",
      "Aynı gün sonuç"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  }
];

const FAQ_ITEMS = [
  {
    question: "Kredi notum düşükken nasıl kredi alabilirim?",
    answer: "Kredi notunuz düşük olsa bile bazı bankalar özel değerlendirme süreçleriyle kredi verebilmektedir. Yukarıdaki bankaların her biri, kredi notu düşük müşteriler için özel değerlendirme süreçlerine sahiptir."
  },
  {
    question: "Kara listede olanlara kredi veren bankalar hangileridir?",
    answer: "Bazı bankalar, kara listede olan müşteriler için özel değerlendirme süreçleri uygulayabilmektedir. İkinci Şans Bank ve Risk Dostu Bank gibi bankalar, bu durumdaki müşteriler için özel kredi paketleri sunmaktadır."
  },
  {
    question: "Riskli müşterilere kredi başvurusu için gerekli belgeler nelerdir?",
    answer: "Genellikle kimlik, gelir belgesi ve ikametgah belgesi temel gereksinimlerdir. Bazı bankalar ek teminat veya kefil isteyebilir. Her bankanın gereksinimleri farklılık gösterebilir."
  }
];

const RiskyIndex = () => {
  const [currentTab] = useState("risky");

  return (
    <FilterContent
      title="Riskli Müşteriye Kredi Veren Bankalar 2024"
      description="2024 yılında riskli müşterilere, kredi notu düşük olanlara ve kara listedeki kişilere kredi veren bankaların güncel faiz oranları ve başvuru koşulları. En uygun riskli müşteri kredisi fırsatları!"
      banks={RISKY_BANKS}
      currentTab={currentTab}
      onSortChange={() => {}}
      faqItems={FAQ_ITEMS}
      additionalContent={
        <div className="mt-12 prose max-w-none">
          <h2 className="text-2xl font-bold mb-4">Riskli Müşteriye Kredi Veren Bankalar Hangileri?</h2>
          <p className="text-gray-700 mb-6">
            Kredi notu düşük veya kara listede olan müşteriler için özel kredi seçenekleri sunan bankalar bulunmaktadır. Bu bankalar arasında Akbank, Yapı Kredi, QNB Finansbank, ING Bank ve Denizbank öne çıkmaktadır. Her banka farklı risk değerlendirme kriterleri kullanmakta ve buna göre kredi limiti ve faiz oranı belirlemektedir. Riskli müşteri kategorisinde değerlendirilen kişiler için özel hazırlanmış kredi paketleri, daha esnek ödeme seçenekleri ve alternatif değerlendirme kriterleri sunulmaktadır.
          </p>
          <p className="text-gray-700 mb-6">
            Bankalar, riskli müşterilere kredi verirken genellikle ek teminat veya kefil talep edebilmektedir. Ayrıca, risk seviyesine göre daha yüksek faiz oranları uygulanabilmektedir. Ancak, düzenli ödemeler yapıldıkça kredi notu yükselecek ve daha avantajlı kredilere erişim imkanı artacaktır. Riskli müşteriler için en uygun kredi seçeneğini bulmak adına, bankaların sunduğu farklı kampanyaları karşılaştırmak ve başvuru şartlarını detaylı incelemek önemlidir.
          </p>
        </div>
      }
    />
  );
};

export default RiskyIndex;