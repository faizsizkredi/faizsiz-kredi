
interface BankCardSchemaProps {
  name: string;
  specialOffer: string;
  amount: string;
  term: string;
  interestRate: string;
  lastUpdate?: string;
  userRating: number;
  applicationCount: string;
  targetAudience?: string;
  processingTime?: string;
}

const BankCardSchema = ({
  name,
  specialOffer,
  amount,
  term,
  interestRate,
  lastUpdate,
  userRating,
  applicationCount,
  targetAudience,
  processingTime,
}: BankCardSchemaProps) => {
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
    <script type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </script>
  );
};

export default BankCardSchema;
