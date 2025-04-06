
import React from "react";
import { Helmet } from "react-helmet-async";

interface PageMetaProps {
  title: string;
  description: string;
  keywords?: string;
  pageSlug: string;
  pageType: "home" | "bank" | "loan" | "blog" | "calculator" | "other";
  imageUrl?: string;
  author?: string;
  publishDate?: string;
  modifiedDate?: string;
  canonicalUrl?: string;
}

const DOMAIN = "https://faizsizkrediverenbankalar.com";

/**
 * Gets the canonical URL for a page
 * @param pageSlug The page's slug (without leading slash)
 * @returns The full canonical URL
 */
export const generateCanonicalUrl = (pageSlug: string): string => {
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
  imageUrl,
  author = "Finans Uzmanı",
  publishDate = "2023-09-15",
  modifiedDate = new Date().toISOString().split('T')[0],
  canonicalUrl
}) => {
  // Use provided canonicalUrl if available, otherwise generate from pageSlug
  const finalCanonicalUrl = canonicalUrl || generateCanonicalUrl(pageSlug);
  const homepageUrl = DOMAIN;
  
  return (
    <Helmet key={`page-meta-${pageSlug}`}>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={finalCanonicalUrl} />
      {/* Always include home page reference for SEO */}
      <link rel="home" href={homepageUrl} />
      
      {/* Author and dates */}
      {author && <meta name="author" content={author} />}
      {publishDate && <meta property="article:published_time" content={publishDate} />}
      {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      
      {/* Image */}
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {imageUrl && <meta property="og:image:alt" content={title} />}
      
      {/* Open Graph tags for better social sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:type" content={pageType === "blog" ? "article" : "website"} />
      <meta property="og:site_name" content="Faizsiz Kredi Veren Bankalar" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Locale */}
      <meta property="og:locale" content="tr_TR" />
      
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    </Helmet>
  );
};
