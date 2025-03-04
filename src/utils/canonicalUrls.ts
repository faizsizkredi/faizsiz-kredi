
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
  const baseUrl = "https://faizsizkrediverenbankalar.com";
  
  switch (pageType) {
    case "home":
      return baseUrl;
    case "bank":
      return `${baseUrl}/bank/${pageSlug || ''}`;
    case "loan":
      return `${baseUrl}/${pageSlug || 'kredi'}`;
    case "retired":
      return `${baseUrl}/emekliye-kredi`;
    case "easy":
      return `${baseUrl}/en-kolay-kredi`;
    case "affordable":
      return `${baseUrl}/en-uygun-kredi`;
    case "risky":
      return `${baseUrl}/riskli-kredi`;
    case "zero-interest":
      return `${baseUrl}/faizsiz-kredi`;
    case "new-customer":
      return `${baseUrl}/yeni-musteri-kredisi`;
    case "promotion":
      return `${baseUrl}/kredi-promosyonlari`;
    case "blog":
      return `${baseUrl}/blog/${pageSlug || ''}`;
    default:
      return pageSlug ? `${baseUrl}/${pageSlug}` : baseUrl;
  }
};

/**
 * Gets both the canonical URL and homepage URL for SEO purposes
 * This function is used by BlogPost and KrediFaizHesaplama components
 */
export const getPageUrls = (pageSlug: string, pageType: string) => {
  const baseUrl = "https://faizsizkrediverenbankalar.com";
  const canonical = getCanonicalUrl(pageType, pageSlug);
  const homepage = baseUrl;
  
  return {
    canonical,
    homepage
  };
};
