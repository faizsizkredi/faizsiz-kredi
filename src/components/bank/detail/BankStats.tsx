
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  Percent, 
  CreditCard, 
  Clock, 
  UserCheck, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";

interface BankStatsProps {
  bankName: string;
}

const BankStats = ({ bankName }: BankStatsProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6">{bankName} İhtiyaç Kredisi Detayları</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <CreditCard className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Kredi Tutarı</h3>
                <p className="text-gray-600">Minimum: 1.000 TL</p>
                <p className="text-gray-600">Maximum: 500.000 TL</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Calendar className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Kredi Vadesi</h3>
                <p className="text-gray-600">Minimum: 3 Ay</p>
                <p className="text-gray-600">Maximum: 36 Ay</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Percent className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Faiz Oranları</h3>
                <p className="text-gray-600">Yeni Müşteri: %0</p>
                <p className="text-gray-600">Standart: %3,99</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Clock className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-lg font-semibold mb-2">İşlem Süresi</h3>
                <p className="text-gray-600">Online: 5 Dakika</p>
                <p className="text-gray-600">Şube: 30 Dakika</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <UserCheck className="w-8 h-8 text-green-500" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Başvuru Şartları</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>18 yaşını doldurmuş olmak</li>
                  <li>Düzenli gelir sahibi olmak</li>
                  <li>Kredi notu 1300 ve üzeri olmak</li>
                  <li>Son 6 ayda kredi ödemelerinde gecikme olmamak</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Gerekli Belgeler</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Kimlik fotokopisi</li>
                  <li>Gelir belgesi</li>
                  <li>İkametgah belgesi</li>
                  <li>Son 3 aylık maaş bordrosu</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-8 h-8 text-orange-500" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Önemli Notlar</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Kredi başvurusu ücretsizdir</li>
                <li>Kredi tutarı ve faiz oranı müşteri profiline göre değişiklik gösterebilir</li>
                <li>Online başvurularda ek indirimler uygulanabilir</li>
                <li>Kampanya şartları ve kredi koşulları değişiklik gösterebilir</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BankStats;
