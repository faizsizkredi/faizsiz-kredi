import { Gift, Calendar, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BankPromotionsProps {
  currentPromotions?: string[];
  validUntil?: string;
  tags?: string[];
}

const BankPromotions = ({
  currentPromotions = [],
  validUntil,
  tags = []
}: BankPromotionsProps) => {
  if (!currentPromotions.length && !tags.length) return null;

  return (
    <div className="mt-4 border-t pt-4">
      <h3 className="text-lg font-semibold mb-4">Güncel Kampanyalar</h3>
      {currentPromotions.length > 0 && (
        <ul className="space-y-2 mb-4">
          {currentPromotions.map((promotion, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <Gift className="w-4 h-4 text-pink-500" />
              {promotion}
            </li>
          ))}
        </ul>
      )}
      {validUntil && (
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <Calendar className="w-4 h-4" />
          <span>Kampanya Bitiş: {validUntil}</span>
        </div>
      )}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="flex items-center gap-1">
              <Tag className="w-3 h-3" />
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

export default BankPromotions;