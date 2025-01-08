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
  // Calculate dynamic dates for price validity
  const futureDate = new Date();
  futureDate.setMonth(futureDate.getMonth() + 3); // Set price validity to 3 months from now
  
  // Convert applicationCount to number for reviewCount
  const reviewCount = parseInt(applicationCount.replace(/[^0-9]/g, ''), 10);
  
  // Enhanced JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": `${name} - ${specialOffer}`,
    "description": `${amount} tutarında, ${term} vadeli, ${interestRate} faiz oranlı kredi fırsatı`,
    "provider": {
      "@type": "BankOrCreditUnion",
      "name": name,
      "image": {
        "@type": "ImageObject",
        "url": `https://faizsizkrediverenbankalar.com/images/banks/${name.toLowerCase()}.png`
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "TR"
      }
    },
    "interestRate": interestRate,
    "amount": {
      "@type": "MonetaryAmount",
      "currency": "TRY",
      "value": amount.replace(/[^0-9]/g, '')
    },
    "term": term,
    "dateModified": lastUpdate || new Date().toISOString(),
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "TRY",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": futureDate.toISOString().split('T')[0]
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": userRating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "itemReviewed": {
        "@type": "FinancialProduct",
        "name": specialOffer,
        "provider": {
          "@type": "BankOrCreditUnion",
          "name": name
        }
      },
      "author": {
        "@type": "Organization",
        "name": "Faizsiz Kredi Rehberi"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": userRating.toString(),
      "reviewCount": reviewCount,
      "ratingCount": reviewCount,
      "bestRating": "5",
      "worstRating": "1",
      "itemReviewed": {
        "@type": "FinancialProduct",
        "name": specialOffer,
        "provider": {
          "@type": "BankOrCreditUnion",
          "name": name
        }
      }
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "targetAudience",
        "value": targetAudience
      },
      {
        "@type": "PropertyValue",
        "name": "processingTime",
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
        <CardContent className="p-4 sm:p-6">
          <article itemScope itemType="https://schema.org/FinancialProduct">
            <BankCardHeader
              name={name}
              icon={icon}
              specialOffer={specialOffer}
              lastUpdate={lastUpdate}
              userRating={userRating}
              trustBadges={trustBadges}
            />

            <div className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Faiz Oranı</p>
                  <p className="font-semibold" itemProp="interestRate">{interestRate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Vade</p>
                  <p className="font-semibold" itemProp="term">{term}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Kredi Tutarı</p>
                  <p className="font-semibold" itemProp="amount">{amount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Aylık Taksit</p>
                  <p className="font-semibold">{monthlyPayment}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <span>Onay Süresi: {processingTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>Hedef Kitle: {targetAudience}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>{applicationCount} başvuru</span>
                </div>
              </div>
            </div>

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