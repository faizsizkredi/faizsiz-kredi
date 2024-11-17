import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";

const KobiKredisi = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>KOBİ Kredisi 2024 | En Uygun KOBİ Kredisi Başvurusu</title>
        <meta name="description" content="2024 yılı güncel KOBİ kredisi kampanyaları, faiz oranları ve başvuru koşulları. En uygun KOBİ kredisi veren bankalar." />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">KOBİ Kredisi</h1>
        <Card>
          <CardContent className="p-6">
            <p className="text-gray-600">
              KOBİ kredisi sayfası içeriği buraya gelecek.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KobiKredisi;