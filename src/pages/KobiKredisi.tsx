import { Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";
import RecommendedLoans from "@/components/loan/RecommendedLoans";
import LoanRatesTable from "@/components/loan/LoanRatesTable";
import PopularLoans from "@/components/loan/PopularLoans";

const KobiKredisi = () => {
  const faqs = [
    {
      question: "KOBİ kredisi için hangi belgeler gerekli?",
      answer: "Vergi levhası, son 3 yıllık bilanço ve gelir tablosu, ticaret sicil gazetesi, imza sirküleri ve şirket ortaklarının kimlikleri genellikle istenen temel belgelerdir."
    },
    {
      question: "KOBİ kredisi başvurusu ne kadar sürede sonuçlanır?",
      answer: "Başvurular genellikle 3-5 iş günü içinde sonuçlanır. Belgelerin eksiksiz olması süreci hızlandırır."
    },
    {
      question: "Yeni kurulan şirketler KOBİ kredisi alabilir mi?",
      answer: "Bazı bankalar yeni kurulan şirketlere özel kredi paketleri sunmaktadır. Genellikle 6 ay-1 yıl arası faaliyet geçmişi aranır."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "KOBİ Kredisi",
    "description": "2024 yılı güncel KOBİ kredisi kampanyaları ve başvuru koşulları",
    "provider": {
      "@type": "FinancialService",
      "name": "Kredi Karşılaştırma Platformu"
    }
  };

  return (
    <>
      <Helmet>
        <title>KOBİ Kredisi 2024 | En Uygun KOBİ Kredisi Başvurusu</title>
        <meta name="description" content="2024 yılı güncel KOBİ kredisi kampanyaları, faiz oranları ve başvuru koşulları. En uygun KOBİ kredisi veren bankalar." />
        <meta name="keywords" content="KOBİ kredisi, işletme kredisi, esnaf kredisi, kredi hesaplama, kredi başvurusu" />
        <link rel="canonical" href="https://yourwebsite.com/kobi-kredisi" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-8">
          <div className="grid gap-8">
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-8 h-8 text-primary" />
                <h1 className="text-3xl font-bold">KOBİ Kredisi</h1>
              </div>
              <p className="text-gray-600 max-w-3xl">
                2024 yılı güncel KOBİ kredisi kampanyaları, faiz oranları ve başvuru koşulları.
              </p>
            </header>

            <RecommendedLoans />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Başvuru Şartları</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>En az 1 yıllık faaliyet geçmişi</li>
                    <li>Vergi borcu bulunmaması</li>
                    <li>Düzenli gelir beyanı</li>
                    <li>KOBİ statüsünde olmak</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Gerekli Belgeler</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Vergi levhası</li>
                    <li>Bilanço ve gelir tablosu</li>
                    <li>Ticaret sicil gazetesi</li>
                    <li>İmza sirküleri</li>
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

export default KobiKredisi;