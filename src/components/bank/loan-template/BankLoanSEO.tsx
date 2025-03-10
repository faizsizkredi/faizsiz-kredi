
import { PageMeta } from "@/utils/seoUtils";
import { getCurrentMonthYear } from "@/utils/dateUtils";
import { getCanonicalUrl, getPageUrls } from "@/utils/canonicalUrls";

interface BankLoanSEOProps {
  bankName: string;
  formattedAmount: string;
  pageSlug: string;
}

const BankLoanSEO = ({ bankName, formattedAmount, pageSlug }: BankLoanSEOProps) => {
  const currentDate = getCurrentMonthYear();
  const currentYear = new Date().getFullYear();
  
  // Create proper title and meta description for SEO
  const title = `${bankName} ${formattedAmount} TL Faizsiz Kredi Başvurusu ${currentYear}`;
  const description = `${bankName} ${formattedAmount} TL faizsiz kredi kampanyası ${currentDate} - %0 faiz oranı ile ${formattedAmount} TL kredi kullanma fırsatı. Hemen başvur, anında sonuç al.`;
  const keywords = `${bankName.toLowerCase()} ${formattedAmount} tl kredi, ${bankName.toLowerCase()} faizsiz kredi, ${formattedAmount} tl kredi, faizsiz kredi, sıfır faizli kredi`;
  
  // Generate canonical URL for this page
  const bankSlug = bankName.toLowerCase().replace(/\s+/g, "-");
  const amountSlug = formattedAmount.replace(/\./g, '');
  const pageUrl = `bank/${bankSlug}/${amountSlug}-tl-faizsiz-kredi`;
  const { canonical, homepage } = getPageUrls(pageUrl, "bank");
  
  return (
    <PageMeta
      title={title}
      description={description}
      keywords={keywords}
      pageSlug={pageSlug}
      pageType="bank"
      canonicalUrl={canonical}
    />
  );
};

export default BankLoanSEO;
