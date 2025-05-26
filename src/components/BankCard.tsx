
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
  futureDate.setMonth(futureDate.getMonth() + 3);
  
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
      <Card className="group relative mb-6 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-green-50/40 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/50 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-100/50 to-transparent rounded-full blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
        
        {/* Premium Badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
            ⭐ ÖNERİLEN
          </div>
        </div>

        {/* Special Offer Banner */}
        {interestRate === "%0" && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-pulse"></div>
        )}

        <CardContent className="relative p-6 sm:p-8 space-y-6">
          <article itemScope itemType="https://schema.org/FinancialProduct">
            {/* Header with Enhanced Visual Appeal */}
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

            {/* Key Metrics with Modern Design */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-2xl p-5 border border-gray-100/50 backdrop-blur-sm">
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

            {/* Detailed Information */}
            <div className="space-y-4">
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

            {/* Trust Indicators */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span>Anlık Onay</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>BDDK Güvencesi</span>
                </div>
              </div>
              <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                Son güncelleme: {lastUpdate || 'Bugün'}
              </div>
            </div>
          </article>
        </CardContent>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </Card>
    </>
  );
};

export default BankCard;
