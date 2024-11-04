import { useState } from "react";
import FilterTabs from "../components/FilterTabs";
import BankCard from "../components/BankCard";

const BANK_DATA = [
  {
    name: "QNB",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/QNB_Logo.svg/2560px-QNB_Logo.svg.png",
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "3-6 Ay",
    amount: "45.000 TL",
    details: [
      "%0 faizli toplam 45.000 TL!",
      "6 ay vadeli 20.000 TL kredi ve 3 ay vadeli 25.000 TL taksitli nakit avans fırsatı!",
    ],
  },
  {
    name: "Akbank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Akbank_logo.svg/2560px-Akbank_logo.svg.png",
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "3-6 Ay",
    amount: "45.000 TL",
    details: [
      "%0 faiz ile toplam 45.000 TL!",
      "%0 faizli 6 ay vadeli 20.000 TL ihtiyaç kredisi ve 3 ay vadeli 25.000 TL taksitli avans fırsatı!",
    ],
  },
];

const Index = () => {
  const [sortOption, setSortOption] = useState<"recommended" | "promotion" | "bank">("recommended");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">Faizsiz Kredi Veren Bankalar</h1>
        <p className="text-gray-600 mb-8">
          Bankaların dönemsel faizsiz kredi ürünlerini inceleyebilir, karşılaştırma yaparak sana en uygun krediye anında başvuru yapabilirsin.
        </p>

        <FilterTabs onSortChange={setSortOption} />

        <div className="space-y-4">
          {BANK_DATA.map((bank, index) => (
            <BankCard key={index} {...bank} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;