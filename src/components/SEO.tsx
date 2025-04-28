
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string;
  imageUrl?: string;
  author?: string;
  publishDate?: string;
  modifiedDate?: string;
  type?: "website" | "article";
  structuredData?: Record<string, any>;
}

const SEO = ({ 
  title, 
  description, 
  canonicalUrl, 
  keywords,
  imageUrl,
  author = "Finans Uzmanı",
  publishDate,
  modifiedDate = new Date().toISOString().split('T')[0],
  type = "website",
  structuredData
}: SEOProps) => {
  const domain = "https://faizsizkrediverenbankalar.com";
  const fullCanonicalUrl = canonicalUrl.startsWith("http") 
    ? canonicalUrl 
    : `${domain}${canonicalUrl.startsWith("/") ? canonicalUrl : `/${canonicalUrl}`}`;
  
  const pageImage = imageUrl || `${domain}/logo.png`;
  
  return (
    <Helmet key={`seo-${canonicalUrl}`}>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:site_name" content="Faizsiz Kredi Veren Bankalar" />
      <meta property="og:locale" content="tr_TR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={pageImage} />
      
      {/* Additional Meta */}
      {author && <meta name="author" content={author} />}
      {publishDate && <meta property="article:published_time" content={publishDate} />}
      {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
