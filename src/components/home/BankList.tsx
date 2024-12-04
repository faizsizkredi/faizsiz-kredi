import { Building, Building2, Landmark, CircleDollarSign, Wallet, BadgePercent, CreditCard, PiggyBank, Banknote } from "lucide-react";
import BankCard from "../BankCard";
import { Bank } from "@/types/bank";

const BANK_DATA: Bank[] = [
  {
    name: "QNB",
    icon: <CreditCard className="w-8 h-8 text-blue-600" />,
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "3-6 Ay",
    amount: "45.000 TL",
    details: [
      "%0 faizli toplam 45.000 TL!",
      "6 ay vadeli 20.000 TL kredi ve 3 ay vadeli 25.000 TL taksitli nakit avans fırsatı!"
    ],
    promotionScore: 95,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Akbank",
    icon: <Banknote className="w-8 h-8 text-red-600" />,
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "3-6 Ay",
    amount: "45.000 TL",
    details: [
      "%0 faiz ile toplam 45.000 TL!",
      "%0 faizli 6 ay vadeli 20.000 TL ihtiyaç kredisi ve 3 ay vadeli 25.000 TL taksitli avans fırsatı!"
    ],
    promotionScore: 90,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Garanti BBVA",
    icon: <Wallet className="w-8 h-8 text-green-700" />,
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "3-6 Ay",
    amount: "45.000 TL",
    details: [
      "%0 faiz ile toplam 45.000 TL!",
      "%0 faizli 6 ay vadeli 20.000 TL ihtiyaç kredisi ve 3 ay vadeli 25.000 TL taksitli nakit avans fırsatı!"
    ],
    promotionScore: 88,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Türkiye İş Bankası",
    icon: <Building className="w-8 h-8 text-blue-700" />,
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "1-3 ay",
    amount: "55.000 TL",
    details: [
      "55.000 TL'ye varan faizsiz fırsat! İşCep'ten İş Bankalı ol, %0 faizli 25.000 TL'ye varan taksitli nakit avans ve 30.000 TL'ye varan ek hesap'tan yararlan!",
      "Kampanyaya dair ayrıntılı bilgi ve değerlendirme koşullarına 'detay' butonundan ulaşabilirsiniz."
    ],
    promotionScore: 92,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "DenizBank",
    icon: <PiggyBank className="w-8 h-8 text-blue-600" />,
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "3-6 Ay",
    amount: "25.000 TL",
    details: [
      "%0 faizli toplam 35.000 TL'ye varan nakit fırsatı!",
      "6 ay vadeli 10.000 TL kredi ve 3 ay vadeli 25.000 TL'ye varan nakit avans!"
    ],
    promotionScore: 85,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Enpara.com",
    icon: <CircleDollarSign className="w-8 h-8 text-purple-600" />,
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "3 Ay",
    amount: "10.000 TL",
    details: [
      "%0 faizli 3 ay vadeli 10.000 TL'ye varan ihtiyaç kredisi!"
    ],
    promotionScore: 80,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "ON Dijital",
    icon: <Building2 className="w-8 h-8 text-green-600" />,
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "3 Ay",
    amount: "15.000 TL",
    details: [
      "%0 faiz ile 3 Ay Vadeli 15.000 TL İhtiyaç Kredisi"
    ],
    promotionScore: 78,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "CEPTETEB",
    icon: <Landmark className="w-8 h-8 text-green-600" />,
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "3-6 Ay",
    amount: "50.000 TL",
    details: [
      "%0 faiz ile toplam 50.000 TL!",
      "%0 faizli 3 ay vadeli 25.000 TL taksitli nakit avans ve 6 ay vadeli 25.000 TL kredi!"
    ],
    promotionScore: 82,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    name: "Albaraka Türk",
    icon: <BadgePercent className="w-8 h-8 text-red-600" />,
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "6 Ay",
    amount: "15.000 TL",
    details: [
      "%0 kâr payı oranı ile vade farksız 6 ay vadeli 15.000 TL!"
    ],
    promotionScore: 75,
    lastUpdate: new Date().toLocaleDateString('tr-TR')
  }
];

interface BankListProps {
  sortOption: string;
  interestRates: any;
}

const BankList = ({ sortOption, interestRates }: BankListProps) => {
  const getSortedBanks = () => {
    let updatedBankData = [...BANK_DATA].map(bank => {
      const apiRate = interestRates?.find(rate => 
        rate.bank.toLowerCase().includes(bank.name.toLowerCase())
      );

      return {
        ...bank,
        interestRate: apiRate ? apiRate.rate : bank.interestRate,
        lastUpdate: apiRate?.lastupdate || bank.lastUpdate
      };
    });

    switch (sortOption) {
      case "promotion":
        return updatedBankData.sort((a, b) => b.promotionScore - a.promotionScore);
      case "bank":
        return updatedBankData.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return updatedBankData;
    }
  };

  return (
    <div className="space-y-4 mb-12">
      {getSortedBanks().map((bank, index) => (
        <BankCard key={index} {...bank} />
      ))}
    </div>
  );
};

export default BankList;
