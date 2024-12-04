import { Helmet } from "react-helmet";
import { Wallet, PiggyBank, TrendingUp, Clock, Percent, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Mevduat = () => {
  const currentYear = new Date().getFullYear();

  const depositTypes = [
    {
      title: "Vadeli Mevduat",
      description: "Paranızı belirli bir süre için yatırın, yüksek faiz oranlarından yararlanın",
      icon: PiggyBank,
      rate: "45%",
      term: "32 gün"
    },
    {
      title: "Vadesiz Mevduat",
      description: "Günlük bankacılık işlemleriniz için esnek hesap yönetimi",
      icon: Wallet,
      rate: "0%",
      term: "Süresiz"
    },
    {
      title: "Döviz Mevduatı",
      description: "Döviz kurlarındaki değişimlerden faydalanın",
      icon: TrendingUp,
      rate: "3.5%",
      term: "32 gün"
    }
  ];

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Mevduat Hesabı Açma 2024 | En Yüksek Faizli Mevduat</title>
        <meta name="description" content="En yüksek faizli mevduat hesapları, vadeli ve vadesiz mevduat seçenekleri, döviz mevduatı ve e-mevduat hesapları hakkında detaylı bilgi." />
      </Helmet>

      <main className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Wallet className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Mevduat Hesabı</h1>
          </div>
          <p className="text-gray-600 max-w-3xl">
            Birikimlerinizi güvenle değerlendirin, yüksek faiz oranlarından yararlanın. Vadeli, vadesiz ve döviz mevduat hesapları ile paranızı en iyi şekilde değerlendirin.
          </p>
        </header>

        {/* Mevduat Türleri */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {depositTypes.map((type, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <type.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Faiz: {type.rate}</span>
                  <span>Vade: {type.term}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Avantajlar */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Mevduat Hesabı Avantajları</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <Percent className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Yüksek Faiz Oranları</h3>
                <p className="text-gray-600">Rekabetçi faiz oranlarıyla birikimlerinizi büyütün</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Esnek Vadeler</h3>
                <p className="text-gray-600">İhtiyacınıza uygun vade seçenekleri</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Güvenli Yatırım</h3>
                <p className="text-gray-600">TMSF güvencesi ile güvenli tasarruf</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Güncel Faiz Oranları */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Güncel Mevduat Faiz Oranları</h2>
          <Tabs defaultValue="tl" className="w-full">
            <TabsList>
              <TabsTrigger value="tl">TL Mevduat</TabsTrigger>
              <TabsTrigger value="usd">USD Mevduat</TabsTrigger>
              <TabsTrigger value="eur">EUR Mevduat</TabsTrigger>
            </TabsList>
            <TabsContent value="tl" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="font-semibold">32 Gün</span>
                  <span className="text-primary">%45,00</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="font-semibold">91 Gün</span>
                  <span className="text-primary">%44,00</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="font-semibold">180 Gün</span>
                  <span className="text-primary">%43,00</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="usd" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="font-semibold">32 Gün</span>
                  <span className="text-primary">%3,50</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="font-semibold">91 Gün</span>
                  <span className="text-primary">%3,75</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="font-semibold">180 Gün</span>
                  <span className="text-primary">%4,00</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="eur" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="font-semibold">32 Gün</span>
                  <span className="text-primary">%2,50</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="font-semibold">91 Gün</span>
                  <span className="text-primary">%2,75</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="font-semibold">180 Gün</span>
                  <span className="text-primary">%3,00</span>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Sıkça Sorulan Sorular */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Sıkça Sorulan Sorular</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Hemen Mevduat Hesabı Açın</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Birikimlerinizi değerlendirmek için en uygun mevduat hesabını seçin, yüksek faiz avantajlarından yararlanın.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Başvuru Yap
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Mevduat;