
import { Banknote } from "lucide-react";
import LoanPageLayout from "@/components/loan/LoanPageLayout";
import { PageMeta } from "@/utils/seoUtils";

const IhtiyacKredisi = () => {
  const faqs = [
    {
      question: "İhtiyaç kredisi başvurusu nasıl yapılır?",
      answer: "İhtiyaç kredisi başvurusu için bankanın internet şubesi, mobil uygulaması veya şubelerini kullanabilirsiniz. Online başvuru için TC kimlik numaranız ve cep telefonu numaranız yeterlidir."
    },
    {
      question: "İhtiyaç kredisi için gerekli belgeler nelerdir?",
      answer: "Kimlik fotokopisi, gelir belgesi, ikametgah belgesi ve son 3 aylık banka hesap özeti genellikle istenen temel belgelerdir."
    },
    {
      question: "Kredi notum düşükse ihtiyaç kredisi alabilir miyim?",
      answer: "Kredi notunuz düşükse bazı bankalar size özel kampanyalar sunabilir. Ayrıca kefil veya ek gelir belgesi ile başvuru şansınızı artırabilirsiniz."
    }
  ];

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "İhtiyaç Kredisi",
    "description": "2024 yılı güncel ihtiyaç kredisi kampanyaları ve başvuru koşulları",
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
        title="İhtiyaç Kredisi 2024 | En Uygun İhtiyaç Kredisi Başvurusu"
        description="2024 yılı güncel ihtiyaç kredisi kampanyaları, faiz oranları ve başvuru koşulları. En uygun ihtiyaç kredisi veren bankalar."
        keywords="ihtiyaç kredisi, kredi hesaplama, kredi başvurusu, banka kredileri, uygun kredi"
        pageSlug="ihtiyac"
        pageType="loan"
      />
      
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      
      <LoanPageLayout
        title="İhtiyaç Kredisi"
        description="2024 yılı güncel ihtiyaç kredisi kampanyaları, faiz oranları ve başvuru koşulları. En uygun ihtiyaç kredisi veren bankalar."
        keywords="ihtiyaç kredisi, kredi hesaplama, kredi başvurusu, banka kredileri, uygun kredi"
        icon={Banknote}
        activeTab="ihtiyac"
        faqs={faqs}
      />
    </>
  );
};

export default IhtiyacKredisi;
