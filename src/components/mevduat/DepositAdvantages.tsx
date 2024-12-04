import { Percent, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DepositAdvantages = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Mevduat Hesabı Avantajları</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <Percent className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Yüksek Faiz Oranları</h3>
            <p className="text-gray-600">Rekabetçi faiz oranlarıyla birikimlerinizi büyütün</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <Clock className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Esnek Vadeler</h3>
            <p className="text-gray-600">İhtiyacınıza uygun vade seçenekleri</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <Shield className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Güvenli Yatırım</h3>
            <p className="text-gray-600">TMSF güvencesi ile güvenli tasarruf</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DepositAdvantages;