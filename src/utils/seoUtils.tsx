
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

export const getCanonicalUrl = (pageSlug: string): string => {
  const base = "https://faizsizkrediverenbankalar.com";
  if (!pageSlug || pageSlug === "") {
    return base;
  }
  return `${base}/${pageSlug}`;
};

export const PageMeta: React.FC<PageMetaProps> = ({ 
  title, 
  description, 
  keywords, 
  pageSlug,
  pageType,
  imageUrl
}) => {
  const canonicalUrl = getCanonicalUrl(pageSlug);
  const homepageUrl = "https://faizsizkrediverenbankalar.com";
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      {pageType !== "home" && <link rel="home" href={homepageUrl} />}
      {imageUrl && <meta property="og:image" content={imageUrl} />}
    </Helmet>
  );
};
