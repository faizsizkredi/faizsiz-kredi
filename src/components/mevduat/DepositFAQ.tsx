import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Mevduat hesabı nasıl açılır?",
    answer: "Mevduat hesabı açmak için bankanın internet şubesi, mobil uygulaması veya şubelerini kullanabilirsiniz. Kimlik belgenizle birlikte en yakın şubeye giderek veya dijital kanallardan başvuru yapabilirsiniz."
  },
  {
    question: "Mevduat faiz oranları nasıl belirlenir?",
    answer: "Mevduat faiz oranları, piyasa koşulları, enflasyon oranları, merkez bankası politikaları ve vade süresi gibi faktörlere göre belirlenir. Her banka kendi faiz oranlarını bu faktörleri göz önünde bulundurarak belirler."
  },
  {
    question: "Vadeli mevduat hesabından vade dolmadan para çekilebilir mi?",
    answer: "Evet, vadeli mevduat hesabından vade dolmadan para çekilebilir ancak bu durumda vadesiz mevduat faiz oranı üzerinden işlem yapılır ve vade bozma işlemi uygulanır."
  },
  {
    question: "Mevduat hesabı açmak için minimum tutar var mı?",
    answer: "Evet, genellikle bankaların vadeli mevduat hesapları için minimum tutar şartı vardır. Bu tutar bankadan bankaya değişiklik gösterebilir."
  }
];

const DepositFAQ = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Sıkça Sorulan Sorular</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="bg-white">
            <AccordionTrigger className="px-4">{faq.question}</AccordionTrigger>
            <AccordionContent className="px-4">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default DepositFAQ;