import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const QnbIndex = () => {
  const currentYear = new Date().getFullYear();
  const bankName = "QNB";
  const pageTitle = `${bankName} Faizsiz Kredi Başvurusu - ${currentYear}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{pageTitle}</title>
        <meta 
          name="description" 
          content={`${bankName} bankanın en güncel kredi kampanyaları, avantajlı faiz oranları ve özel fırsatları. Tüm kredi seçeneklerini karşılaştırın, size en uygun krediye hemen başvurun.${currentYear} yılına özel kampanyalar ve fırsatlar için acele edin!`}
        />
      </Helmet>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{pageTitle}</h1>
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-sm text-gray-500 mb-1">Yeni Müşterilere Özel</div>
                <div className="text-xl font-semibold mb-2">Faiz Oranı %0 (Faizsiz)</div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">Koşullar</Button>
                <Button className="bg-orange-500 hover:bg-orange-600">Müşteri Ol</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Diğer içerikler buraya eklenebilir */}
      </main>
    </div>
  );
};

export default QnbIndex;
