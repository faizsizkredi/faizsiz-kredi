import { Building2 } from "lucide-react";
import LoanPageLayout from "@/components/loan/LoanPageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

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

  const businessDocuments = [
    "Vergi levhası",
    "Bilanço ve gelir tablosu",
    "Ticaret sicil gazetesi",
    "İmza sirküleri",
    "Ortakların kimlik fotokopileri"
  ];

  return (
    <LoanPageLayout
      title="KOBİ Kredisi"
      description="2024 yılı güncel KOBİ kredisi kampanyaları, faiz oranları ve başvuru koşulları. En uygun KOBİ kredisi veren bankalar."
      keywords="KOBİ kredisi, işletme kredisi, esnaf kredisi, kredi hesaplama, kredi başvurusu"
      icon={Building2}
      activeTab="kobi"
      faqs={faqs}
      additionalContent={
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Gerekli Belgeler</h3>
                <ul className="space-y-2">
                  {businessDocuments.map((document, index) => (
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
                    KOBİ kredisi başvurusunda işletmenizin finansal durumu ve geçmiş performansı önemlidir. 
                    Başvuru öncesi tüm mali tablolarınızı ve belgelerinizi hazır bulundurmanız süreci hızlandıracaktır.
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

export default KobiKredisi;