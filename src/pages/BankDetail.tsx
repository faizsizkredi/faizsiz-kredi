import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BankLoanAmounts from "@/components/bank/BankLoanAmounts";
import BankHero from "@/components/bank/detail/BankHero";
import BankStats from "@/components/bank/detail/BankStats";
import BankInfo from "@/components/bank/detail/BankInfo";
import BankProducts from "@/components/bank/detail/BankProducts";

const BankDetail = () => {
  const { bankSlug } = useParams();
  
  const getBankName = (slug?: string) => {
    if (slug?.includes('turkiye-is-bankasi')) {
      return 'İş Bankası';
    }
    return slug?.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const bankName = getBankName(bankSlug);
  const currentYear = new Date().getFullYear();
  const pageTitle = `${bankName} Faizsiz Kredi Başvurusu - ${currentYear}`;
  const pageDescription = `${bankName} bankanın en güncel kredi kampanyaları, avantajlı faiz oranları ve özel fırsatları. Tüm kredi seçeneklerini karşılaştırın, size en uygun krediye hemen başvurun.${currentYear} yılına özel kampanyalar ve fırsatlar için acele edin!`;

  const faqItems = [
    {
      question: `${bankName} Faizsiz Kredi Başvurusu Nasıl Yapılır?`,
      answer: `${bankName} faizsiz kredi başvurusu için bankanın internet şubesi, mobil uygulaması veya en yakın şubesini ziyaret edebilirsiniz. Online başvuru için ${bankName} internet bankacılığı hesabınıza giriş yapmanız yeterlidir.`
    },
    {
      question: `${bankName} Faizsiz Kredi Başvurusu Nereden Yapılır?`,
      answer: `${bankName} faizsiz kredi başvurunuzu internet bankacılığı, mobil uygulama veya şubelerden yapabilirsiniz. En hızlı sonuç için online kanalları tercih edebilirsiniz.`
    },
    {
      question: `${bankName} Faizsiz Kredi Veriyor Mu?`,
      answer: `Evet, ${bankName} belirli kampanyalar kapsamında faizsiz kredi vermektedir. Özellikle yeni müşterilerine özel faizsiz kredi kampanyaları sunmaktadır.`
    },
    {
      question: `${bankName} Faizsiz Kredi Ne Kadar Veriyor?`,
      answer: `${bankName} kampanyalarına göre 5.000 TL ile 100.000 TL arasında faizsiz kredi vermektedir. Kredi tutarı müşteri profiline ve kampanya şartlarına göre değişiklik gösterebilir.`
    },
    {
      question: `${bankName} 5.000 TL Faizsiz Kredi Başvurusu Nasıl Yapılır?`,
      answer: `${bankName} 5.000 TL faizsiz kredi başvurusu için bankanın dijital kanallarını kullanabilir veya şubeye gidebilirsiniz. Online başvuru için internet bankacılığı veya mobil uygulamayı kullanmanız yeterlidir.`
    },
    {
      question: `${bankName} 7.500 TL Faizsiz Kredi Başvurusu Nasıl Yapılır?`,
      answer: `7.500 TL faizsiz kredi için ${bankName} internet bankacılığı, mobil uygulama veya şubelerden başvuru yapabilirsiniz. Online başvuru en hızlı sonuç almanızı sağlayacaktır.`
    },
    {
      question: `${bankName} 10.000 TL Faizsiz Kredi Başvurusu Nasıl Yapılır?`,
      answer: `10.000 TL faizsiz kredi başvurusu için ${bankName}'ın dijital kanallarını kullanabilirsiniz. İnternet bankacılığı veya mobil uygulama üzerinden hızlıca başvurunuzu tamamlayabilirsiniz.`
    },
    {
      question: `${bankName} 15.000 TL Faizsiz Kredi Başvurusu Nasıl Yapılır?`,
      answer: `15.000 TL faizsiz kredi için ${bankName} internet bankacılığı veya mobil uygulaması üzerinden başvurabilirsiniz. Alternatif olarak size en yakın şubeyi ziyaret edebilirsiniz.`
    },
    {
      question: `${bankName} 20.000 TL Faizsiz Kredi Başvurusu Nasıl Yapılır?`,
      answer: `20.000 TL faizsiz kredi başvurusu için ${bankName}'ın dijital kanallarını kullanabilir veya şubeye gidebilirsiniz. Online başvuru için internet bankacılığı veya mobil uygulamayı kullanmanız yeterlidir.`
    },
    {
      question: `${bankName} 25.000 TL Faizsiz Kredi Başvurusu Nasıl Yapılır?`,
      answer: `25.000 TL faizsiz kredi için ${bankName} internet bankacılığı, mobil uygulama veya şubelerden başvuru yapabilirsiniz. Online başvuru en hızlı sonuç almanızı sağlayacaktır.`
    },
    {
      question: `${bankName} 50.000 TL Faizsiz Kredi Başvurusu Nasıl Yapılır?`,
      answer: `50.000 TL faizsiz kredi başvurusu için ${bankName}'ın dijital kanallarını kullanabilirsiniz. İnternet bankacılığı veya mobil uygulama üzerinden hızlıca başvurunuzu tamamlayabilirsiniz.`
    },
    {
      question: `${bankName} 100.000 TL Faizsiz Kredi Başvurusu Nasıl Yapılır?`,
      answer: `100.000 TL faizsiz kredi için ${bankName} internet bankacılığı veya mobil uygulaması üzerinden başvurabilirsiniz. Alternatif olarak size en yakın şubeyi ziyaret edebilirsiniz.`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{pageTitle}</h1>
        <p className="text-gray-600 mb-8">{pageDescription}</p>

        <BankHero bankName={bankName || ""} />
        <BankStats bankName={bankName || ""} />
        <BankInfo bankName={bankName || ""} />
        <BankProducts bankName={bankName || ""} />
        <BankLoanAmounts bankName={bankName || ""} bankSlug={bankSlug || ""} />

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Sıkça Sorulan Sorular</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
    </div>
  );
};

export default BankDetail;