import { BankIconType } from "@/components/BankIcon";

interface BankData {
  name: string;
  iconType: BankIconType;
  iconClass: string;
  specialOffer: string;
  interestRate: string;
  term: string;
  amount: string;
  details: string[];
  promotionScore: number;
}

export const BANK_DATA: BankData[] = [
  {
    name: "Ziraat Bankası",
    iconType: "ziraat",
    iconClass: "w-8 h-8 text-green-600",
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "6 Ay",
    amount: "50.000 TL",
    details: [
      "6 ay vadeli 50.000 TL faizsiz kredi!",
      "Masrafsız başvuru imkanı",
    ],
    promotionScore: 95
  },
  {
    name: "Vakıfbank",
    iconType: "vakif",
    iconClass: "w-8 h-8 text-green-700",
    specialOffer: "Kamu Çalışanlarına Özel",
    interestRate: "%0",
    term: "12 Ay",
    amount: "60.000 TL",
    details: [
      "12 ay vadeli 60.000 TL faizsiz kredi!",
      "Kamu çalışanlarına özel avantajlar",
    ],
    promotionScore: 90
  },
  {
    name: "Halkbank",
    iconType: "halk",
    iconClass: "w-8 h-8 text-blue-600",
    specialOffer: "Esnafa Özel",
    interestRate: "%0",
    term: "9 Ay",
    amount: "40.000 TL",
    details: [
      "Esnafa özel 9 ay vadeli 40.000 TL",
      "Hızlı başvuru ve onay",
    ],
    promotionScore: 85
  },
  {
    name: "İş Bankası",
    iconType: "is",
    iconClass: "w-8 h-8 text-blue-700",
    specialOffer: "Maximum Kart Sahiplerine Özel",
    interestRate: "%0",
    term: "6 Ay",
    amount: "45.000 TL",
    details: [
      "Maximum kart sahiplerine özel fırsatlar",
      "Online başvuru imkanı",
    ],
    promotionScore: 80
  },
  {
    name: "Garanti BBVA",
    iconType: "garanti",
    iconClass: "w-8 h-8 text-teal-600",
    specialOffer: "Bonus Kart Sahiplerine Özel",
    interestRate: "%0",
    term: "8 Ay",
    amount: "55.000 TL",
    details: [
      "Bonus kart sahiplerine özel avantajlar",
      "Masrafsız kullandırım",
    ],
    promotionScore: 88
  },
  {
    name: "Yapı Kredi",
    iconType: "yapikredi",
    iconClass: "w-8 h-8 text-blue-800",
    specialOffer: "World Kart Sahiplerine Özel",
    interestRate: "%0",
    term: "10 Ay",
    amount: "48.000 TL",
    details: [
      "World kart sahiplerine özel kampanya",
      "Anında başvuru imkanı",
    ],
    promotionScore: 82
  },
  {
    name: "QNB Finansbank",
    iconType: "qnb",
    iconClass: "w-8 h-8 text-purple-600",
    specialOffer: "CardFinans Sahiplerine Özel",
    interestRate: "%0",
    term: "7 Ay",
    amount: "42.000 TL",
    details: [
      "CardFinans sahiplerine özel fırsatlar",
      "7 ay taksit imkanı",
    ],
    promotionScore: 75
  },
  {
    name: "Denizbank",
    iconType: "deniz",
    iconClass: "w-8 h-8 text-cyan-600",
    specialOffer: "Emeklilere Özel",
    interestRate: "%0",
    term: "12 Ay",
    amount: "35.000 TL",
    details: [
      "Emeklilere özel avantajlar",
      "12 ay vade seçeneği",
    ],
    promotionScore: 78
  },
  {
    name: "TEB",
    iconType: "teb",
    iconClass: "w-8 h-8 text-orange-600",
    specialOffer: "KOBI'lere Özel",
    interestRate: "%0",
    term: "6 Ay",
    amount: "70.000 TL",
    details: [
      "KOBİ'lere özel kampanya",
      "6 ay vade seçeneği",
    ],
    promotionScore: 72
  },
  {
    name: "Akbank",
    iconType: "akbank",
    iconClass: "w-8 h-8 text-red-600",
    specialOffer: "Axess Sahiplerine Özel",
    interestRate: "%0",
    term: "9 Ay",
    amount: "52.000 TL",
    details: [
      "Axess kart sahiplerine özel fırsatlar",
      "9 ay taksit imkanı",
    ],
    promotionScore: 85
  },
];