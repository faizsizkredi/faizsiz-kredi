import { Building2, Users, Clock, Shield, Star, ThumbsUp } from "lucide-react";

interface BankFeaturesProps {
  bankBranches?: number;
  customerCount?: string;
  establishedYear?: string;
  securityFeatures?: string[];
  awards?: string[];
  satisfaction?: string;
}

const BankFeatures = ({
  bankBranches,
  customerCount = "1M+",
  establishedYear,
  securityFeatures = [],
  awards = [],
  satisfaction = "95%"
}: BankFeaturesProps) => {
  return (
    <div className="mt-6 border-t pt-4">
      <h3 className="text-lg font-semibold mb-4">Banka Özellikleri</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {bankBranches && (
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-500" />
            <span className="text-sm">{bankBranches} Şube</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-green-500" />
          <span className="text-sm">{customerCount} Aktif Müşteri</span>
        </div>
        {establishedYear && (
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-purple-500" />
            <span className="text-sm">{establishedYear}'den beri hizmetinizde</span>
          </div>
        )}
        {securityFeatures.length > 0 && (
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-orange-500" />
            <span className="text-sm">{securityFeatures.join(", ")}</span>
          </div>
        )}
        {awards.length > 0 && (
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="text-sm">{awards.join(", ")}</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <ThumbsUp className="w-5 h-5 text-blue-500" />
          <span className="text-sm">{satisfaction} Müşteri Memnuniyeti</span>
        </div>
      </div>
    </div>
  );
};

export default BankFeatures;