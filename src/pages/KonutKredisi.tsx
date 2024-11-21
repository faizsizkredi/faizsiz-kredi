import { Home } from "lucide-react";
import LoanPageLayout from "@/components/loan/LoanPageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";

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

  const requirements = [
    "Kimlik fotokopisi",
    "Gelir belgesi",
    "İkametgah belgesi",
    "Tapu fotokopisi",
    "Ekspertiz raporu"
  ];

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Konut Kredisi",
    "description": "2024 yılı güncel konut kredisi kampanyaları ve başvuru koşulları",
    "provider": {
      "@type": "FinancialService",
      "name": "Kredi Karşılaştırma Platformu"
    },
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "10+",
      "availability": "https://schema.org/InStock"
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
      <LoanPageLayout
        title="Konut Kredisi"
        description="2024 yılı güncel konut kredisi kampanyaları, faiz oranları ve başvuru koşulları. En uygun konut kredisi veren bankalar."
        keywords="konut kredisi, ev kredisi, mortgage, kredi hesaplama, kredi başvurusu"
        icon={Home}
        activeTab="konut"
        faqs={faqs}
        additionalContent={
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Gerekli Belgeler</h3>
                  <ul className="space-y-2">
                    {requirements.map((requirement, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Badge variant="secondary">{index + 1}</Badge>
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Önemli Bilgiler</h3>
                  <Alert>
                    <AlertDescription>
                      Konut kredisi başvurusunda bulunmadan önce, alacağınız evin ekspertiz değerinin belirlenmesi ve 
                      gerekli evrakların hazırlanması önemlidir. Ayrıca, farklı bankaların faiz oranlarını karşılaştırmanızı öneririz.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </>
        }
      />
    </>
  );
};

export default KonutKredisi;