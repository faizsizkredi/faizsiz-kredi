import { Helmet } from "react-helmet";
import { getCurrentMonthYear } from "@/utils/dateUtils";

const HomeMeta = () => {
  const currentDate = getCurrentMonthYear();
  const currentYear = new Date().getFullYear();
  const pageTitle = `Faizsiz Kredi Veren Bankalar ${currentDate} | En Güncel Kredi Kampanyaları`;
  const pageDescription = `${currentDate} ayına özel faizsiz kredi kampanyaları, güncel faiz oranları ve başvuru koşulları. En uygun kredi fırsatları ve banka karşılaştırmaları. ${currentYear} yılının en avantajlı kredi seçenekleri.`;
  const canonicalUrl = "https://faizsizkrediverenbankalar.com";

  // Structured data for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Faizsiz Kredi Rehberi",
    "url": canonicalUrl,
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
    "url": canonicalUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${canonicalUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <html lang="tr" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={`faizsiz kredi, ${currentYear} kredi kampanyaları, sıfır faizli kredi, ${currentDate} kredi fırsatları, kredi başvurusu, banka kredileri, ihtiyaç kredisi, konut kredisi, taşıt kredisi`} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Faizsiz Kredi Rehberi" />
      <meta property="og:locale" content="tr_TR" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="revisit-after" content="1 days" />
      <meta name="author" content="Faizsiz Kredi Rehberi" />
      
      {/* Mobile meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#ffffff" />
      
      {/* Structured Data */}
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