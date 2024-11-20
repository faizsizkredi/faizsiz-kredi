import { Car } from "lucide-react";
import LoanPageLayout from "@/components/loan/LoanPageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

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

  const documents = [
    "Kimlik fotokopisi",
    "Gelir belgesi",
    "İkametgah belgesi",
    "Araç ruhsatı",
    "Kasko poliçesi"
  ];

  return (
    <LoanPageLayout
      title="Taşıt Kredisi"
      description="2024 yılı güncel taşıt kredisi kampanyaları, faiz oranları ve başvuru koşulları. En uygun taşıt kredisi veren bankalar."
      keywords="taşıt kredisi, araba kredisi, araç kredisi, kredi hesaplama, kredi başvurusu"
      icon={Car}
      activeTab="tasit"
      faqs={faqs}
      additionalContent={
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Gerekli Belgeler</h3>
                <ul className="space-y-2">
                  {documents.map((document, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Badge variant="secondary">{index + 1}</Badge>
                      {document}
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
                    Taşıt kredisi kullanırken aracın yaşı ve değeri önemlidir. Kredi tutarı, aracın ekspertiz değerinin
                    belirli bir oranını geçemez. Ayrıca, kredi süresince kasko yaptırmanız zorunludur.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </>
      }
    />
  );
};

export default TasitKredisi;