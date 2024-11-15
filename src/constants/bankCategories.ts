import { Building, Building2, Landmark, CircleDollarSign, Wallet, BadgePercent, CreditCard, PiggyBank, Banknote, DollarSign } from "lucide-react";

export const BANK_CATEGORIES = {
  PUBLIC_BANKS: {
    title: "Kamu Bankaları",
    banks: ["Ziraat Bankası", "Vakıfbank", "Halkbank"],
  },
  PRIVATE_BANKS: {
    title: "Özel Bankalar",
    banks: ["İş Bankası", "Garanti BBVA", "Yapı Kredi", "Akbank"],
  },
  PARTICIPATION_BANKS: {
    title: "Katılım Bankaları",
    banks: ["Albaraka Türk", "Kuveyt Türk", "Ziraat Katılım"],
  },
  DIGITAL_BANKS: {
    title: "Dijital Bankalar",
    banks: ["Enpara.com", "ON Dijital", "CEPTETEB"],
  },
  FOREIGN_BANKS: {
    title: "Yabancı Bankalar",
    banks: ["QNB Finansbank", "Denizbank", "TEB"],
  },
};

export const BANK_ICONS = {
  "Ziraat Bankası": Building,
  "Vakıfbank": Building2,
  "Halkbank": Landmark,
  "İş Bankası": CircleDollarSign,
  "Garanti BBVA": Wallet,
  "Yapı Kredi": BadgePercent,
  "QNB Finansbank": CreditCard,
  "Denizbank": PiggyBank,
  "TEB": Banknote,
  "Akbank": DollarSign,
} as const;