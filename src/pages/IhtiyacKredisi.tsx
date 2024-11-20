import { Banknote } from "lucide-react";
import LoanPageLayout from "@/components/loan/LoanPageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

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

  const advantages = [
    "Hızlı başvuru süreci",
    "Esnek ödeme seçenekleri",
    "Düşük faiz oranları",
    "Online başvuru imkanı",
    "Anında sonuç"
  ];

  return (
    <LoanPageLayout
      title="İhtiyaç Kredisi"
      description="2024 yılı güncel ihtiyaç kredisi kampanyaları, faiz oranları ve başvuru koşulları. En uygun ihtiyaç kredisi veren bankalar."
      keywords="ihtiyaç kredisi, kredi hesaplama, kredi başvurusu, banka kredileri, uygun kredi"
      icon={Banknote}
      activeTab="ihtiyac"
      faqs={faqs}
      additionalContent={
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Avantajlar</h3>
                <ul className="space-y-2">
                  {advantages.map((advantage, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Badge variant="secondary">{index + 1}</Badge>
                      {advantage}
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
                    İhtiyaç kredisi başvurunuzun olumlu sonuçlanması için düzenli gelir ve temiz bir kredi geçmişi önemlidir.
                    Başvuru öncesi kredi notunuzu kontrol etmenizi öneririz.
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

export default IhtiyacKredisi;