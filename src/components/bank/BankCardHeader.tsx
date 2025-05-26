
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import BankCardRating from "./BankCardRating";
import BankCardTrustBadges from "./BankCardTrustBadges";
import BankCardApplyButton from "./BankCardApplyButton";
import { Sparkles, TrendingUp, Clock } from "lucide-react";

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
    <div className="flex flex-col gap-6">
      <div className="flex items-start gap-6">
        {/* Enhanced Bank Icon with Gradient Background */}
        <div className="relative group/icon">
          <div className="w-20 h-16 flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl border-2 border-white shadow-lg group-hover/icon:shadow-xl transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:rotate-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-2xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              {typeof icon === 'function' ? <IconComponent /> : icon}
            </div>
          </div>
          {/* Floating sparkle effect */}
          <div className="absolute -top-1 -right-1 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300">
            <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
          </div>
        </div>

        <div className="flex-1 min-w-0 space-y-3">
          {/* Bank Name with Enhanced Typography */}
          <div className="flex items-center gap-3 flex-wrap">
            <Link 
              to={`/bank/${getBankSlug(name)}`} 
              className="group/name hover:text-primary transition-all duration-300"
              itemProp="url"
            >
              <h2 className="text-xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent group-hover/name:from-blue-600 group-hover/name:to-purple-600 transition-all duration-300" itemProp="name">
                {name}
              </h2>
            </Link>
            <div className="flex items-center gap-2">
              <BankCardRating rating={userRating} />
              <div className="flex items-center gap-1 text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs font-medium">Popüler</span>
              </div>
            </div>
          </div>

          {/* Special Offer with Creative Design */}
          <div className="relative">
            <h3 className="text-lg font-semibold text-gray-900 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent" itemProp="description">
              {specialOffer}
            </h3>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          {/* Last Update with Enhanced Styling */}
          {lastUpdate && (
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600 bg-gray-100 px-3 py-1 rounded-full font-medium">
                Son güncelleme: {lastUpdate}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Action Row with Enhanced Layout */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <BankCardTrustBadges badges={trustBadges} />
        <div className="flex items-center gap-3">
          {/* Live indicator */}
          <div className="flex items-center gap-2 text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Canlı Kampanya</span>
          </div>
          <BankCardApplyButton />
        </div>
      </div>
    </div>
  );
};

export default BankCardHeader;
