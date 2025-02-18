
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Wallet, Calculator, ShieldCheck } from "lucide-react";

interface BankInfoProps {
  bankName: string;
}

const BankInfo = ({ bankName }: BankInfoProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6">{bankName} Kredi Avantajları</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Clock className="w-8 h-8 text-primary shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Hızlı Kredi İmkanı</h3>
                <p className="text-gray-600">
                  Online başvurularınızda 5 dakika içinde sonuç alabilir, aynı gün içinde kredinizi kullanabilirsiniz.
                </p>
                <ul className="list-disc list-inside mt-3 text-gray-600">
                  <li>Anında başvuru sonucu</li>
                  <li>Hızlı kredi kullandırım</li>
                  <li>7/24 online başvuru imkanı</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Wallet className="w-8 h-8 text-primary shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Esnek Ödeme Seçenekleri</h3>
                <p className="text-gray-600">
                  İhtiyaçlarınıza uygun vade seçenekleri ve ödeme planları ile kredinizi yapılandırabilirsiniz.
                </p>
                <ul className="list-disc list-inside mt-3 text-gray-600">
                  <li>36 aya varan vade</li>
                  <li>Esnek ödeme tarihleri</li>
                  <li>Öteleme imkanı</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Calculator className="w-8 h-8 text-primary shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Avantajlı Faiz Oranları</h3>
                <p className="text-gray-600">
                  Yeni müşterilere özel kampanyalar ve uygun faiz oranları ile kredinizi kullanabilirsiniz.
                </p>
                <ul className="list-disc list-inside mt-3 text-gray-600">
                  <li>%0 faiz fırsatı</li>
                  <li>Özel kampanya dönemleri</li>
                  <li>Masrafsız kullandırım</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Güvenli Kredi Süreci</h3>
                <p className="text-gray-600">
                  Başvurudan kullandırıma kadar tüm süreçlerde güvenliğiniz ön planda tutulur.
                </p>
                <ul className="list-disc list-inside mt-3 text-gray-600">
                  <li>Şeffaf kredi süreci</li>
                  <li>Güvenli online işlemler</li>
                  <li>7/24 müşteri desteği</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BankInfo;
