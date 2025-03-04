
import React from 'react';
import { Bank } from '@/types/bank';

interface SchemaProps {
  banks: Bank[];
  currentDate: string;
}

const RetiredSchema: React.FC<SchemaProps> = ({ currentDate, banks }) => {
  // Ana sayfa şema verisi
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": `Emekliye Faizsiz Kredi Veren Bankalar ${currentDate}`,
    "description": `${currentDate} ayına özel emeklilere özel faizsiz kredi kampanyaları, düşük faizli krediler ve promosyon fırsatları. En avantajlı emekli kredisi teklifleri!`,
    "category": "LOAN",
    "url": "https://faizsizkrediverenbankalar.com/emekliye-kredi",
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
        "name": "Emekliler nasıl faizsiz kredi alabilir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Emekliler, kamu bankalarının sunduğu özel kampanyalar, SGK promosyonları ve özel banka teklifleri ile faizsiz veya düşük faizli kredi kullanabilirler. Genellikle emekli maaş kartı ve kimlik belgesi ile başvuru yapabilirsiniz."
        }
      },
      {
        "@type": "Question",
        "name": "Emeklilere en yüksek kredi veren banka hangisi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Emeklilere en yüksek tutarda kredi veren bankalar arasında İş Bankası 200.000 TL, Garanti BBVA 175.000 TL ve Vakıfbank 150.000 TL ile öne çıkmaktadır. Kredi limitleri kredi notunuza göre değişebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Emekli kredisi için yaş sınırı var mıdır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, bankalar genellikle 70-75 yaş üst sınırı uygulamaktadır. Kredi vadesi bittiğinde müşterinin yaşı bu sınırı geçmemelidir. Bazı bankalar daha düşük yaş sınırları uygulayabilmektedir."
        }
      },
      {
        "@type": "Question",
        "name": "Emekliler faizsiz kredi için nereye başvurabilir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Emekliler faizsiz kredi için Ziraat Bankası, Vakıfbank ve Halkbank gibi kamu bankalarına başvurabilirler. Ayrıca, QNB Finansbank, Akbank ve Garanti BBVA gibi özel bankalar da emeklilere özel avantajlı kampanyalar sunmaktadır."
        }
      }
    ]
  };

  // Emekli kredisi karşılaştırma tablosu için şema verisi
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "Table",
    "about": "Emekliye Faizsiz Kredi Veren Bankalar Karşılaştırması",
    "description": "Türkiye'deki emeklilere özel faizsiz ve düşük faizli kredi veren bankaların promosyon, limit ve avantajları bakımından karşılaştırılması",
    "keywords": "emekli kredisi, faizsiz emekli kredisi, düşük faizli emekli kredisi, emekli promosyonu"
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
          "name": `${bank.name} Emekli Kredisi`,
          "category": "LOAN",
          "loanType": "personal",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "TRY",
            "description": `${bank.amount} tutarında, ${bank.interestRate} faiz oranlı, ${bank.term} vadeli emekli kredisi.`,
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
          "dateModified": bank.lastUpdate || new Date().toLocaleDateString('tr-TR')
        };
        
        return (
          <script key={index} type="application/ld+json">{JSON.stringify(bankSchema)}</script>
        );
      })}
    </>
  );
};

export default RetiredSchema;
