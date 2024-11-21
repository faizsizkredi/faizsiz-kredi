import { Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";
import RecommendedLoans from "@/components/loan/RecommendedLoans";
import LoanRatesTable from "@/components/loan/LoanRatesTable";
import PopularLoans from "@/components/loan/PopularLoans";

const KonutKredisi = () => {
  const faqs = [
    {
      question: "Konut kredisi için ne kadar peşinat gerekiyor?",
      answer: "Genellikle evin değerinin en az %20'si kadar peşinat gereklidir. Bazı özel kampanyalarda bu oran %10'a kadar düşebilmektedir."
    },
    {
      question: "Konut kredisi vadesi ne kadar olabilir?",
      answer: "Konut kredilerinde vade genellikle 120 aya kadar çıkabilmektedir. Bazı özel durumlarda 180 aya kadar vade imkanı sunan bankalar bulunmaktadır."
    },
    {
      question: "Konut kredisi masrafları nelerdir?",
      answer: "Ekspertiz ücreti, ipotek tesis ücreti, dosya masrafı ve hayat sigortası gibi masraflar bulunmaktadır. Bu masraflar bankadan bankaya değişiklik gösterebilir."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Konut Kredisi",
    "description": "2024 yılı güncel konut kredisi kampanyaları ve başvuru koşulları",
    "provider": {
      "@type": "FinancialService",
      "name": "Kredi Karşılaştırma Platformu"
    }
  };

  return (
    <>
      <Helmet>
        <title>Konut Kredisi 2024 | En Uygun Konut Kredisi Başvurusu</title>
        <meta name="description" content="2024 yılı güncel konut kredisi kampanyaları, faiz oranları ve başvuru koşulları. En uygun konut kredisi veren bankalar." />
        <meta name="keywords" content="konut kredisi, ev kredisi, mortgage, kredi hesaplama, kredi başvurusu" />
        <link rel="canonical" href="https://yourwebsite.com/konut-kredisi" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-8">
          <div className="grid gap-8">
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Home className="w-8 h-8 text-primary" />
                <h1 className="text-3xl font-bold">Konut Kredisi</h1>
              </div>
              <p className="text-gray-600 max-w-3xl">
                2024 yılı güncel konut kredisi kampanyaları, faiz oranları ve başvuru koşulları.
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
                    <li>Kredi notu 1400 ve üzeri olmak</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Gerekli Belgeler</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Kimlik fotokopisi</li>
                    <li>Gelir belgesi</li>
                    <li>Tapu fotokopisi</li>
                    <li>Ekspertiz raporu</li>
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

export default KonutKredisi;