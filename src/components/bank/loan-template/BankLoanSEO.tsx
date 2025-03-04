
import { PageMeta } from "@/utils/seoUtils";
import { getCurrentMonthYear } from "@/utils/dateUtils";

interface BankLoanSEOProps {
  bankName: string;
  formattedAmount: string;
  pageSlug: string;
}

const BankLoanSEO = ({ bankName, formattedAmount, pageSlug }: BankLoanSEOProps) => {
  const currentDate = getCurrentMonthYear();
  const title = `${bankName} ${formattedAmount} TL Faizsiz Kredi Başvurusu ${new Date().getFullYear()}`;
  const description = `${bankName} ${formattedAmount} TL faizsiz kredi kampanyası ${currentDate} - %0 faiz oranı ile ${formattedAmount} TL kredi kullanma fırsatı. Hemen başvur, anında sonuç al.`;
  const keywords = `${bankName.toLowerCase()} ${formattedAmount} tl kredi, ${bankName.toLowerCase()} faizsiz kredi, ${formattedAmount} tl kredi, faizsiz kredi, sıfır faizli kredi`;
  
  return (
    <PageMeta
      title={title}
      description={description}
      keywords={keywords}
      pageSlug={pageSlug}
      pageType="bank"
    />
  );
};

export default BankLoanSEO;
