
import { Building, Building2, Landmark, CircleDollarSign, Wallet } from "lucide-react";
import FilterContent from "@/components/filters/FilterContent";
import { useState } from "react";
import { Bank } from "@/types/bank";
import { getCurrentMonthYear } from "@/utils/dateUtils";
import { PageMeta } from "@/utils/seoUtils";

const BanksIndex = () => {
  const [currentTab] = useState("bank");
  const currentDate = getCurrentMonthYear();
  const title = `Tüm Bankalar ve Kredi Fırsatları ${currentDate}`;
  const description = `${currentDate} ayında Türkiye'deki tüm bankaların güncel kredi faiz oranları, kampanyaları ve başvuru koşulları. En avantajlı kredi fırsatları!`;
  const keywords = "bankalar, kredi veren bankalar, kredi başvurusu, faiz oranları, kredi kampanyaları";

  return (
    <>
      <PageMeta
        title={title}
        description={description}
        keywords={keywords}
        pageSlug="bankalar"
        pageType="page"
      />
      <FilterContent
        title={title}
        description={description}
        banks={ALL_BANKS}
        currentTab={currentTab}
        onSortChange={() => {}}
        faqItems={FAQ_ITEMS}
        additionalContent={
          <div className="mt-12 prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">2024 Yılında Kredi Veren Bankalar ve Güncel Faiz Oranları</h2>
            <p className="text-gray-700 mb-6">
              2024 yılında Türkiye'de faaliyet gösteren bankalar arasında Ziraat Bankası, İş Bankası, Garanti BBVA, Yapı Kredi ve Akbank öne çıkıyor. Bu bankalar, farklı ihtiyaçlara yönelik kredi seçenekleri ve rekabetçi faiz oranlarıyla dikkat çekiyor. Kamu bankaları genellikle daha uygun faiz oranları sunarken, özel bankalar dijital bankacılık hizmetleri ve hızlı başvuru süreçleriyle avantaj sağlıyor.
            </p>
            <p className="text-gray-700">
              Kredi başvurusu yapmadan önce, bankaların sunduğu faiz oranlarını, vade seçeneklerini ve ek masrafları karşılaştırmanız önerilir. Her bankanın kendine özgü avantajları ve kampanyaları bulunduğundan, ihtiyacınıza en uygun seçeneği belirlemek için detaylı araştırma yapmanız faydalı olacaktır.
            </p>
          </div>
        }
      />
    </>
  );
};

const ALL_BANKS: Bank[] = [
  {
    name: "Ziraat Bankası",
    icon: <Building className="w-8 h-8 text-green-600" />,
    specialOffer: "150 Yıllık Güven!",
    interestRate: "%1.89",
    term: "36 Ay",
    amount: "150.000 TL",
    details: [
      "Uygun faiz oranları",
      "Geniş şube ağı",
      "7/24 dijital bankacılık"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "İş Bankası",
    icon: <Building2 className="w-8 h-8 text-purple-600" />,
    specialOffer: "Türkiye'nin Bankası!",
    interestRate: "%1.98",
    term: "48 Ay",
    amount: "200.000 TL",
    details: [
      "Özel faiz oranları",
      "Maximum kart avantajları",
      "İşCep ile kolay başvuru"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Garanti BBVA",
    icon: <Landmark className="w-8 h-8 text-green-700" />,
    specialOffer: "Dijital Çözümler!",
    interestRate: "%2.05",
    term: "36 Ay",
    amount: "175.000 TL",
    details: [
      "Bonus kart avantajları",
      "Garanti BBVA Mobil ile anında başvuru",
      "Esnek ödeme seçenekleri"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Yapı Kredi",
    icon: <CircleDollarSign className="w-8 h-8 text-blue-800" />,
    specialOffer: "Hızlı Finansman!",
    interestRate: "%2.15",
    term: "24 Ay",
    amount: "125.000 TL",
    details: [
      "World kart ayrıcalıkları",
      "Yapı Kredi Mobil ile kolay başvuru",
      "Özel müşteri hizmetleri"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Akbank",
    icon: <Wallet className="w-8 h-8 text-red-600" />,
    specialOffer: "Dijital Bankacılıkta Öncü!",
    interestRate: "%2.25",
    term: "36 Ay",
    amount: "160.000 TL",
    details: [
      "Axess kart avantajları",
      "Akbank Mobil ile anında başvuru",
      "7/24 müşteri hizmetleri"
    ],
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  }
];

const FAQ_ITEMS = [
  {
    question: "Hangi banka daha uygun faiz oranı sunuyor?",
    answer: "Her bankanın sunduğu faiz oranları değişkenlik gösterebilir. Ziraat Bankası ve Halkbank gibi kamu bankaları genellikle daha uygun faiz oranları sunmaktadır."
  },
  {
    question: "Bankaların kredi başvuru süreçleri nasıl işliyor?",
    answer: "Çoğu banka artık dijital kanallar üzerinden kredi başvurusu kabul etmektedir. Mobil uygulamalar veya internet bankacılığı üzerinden başvuru yapabilirsiniz."
  },
  {
    question: "Kredi çekerken hangi belgelere ihtiyaç var?",
    answer: "Genel olarak kimlik belgesi, gelir belgesi ve ikametgah belgesi temel gereksinimlerdir. Bazı bankalar ek belgeler talep edebilir."
  }
];

export default BanksIndex;
