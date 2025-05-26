
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
      <Card className="group relative mb-8 overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-green-50/30 border-2 border-transparent hover:border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-[1.01] hover:rotate-[0.2deg]">
        {/* Advanced Animated Background Elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100/60 via-purple-100/40 to-transparent rounded-full blur-2xl opacity-50 group-hover:opacity-80 group-hover:w-48 group-hover:h-48 transition-all duration-700 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-100/60 via-emerald-100/40 to-transparent rounded-full blur-xl opacity-30 group-hover:opacity-60 group-hover:w-40 group-hover:h-40 transition-all duration-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-100/20 to-pink-100/20 rounded-full blur-3xl opacity-20 group-hover:opacity-40 group-hover:rotate-45 transition-all duration-1000"></div>
        
        {/* Premium Floating Badge */}
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 text-white px-4 py-2 rounded-2xl text-xs font-bold shadow-lg shadow-yellow-500/25 animate-bounce hover:animate-none transition-all duration-300 hover:scale-110">
            <div className="flex items-center gap-1">
              <span className="text-sm">⭐</span>
              <span>ÖNERİLEN</span>
              <span className="text-sm">🔥</span>
            </div>
          </div>
        </div>

        {/* Special Zero Interest Animated Banner */}
        {interestRate === "%0" && (
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-400 via-blue-500 via-purple-600 to-pink-500 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[slide-in-right_2s_ease-in-out_infinite]"></div>
          </div>
        )}

        {/* Floating Action Indicators */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-l-2xl px-3 py-2 shadow-lg border border-gray-200/50">
            <div className="text-xs text-gray-700 font-medium">Hemen Başvur</div>
            <div className="text-xl">→</div>
          </div>
        </div>

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
            <div className="flex items-center justify-between pt-6 border-t border-gradient-to-r from-gray-100 via-blue-100 to-gray-100">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center group/indicator">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse group-hover/indicator:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-700 font-medium">Anlık Onay</span>
                </div>
                <div className="flex items-center group/indicator">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 group-hover/indicator:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-700 font-medium">BDDK Güvencesi</span>
                </div>
                <div className="flex items-center group/indicator">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2 group-hover/indicator:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-700 font-medium">SSL Korumalı</span>
                </div>
              </div>
              <div className="flex items-center bg-gradient-to-r from-gray-100 to-blue-100 px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping"></div>
                <span className="text-xs text-gray-600 font-medium">
                  Son güncelleme: {lastUpdate || 'Bugün'}
                </span>
              </div>
            </div>
          </article>
        </CardContent>

        {/* Advanced Hover Effect Overlay with Gradient Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/3 via-transparent to-green-600/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>

        {/* Subtle Border Animation */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-lg border-2 border-gradient-to-r from-blue-400/30 via-purple-400/30 to-green-400/30 animate-pulse"></div>
        </div>
      </Card>
    </>
  );
};

export default BankCard;
