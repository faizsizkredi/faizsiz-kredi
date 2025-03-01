
import { Building2 } from "lucide-react";
import LoanPageLayout from "@/components/loan/LoanPageLayout";
import { Helmet } from "react-helmet";
import { getPageUrls } from "@/utils/canonicalUrls";

const KobiKredisi = () => {
  const { canonical, homepage } = getPageUrls('kobi', 'loan');

  const faqs = [
    {
      question: "KOBİ kredisi için hangi belgeler gerekli?",
      answer: "Vergi levhası, son 3 yıllık bilanço ve gelir tablosu, ticaret sicil gazetesi, imza sirküleri ve şirket ortaklarının kimlikleri genellikle istenen temel belgelerdir."
    },
    {
      question: "KOBİ kredisi başvurusu ne kadar sürede sonuçlanır?",
      answer: "Başvurular genellikle 3-5 iş günü içinde sonuçlanır. Belgelerin eksiksiz olması süreci hızlandırır."
    },
    {
      question: "Yeni kurulan şirketler KOBİ kredisi alabilir mi?",
      answer: "Bazı bankalar yeni kurulan şirketlere özel kredi paketleri sunmaktadır. Genellikle 6 ay-1 yıl arası faaliyet geçmişi aranır."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "KOBİ Kredisi",
    "description": "2024 yılı güncel KOBİ kredisi kampanyaları ve başvuru koşulları",
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
        <title>KOBİ Kredisi 2024 | En Uygun KOBİ Kredisi Başvurusu</title>
        <meta name="description" content="2024 yılı güncel KOBİ kredisi kampanyaları, faiz oranları ve başvuru koşulları. En uygun KOBİ kredisi veren bankalar." />
        <meta name="keywords" content="KOBİ kredisi, işletme kredisi, esnaf kredisi, kredi hesaplama, kredi başvurusu" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" href={homepage} hrefLang="tr" />
        <meta property="og:url" content={canonical} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      <LoanPageLayout
        title="KOBİ Kredisi"
        description="2024 yılı güncel KOBİ kredisi kampanyaları, faiz oranları ve başvuru koşulları. En uygun KOBİ kredisi veren bankalar."
        keywords="KOBİ kredisi, işletme kredisi, esnaf kredisi, kredi hesaplama, kredi başvurusu"
        icon={Building2}
        activeTab="kobi"
        faqs={faqs}
      />
    </>
  );
};

export default KobiKredisi;
