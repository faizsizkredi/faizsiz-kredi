import { Building, Wallet, BadgePercent, CreditCard, PiggyBank } from "lucide-react";
import FilterContent from "@/components/filters/FilterContent";
import { useState } from "react";

const RETIRED_BANKS = [
  {
    name: "Emekli Bank",
    icon: <CreditCard className="w-8 h-8 text-blue-600" />,
    specialOffer: "Emeklilere Özel!",
    interestRate: "%0",
    term: "36 Ay",
    amount: "100.000 TL",
    details: [
      "Emeklilere özel %0 faizli 100.000 TL kredi!",
      "36 ay vade seçeneği",
      "Ücretsiz hesap işletim"
    ],
    promotionScore: 95,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Senior Bank",
    icon: <Building className="w-8 h-8 text-green-600" />,
    specialOffer: "Emekli Dostu Kredi!",
    interestRate: "%0",
    term: "24 Ay",
    amount: "75.000 TL",
    details: [
      "%0 faiz ile 75.000 TL kredi!",
      "24 ay vade imkanı",
      "Özel emekli hizmetleri"
    ],
    promotionScore: 90,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  // ... Add 8 more similar bank entries with different names and details
];

const FAQ_ITEMS = [
  {
    question: "Emekliler için faizsiz kredi başvurusu nasıl yapılır?",
    answer: "Emekliler için faizsiz kredi başvurusu yapmak için kimlik kartınız ve emekli maaş kartınızla birlikte bankanın herhangi bir şubesine gidebilir veya bankaların mobil uygulamaları üzerinden başvuru yapabilirsiniz."
  },
  {
    question: "Hangi bankalar emeklilere faizsiz kredi veriyor?",
    answer: "2024 yılı itibarıyla birçok banka emeklilere özel faizsiz kredi kampanyaları sunmaktadır. Yukarıdaki listede yer alan bankalar güncel faizsiz kredi teklifleriyle emeklilere hizmet vermektedir."
  },
  // Add more FAQ items as needed
];

const RetiredIndex = () => {
  const [currentTab] = useState("retired");

  return (
    <FilterContent
      title="Emekliye Faizsiz Kredi Veren Bankalar 2024"
      description="2024 yılında emeklilere özel faizsiz kredi veren bankaların güncel kampanyaları, kredi limitleri ve başvuru koşulları. Emekliler için en avantajlı faizsiz kredi fırsatları!"
      banks={RETIRED_BANKS}
      currentTab={currentTab}
      onSortChange={() => {}}
      faqItems={FAQ_ITEMS}
    />
  );
};

export default RetiredIndex;