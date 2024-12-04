import { Card, CardContent } from "@/components/ui/card";

interface BankInfoProps {
  bankName: string;
}

const BankInfo = ({ bankName }: BankInfoProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6">{bankName} Hakkında</h2>
      <Card>
        <CardContent className="p-6">
          <p className="text-gray-600 mb-6">
            Ocak 1948'de özel sermayeli bir ticaret bankası olarak Adana'da kuruldu. Amacı bölgedeki pamuk üreticilerine kaynak sağlamak ve destek olmak olan {bankName}, ilk İstanbul şubesini 14 Temmuz 1950'de Sirkeci'de açtı. Kuruluşu gününden bu yana toplumun ve ekonominin gelişimi için bilinç ve sorumlulukla hareket ediyor, paydaşlarına sürdürülebilir değer yaratmak için 72 yıldır çalışıyor.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-500 mb-1">Banka ATM Sayısı</div>
              <div className="text-xl font-semibold">5.300</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Banka üye iş yeri sayısı</div>
              <div className="text-xl font-semibold">350.000</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BankInfo;