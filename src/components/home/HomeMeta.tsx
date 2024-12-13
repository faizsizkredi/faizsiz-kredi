import { Helmet } from "react-helmet";
import { getCurrentMonthYear } from "@/utils/dateUtils";

const HomeMeta = () => {
  const currentDate = getCurrentMonthYear();
  const pageTitle = `Faizsiz Kredi Veren Bankalar ${currentDate} | En Güncel Kredi Kampanyaları`;
  const pageDescription = `${currentDate} ayına özel faizsiz kredi kampanyaları, güncel faiz oranları ve başvuru koşulları. En uygun kredi fırsatları ve banka karşılaştırmaları.`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={`faizsiz kredi, ${new Date().getFullYear()} kredi kampanyaları, sıfır faizli kredi, ${currentDate} kredi fırsatları`} />
      <link rel="canonical" href="https://faizsizkrediverenbankalar.com/" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
    </Helmet>
  );
};

export default HomeMeta;