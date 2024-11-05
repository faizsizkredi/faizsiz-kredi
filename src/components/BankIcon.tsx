import { Building, Building2, Landmark, CircleDollarSign, Wallet, BadgePercent, CreditCard, PiggyBank, Banknote, DollarSign } from "lucide-react";
import { ReactNode } from "react";

export type BankIconType = 
  | "ziraat"
  | "vakif"
  | "halk"
  | "is"
  | "garanti"
  | "yapikredi"
  | "qnb"
  | "deniz"
  | "teb"
  | "akbank";

interface BankIconProps {
  bank: BankIconType;
  className?: string;
}

export const BankIcon = ({ bank, className }: BankIconProps): ReactNode => {
  switch (bank) {
    case "ziraat":
      return <Building className={className} />;
    case "vakif":
      return <Building2 className={className} />;
    case "halk":
      return <Landmark className={className} />;
    case "is":
      return <CircleDollarSign className={className} />;
    case "garanti":
      return <Wallet className={className} />;
    case "yapikredi":
      return <BadgePercent className={className} />;
    case "qnb":
      return <CreditCard className={className} />;
    case "deniz":
      return <PiggyBank className={className} />;
    case "teb":
      return <Banknote className={className} />;
    case "akbank":
      return <DollarSign className={className} />;
  }
};