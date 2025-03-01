
const BASE_URL = 'https://faizsizkrediverenbankalar.com';

type PageType = 'home' | 'bank' | 'loan' | 'generic' | 'blog' | 'calculator' | 'special';

/**
 * Creates clean canonical URLs based on page type
 * @param pathname The path segment for the current page
 * @param pageType The type of page for proper URL formatting
 * @returns The properly formatted canonical URL
 */
export const getCanonicalUrl = (pathname: string = '', pageType: PageType = 'generic') => {
  // Clean the path by removing extra slashes and trailing slashes
  const cleanPath = pathname.replace(/\/+/g, '/').replace(/^\/*|\/*$/g, '');
  
  switch (pageType) {
    case 'home':
      return BASE_URL;
    case 'bank':
      return `${BASE_URL}/bank/${cleanPath}`;
    case 'loan':
      return `${BASE_URL}/${cleanPath}-kredisi`;
    case 'blog':
      return cleanPath ? `${BASE_URL}/blog/${cleanPath}` : `${BASE_URL}/blog`;
    case 'calculator':
      return `${BASE_URL}/kredi-faiz-hesaplama`;
    case 'special':
      return `${BASE_URL}/${cleanPath}`;
    default:
      return cleanPath ? `${BASE_URL}/${cleanPath}` : BASE_URL;
  }
};

/**
 * Gets URLs for page with both canonical and homepage references
 * @param currentPath The current page path
 * @param pageType The type of page
 * @returns Object containing canonical URL and homepage URL
 */
export const getPageUrls = (currentPath: string = '', pageType: PageType = 'generic') => {
  return {
    canonical: getCanonicalUrl(currentPath, pageType),
    homepage: BASE_URL
  };
};

/**
 * Gets URLs for bank pages with special structure
 * @param bankSlug The bank slug
 * @param amount Optional loan amount
 * @returns Object containing canonical URL and homepage URL
 */
export const getBankPageUrls = (bankSlug: string, amount?: string) => {
  const path = amount ? `${bankSlug}/${amount}-tl-faizsiz-kredi` : bankSlug;
  return getPageUrls(path, 'bank');
};

/**
 * Gets URLs for special pages with custom paths
 * @param path The special page path
 * @returns Object containing canonical URL and homepage URL
 */
export const getSpecialPageUrls = (path: string) => {
  return getPageUrls(path, 'special');
};
