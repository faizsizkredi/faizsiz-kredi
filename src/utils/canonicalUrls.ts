
const BASE_URL = "https://faizsizkrediverenbankalar.com";

export interface PageUrlsResult {
  canonical: string;
  homepage: string;
}

export const getPageUrls = (pageSlug: string, pageType: 'home' | 'bank' | 'loan' | 'blog' | 'page' = 'page'): PageUrlsResult => {
  // Homepage is always the same
  const homepage = BASE_URL;
  
  // Build canonical URL based on page type and slug
  let canonical = homepage;
  
  if (pageType === 'home') {
    // Homepage canonical is just the base URL
    canonical = homepage;
  } else if (pageType === 'bank') {
    canonical = `${homepage}/banka/${pageSlug}`;
  } else if (pageType === 'loan') {
    canonical = `${homepage}/${pageSlug}-kredisi`;
  } else if (pageType === 'blog') {
    canonical = `${homepage}/blog/${pageSlug}`;
  } else if (pageType === 'page') {
    canonical = `${homepage}/${pageSlug}`;
  }
  
  return { canonical, homepage };
};

// Specific function for bank loan amounts
export const getBankPageUrls = (bankSlug: string, amountSlug: string): PageUrlsResult => {
  const homepage = BASE_URL;
  const canonical = `${homepage}/banka/${bankSlug}/${amountSlug}-tl-kredi`;
  
  return { canonical, homepage };
};
