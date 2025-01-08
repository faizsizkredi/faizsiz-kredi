import { Link } from "react-router-dom";
import { ReactNode } from "react";
import BankCardRating from "./BankCardRating";
import BankCardTrustBadges from "./BankCardTrustBadges";
import BankCardApplyButton from "./BankCardApplyButton";

interface BankCardHeaderProps {
  name: string;
  icon: ReactNode | React.ComponentType;
  specialOffer: string;
  lastUpdate?: string;
  userRating?: number;
  trustBadges?: string[];
}

const BankCardHeader = ({
  name,
  icon,
  specialOffer,
  lastUpdate,
  userRating = 4.5,
  trustBadges = ["BDDK Onaylı"],
}: BankCardHeaderProps) => {
  const getBankSlug = (bankName: string) => {
    return bankName
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/ı/g, 'i')
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c');
  };

  const IconComponent = icon as React.ComponentType;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="w-16 h-12 flex items-center justify-center bg-gray-50 rounded-lg">
          {typeof icon === 'function' ? <IconComponent /> : icon}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Link 
              to={`/bank/${getBankSlug(name)}`} 
              className="text-lg sm:text-xl font-semibold hover:text-primary transition-colors"
              itemProp="url"
            >
              <span itemProp="name">{name}</span>
            </Link>
            <BankCardRating rating={userRating} />
          </div>
          <h2 className="text-base sm:text-lg font-medium text-gray-900" itemProp="description">
            {specialOffer}
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            {lastUpdate && `Son güncelleme: ${lastUpdate}`}
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:items-end gap-2">
        <BankCardTrustBadges badges={trustBadges} />
        <BankCardApplyButton />
      </div>
    </div>
  );
};

export default BankCardHeader;