
import { Bank } from "@/types/bank";
import { Building, Building2, Landmark, CircleDollarSign, Wallet } from "lucide-react";

export const RISKY_BANKS: Bank[] = [
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
