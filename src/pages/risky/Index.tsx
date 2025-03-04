
import { useState } from "react";
import FilterContent from "@/components/filters/FilterContent";
import { getCurrentMonthYear } from "@/utils/dateUtils";
import { PageMeta } from "@/utils/seoUtils";
import RiskyCustomerInfo from "@/components/risky/RiskyCustomerInfo";
import RiskyLoanSteps from "@/components/risky/RiskyLoanSteps";
import RiskyComparison from "@/components/risky/RiskyComparison";
import RiskyLoanTips from "@/components/risky/RiskyLoanTips";
import Schema from "@/components/risky/Schema";
import RiskyBreadcrumb from "@/components/risky/RiskyBreadcrumb";
import RiskyIntroduction from "@/components/risky/RiskyIntroduction";
import CreditScoreImprovement from "@/components/risky/CreditScoreImprovement";
import { RISKY_BANKS } from "@/data/riskyBanksData";
import { RISKY_FAQ_ITEMS } from "@/data/riskyFaqData";
import { getCanonicalUrl } from "@/utils/canonicalUrls";

const RiskyIndex = () => {
  const [currentTab] = useState("risky");
  const currentDate = getCurrentMonthYear();
  const title = `Riskli Müşteriye Kredi Veren Bankalar ${currentDate} | Sicili Bozuklara Özel`;
  const description = `${currentDate} ayına özel riskli müşterilere, kredi notu düşük olanlara ve kara listedeki kişilere kredi veren bankaların güncel faiz oranları ve başvuru koşulları. En uygun riskli müşteri kredisi fırsatları!`;
  const keywords = "riskli müşteri kredisi, kredi notu düşük, kara liste, sicili bozuk, ikinci şans, kredi başvurusu, düşük kredi notu, gecikmiş ödemeler, yüksek borçluluk";
  const canonicalUrl = getCanonicalUrl("risky");

  return (
    <>
      <PageMeta
        title={title}
        description={description}
        keywords={keywords}
        pageSlug="riskli-musteriye-kredi"
        pageType="other"
        imageUrl="https://faizsizkrediverenbankalar.com/images/riskli-musteriye-kredi.jpg"
        author="Finans Uzmanı"
        publishDate="2023-09-15"
        modifiedDate={new Date().toISOString().split('T')[0]}
        canonicalUrl={canonicalUrl}
      />
      
      {/* Schema Markup for Rich Results */}
      {RISKY_BANKS.map((bank, index) => (
        <Schema 
          key={index}
          bankName={bank.name}
          interestRate={bank.interestRate}
          amount={bank.amount}
          term={bank.term}
          lastUpdate={bank.lastUpdate || new Date().toLocaleDateString('tr-TR')}
        />
      ))}
      
      <RiskyBreadcrumb />

      <FilterContent
        title={title}
        description={description}
        banks={RISKY_BANKS}
        currentTab={currentTab}
        onSortChange={() => {}}
        faqItems={RISKY_FAQ_ITEMS}
        additionalContent={
          <div className="mt-12 space-y-8">
            <RiskyCustomerInfo />
            <RiskyIntroduction />
            <RiskyLoanSteps />
            <RiskyComparison />
            <RiskyLoanTips />
            <CreditScoreImprovement />
          </div>
        }
      />
    </>
  );
};

export default RiskyIndex;
