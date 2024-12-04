import { Helmet } from "react-helmet";

const HomeMeta = () => {
  const currentYear = new Date().getFullYear();
  
  // JSON-LD yapılandırılmış veri
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Faizsiz Kredi Rehberi",
    "description": `${currentYear} yılında faizsiz kredi veren bankaların güncel faiz oranları, kampanyaları ve başvuru koşulları`,
    "url": "https://faizsiz-kredi-bulucu-rehberi.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://faizsiz-kredi-bulucu-rehberi.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <html lang="tr" />
      <title>Faizsiz Kredi Veren Bankalar {currentYear} | Güncel Faiz Oranları ve Kampanyalar</title>
      <meta 
        name="description" 
        content={`${currentYear} yılında faizsiz kredi veren bankaların güncel faiz oranları, kampanyaları ve başvuru koşulları. QNB, Akbank, Garanti BBVA ve diğer bankaların faizsiz kredi fırsatları.`}
      />
      <meta 
        name="keywords" 
        content="faizsiz kredi, sıfır faizli kredi, banka kredileri, kredi kampanyaları, ihtiyaç kredisi, QNB, Akbank, Garanti BBVA, İş Bankası, DenizBank" 
      />
      <meta name="author" content="Faizsiz Kredi Rehberi" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`Faizsiz Kredi Veren Bankalar ${currentYear} | En Güncel Kampanyalar`} />
      <meta property="og:description" content={`${currentYear} yılının en güncel faizsiz kredi kampanyaları ve başvuru koşulları. Tüm bankaların kredi tekliflerini karşılaştırın.`} />
      <meta property="og:url" content="https://faizsiz-kredi-bulucu-rehberi.com" />
      <meta property="og:site_name" content="Faizsiz Kredi Rehberi" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Faizsiz Kredi Veren Bankalar ${currentYear}`} />
      <meta name="twitter:description" content={`${currentYear} yılının en güncel faizsiz kredi kampanyaları. Hemen başvurun!`} />
      <link rel="canonical" href="https://faizsiz-kredi-bulucu-rehberi.com" />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default HomeMeta;