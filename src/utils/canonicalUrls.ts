
const BASE_URL = "https://faizsizkrediverenbankalar.com";

/**
 * Generates bank page URLs for a given bank and amounts
 */
export const getBankPageUrls = (bankName: string, amounts: string[]) => {
  const bankSlug = bankName.toLowerCase().replace(/\s+/g, '-');
  
  return amounts.map(amount => {
    const amountSlug = amount.replace(/\./g, '');
    return {
      amount,
      url: `/bank/${bankSlug}/${amountSlug}-tl-faizsiz-kredi`
    };
  });
};

/**
 * Gets canonical URL for all page types
 */
export const getCanonicalUrl = (pageType: string, pageSlug?: string) => {
  switch (pageType) {
    case "home":
      return BASE_URL;
    case "bank":
      return `${BASE_URL}/${pageSlug || ''}`;
    case "loan":
      return `${BASE_URL}/${pageSlug || 'kredi'}`;
    case "retired":
      return `${BASE_URL}/emekliye-faizsiz-kredi`;
    case "easy":
      return `${BASE_URL}/en-kolay-kredi`;
    case "affordable":
      return `${BASE_URL}/en-uygun-kredi`;
    case "risky":
      return `${BASE_URL}/riskli-musteriye-kredi`;
    case "zero-interest":
      return `${BASE_URL}/sifir-faizli-kredi`;
    case "new-customer":
      return `${BASE_URL}/yeni-musteriye-kredi`;
    case "promotion":
      return `${BASE_URL}/promosyonlu-krediler`;
    case "blog":
      return `${BASE_URL}/blog/${pageSlug || ''}`;
    default:
      return pageSlug ? `${BASE_URL}/${pageSlug}` : BASE_URL;
  }
};

/**
 * Gets both the canonical URL and homepage URL for SEO purposes
 * This function is used by components to ensure consistent SEO structure across the site
 */
export const getPageUrls = (pageSlug: string, pageType: string) => {
  const canonical = getCanonicalUrl(pageType, pageSlug);
  const homepage = BASE_URL;
  
  return {
    canonical,
    homepage
  };
};
