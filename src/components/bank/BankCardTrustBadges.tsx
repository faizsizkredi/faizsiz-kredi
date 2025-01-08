import { Badge } from "@/components/ui/badge";
import { ShieldCheck } from "lucide-react";

interface BankCardTrustBadgesProps {
  badges: string[];
}

const BankCardTrustBadges = ({ badges = ["BDDK Onaylı"] }: BankCardTrustBadgesProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge, index) => (
        <Badge key={index} variant="secondary" className="flex items-center gap-1">
          <ShieldCheck className="w-3 h-3" />
          {badge}
        </Badge>
      ))}
    </div>
  );
};

export default BankCardTrustBadges;