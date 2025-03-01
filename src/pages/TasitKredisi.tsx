
import { Car } from "lucide-react";
import LoanPageLayout from "@/components/loan/LoanPageLayout";
import { PageMeta } from "@/utils/seoUtils";

const TasitKredisi = () => {
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
      <PageMeta
        title="Taşıt Kredisi 2024 | En Uygun Taşıt Kredisi Başvurusu"
        description="2024 yılı güncel taşıt kredisi kampanyaları, faiz oranları ve başvuru koşulları. En uygun taşıt kredisi veren bankalar."
        keywords="taşıt kredisi, araba kredisi, araç kredisi, kredi hesaplama, kredi başvurusu"
        pageSlug="tasit-kredisi"
        pageType="loan"
      />
      
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      
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
