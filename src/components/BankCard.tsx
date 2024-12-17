import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import BankCardHeader from "./bank/BankCardHeader";
import BankCardStats from "./bank/BankCardStats";
import BankCardDetails from "./bank/BankCardDetails";

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
  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": `${name} - ${specialOffer}`,
    "description": `${amount} tutarında, ${term} vadeli, ${interestRate} faiz oranlı kredi fırsatı`,
    "provider": {
      "@type": "BankOrCreditUnion",
      "name": name
    },
    "interestRate": interestRate,
    "amount": amount,
    "term": term,
    "itemReviewed": {
      "@type": "FinancialProduct",
      "name": specialOffer,
      "provider": {
        "@type": "BankOrCreditUnion",
        "name": name
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": userRating.toString(),
      "reviewCount": parseInt(applicationCount),
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      <Card className="mb-4 transition-all hover:shadow-lg">
        <CardContent className="p-6">
          <article itemScope itemType="https://schema.org/FinancialProduct">
            <BankCardHeader
              name={name}
              icon={icon}
              specialOffer={specialOffer}
              lastUpdate={lastUpdate}
              userRating={userRating}
              trustBadges={trustBadges}
            />

            <BankCardStats
              interestRate={interestRate}
              term={term}
              amount={amount}
              monthlyPayment={monthlyPayment}
              processingTime={processingTime}
              targetAudience={targetAudience}
              applicationCount={applicationCount}
            />

            <BankCardDetails
              amount={amount}
              monthlyPayment={monthlyPayment}
              interestRate={interestRate}
              term={term}
            />
          </article>
        </CardContent>
      </Card>
    </>
  );
};

export default BankCard;