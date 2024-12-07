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
  // JSON-LD yapılandırılmış veri - Genişletilmiş SEO için
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": `${name} - ${specialOffer}`,
    "description": `${amount} tutarında, ${term} vadeli, ${interestRate} faiz oranlı kredi fırsatı`,
    "provider": {
      "@type": "BankOrCreditUnion",
      "name": name,
      "areaServed": "TR",
      "priceRange": amount
    },
    "interestRate": interestRate,
    "amount": amount,
    "term": term,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": amount.replace(/[^0-9]/g, ""),
      "priceCurrency": "TRY",
      "validFrom": lastUpdate
    },
    "review": {
      "@type": "AggregateRating",
      "ratingValue": userRating,
      "reviewCount": parseInt(applicationCount || "1000"),
      "bestRating": "5",
      "worstRating": "1"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Hedef Kitle",
        "value": targetAudience
      },
      {
        "@type": "PropertyValue",
        "name": "İşlem Süresi",
        "value": processingTime
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      <Card className="mb-4 transition-all hover:shadow-lg">
        <CardContent className="p-6">
          <article 
            itemScope 
            itemType="https://schema.org/FinancialProduct"
            className="h-full"
          >
            <meta itemProp="category" content="Kredi" />
            <meta itemProp="audience" content={targetAudience} />
            <meta itemProp="dateModified" content={lastUpdate} />
            
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
            />

            <footer className="mt-4 text-sm text-gray-500">
              <p itemProp="description" className="mb-2">
                {details.join(" • ")}
              </p>
              {lastUpdate && (
                <time itemProp="datePublished" dateTime={lastUpdate}>
                  Son güncelleme: {lastUpdate}
                </time>
              )}
            </footer>
          </article>
        </CardContent>
      </Card>
    </>
  );
};

export default BankCard;