import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import BankLoanAmounts from "@/components/bank/BankLoanAmounts";
import BankHero from "@/components/bank/detail/BankHero";
import BankStats from "@/components/bank/detail/BankStats";
import BankInfo from "@/components/bank/detail/BankInfo";
import BankProducts from "@/components/bank/detail/BankProducts";

const BankDetail = () => {
  const { bankSlug } = useParams();
  const [comment, setComment] = useState("");
  
  const bankName = bankSlug?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  const currentYear = new Date().getFullYear();
  const createdAt = "2024-01-01";
  const updatedAt = new Date().toLocaleDateString('tr-TR');
  const author = "Finans Uzmanı";
  const pageTitle = `${bankName} Faizsiz Kredi Başvurusu - ${currentYear}`;
  const pageDescription = `${bankName} bankanın en güncel kredi kampanyaları, avantajlı faiz oranları ve özel fırsatları. Tüm kredi seçeneklerini karşılaştırın, size en uygun krediye hemen başvurun.${currentYear} yılına özel kampanyalar ve fırsatlar için acele edin!`;

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      toast.success("Yorumunuz başarıyla gönderildi!");
      setComment("");
    } else {
      toast.error("Lütfen bir yorum yazın");
    }
  };

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
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="author" content={author} />
        <meta property="article:published_time" content={createdAt} />
        <meta property="article:modified_time" content={updatedAt} />
        
        {/* Hidden images for Google SEO */}
        <meta property="og:image" content="https://yourwebsite.com/images/kredi-karti.jpg" />
        <meta property="og:image:alt" content="Kredi Kartı" />
        <meta name="twitter:image" content="https://yourwebsite.com/images/kredi-karti.jpg" />
      </Helmet>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{pageTitle}</h1>
        <p className="text-gray-600 mb-8">{pageDescription}</p>

        <div className="mb-6 text-sm text-gray-500">
          <div>Yazar: {author}</div>
          <div>Oluşturulma Tarihi: {createdAt}</div>
          <div>Son Güncelleme: {updatedAt}</div>
        </div>

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

        <div className="mt-16">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">Yorumlar</h2>
            <form onSubmit={handleCommentSubmit} className="space-y-4">
              <Textarea
                placeholder="Yorumunuzu buraya yazın..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="min-h-[100px]"
              />
              <Button type="submit">
                Yorum Gönder
              </Button>
            </form>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default BankDetail;