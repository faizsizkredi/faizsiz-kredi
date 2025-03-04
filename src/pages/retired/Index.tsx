import { Building, Building2, Landmark, CircleDollarSign, Wallet } from "lucide-react";
import FilterContent from "@/components/filters/FilterContent";
import { useState } from "react";
import { Bank } from "@/types/bank";
import { getCurrentMonthYear } from "@/utils/dateUtils";
import { PageMeta } from "@/utils/seoUtils";
import RetiredSchema from "@/components/retired/RetiredSchema";
import RetiredBreadcrumb from "@/components/retired/RetiredBreadcrumb";
import RetiredComparison from "@/components/retired/RetiredComparison";
import RetiredBenefits from "@/components/retired/RetiredBenefits";

const RetiredIndex = () => {
  const [currentTab] = useState("retired");
  const currentDate = "Mart 2025";
  const title = `Emekliye Faizsiz Kredi Veren Bankalar - ${currentDate}`;
  const description = `${currentDate} ayına özel emeklilere özel faizsiz ve düşük faizli kredi kampanyaları, promosyon fırsatları ve başvuru koşulları. Ziraat Bankası, Vakıfbank, Halkbank gibi bankalardan emekliye özel kredi fırsatları!`;
  const keywords = "emekli kredisi, emekliye özel kredi, emekli promosyonu, emekliye faizsiz kredi, düşük faizli kredi, emekli maaş kredisi, emekli ihtiyaç kredisi";

  // SEO için ek bilgiler
  const canonicalUrl = "https://faizsizkrediverenbankalar.com/emekliye-kredi";
  const pageKeywords = keywords;
  const metaDescription = description;

  return (
    <>
      <PageMeta
        title={title}
        description={metaDescription}
        keywords={pageKeywords}
        pageSlug="emekliye-kredi"
        pageType="other"
        canonicalUrl={canonicalUrl}
      />
      <RetiredSchema currentDate={currentDate} banks={RETIRED_BANKS} />
      <RetiredBreadcrumb />
      <FilterContent
        title={title}
        description={description}
        banks={RETIRED_BANKS}
        currentTab={currentTab}
        onSortChange={() => {}}
        faqItems={FAQ_ITEMS}
        additionalContent={
          <>
            <RetiredBenefits />
            <RetiredComparison banks={RETIRED_BANKS} />
            <div className="mt-12 prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">Emekliye Faizsiz Kredi Veren Bankalar Hangileri?</h2>
              <p className="text-gray-700 mb-6">
                {currentDate} yılında emeklilere özel faizsiz ve düşük faizli kredi kampanyaları sunan bankalar arasında Ziraat Bankası, Vakıfbank ve Halkbank öne çıkıyor. Ziraat Bankası %0 faiz oranıyla 100.000 TL'ye varan kredi imkanı sunarken, Vakıfbank %0.79'dan başlayan faiz oranlarıyla 150.000 TL'ye kadar kredi kullandırıyor. Halkbank ise %0.89 faiz oranıyla 125.000 TL'ye varan tutarlarda kredi seçenekleri sunuyor.
              </p>
              <p className="text-gray-700 mb-6">
                Emekliler için özel olarak tasarlanan bu kredi kampanyaları, düşük faiz oranları ve uzun vade seçenekleriyle dikkat çekiyor. Başvuru yapmadan önce bankaların sunduğu promosyonları ve ek avantajları karşılaştırmanız, size en uygun seçeneği bulmanızda yardımcı olacaktır. Ayrıca, birçok banka emeklilere özel promosyon ödemeleri ve ücretsiz bankacılık hizmetleri de sunmaktadır.
              </p>
              <h3 className="text-xl font-bold mb-3">Emekliye Faizsiz Kredi Başvurusu Nasıl Yapılır?</h3>
              <p className="text-gray-700 mb-6">
                Emeklilere özel faizsiz kredi başvurusu yapmak için aşağıdaki yöntemleri kullanabilirsiniz:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2">Bankaların internet şubelerinden online başvuru yapabilirsiniz.</li>
                <li className="mb-2">Mobil bankacılık uygulamaları üzerinden hızlı başvuru imkanı bulunmaktadır.</li>
                <li className="mb-2">En yakın banka şubesine giderek yüz yüze başvuru yapabilirsiniz.</li>
                <li className="mb-2">Bazı bankalar telefon bankacılığı üzerinden de başvuru kabul etmektedir.</li>
                <li>E-Devlet üzerinden entegre başvuru sistemleri mevcuttur.</li>
              </ul>
              <p className="text-gray-700">
                Başvuru sırasında genellikle emekli kimlik kartınız veya SGK'dan alınacak emekli belgesi, nüfus cüzdanınız ve gelir durumunuzu gösteren belgeler talep edilmektedir. Bazı bankalar ek belge talep edebilir veya gelir belgesi olmadan da başvuru yapmanıza olanak tanıyabilir. Kredi onayınız, kredi notunuz, gelir durumunuz ve diğer bankacılık geçmişiniz değerlendirilerek verilecektir.
              </p>
            </div>
          </>
        }
      />
    </>
  );
};

const RETIRED_BANKS: Bank[] = [
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
    lastUpdate: new Date().toLocaleDateString('tr-TR'),
    metaDescription: "Ziraat Bankası'ndan emeklilere özel %0 faiz oranlı 100.000 TL'ye varan kredi imkanı. Hemen başvurun, anında sonuç alın.",
    canonicalUrl: "https://faizsizkrediverenbankalar.com/emekliye-kredi/ziraat-bankasi",
    pageKeywords: "Ziraat Bankası emekli kredisi, emekliye faizsiz kredi, emekli promosyonu Ziraat"
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
    lastUpdate: new Date().toLocaleDateString('tr-TR'),
    metaDescription: "Vakıfbank'tan emeklilere özel %0.79 faiz oranlı 150.000 TL'ye varan kredi fırsatı. Hemen başvurun, anında sonuç alın.",
    canonicalUrl: "https://faizsizkrediverenbankalar.com/emekliye-kredi/vakifbank",
    pageKeywords: "Vakıfbank emekli kredisi, emekliye özel kredi, emekli promosyonu Vakıfbank"
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
      "Indirimli kredi kartı aidatı"
    ],
    promotionScore: 90,
    lastUpdate: new Date().toLocaleDateString('tr-TR'),
    metaDescription: "Halkbank'dan emeklilere özel %0.89 faiz oranlı 125.000 TL'ye varan kredi fırsatı. Hemen başvurun, anında sonuç alın.",
    canonicalUrl: "https://faizsizkrediverenbankalar.com/emekliye-kredi/halkbank",
    pageKeywords: "Halkbank emekli kredisi, emekliye özel kredi, emekli promosyonu Halkbank"
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
    lastUpdate: new Date().toLocaleDateString('tr-TR'),
    metaDescription: "İş Bankası'dan emeklilere özel %0.99 faiz oranlı 200.000 TL'ye varan kredi fırsatı. Hemen başvurun, anında sonuç alın.",
    canonicalUrl: "https://faizsizkrediverenbankalar.com/emekliye-kredi/is-bankasi",
    pageKeywords: "İş Bankası emekli kredisi, emekliye özel kredi, emekli promosyonu İş Bankası"
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
    lastUpdate: new Date().toLocaleDateString('tr-TR'),
    metaDescription: "Garanti BBVA'dan emeklilere özel %1.09 faiz oranlı 175.000 TL'ye varan kredi fırsatı. Hemen başvurun, anında sonuç alın.",
    canonicalUrl: "https://faizsizkrediverenbankalar.com/emekliye-kredi/garanti-bbva",
    pageKeywords: "Garanti BBVA emekli kredisi, emekliye özel kredi, emekli promosyonu Garanti BBVA"
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
    lastUpdate: new Date().toLocaleDateString('tr-TR'),
    metaDescription: "QNB Finansbank'dan emeklilere özel %1.19 faiz oranlı 150.000 TL'ye varan kredi fırsatı. Hemen başvurun, anında sonuç alın.",
    canonicalUrl: "https://faizsizkrediverenbankalar.com/emekliye-kredi/qnb-finansbank",
    pageKeywords: "QNB Finansbank emekli kredisi, emekliye özel kredi, emekli promosyonu QNB Finansbank"
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
    lastUpdate: new Date().toLocaleDateString('tr-TR'),
    metaDescription: "Akbank'dan emeklilere özel %1.29 faiz oranlı 160.000 TL'ye varan kredi fırsatı. Hemen başvurun, anında sonuç alın.",
    canonicalUrl: "https://faizsizkrediverenbankalar.com/emekliye-kredi/akbank",
    pageKeywords: "Akbank emekli kredisi, emekliye özel kredi, emekli promosyonu Akbank"
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
  },
  {
    question: "Emekliler faizsiz kredi kullanabilir mi?",
    answer: "Evet, özellikle kamu bankaları belirli dönemlerde emeklilere özel faizsiz kredi kampanyaları düzenlemektedir. Ayrıca maaş müşterisi olan emeklilere özel düşük faizli veya faizsiz kredi imkanları sunulmaktadır."
  },
  {
    question: "Emekli maaşı taşırsam ne kadar promosyon alabilirim?",
    answer: "Emekli maaşı promosyon tutarları bankalara göre değişmekle birlikte, 2025 yılında genellikle 7.500 TL ile 15.000 TL arasında değişmektedir. Maaş tutarınıza ve bankanın kampanyasına göre bu rakam değişebilir."
  }
];

export default RetiredIndex;
