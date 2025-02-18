
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ThumbsUp, MessageCircle } from "lucide-react";
import BankLoanAmounts from "@/components/bank/BankLoanAmounts";
import BankHero from "@/components/bank/detail/BankHero";
import BankStats from "@/components/bank/detail/BankStats";
import BankInfo from "@/components/bank/detail/BankInfo";
import BankProducts from "@/components/bank/detail/BankProducts";

const BankDetail = () => {
  const { bankSlug } = useParams();
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  
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

  const reviews = [
    {
      name: "Ahmet Y.",
      rating: 5,
      date: "2024-03-15",
      comment: "Çok hızlı kredi başvuru süreci. Tavsiye ederim.",
      likes: 12
    },
    {
      name: "Mehmet K.",
      rating: 4,
      date: "2024-03-14",
      comment: "Faiz oranları uygun, müşteri hizmeti iyi.",
      likes: 8
    },
    {
      name: "Ayşe S.",
      rating: 5,
      date: "2024-03-13",
      comment: "Online başvuru çok pratik, aynı gün kullandım.",
      likes: 15
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
        <BankInfo bankName={bankName || ""} />
        <BankProducts bankName={bankName || ""} />
        <BankLoanAmounts bankName={bankName || ""} bankSlug={bankSlug || ""} />
        <BankStats bankName={bankName || ""} />

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
          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="comments" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="comments" className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Yorumlar
                  </TabsTrigger>
                  <TabsTrigger value="reviews" className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Değerlendirmeler
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="comments">
                  <div className="space-y-6">
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

                    <div className="space-y-4 mt-8">
                      {reviews.map((review, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="font-semibold">{review.name}</div>
                                <div className="text-sm text-gray-500">{review.date}</div>
                                <p className="mt-2">{review.comment}</p>
                              </div>
                              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                                <ThumbsUp className="w-4 h-4" />
                                {review.likes}
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-8 h-8 cursor-pointer ${
                            star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                          onClick={() => setRating(star)}
                        />
                      ))}
                    </div>
                    <Button onClick={() => toast.success("Değerlendirmeniz kaydedildi!")}>
                      Değerlendir
                    </Button>

                    <div className="mt-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        <span className="text-xl font-bold">4.5</span>
                        <span className="text-gray-500">(128 değerlendirme)</span>
                      </div>

                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((stars) => (
                          <div key={stars} className="flex items-center gap-2">
                            <span className="w-12 text-sm">{stars} yıldız</span>
                            <div className="flex-1 h-2 bg-gray-200 rounded-full">
                              <div
                                className="h-full bg-yellow-400 rounded-full"
                                style={{
                                  width: `${stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 5 : stars === 2 ? 3 : 2}%`
                                }}
                              />
                            </div>
                            <span className="text-sm text-gray-500">
                              {stars === 5 ? 89 : stars === 4 ? 26 : stars === 3 ? 7 : stars === 2 ? 4 : 2}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default BankDetail;
