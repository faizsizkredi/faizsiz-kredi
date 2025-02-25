
const BASE_URL = 'https://faizsizkrediverenbankalar.com';

// Sayfa türlerine göre URL yapıları
const createBankPageUrl = (bankSlug: string) => `${BASE_URL}/bank/${bankSlug}`;
const createBankLoanPageUrl = (bankSlug: string, amount: string) => 
  `${BASE_URL}/bank/${bankSlug}/${amount}-tl-kredi`;

export const getCanonicalUrl = (pathname: string = '') => {
  // URL'deki gereksiz slash'leri temizle
  const cleanPath = pathname.replace(/\/+/g, '/').replace(/\/$/, '');
  return `${BASE_URL}${cleanPath}`;
};

export const getPageUrls = (pathname: string = '') => {
  return {
    canonical: getCanonicalUrl(pathname),
    homepage: BASE_URL
  };
};

// Banka detay sayfaları için özel URL yapısı
export const getBankPageUrls = (bankSlug: string, amount?: string) => {
  if (amount) {
    return {
      canonical: createBankLoanPageUrl(bankSlug, amount),
      homepage: BASE_URL
    };
  }
  
  return {
    canonical: createBankPageUrl(bankSlug),
    homepage: BASE_URL
  };
};
