
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle2, CircleDollarSign, Clock, FileText } from "lucide-react";

const RiskyCustomerInfo = () => {
  return (
    <Card className="mb-8 border border-amber-200 bg-amber-50">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="h-6 w-6 text-amber-600" />
          <h3 className="text-xl font-semibold text-amber-800">Riskli Müşteri Nedir?</h3>
        </div>
        
        <p className="text-gray-700 mb-6">
          Bankalar ve finans kuruluşları tarafından "riskli müşteri" olarak değerlendirilen kişiler genellikle aşağıdaki özelliklere sahip olabilirler:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-start gap-3">
            <FileText className="h-5 w-5 text-red-500 mt-0.5" />
            <div>
              <h4 className="font-medium mb-1">Kredi Notu Düşüklüğü</h4>
              <p className="text-sm text-gray-600">Findeks veya KKB skorunun 1000-1900 bandının altında olması</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-red-500 mt-0.5" />
            <div>
              <h4 className="font-medium mb-1">Geç Ödemeler</h4>
              <p className="text-sm text-gray-600">Son 6-12 ay içinde kredi kartı, kredi taksiti, fatura ödemelerinde gecikmeler</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <CircleDollarSign className="h-5 w-5 text-red-500 mt-0.5" />
            <div>
              <h4 className="font-medium mb-1">Yüksek Borçluluk Oranı</h4>
              <p className="text-sm text-gray-600">Gelire oranla fazla kredi ve kredi kartı borcu</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
            <div>
              <h4 className="font-medium mb-1">Çözüm Fırsatları</h4>
              <p className="text-sm text-gray-600">Özel değerlendirme süreçleriyle kredi imkanı sunulmaktadır</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-white border-amber-300 text-amber-800">Kredi Sicili Bozuk</Badge>
          <Badge variant="outline" className="bg-white border-amber-300 text-amber-800">Kara Liste</Badge>
          <Badge variant="outline" className="bg-white border-amber-300 text-amber-800">Düşük Skor</Badge>
          <Badge variant="outline" className="bg-white border-amber-300 text-amber-800">İkinci Şans</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskyCustomerInfo;
