
import React from 'react';

interface SchemaProps {
  currentDate: string;
  banks: {
    name: string;
    interestRate: string;
    amount: string;
    term: string;
    lastUpdate: string;
  }[];
}

const EasySchema: React.FC<SchemaProps> = ({ currentDate, banks }) => {
  // Ana sayfa şema verisi
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": `En Kolay Kredi Veren Bankalar ${currentDate}`,
    "description": `${currentDate} ayına özel en kolay ve en hızlı kredi veren bankaların güncel faiz oranları ve başvuru koşulları. Minimum evrak ve hızlı onay ile kredi fırsatları!`,
    "category": "LOAN",
    "url": "https://faizsizkrediverenbankalar.com/en-kolay-kredi",
    "provider": {
      "@type": "Organization",
      "name": "Faizsiz Kredi Veren Bankalar",
      "url": "https://faizsizkrediverenbankalar.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Türkiye"
    },
    "datePublished": "2023-01-01",
    "dateModified": new Date().toISOString().split('T')[0]
  };

  // FAQ şema verisi
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "En kolay kredi başvurusu nasıl yapılır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En kolay kredi başvurusu genellikle bankaların mobil uygulamaları veya internet siteleri üzerinden yapılabilmektedir. E-Devlet entegrasyonu, SMS ile başvuru ve QR kod ile başvuru gibi seçenekler mevcuttur."
        }
      },
      {
        "@type": "Question",
        "name": "Hangi bankalar gelir belgesiz kredi veriyor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bazı bankalar, özellikle düşük tutarlı krediler için gelir belgesi talep etmeyebilir. Garanti BBVA, Yapı Kredi ve CEPTETEB gibi bankalar, belirli limitler dahilinde gelir belgesiz kredi kullandırabilmektedir."
        }
      },
      {
        "@type": "Question",
        "name": "Online kredi başvurusu için gerekli belgeler nelerdir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Online kredi başvurusu için genellikle sadece kimlik bilgileriniz yeterlidir. E-Devlet üzerinden yapılan başvurularda ek belge talep edilmemektedir. Bazı bankalar video görüşme ile kimlik teyidi yapabilmektedir."
        }
      },
      {
        "@type": "Question",
        "name": "Anında kredi onayı veren bankalar hangileridir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Garanti BBVA, Yapı Kredi, CEPTETEB, Enpara ve ING Bank gibi bankalar, dijital kanallar üzerinden anında kredi onayı verebilmektedir. Bu bankalar, başvuru sonrasında dakikalar içinde kredi sonucunu bildirebilir ve onay durumunda tutarı hesabınıza aktarabilir."
        }
      }
    ]
  };

  // Ürün karşılaştırma tablosu için şema verisi
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "Table",
    "about": "En Kolay Kredi Veren Bankalar Karşılaştırması",
    "description": "Türkiye'deki en kolay kredi veren bankaların online başvuru, anında onay, gelir belgesi gereklilikleri bakımından karşılaştırılması",
    "keywords": "kolay kredi, hızlı kredi, anında onay, online başvuru"
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(comparisonSchema)}</script>
      
      {/* Her banka için ayrı finansal ürün şeması */}
      {banks.map((bank, index) => {
        const bankSchema = {
          "@context": "https://schema.org",
          "@type": "FinancialProduct",
          "name": `${bank.name} Kolay Kredi`,
          "category": "LOAN",
          "loanType": "personal",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "TRY",
            "description": `${bank.amount} tutarında, ${bank.interestRate} faiz oranlı, ${bank.term} vadeli kredi.`,
            "availability": "https://schema.org/InStock",
            "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
          },
          "feesAndCommissionsSpecification": "Kredi tahsis ücreti ve sigorta masrafları uygulanabilir",
          "interestRate": {
            "@type": "QuantitativeValue",
            "value": bank.interestRate.replace("%", ""),
            "minValue": bank.interestRate.replace("%", ""),
            "maxValue": (parseFloat(bank.interestRate.replace("%", "")) + 1).toString(),
            "unitText": "PERCENT"
          },
          "provider": {
            "@type": "BankOrCreditUnion",
            "name": bank.name,
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "TR"
            }
          },
          "dateModified": bank.lastUpdate
        };
        
        return (
          <script key={index} type="application/ld+json">{JSON.stringify(bankSchema)}</script>
        );
      })}
    </>
  );
};

export default EasySchema;
