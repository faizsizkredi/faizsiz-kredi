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
  userRating,
  applicationCount,
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
      "name": name,
      "image": `/bank-logos/${name.toLowerCase().replace(/\s+/g, '')}.svg`
    },
    "interestRate": interestRate,
    "amount": amount,
    "term": term,
    "review": {
      "@type": "AggregateRating",
      "ratingValue": userRating,
      "reviewCount": parseInt(applicationCount || "1000")
    }
  };

  const getBankLogo = (bankName: string) => {
    return `/bank-logos/${bankName.toLowerCase().replace(/\s+/g, '')}.svg`;
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
              logo={getBankLogo(name)}
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
            />
          </article>
        </CardContent>
      </Card>
    </>
  );
};

export default BankCard;