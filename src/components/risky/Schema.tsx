
import React from 'react';

interface SchemaProps {
  bankName: string;
  interestRate: string;
  amount: string;
  term: string;
  lastUpdate: string;
}

const Schema: React.FC<SchemaProps> = ({ bankName, interestRate, amount, term, lastUpdate }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": `${bankName} Riskli Müşteri Kredisi`,
    "category": "LOAN",
    "loanType": "personal",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "TRY",
      "description": `${amount} TL tutarında, %${interestRate} faiz oranlı, ${term} vadeli kredi.`,
      "availability": "https://schema.org/InStock",
      "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
    },
    "feesAndCommissionsSpecification": "Kredi tahsis ücreti ve sigorta masrafları uygulanabilir",
    "interestRate": {
      "@type": "QuantitativeValue",
      "value": interestRate.replace("%", ""),
      "minValue": interestRate.replace("%", ""),
      "maxValue": (parseFloat(interestRate.replace("%", "")) + 1).toString(),
      "unitText": "PERCENT"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Türkiye"
    },
    "provider": {
      "@type": "BankOrCreditUnion",
      "name": bankName,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "TR"
      }
    },
    "dateModified": lastUpdate
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schemaData)}
    </script>
  );
};

export default Schema;
