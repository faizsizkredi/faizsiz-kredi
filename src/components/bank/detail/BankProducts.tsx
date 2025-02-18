
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Home, Car, Building } from "lucide-react";

interface BankProductsProps {
  bankName: string;
}

const BankProducts = ({ bankName }: BankProductsProps) => {
  const products = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "İhtiyaç Kredisi",
      description: "İhtiyaçlarınız için uygun faizli kredi seçenekleri"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Konut Kredisi",
      description: "Ev sahibi olmak isteyenler için özel konut kredisi fırsatları"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Taşıt Kredisi",
      description: "Araç alımlarınız için uygun taşıt kredisi seçenekleri"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "KOBİ Kredisi",
      description: "İşletmeniz için avantajlı kredi seçenekleri"
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6">{bankName} Kredi Ürünleri</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-primary">{product.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BankProducts;
