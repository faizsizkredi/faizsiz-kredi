
import { Helmet } from "react-helmet";
import { getCurrentMonthYear } from "@/utils/dateUtils";
import { getPageUrls } from "@/utils/canonicalUrls";

const HomeMeta = () => {
  const currentDate = getCurrentMonthYear();
  const currentYear = new Date().getFullYear();
  const pageTitle = `Faizsiz Kredi Veren Bankalar ${currentDate} | En Güncel Kredi Kampanyaları`;
  const pageDescription = `${currentDate} ayına özel faizsiz kredi kampanyaları, güncel faiz oranları ve başvuru koşulları. En uygun kredi fırsatları ve banka karşılaştırmaları. ${currentYear} yılının en avantajlı kredi seçenekleri.`;
  
  // Ana sayfa için URL'leri al
  const { canonical, homepage } = getPageUrls('', 'home');

  // Structured data for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Faizsiz Kredi Rehberi",
    "url": homepage,
    "description": pageDescription,
    "sameAs": [
      "https://twitter.com/faizsizkredi",
      "https://facebook.com/faizsizkredi",
      "https://instagram.com/faizsizkredi"
    ]
  };

  // Structured data for website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Faizsiz Kredi Rehberi",
    "url": homepage,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${homepage}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <html lang="tr" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={`faizsiz kredi, ${currentYear} kredi kampanyaları, sıfır faizli kredi, ${currentDate} kredi fırsatları, kredi başvurusu, banka kredileri, ihtiyaç kredisi, konut kredisi, taşıt kredisi`} />
      
      <link rel="canonical" href={canonical} />
      <link rel="alternate" href={homepage} hrefLang="tr" />
      
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Faizsiz Kredi Rehberi" />
      <meta property="og:locale" content="tr_TR" />
      
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};

export default HomeMeta;
