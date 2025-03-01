
import { Star } from "lucide-react";
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface BankCardRatingProps {
  rating: number;
  reviewCount?: number; // Make this prop optional
}

const BankCardRating = ({ rating, reviewCount }: BankCardRatingProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm" itemProp="ratingValue">{rating}</span>
            {reviewCount && <span className="ml-1 text-xs text-gray-500">({reviewCount})</span>}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Kullanıcı Değerlendirmesi</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default BankCardRating;
