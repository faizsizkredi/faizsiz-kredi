
import { Car } from "lucide-react";
import LoanPageLayout from "@/components/loan/LoanPageLayout";
import { Helmet } from "react-helmet";
import { getPageUrls } from "@/utils/canonicalUrls";

const TasitKredisi = () => {
  const { canonical, homepage } = getPageUrls('tasit', 'loan');

  const faqs = [
    {
      question: "Taşıt kredisi için araç yaşı önemli mi?",
      answer: "Evet, genellikle bankalar 0 km araçlar için daha uygun faiz oranları sunar. İkinci el araçlarda ise araç yaşı genellikle 5-7 yılı geçmemelidir."
    },
    {
      question: "Taşıt kredisinde kasko zorunlu mu?",
      answer: "Evet, taşıt kredilerinde kasko ve trafik sigortası zorunludur. Kredi süresince aracın bankaya rehinli olması ve kaskosu devam etmesi gerekir."
    },
    {
      question: "Taşıt kredisi ne kadar sürede onaylanır?",
      answer: "Gerekli tüm belgeler tamamlandığında taşıt kredisi genellikle 1-2 iş günü içinde onaylanır."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Taşıt Kredisi",
    "description": "2024 yılı güncel taşıt kredisi kampanyaları ve başvuru koşulları",
    "provider": {
      "@type": "FinancialService",
      "name": "Kredi Karşılaştırma Platformu"
    },
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "10+",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <Helmet>
        <title>Taşıt Kredisi 2024 | En Uygun Taşıt Kredisi Başvurusu</title>
        <meta name="description" content="2024 yılı güncel taşıt kredisi kampanyaları, faiz oranları ve başvuru koşulları. En uygun taşıt kredisi veren bankalar." />
        <meta name="keywords" content="taşıt kredisi, araba kredisi, araç kredisi, kredi hesaplama, kredi başvurusu" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" href={homepage} hrefLang="tr" />
        <meta property="og:url" content={canonical} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      <LoanPageLayout
        title="Taşıt Kredisi"
        description="2024 yılı güncel taşıt kredisi kampanyaları, faiz oranları ve başvuru koşulları. En uygun taşıt kredisi veren bankalar."
        keywords="taşıt kredisi, araba kredisi, araç kredisi, kredi hesaplama, kredi başvurusu"
        icon={Car}
        activeTab="tasit"
        faqs={faqs}
      />
    </>
  );
};

export default TasitKredisi;
