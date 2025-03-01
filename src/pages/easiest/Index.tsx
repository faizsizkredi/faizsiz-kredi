
import { Building, Building2, Landmark, CircleDollarSign, Wallet } from "lucide-react";
import FilterContent from "@/components/filters/FilterContent";
import { useState } from "react";
import { Bank } from "@/types/bank";
import { getCurrentMonthYear } from "@/utils/dateUtils";
import { PageMeta } from "@/utils/seoUtils";

const EASY_BANKS: Bank[] = [
  {
    name: "Garanti BBVA",
    icon: <Landmark className="w-8 h-8 text-green-700" />,
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
    name: "Yapı Kredi",
    icon: <CircleDollarSign className="w-8 h-8 text-blue-800" />,
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
    name: "İş Bankası",
    icon: <Building2 className="w-8 h-8 text-purple-800" />,
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
    name: "CEPTETEB",
    icon: <Building className="w-8 h-8 text-blue-600" />,
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
    name: "Enpara",
    icon: <Wallet className="w-8 h-8 text-purple-600" />,
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
  const currentDate = getCurrentMonthYear();
  const title = `En Kolay Kredi Veren Bankalar ${currentDate}`;
  const description = `${currentDate} ayına özel en kolay ve en hızlı kredi veren bankaların güncel faiz oranları ve başvuru koşulları. Minimum evrak ve hızlı onay ile kredi fırsatları!`;
  const keywords = "kolay kredi, hızlı kredi, anında kredi onayı, evrak istemeyen kredi, online kredi başvurusu, dijital kredi";

  return (
    <>
      <PageMeta
        title={title}
        description={description}
        keywords={keywords}
        pageSlug="en-kolay-kredi"
        pageType="other"
      />
      <FilterContent
        title={title}
        description={description}
        banks={EASY_BANKS}
        currentTab={currentTab}
        onSortChange={() => {}}
        faqItems={FAQ_ITEMS}
        additionalContent={
          <div className="mt-12 prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">En Kolay Kredi Nasıl Alınır?</h2>
            <p className="text-gray-700 mb-6">
              Günümüzde bankalar, müşterilerine hızlı ve kolay kredi kullanım imkanı sunmaktadır. Özellikle dijital bankacılık kanalları üzerinden yapılan başvurular, minimum evrak ve hızlı onay süreçleriyle dikkat çekmektedir. Garanti BBVA, Yapı Kredi, QNB Finansbank, ING Bank ve CEPTETEB gibi bankalar, müşterilerine online kanallar üzerinden anında kredi kullanma imkanı tanımaktadır.
            </p>
            <p className="text-gray-700 mb-6">
              En kolay kredi başvurusu için bankaların mobil uygulamaları veya internet şubeleri tercih edilebilir. E-Devlet entegrasyonu sayesinde gelir belgesi gibi evraklar otomatik olarak sistem tarafından kontrol edilmekte, böylece başvuru süreci hızlanmaktadır. Video görüşme ile kimlik doğrulama yapan bankalar, şubeye gitme zorunluluğunu ortadan kaldırarak kredi kullanımını kolaylaştırmaktadır.
            </p>
          </div>
        }
      />
    </>
  );
};

export default EasyIndex;
