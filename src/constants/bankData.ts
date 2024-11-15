import { BANK_ICONS } from "./bankCategories";

export const BANK_DATA = [
  {
    name: "QNB",
    icon: BANK_ICONS["QNB Finansbank"],
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "3-6 Ay",
    amount: "45.000 TL",
    details: [
      "%0 faizli toplam 45.000 TL!",
      "6 ay vadeli 20.000 TL kredi ve 3 ay vadeli 25.000 TL taksitli nakit avans fırsatı!"
    ],
    promotionScore: 95,
    lastUpdate: new Date().toLocaleDateString('tr-TR'),
    category: "FOREIGN_BANKS"
  },
  {
    name: "Akbank",
    icon: BANK_ICONS["Akbank"],
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "3-6 Ay",
    amount: "45.000 TL",
    details: [
      "%0 faiz ile toplam 45.000 TL!",
      "%0 faizli 6 ay vadeli 20.000 TL ihtiyaç kredisi ve 3 ay vadeli 25.000 TL taksitli avans fırsatı!"
    ],
    promotionScore: 90,
    lastUpdate: new Date().toLocaleDateString('tr-TR'),
    category: "PRIVATE_BANKS"
  },
  {
    name: "Garanti BBVA",
    icon: BANK_ICONS["Garanti BBVA"],
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "3-6 Ay",
    amount: "45.000 TL",
    details: [
      "%0 faiz ile toplam 45.000 TL!",
      "%0 faizli 6 ay vadeli 20.000 TL ihtiyaç kredisi ve 3 ay vadeli 25.000 TL taksitli nakit avans fırsatı!"
    ],
    promotionScore: 88,
    lastUpdate: new Date().toLocaleDateString('tr-TR'),
    category: "PRIVATE_BANKS"
  },
  {
    name: "Türkiye İş Bankası",
    icon: BANK_ICONS["İş Bankası"],
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "1-3 ay",
    amount: "55.000 TL",
    details: [
      "55.000 TL'ye varan faizsiz fırsat! İşCep'ten İş Bankalı ol, %0 faizli 25.000 TL'ye varan taksitli nakit avans ve 30.000 TL'ye varan ek hesap'tan yararlan!",
      "Kampanyaya dair ayrıntılı bilgi ve değerlendirme koşullarına 'detay' butonundan ulaşabilirsiniz."
    ],
    promotionScore: 92,
    lastUpdate: new Date().toLocaleDateString('tr-TR'),
    category: "PRIVATE_BANKS"
  },
  {
    name: "DenizBank",
    icon: BANK_ICONS["Denizbank"],
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "3-6 Ay",
    amount: "25.000 TL",
    details: [
      "%0 faizli toplam 35.000 TL'ye varan nakit fırsatı!",
      "6 ay vadeli 10.000 TL kredi ve 3 ay vadeli 25.000 TL'ye varan nakit avans!"
    ],
    promotionScore: 85,
    lastUpdate: new Date().toLocaleDateString('tr-TR'),
    category: "FOREIGN_BANKS"
  },
  {
    name: "Enpara.com",
    icon: BANK_ICONS["Enpara.com"],
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "3 Ay",
    amount: "10.000 TL",
    details: [
      "%0 faizli 3 ay vadeli 10.000 TL'ye varan ihtiyaç kredisi!"
    ],
    promotionScore: 80,
    lastUpdate: new Date().toLocaleDateString('tr-TR'),
    category: "DIGITAL_BANKS"
  },
  {
    name: "ON Dijital",
    icon: BANK_ICONS["ON Dijital"],
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "3 Ay",
    amount: "15.000 TL",
    details: [
      "%0 faiz ile 3 Ay Vadeli 15.000 TL İhtiyaç Kredisi"
    ],
    promotionScore: 78,
    lastUpdate: new Date().toLocaleDateString('tr-TR'),
    category: "DIGITAL_BANKS"
  },
  {
    name: "CEPTETEB",
    icon: BANK_ICONS["CEPTETEB"],
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "3-6 Ay",
    amount: "50.000 TL",
    details: [
      "%0 faiz ile toplam 50.000 TL!",
      "%0 faizli 3 ay vadeli 25.000 TL taksitli nakit avans ve 6 ay vadeli 25.000 TL kredi!"
    ],
    promotionScore: 82,
    lastUpdate: new Date().toLocaleDateString('tr-TR'),
    category: "DIGITAL_BANKS"
  },
  {
    name: "Albaraka Türk",
    icon: BANK_ICONS["Albaraka Türk"],
    specialOffer: "Yeni Müşterilere Özel!",
    interestRate: "%0",
    term: "6 Ay",
    amount: "15.000 TL",
    details: [
      "%0 kâr payı oranı ile vade farksız 6 ay vadeli 15.000 TL!"
    ],
    promotionScore: 75,
    lastUpdate: new Date().toLocaleDateString('tr-TR'),
    category: "PARTICIPATION_BANKS"
  }
];
