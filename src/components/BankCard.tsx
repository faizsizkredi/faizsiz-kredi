import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import BankCardHeader from "./bank/BankCardHeader";
import BankCardStats from "./bank/BankCardStats";
import BankCardDetails from "./bank/BankCardDetails";
import BankFeatures from "./bank/BankFeatures";
import BankPromotions from "./bank/BankPromotions";

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
  advantages?: string[];
  requirements?: string[];
  bankBranches?: number;
  onlineApplication?: boolean;
  customerReviews?: Array<{
    rating: number;
    comment: string;
    author: string;
    date: string;
  }>;
  establishedYear?: string;
  securityFeatures?: string[];
  awards?: string[];
  customerSatisfaction?: string;
  currentPromotions?: string[];
  promotionEndDate?: string;
  promotionTags?: string[];
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
  advantages,
  requirements,
  bankBranches,
  onlineApplication,
  customerReviews,
  establishedYear,
  securityFeatures,
  awards,
  customerSatisfaction,
  currentPromotions,
  promotionEndDate,
  promotionTags,
}: BankCardProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": `${name} - ${specialOffer}`,
    "description": `${amount} tutarında, ${term} vadeli, ${interestRate} faiz oranlı kredi fırsatı`,
    "provider": {
      "@type": "BankOrCreditUnion",
      "name": name,
      "areaServed": "TR",
      "priceRange": amount,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "TR"
      },
      "numberOfBranches": bankBranches,
      "hasOnlineApplication": onlineApplication
    },
    "interestRate": interestRate,
    "amount": amount,
    "term": term,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": amount.replace(/[^0-9]/g, ""),
      "priceCurrency": "TRY",
      "validFrom": lastUpdate,
      "priceValidUntil": lastUpdate ? new Date(new Date(lastUpdate).getTime() + 7 * 24 * 60 * 60 * 1000).toISOString() : undefined,
      "eligibleCustomerType": targetAudience
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
      },
      {
        "@type": "PropertyValue",
        "name": "Güven Belgeleri",
        "value": trustBadges?.join(", ")
      },
      {
        "@type": "PropertyValue",
        "name": "Avantajlar",
        "value": advantages?.join(", ")
      },
      {
        "@type": "PropertyValue",
        "name": "Başvuru Şartları",
        "value": requirements?.join(", ")
      }
    ],
    "category": "Bireysel Kredi",
    "audience": {
      "@type": "Audience",
      "audienceType": targetAudience
    },
    "reviews": customerReviews?.map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.date,
      "reviewBody": review.comment
    }))
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
            <meta itemProp="creditType" content="Bireysel Kredi" />
            <meta itemProp="currency" content="TRY" />
            <meta itemProp="areaServed" content="TR" />
            <meta itemProp="applicationCategory" content="Finansal Ürün" />
            <meta itemProp="keywords" content={`${name}, kredi, ihtiyaç kredisi, ${amount}, ${interestRate}, ${term}, kredi başvurusu, online kredi`} />
            <meta itemProp="numberOfBranches" content={bankBranches?.toString()} />
            <meta itemProp="hasOnlineApplication" content={onlineApplication?.toString()} />
            
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
              advantages={advantages}
              requirements={requirements}
            />

            <BankFeatures
              bankBranches={bankBranches}
              establishedYear={establishedYear}
              securityFeatures={securityFeatures}
              awards={awards}
              satisfaction={customerSatisfaction}
            />

            <BankPromotions
              currentPromotions={currentPromotions}
              validUntil={promotionEndDate}
              tags={promotionTags}
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
              {customerReviews && customerReviews.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Müşteri Yorumları</h3>
                  <div className="space-y-2">
                    {customerReviews.map((review, index) => (
                      <div key={index} className="border-t pt-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{review.author}</span>
                          <span className="text-yellow-500">{review.rating}/5</span>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                        <time className="text-xs text-gray-400">{review.date}</time>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </footer>
          </article>
        </CardContent>
      </Card>
    </>
  );
};

export default BankCard;