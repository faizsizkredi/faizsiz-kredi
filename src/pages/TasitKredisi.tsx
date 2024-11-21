import { Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";
import RecommendedLoans from "@/components/loan/RecommendedLoans";
import LoanRatesTable from "@/components/loan/LoanRatesTable";
import PopularLoans from "@/components/loan/PopularLoans";

const TasitKredisi = () => {
  const faqs = [
    {
      question: "Taşıt kredisi için araç yaşı önemli mi?",
      answer: "Evet, genellikle bankalar 0 km araçlar için daha uygun faiz oranları sunar. İkinci el araçlarda ise araç yaşı genellikle 5-7 yılı geçmemelidir."
    },
    {
      question: "Taşıt kredisinde kasko zorunlu mu?",
      answer: "Evet, taşıt kredilerinde kasko ve trafik sigortası zorunludur. Kredi süresince aracın bankaya rehinli olması ve kaskosu devam etmesi gerekir."
    },
    {
      question: "Taşıt kredisi ne kadar sürede onaylanır?",
      answer: "Gerekli tüm belgeler tamamlandığında taşıt kredisi genellikle 1-2 iş günü içinde onaylanır."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Taşıt Kredisi",
    "description": "2024 yılı güncel taşıt kredisi kampanyaları ve başvuru koşulları",
    "provider": {
      "@type": "FinancialService",
      "name": "Kredi Karşılaştırma Platformu"
    }
  };

  return (
    <>
      <Helmet>
        <title>Taşıt Kredisi 2024 | En Uygun Taşıt Kredisi Başvurusu</title>
        <meta name="description" content="2024 yılı güncel taşıt kredisi kampanyaları, faiz oranları ve başvuru koşulları. En uygun taşıt kredisi veren bankalar." />
        <meta name="keywords" content="taşıt kredisi, araba kredisi, araç kredisi, kredi hesaplama, kredi başvurusu" />
        <link rel="canonical" href="https://yourwebsite.com/tasit-kredisi" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-8">
          <div className="grid gap-8">
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-8 h-8 text-primary" />
                <h1 className="text-3xl font-bold">Taşıt Kredisi</h1>
              </div>
              <p className="text-gray-600 max-w-3xl">
                2024 yılı güncel taşıt kredisi kampanyaları, faiz oranları ve başvuru koşulları.
              </p>
            </header>

            <RecommendedLoans />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Başvuru Şartları</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>18 yaşını doldurmuş olmak</li>
                    <li>T.C. vatandaşı olmak</li>
                    <li>Düzenli gelir sahibi olmak</li>
                    <li>Araç bedelinin %30'u kadar peşinat</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Gerekli Belgeler</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Kimlik fotokopisi</li>
                    <li>Gelir belgesi</li>
                    <li>Araç ruhsatı</li>
                    <li>Kasko poliçesi</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <LoanRatesTable />
            <PopularLoans />

            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-6">Sıkça Sorulan Sorular</h2>
              <div className="grid gap-4">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default TasitKredisi;