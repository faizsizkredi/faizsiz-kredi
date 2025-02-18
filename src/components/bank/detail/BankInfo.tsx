
import { Card, CardContent } from "@/components/ui/card";

interface BankInfoProps {
  bankName: string;
}

const BankInfo = ({ bankName }: BankInfoProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6">{bankName} Kredi Kampanyaları</h2>
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Yeni Müşteri Kredisi</h3>
              <p className="text-gray-600">
                Yeni müşterilere özel faizsiz kredi kampanyası ile 50.000 TL'ye varan tutarlarda kredi kullanabilirsiniz.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Uygun Faizli Krediler</h3>
              <p className="text-gray-600">
                36 aya varan vade seçenekleri ve uygun faiz oranları ile ihtiyaç kredisi kullanabilirsiniz.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BankInfo;
