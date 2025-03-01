
import { Helmet } from "react-helmet";
import { getPageUrls } from "./canonicalUrls";

interface MetaProps {
  title: string;
  description: string;
  keywords?: string;
  pageSlug: string;
  pageType: 'home' | 'bank' | 'loan' | 'blog' | 'page';
  imageUrl?: string;
}

export const PageMeta = ({
  title,
  description,
  keywords,
  pageSlug,
  pageType,
  imageUrl
}: MetaProps) => {
  const { canonical, homepage } = getPageUrls(pageSlug, pageType);
  const currentYear = new Date().getFullYear();
  const formattedTitle = title.includes(String(currentYear)) ? title : `${title} ${currentYear}`;
  
  return (
    <Helmet>
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      <link rel="alternate" href={homepage} hrefLang="tr" />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
    </Helmet>
  );
};
