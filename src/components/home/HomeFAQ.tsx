import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HomeFAQ = () => {
  return (
    <div className="mt-16 mb-8">
      <h2 className="text-2xl font-bold mb-6">Sıkça Sorulan Sorular</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>Faizsiz kredi veren bankalar hangileridir?</AccordionTrigger>
          <AccordionContent>
            2024 yılında faizsiz kredi veren başlıca bankalar: QNB Finansbank, Akbank, Garanti BBVA, İş Bankası, DenizBank, Enpara.com, ON Dijital, CEPTETEB ve Albaraka Türk'tür. Her bankanın sunduğu faizsiz kredi limitleri ve vade süreleri farklılık gösterebilmektedir.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Yeni Müşteriye faizsiz kredi veren bankalar hangileridir?</AccordionTrigger>
          <AccordionContent>
            Yeni müşterilerine özel faizsiz kredi kampanyaları sunan bankalar arasında QNB Finansbank (45.000 TL'ye kadar), Akbank (45.000 TL'ye kadar), Garanti BBVA (45.000 TL'ye kadar), İş Bankası (55.000 TL'ye kadar) ve DenizBank (25.000 TL'ye kadar) bulunmaktadır.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Ziraat Bankası faizsiz kredi başvurusu nasıl yapılır?</AccordionTrigger>
          <AccordionContent>
            Ziraat Bankası faizsiz kredi başvurusu için: 1) Ziraat Bankası mobil uygulaması veya internet şubesinden giriş yapın, 2) "Başvurular" menüsünden "Kredi Başvurusu"nu seçin, 3) Kimlik bilgilerinizi ve gelir belgenizi yükleyin, 4) Kredi tutarı ve vadesini belirleyin, 5) Başvurunuzu tamamlayın. Şubeye giderek de başvuru yapabilirsiniz.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>100 bin TL faizsiz kredi veren bankalar hangileridir?</AccordionTrigger>
          <AccordionContent>
            Güncel kampanyalarda 100.000 TL faizsiz kredi veren banka bulunmamaktadır. Ancak en yüksek faizsiz kredi limitleri İş Bankası (55.000 TL), QNB Finansbank, Akbank ve Garanti BBVA'da (45.000 TL) bulunmaktadır. Daha yüksek tutarlar için düşük faizli kredi seçenekleri değerlendirilebilir.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Akbank faizsiz kredi başvurusu nasıl yapılır?</AccordionTrigger>
          <AccordionContent>
            Akbank faizsiz kredi başvurusu için: 1) Akbank Mobil'i indirin, 2) "Yeni Müşteriyim" seçeneğinden hesap açın, 3) "Krediler" menüsünden "İhtiyaç Kredisi"ni seçin, 4) Faizsiz kredi kampanyasını seçin, 5) Gelir belgenizi yükleyin, 6) Başvurunuzu tamamlayın. Akbank.com üzerinden de başvuru yapabilirsiniz.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>İş Bankası Faizsiz kredi başvurusu nasıl yapılır?</AccordionTrigger>
          <AccordionContent>
            İş Bankası faizsiz kredi başvurusu için: 1) İşCep uygulamasını indirin, 2) "Müşterimiz Olun" seçeneğinden hesap açın, 3) "Krediler" bölümünden "İhtiyaç Kredisi"ni seçin, 4) Faizsiz kredi kampanyasını seçin, 5) Gerekli belgeleri yükleyin, 6) Başvurunuzu onaylayın. isbank.com.tr üzerinden de başvuru yapabilirsiniz.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>20 bin TL faizsiz kredi veren bankalar hangileridir?</AccordionTrigger>
          <AccordionContent>
            20.000 TL ve altı faizsiz kredi veren bankalar: QNB Finansbank, Akbank, Garanti BBVA (20.000 TL), DenizBank (25.000 TL), Enpara.com (10.000 TL), ON Dijital (15.000 TL) ve CEPTETEB bulunmaktadır. Her bankanın vade süreleri ve şartları farklılık gösterebilmektedir.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger>0 faizli kredi veren bankalar hangileridir?</AccordionTrigger>
          <AccordionContent>
            2024 yılında %0 faizli kredi veren bankalar arasında QNB Finansbank, Akbank, Garanti BBVA, İş Bankası, DenizBank, Enpara.com, ON Dijital ve CEPTETEB yer almaktadır. Kampanyalar genellikle yeni müşterilere özel olup, kredi tutarları ve vade seçenekleri bankalara göre değişiklik göstermektedir.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-9">
          <AccordionTrigger>Garanti faizsiz kredi başvurusu nasıl yapılır?</AccordionTrigger>
          <AccordionContent>
            Garanti BBVA faizsiz kredi başvurusu için: 1) Garanti BBVA Mobil'i indirin, 2) "Müşteri Ol" seçeneğinden hesap açın, 3) "Krediler" menüsünden "İhtiyaç Kredisi"ni seçin, 4) Faizsiz kredi kampanyasını seçin, 5) Gelir belgenizi ve diğer gerekli evrakları yükleyin, 6) Başvurunuzu tamamlayın. garantibbva.com.tr üzerinden de başvuru yapabilirsiniz.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default HomeFAQ;