
import React from "react";
import { Helmet } from "react-helmet";

interface PageMetaProps {
  title: string;
  description: string;
  keywords?: string;
  pageSlug: string;
  pageType: "home" | "bank" | "loan" | "blog" | "calculator" | "other";
  imageUrl?: string;
}

const DOMAIN = "https://faizsizkrediverenbankalar.com";

/**
 * Gets the canonical URL for a page
 * @param pageSlug The page's slug (without leading slash)
 * @returns The full canonical URL
 */
export const getCanonicalUrl = (pageSlug: string): string => {
  if (!pageSlug || pageSlug === "") {
    return DOMAIN;
  }
  return `${DOMAIN}/${pageSlug}`;
};

/**
 * Renders meta tags for SEO
 */
export const PageMeta: React.FC<PageMetaProps> = ({ 
  title, 
  description, 
  keywords, 
  pageSlug,
  pageType,
  imageUrl
}) => {
  const canonicalUrl = getCanonicalUrl(pageSlug);
  const homepageUrl = DOMAIN;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      {/* Always include home page reference for SEO */}
      <link rel="home" href={homepageUrl} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      
      {/* Open Graph tags for better social sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={pageType === "blog" ? "article" : "website"} />
      <meta property="og:site_name" content="Faizsiz Kredi Veren Bankalar" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
