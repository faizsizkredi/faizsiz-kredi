
import { BadgeCheck, Clock, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const NewCustomerBenefits = () => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Yeni Müşteri Kredisi Avantajları</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <BadgeCheck className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Hızlı Onay</h3>
            <p className="text-gray-600">Online başvuru ile dakikalar içinde kredi onayı alın</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Clock className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Esnek Vade</h3>
            <p className="text-gray-600">Size uygun vade seçenekleri ile ödeme planı oluşturun</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Sıfır Faiz</h3>
            <p className="text-gray-600">Yeni müşterilere özel %0 faiz avantajından yararlanın</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NewCustomerBenefits;
