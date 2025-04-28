
import { getCurrentMonthYear } from "@/utils/dateUtils";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, ShieldCheck, Clock } from "lucide-react";

const IntroSection = () => {
  const currentDate = getCurrentMonthYear();
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="mb-12">
      <h1 className="text-4xl font-bold mb-4">Faizsiz Kredi Veren Bankalar 2025 | En Güncel Liste</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 border-l-4 border-blue-500 rounded mb-6">
        <p className="text-lg font-medium text-blue-800">
          2025 yılı için Güncel Kampanya: %0 Faizle 50.000 TL'ye varan kredi fırsatları! Hemen başvur, anında sonuç al.
        </p>
      </div>
      
      <p className="text-gray-600 mb-6">
        <strong>{currentYear} yılında faizsiz kredi veren başlıca bankalar:</strong> QNB Finansbank, Akbank, Garanti BBVA, İş Bankası, DenizBank, Enpara.com, ON Dijital, CEPTETEB ve Albaraka Türk'tür. Faizsiz kredi arayanlar için Türkiye'deki birçok banka çeşitli fırsatlar sunmaktadır.
      </p>
      
      <p className="text-gray-600 mb-8">
        <strong>Ziraat Bankası faizsiz kredi</strong>, <strong>Akbank faizsiz kredi</strong> ve <strong>Garanti faizsiz kredi</strong> gibi büyük bankalar, müşterilerine avantajlı faizsiz kredi seçenekleri sağlamaktadır. Özellikle <strong>yeni müşterilere faizsiz kredi veren bankalar</strong>, <strong>20 bin TL faizsiz kredi</strong> gibi cazip imkanlar sunuyor. <strong>100 bin TL faizsiz kredi veren bankalar</strong> ise daha yüksek kredi limitleriyle dikkat çekiyor. Faizsiz kredi fırsatları, acil nakit ihtiyacı duyanlar için ideal çözümler sunmakta ve bu fırsatlardan yararlanmak isteyenler için birçok banka uygun seçenekler hazırlamaktadır.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-3">
            <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
            <h3 className="text-lg font-semibold">En Düşük Faiz Oranları</h3>
          </div>
          <p className="text-gray-600">Bankaların en güncel ve en düşük faiz oranlarını karşılaştırın, size en uygun krediyi bulun.</p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-3">
            <ShieldCheck className="h-5 w-5 text-blue-500 mr-2" />
            <h3 className="text-lg font-semibold">Güvenilir Karşılaştırma</h3>
          </div>
          <p className="text-gray-600">Tüm banka tekliflerini tarafsız olarak karşılaştırın, en doğru finansal kararı verin.</p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-3">
            <Clock className="h-5 w-5 text-orange-500 mr-2" />
            <h3 className="text-lg font-semibold">Hızlı Başvuru</h3>
          </div>
          <p className="text-gray-600">Dakikalar içinde başvurunuzu tamamlayın, saatler içinde kredi onayınızı alın.</p>
        </div>
      </div>
      
      <div className="flex justify-center mb-4">
        <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2">
          Hemen Kredi Başvurusu Yap <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="text-center text-sm text-gray-500 mb-8">
        Güncel Faiz Oranları: QNB Finansbank %0, Akbank %0, Garanti BBVA %2.99, Yapı Kredi %3.19
      </div>
    </div>
  );
};

export default IntroSection;
