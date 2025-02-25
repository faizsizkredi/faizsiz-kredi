
const BASE_URL = 'https://faizsizkrediverenbankalar.com';

type PageType = 'home' | 'bank' | 'loan' | 'generic';

// Sayfa türlerine göre URL yapıları
const createUrlByPageType = (path: string = '', pageType: PageType = 'generic') => {
  const cleanPath = path.replace(/\/+/g, '/').replace(/^\/*|\/*$/g, '');
  
  switch (pageType) {
    case 'home':
      return BASE_URL;
    case 'bank':
      return `${BASE_URL}/bank/${cleanPath}`;
    case 'loan':
      return `${BASE_URL}/bank/${cleanPath}-tl-kredi`;
    default:
      return `${BASE_URL}/${cleanPath}`;
  }
};

export const getCanonicalUrl = (pathname: string = '', pageType: PageType = 'generic') => {
  return createUrlByPageType(pathname, pageType);
};

export const getPageUrls = (currentPath: string = '', pageType: PageType = 'generic') => {
  return {
    canonical: getCanonicalUrl(currentPath, pageType),
    current: getCanonicalUrl(currentPath, pageType),
    homepage: BASE_URL
  };
};

// Banka detay sayfaları için özel URL yapısı
export const getBankPageUrls = (bankSlug: string, amount?: string) => {
  if (amount) {
    return getPageUrls(`${bankSlug}/${amount}`, 'loan');
  }
  return getPageUrls(bankSlug, 'bank');
};

