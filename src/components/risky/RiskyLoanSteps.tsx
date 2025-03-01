
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const RiskyLoanSteps = () => {
  const steps = [
    {
      title: "Bankaları Karşılaştırın",
      description: "Yukarıdaki listedeki bankaların sunduğu kredi seçeneklerini, faiz oranlarını ve vade imkanlarını karşılaştırın."
    },
    {
      title: "Ön Başvuru Yapın",
      description: "Seçtiğiniz bankanın internet sitesi üzerinden veya telefon bankacılığı aracılığıyla ön başvurunuzu oluşturun."
    },
    {
      title: "Gerekli Evrakları Hazırlayın",
      description: "Kimlik, gelir belgesi, ikametgah gibi temel belgelerin yanı sıra bankanın talep edebileceği ek evrakları hazırlayın."
    },
    {
      title: "Değerlendirme Süreci",
      description: "Banka tarafından özel değerlendirme sürecine alınacak başvurunuzun sonucunu bekleyin."
    },
    {
      title: "Onay ve Kullanım",
      description: "Başvurunuz onaylandığında, kredi sözleşmesini imzalayarak kredinin hesabınıza geçmesini sağlayın."
    }
  ];

  return (
    <Card className="mb-8 border border-gray-200">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-6">Riskli Müşteriye Kredi Başvuru Adımları</h3>
        
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-medium">{index + 1}</span>
              </div>
              <div>
                <h4 className="font-medium flex items-center gap-2">
                  {step.title}
                  {index === steps.length - 1 && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                </h4>
                <p className="text-gray-600 text-sm mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskyLoanSteps;
