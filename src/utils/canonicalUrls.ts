
const BASE_URL = 'https://faizsizkrediverenbankalar.com';

type PageType = 'home' | 'bank' | 'loan' | 'generic' | 'blog' | 'calculator';

// Create clean URLs based on page type
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
    default:
      return cleanPath ? `${BASE_URL}/${cleanPath}` : BASE_URL;
  }
};

// Page URLs with canonical and homepage reference
export const getPageUrls = (currentPath: string = '', pageType: PageType = 'generic') => {
  return {
    canonical: getCanonicalUrl(currentPath, pageType),
    homepage: BASE_URL
  };
};

// Special URL structure for bank pages
export const getBankPageUrls = (bankSlug: string, amount?: string) => {
  const path = amount ? `${bankSlug}/${amount}` : bankSlug;
  return getPageUrls(path, 'bank');
};
