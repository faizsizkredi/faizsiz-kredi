
import { Home } from "lucide-react";
import LoanPageLayout from "@/components/loan/LoanPageLayout";
import { PageMeta } from "@/utils/seoUtils";

const KonutKredisi = () => {
  const faqs = [
    {
      question: "Konut kredisi için ne kadar peşinat gerekiyor?",
      answer: "Genellikle evin değerinin en az %20'si kadar peşinat gereklidir. Bazı özel kampanyalarda bu oran %10'a kadar düşebilmektedir."
    },
    {
      question: "Konut kredisi vadesi ne kadar olabilir?",
      answer: "Konut kredilerinde vade genellikle 120 aya kadar çıkabilmektedir. Bazı özel durumlarda 180 aya kadar vade imkanı sunan bankalar bulunmaktadır."
    },
    {
      question: "Konut kredisi masrafları nelerdir?",
      answer: "Ekspertiz ücreti, ipotek tesis ücreti, dosya masrafı ve hayat sigortası gibi masraflar bulunmaktadır. Bu masraflar bankadan bankaya değişiklik gösterebilir."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Konut Kredisi",
    "description": "2024 yılı güncel konut kredisi kampanyaları ve başvuru koşulları",
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
        title="Konut Kredisi 2024 | En Uygun Konut Kredisi Başvurusu"
        description="2024 yılı güncel konut kredisi kampanyaları, faiz oranları ve başvuru koşulları. En uygun konut kredisi veren bankalar."
        keywords="konut kredisi, ev kredisi, mortgage, kredi hesaplama, kredi başvurusu"
        pageSlug="konut"
        pageType="loan"
      />
      
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      
      <LoanPageLayout
        title="Konut Kredisi"
        description="2024 yılı güncel konut kredisi kampanyaları, faiz oranları ve başvuru koşulları. En uygun konut kredisi veren bankalar."
        keywords="konut kredisi, ev kredisi, mortgage, kredi hesaplama, kredi başvurusu"
        icon={Home}
        activeTab="konut"
        faqs={faqs}
      />
    </>
  );
};

export default KonutKredisi;
