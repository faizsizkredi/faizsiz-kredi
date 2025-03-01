
import { Card, CardContent } from "@/components/ui/card";
import { CheckSquare, AlertCircle, HelpCircle, Lightbulb } from "lucide-react";

const RiskyLoanTips = () => {
  return (
    <Card className="mb-8 border border-green-200 bg-green-50">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb className="h-6 w-6 text-green-600" />
          <h3 className="text-xl font-semibold text-green-800">Riskli Müşteriler İçin Kredi Alırken Dikkat Edilmesi Gerekenler</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckSquare className="h-5 w-5 text-green-600 mt-1" />
              <div>
                <h4 className="font-medium">Kredi Notunuzu Kontrol Edin</h4>
                <p className="text-sm text-gray-700">Başvuru öncesi güncel kredi notunuzu ve raporunuzu kontrol edin. Bu, bankaların sizi nasıl değerlendireceği konusunda fikir verecektir.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckSquare className="h-5 w-5 text-green-600 mt-1" />
              <div>
                <h4 className="font-medium">Ödeme Planını Dikkatli İnceleyin</h4>
                <p className="text-sm text-gray-700">Ödeme planındaki taksitlerin bütçenize uygun olduğundan emin olun. Geç ödemeler kredi notunuzu daha da düşürebilir.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 mt-1" />
              <div>
                <h4 className="font-medium">Yüksek Faiz Oranları</h4>
                <p className="text-sm text-gray-700">Riskli müşteriler için sunulan kredilerde faiz oranları genellikle daha yüksektir. Bu maliyeti göz önünde bulundurun.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <HelpCircle className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <h4 className="font-medium">Alternatif Finansman Kaynaklarını Değerlendirin</h4>
                <p className="text-sm text-gray-700">Mikro kredi, fintech uygulamaları gibi alternatif finansman kanalları da değerlendirmeye alınabilir.</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskyLoanTips;
