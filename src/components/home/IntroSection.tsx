
import { getCurrentMonthYear } from "@/utils/dateUtils";

const IntroSection = () => {
  const currentDate = getCurrentMonthYear();
  
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">Faizsiz Kredi Veren Bankalar {currentDate}</h1>
      <p className="text-gray-600 mb-8">2025 yılında faizsiz kredi veren başlıca bankalar: QNB Finansbank, Akbank, Garanti BBVA, İş Bankası, DenizBank, Enpara.com, ON Dijital, CEPTETEB ve Albaraka Türk'tür. Faizsiz kredi arayanlar için Türkiye'deki birçok banka çeşitli fırsatlar sunmaktadır. Ziraat Bankası faizsiz kredi, Akbank faizsiz kredi ve Garanti faizsiz kredi gibi büyük bankalar, müşterilerine avantajlı faizsiz kredi seçenekleri sağlamaktadır. Özellikle yeni müşterilere faizsiz kredi veren bankalar, 20 bin TL faizsiz kredi gibi cazip imkanlar sunuyor. 100 bin TL faizsiz kredi veren bankalar ise daha yüksek kredi limitleriyle dikkat çekiyor. Faizsiz kredi fırsatları, acil nakit ihtiyacı duyanlar için ideal çözümler sunmakta ve bu fırsatlardan yararlanmak isteyenler için birçok banka uygun seçenekler hazırlamaktadır.</p>
    </>
  );
};

export default IntroSection;
