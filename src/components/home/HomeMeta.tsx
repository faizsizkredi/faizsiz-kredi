
import { getCurrentMonthYear } from "@/utils/dateUtils";
import { PageMeta } from "@/utils/seoUtils";
import { getCanonicalUrl } from "@/utils/canonicalUrls";
import { Helmet } from "react-helmet-async";

const HomeMeta = () => {
  const currentDate = getCurrentMonthYear();
  const currentYear = new Date().getFullYear();
  const title = `Faizsiz Kredi Veren Bankalar 2025 | Güncel Kampanyalar (HEMEN BAŞVUR)`;
  const description = `${currentDate} yılı güncel faizsiz ve sıfır faizli kredi veren bankalar: QNB, Akbank, Garanti BBVA. %0 faizle 50.000 TL'ye kadar kredi fırsatları, anında başvuru ve onay. En düşük faizli ihtiyaç kredisi kampanyaları ve karşılaştırması.`;
  const keywords = "faizsiz kredi veren bankalar 2025, sıfır faizli kredi, faizsiz ihtiyaç kredisi, en uygun kredi, kredi kampanyaları, kredi başvurusu, anında kredi onayı, kredi faiz karşılaştırma";
  
  // Get canonical URL for the home page
  const canonicalUrl = getCanonicalUrl("home");
  
  // Define structured data for home page
  const mainSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "datePublished": "2023-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "publisher": {
      "@type": "Organization",
      "name": "Faizsiz Kredi Veren Bankalar",
      "url": "https://faizsizkrediverenbankalar.com"
    },
    "mainEntity": {
      "@type": "FinancialProduct",
      "name": `Faizsiz Kredi Kampanyaları ${currentYear}`,
      "description": `En güncel faizsiz kredi kampanyaları ve %0 faiz oranı fırsatları ${currentYear}`,
      "category": "LOAN",
      "brand": {
        "@type": "Organization",
        "name": "Faizsiz Kredi Veren Bankalar"
      }
    }
  };
  
  // FAQ Schema data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Faizsiz kredi veren bankalar hangileridir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "2025 yılında faizsiz kredi veren başlıca bankalar: QNB Finansbank, Akbank, Garanti BBVA, İş Bankası, DenizBank, Enpara.com, ON Dijital, CEPTETEB ve Albaraka Türk'tür."
        }
      },
      {
        "@type": "Question",
        "name": "Yeni Müşteriye faizsiz kredi veren bankalar hangileridir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yeni müşterilerine özel faizsiz kredi kampanyaları sunan bankalar arasında QNB Finansbank (45.000 TL'ye kadar), Akbank (45.000 TL'ye kadar), Garanti BBVA (45.000 TL'ye kadar), İş Bankası (55.000 TL'ye kadar) ve DenizBank (25.000 TL'ye kadar) bulunmaktadır."
        }
      },
      {
        "@type": "Question",
        "name": "100 bin TL faizsiz kredi veren bankalar hangileridir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Güncel kampanyalarda 100.000 TL faizsiz kredi veren banka bulunmamaktadır. Ancak en yüksek faizsiz kredi limitleri İş Bankası (55.000 TL), QNB Finansbank, Akbank ve Garanti BBVA'da (45.000 TL) bulunmaktadır."
        }
      }
    ]
  };

  // BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": "https://faizsizkrediverenbankalar.com"
      }
    ]
  };

  return (
    <>
      <PageMeta
        title={title}
        description={description}
        keywords={keywords}
        pageSlug=""
        pageType="home"
        canonicalUrl={canonicalUrl}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(mainSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:site_name" content="Faizsiz Kredi Veren Bankalar" />
      </Helmet>
    </>
  );
};

export default HomeMeta;
