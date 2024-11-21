import { Banknote } from "lucide-react";
import LoanPageLayout from "@/components/loan/LoanPageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";
import RecommendedLoans from "@/components/loan/RecommendedLoans";
import LoanRatesTable from "@/components/loan/LoanRatesTable";
import PopularLoans from "@/components/loan/PopularLoans";

const IhtiyacKredisi = () => {
  const faqs = [
    {
      question: "İhtiyaç kredisi başvurusu nasıl yapılır?",
      answer: "İhtiyaç kredisi başvurusu için bankanın internet şubesi, mobil uygulaması veya şubelerini kullanabilirsiniz. Online başvuru için TC kimlik numaranız ve cep telefonu numaranız yeterlidir."
    },
    {
      question: "İhtiyaç kredisi için gerekli belgeler nelerdir?",
      answer: "Kimlik fotokopisi, gelir belgesi, ikametgah belgesi ve son 3 aylık banka hesap özeti genellikle istenen temel belgelerdir."
    },
    {
      question: "Kredi notum düşükse ihtiyaç kredisi alabilir miyim?",
      answer: "Kredi notunuz düşükse bazı bankalar size özel kampanyalar sunabilir. Ayrıca kefil veya ek gelir belgesi ile başvuru şansınızı artırabilirsiniz."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "İhtiyaç Kredisi",
    "description": "2024 yılı güncel ihtiyaç kredisi kampanyaları ve başvuru koşulları",
    "provider": {
      "@type": "FinancialService",
      "name": "Kredi Karşılaştırma Platformu"
    }
  };

  return (
    <>
      <Helmet>
        <title>İhtiyaç Kredisi 2024 | En Uygun İhtiyaç Kredisi Başvurusu</title>
        <meta name="description" content="2024 yılı güncel ihtiyaç kredisi kampanyaları, faiz oranları ve başvuru koşulları. En uygun ihtiyaç kredisi veren bankalar." />
        <meta name="keywords" content="ihtiyaç kredisi, kredi hesaplama, kredi başvurusu, banka kredileri, uygun kredi" />
        <link rel="canonical" href="https://yourwebsite.com/ihtiyac-kredisi" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-8">
          <div className="grid gap-8">
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Banknote className="w-8 h-8 text-primary" />
                <h1 className="text-3xl font-bold">İhtiyaç Kredisi</h1>
              </div>
              <p className="text-gray-600 max-w-3xl">
                2024 yılı güncel ihtiyaç kredisi kampanyaları, faiz oranları ve başvuru koşulları.
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
                    <li>Son 6 aydır aynı işyerinde çalışıyor olmak</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Gerekli Belgeler</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Kimlik fotokopisi</li>
                    <li>Gelir belgesi / Maaş bordrosu</li>
                    <li>İkametgah belgesi</li>
                    <li>Son 3 aylık banka hesap özeti</li>
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

export default IhtiyacKredisi;