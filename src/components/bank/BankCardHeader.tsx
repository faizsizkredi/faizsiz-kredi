import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, CheckCircle } from "lucide-react";
import { ReactNode } from "react";

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
    if (bankName.toLowerCase().includes('iş bankası')) {
      return 'isbankasi';
    }
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
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-6">
        <div className="w-24 h-12 flex items-center justify-center bg-gray-50 rounded-lg">
          {typeof icon === 'function' ? <IconComponent /> : icon}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Link 
              to={`/bank/${getBankSlug(name)}`} 
              className="text-xl font-semibold hover:text-primary transition-colors"
              itemProp="url"
            >
              <span itemProp="name">{name}</span>
            </Link>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm" itemProp="ratingValue">{userRating}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Kullanıcı Değerlendirmesi</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <h2 className="text-lg font-medium text-gray-900" itemProp="description">{specialOffer}</h2>
          <p className="text-sm text-gray-600 mt-1">
            {lastUpdate && `Son güncelleme: ${lastUpdate}`}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-2">
          {trustBadges.map((badge, index) => (
            <Badge key={index} variant="secondary" className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              {badge}
            </Badge>
          ))}
        </div>
        <button
          onClick={() => window.open("#", "_blank")}
          className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md transition-colors flex items-center gap-2"
        >
          <span>Hemen Başvur</span>
          <CheckCircle className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default BankCardHeader;