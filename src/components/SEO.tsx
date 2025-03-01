
import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string;
}

const SEO = ({ title, description, canonicalUrl, keywords }: SEOProps) => {
  const domain = "https://faizsizkrediverenbankalar.com";
  const fullCanonicalUrl = `${domain}${canonicalUrl}`;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonicalUrl} />
      <link rel="home" href={domain} />
    </Helmet>
  );
};

export default SEO;
