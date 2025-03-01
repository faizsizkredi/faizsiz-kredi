
import { Building, Building2, Landmark, CircleDollarSign, Wallet } from "lucide-react";
import FilterContent from "@/components/filters/FilterContent";
import { useState } from "react";
import { Bank } from "@/types/bank";
import { getCurrentMonthYear } from "@/utils/dateUtils";
import { PageMeta } from "@/utils/seoUtils";

const RetiredIndex = () => {
  const [currentTab] = useState("retired");
  const currentDate = getCurrentMonthYear();
  const title = `Emekliye Özel Kredi Kampanyaları ${currentDate}`;
  const description = `${currentDate} ayına özel emeklilere özel kredi kampanyaları, düşük faizli krediler ve promosyon fırsatları. En avantajlı emekli kredisi teklifleri!`;
  const keywords = "emekli kredisi, emekliye özel kredi, emekli promosyonu, düşük faizli kredi, faizsiz kredi, emekli maaş kredisi";

  return (
    <>
      <PageMeta
        title={title}
        description={description}
        keywords={keywords}
        pageSlug="emekliye-kredi"
        pageType="page"
      />
      <FilterContent
        title={title}
        description={description}
        banks={RETIRED_BANKS}
        currentTab={currentTab}
        onSortChange={() => {}}
        faqItems={FAQ_ITEMS}
        additionalContent={
          <div className="mt-12 prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Emekliye Faizsiz Kredi Veren Bankalar Hangileri?</h2>
            <p className="text-gray-700 mb-6">
              2024 yılında emeklilere özel kredi kampanyaları sunan bankalar arasında Ziraat Bankası, Vakıfbank ve Halkbank öne çıkıyor. Ziraat Bankası %0 faiz oranıyla 100.000 TL'ye varan kredi imkanı sunarken, Vakıfbank %0.79'dan başlayan faiz oranlarıyla 150.000 TL'ye kadar kredi kullandırıyor. Halkbank ise %0.89 faiz oranıyla 125.000 TL'ye varan tutarlarda kredi seçenekleri sunuyor.
            </p>
            <p className="text-gray-700">
              Emekliler için özel olarak tasarlanan bu kredi kampanyaları, düşük faiz oranları ve uzun vade seçenekleriyle dikkat çekiyor. Başvuru yapmadan önce bankaların sunduğu promosyonları ve ek avantajları karşılaştırmanız, size en uygun seçeneği bulmanızda yardımcı olacaktır. Ayrıca, birçok banka emeklilere özel promosyon ödemeleri ve ücretsiz bankacılık hizmetleri de sunmaktadır.
            </p>
          </div>
        }
      />
    </>
  );
};

const RETIRED_BANKS = [
  {
    name: "Ziraat Bankası",
    icon: <Building className="w-8 h-8 text-green-600" />,
    specialOffer: "Emekliye Özel %0 Faizli Kredi!",
    interestRate: "%0",
    term: "36 Ay",
    amount: "100.000 TL",
    details: [
      "Emeklilere özel promosyon ödemesi",
      "Ücretsiz emekli maaş hesabı",
      "İnternet bankacılığında özel avantajlar"
    ],
    promotionScore: 95,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Vakıfbank",
    icon: <Building2 className="w-8 h-8 text-blue-700" />,
    specialOffer: "Emekli Dostu Kredi!",
    interestRate: "%0.79",
    term: "36 Ay",
    amount: "150.000 TL",
    details: [
      "Emekli promosyonu",
      "Özel bankacılık hizmetleri",
      "Masrafsız EFT/Havale"
    ],
    promotionScore: 92,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Halkbank",
    icon: <Landmark className="w-8 h-8 text-blue-600" />,
    specialOffer: "Emekliye Özel Avantajlı Kredi!",
    interestRate: "%0.89",
    term: "36 Ay",
    amount: "125.000 TL",
    details: [
      "Emekliye özel promosyon",
      "Ücretsiz hesap işletim ücreti",
      "İndirimli kredi kartı aidatı"
    ],
    promotionScore: 90,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "İş Bankası",
    icon: <Building2 className="w-8 h-8 text-purple-600" />,
    specialOffer: "Maximum Emekli Kredisi!",
    interestRate: "%0.99",
    term: "36 Ay",
    amount: "200.000 TL",
    details: [
      "Maximum kart ile ek avantajlar",
      "Emekliye özel sigorta indirimi",
      "7/24 özel müşteri hizmetleri"
    ],
    promotionScore: 88,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Garanti BBVA",
    icon: <Landmark className="w-8 h-8 text-green-700" />,
    specialOffer: "Bonus Emekli Kredisi!",
    interestRate: "%1.09",
    term: "36 Ay",
    amount: "175.000 TL",
    details: [
      "Bonus kart ile taksit avantajları",
      "Emekliye özel promosyon",
      "Ücretsiz para transferleri"
    ],
    promotionScore: 87,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "QNB Finansbank",
    icon: <Wallet className="w-8 h-8 text-purple-600" />,
    specialOffer: "CardFinans Emekli Kredisi!",
    interestRate: "%1.19",
    term: "36 Ay",
    amount: "150.000 TL",
    details: [
      "CardFinans ile özel indirimler",
      "Emekliye özel mevduat faizi",
      "Ücretsiz ATM kullanımı"
    ],
    promotionScore: 85,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Akbank",
    icon: <CircleDollarSign className="w-8 h-8 text-red-600" />,
    specialOffer: "Axess Emekli Kredisi!",
    interestRate: "%1.29",
    term: "36 Ay",
    amount: "160.000 TL",
    details: [
      "Axess kart ile ek taksit fırsatları",
      "Emekliye özel promosyon",
      "Dijital bankacılıkta ücretsiz işlemler"
    ],
    promotionScore: 84,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  }
];

const FAQ_ITEMS = [
  {
    question: "Emekli kredisi başvurusu için hangi belgeler gerekli?",
    answer: "Emekli maaş kartı veya emekli kimlik belgesi, nüfus cüzdanı ve gelir belgesi ile başvuru yapabilirsiniz. Bazı bankalar ek belgeler talep edebilir."
  },
  {
    question: "Emekliler için en avantajlı kredi hangi bankada?",
    answer: "Her bankanın sunduğu avantajlar farklılık gösterebilir. Ziraat Bankası, Vakıfbank ve Halkbank gibi kamu bankaları genellikle daha uygun faiz oranları ve promosyonlar sunmaktadır."
  },
  {
    question: "Emekli kredisi için yaş sınırı var mı?",
    answer: "Evet, bankalar genellikle 70-75 yaş üst sınırı uygulamaktadır. Kredi vadesi bittiğinde müşterinin yaşı bu sınırı geçmemelidir."
  }
];

export default RetiredIndex;
