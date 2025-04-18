
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string;
}

const SEO = ({ title, description, canonicalUrl, keywords }: SEOProps) => {
  const domain = "https://faizsizkrediverenbankalar.com";
  const fullCanonicalUrl = canonicalUrl.startsWith("http") 
    ? canonicalUrl 
    : `${domain}${canonicalUrl.startsWith("/") ? canonicalUrl : `/${canonicalUrl}`}`;
  
  return (
    <Helmet key={`seo-${canonicalUrl}`}>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonicalUrl} />
    </Helmet>
  );
};

export default SEO;
