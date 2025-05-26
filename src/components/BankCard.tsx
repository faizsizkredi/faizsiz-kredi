
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import BankCardHeader from "./bank/BankCardHeader";
import BankCardStats from "./bank/BankCardStats";
import BankCardDetails from "./bank/BankCardDetails";
import BankCardSchema from "./bank/BankCardSchema";
import BankCardBadge from "./bank/BankCardBadge";
import BankCardBackground from "./bank/BankCardBackground";
import BankCardTrustIndicators from "./bank/BankCardTrustIndicators";
import BankCardOverlay from "./bank/BankCardOverlay";

interface BankCardProps {
  name: string;
  icon: ReactNode | React.ComponentType;
  specialOffer: string;
  interestRate: string;
  term: string;
  amount: string;
  details: string[];
  lastUpdate?: string;
  targetAudience?: string;
  monthlyPayment?: string;
  processingTime?: string;
  userRating?: number;
  applicationCount?: string;
  trustBadges?: string[];
}

const BankCard = ({
  name,
  icon,
  specialOffer,
  interestRate,
  term,
  amount,
  details,
  lastUpdate,
  targetAudience,
  monthlyPayment,
  processingTime,
  userRating = 4.5,
  applicationCount = "1000",
  trustBadges,
}: BankCardProps) => {
  return (
    <>
      <BankCardSchema
        name={name}
        specialOffer={specialOffer}
        amount={amount}
        term={term}
        interestRate={interestRate}
        lastUpdate={lastUpdate}
        userRating={userRating}
        applicationCount={applicationCount}
        targetAudience={targetAudience}
        processingTime={processingTime}
      />
      
      <Card className="group relative mb-8 overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-green-50/30 border-2 border-transparent hover:border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-[1.01] hover:rotate-[0.2deg]">
        <BankCardBackground interestRate={interestRate} />
        <BankCardBadge />

        <CardContent className="relative p-8 sm:p-10 space-y-8">
          <article itemScope itemType="https://schema.org/FinancialProduct" className="relative z-10">
            {/* Enhanced Header with Creative Design */}
            <div className="relative">
              <BankCardHeader
                name={name}
                icon={icon}
                specialOffer={specialOffer}
                lastUpdate={lastUpdate}
                userRating={userRating}
                trustBadges={trustBadges}
              />
            </div>

            {/* Advanced Key Metrics with Glass Morphism */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50/80 to-blue-50/60 rounded-3xl backdrop-blur-sm"></div>
              <div className="relative bg-white/40 backdrop-blur-md rounded-3xl p-6 border border-white/50 shadow-lg">
                <BankCardStats
                  interestRate={interestRate}
                  term={term}
                  amount={amount}
                  monthlyPayment={monthlyPayment}
                  processingTime={processingTime}
                  targetAudience={targetAudience}
                  applicationCount={applicationCount}
                />
              </div>
            </div>

            {/* Enhanced Detailed Information */}
            <div className="space-y-6">
              <BankCardDetails
                amount={amount}
                monthlyPayment={monthlyPayment}
                interestRate={interestRate}
                term={term}
              />
            </div>

            {/* SEO Enhancement: Structured Content */}
            <div className="hidden" itemScope itemType="https://schema.org/Offer">
              <meta itemProp="price" content="0" />
              <meta itemProp="priceCurrency" content="TRY" />
              <meta itemProp="availability" content="https://schema.org/InStock" />
              <div itemProp="seller" itemScope itemType="https://schema.org/BankOrCreditUnion">
                <meta itemProp="name" content={name} />
              </div>
            </div>

            {/* Enhanced Trust Indicators with Animation */}
            <BankCardTrustIndicators lastUpdate={lastUpdate} />
          </article>
        </CardContent>

        <BankCardOverlay />
      </Card>
    </>
  );
};

export default BankCard;
