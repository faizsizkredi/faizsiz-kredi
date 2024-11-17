import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";

const KrediFaizHesaplama = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Kredi Faiz Hesaplama 2024 | Kredi Hesaplama Aracı</title>
        <meta name="description" content="Kredi faiz hesaplama aracı ile ihtiyaç kredisi, konut kredisi, taşıt kredisi faiz ve taksit tutarlarını hesaplayın." />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Kredi Faiz Hesaplama</h1>
        <Card>
          <CardContent className="p-6">
            <p className="text-gray-600">
              Kredi faiz hesaplama sayfası içeriği buraya gelecek.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KrediFaizHesaplama;