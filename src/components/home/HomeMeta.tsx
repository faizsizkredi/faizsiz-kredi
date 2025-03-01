
import { getCurrentMonthYear } from "@/utils/dateUtils";
import { PageMeta } from "@/utils/seoUtils";

const HomeMeta = () => {
  const currentDate = getCurrentMonthYear();
  const title = `Faizsiz Kredi Veren Bankalar ${currentDate} | İhtiyaç Kredisi Başvurusu`;
  const description = `${currentDate} güncel faizsiz kredi veren bankalar listesi. QNB Finansbank, Akbank, Garanti BBVA, İş Bankası gibi bankaların faizsiz kredi kampanyaları ve başvuru şartları.`;
  const keywords = "faizsiz kredi, sıfır faizli kredi, faizsiz ihtiyaç kredisi, en uygun kredi, kredi kampanyaları, kredi başvurusu";
  
  return (
    <PageMeta
      title={title}
      description={description}
      keywords={keywords}
      pageSlug=""
      pageType="home"
    />
  );
};

export default HomeMeta;
