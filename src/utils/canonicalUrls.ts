
const BASE_URL = 'https://faizsizkrediverenbankalar.com';

type PageType = 'home' | 'bank' | 'loan' | 'generic';

// Sayfa türlerine göre URL yapıları
const createUrlByPageType = (path: string = '', pageType: PageType = 'generic') => {
  // URL'deki gereksiz slash'leri temizle
  const cleanPath = path.replace(/\/+/g, '/').replace(/^\/*|\/*$/g, '');
  
  switch (pageType) {
    case 'home':
      return BASE_URL;
    case 'bank':
      return cleanPath ? `${BASE_URL}/bank/${cleanPath}` : BASE_URL;
    case 'loan':
      return `${BASE_URL}/bank/${cleanPath}-tl-kredi`;
    default:
      return cleanPath ? `${BASE_URL}/${cleanPath}` : BASE_URL;
  }
};

// Her sayfa için kendi URL'sini canonical olarak döndür
export const getCanonicalUrl = (pathname: string = '', pageType: PageType = 'generic') => {
  return createUrlByPageType(pathname, pageType);
};

// Her sayfa için hem kendi URL'sini hem de ana sayfa URL'sini döndür
export const getPageUrls = (currentPath: string = '', pageType: PageType = 'generic') => {
  const canonicalUrl = getCanonicalUrl(currentPath, pageType);
  
  return {
    canonical: canonicalUrl, // Sayfanın kendi URL'si
    current: canonicalUrl,  // Şu anki URL
    homepage: BASE_URL     // Ana sayfa URL'si
  };
};

// Banka sayfaları için özel URL yapısı
export const getBankPageUrls = (bankSlug: string, amount?: string) => {
  const path = amount ? `${bankSlug}/${amount}` : bankSlug;
  const pageType = amount ? 'loan' : 'bank';
  
  return getPageUrls(path, pageType);
};
