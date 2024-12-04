import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Car, Store, Wallet } from "lucide-react";

interface BankProductsProps {
  bankName: string;
}

const BankProducts = ({ bankName }: BankProductsProps) => {
  const navigate = useNavigate();

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{bankName} Diğer Kredi, Kredi Kartı ve Mevduat Ürünleri</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate('/konut-kredisi')}>
          <CardContent className="p-6">
            <Home className="w-8 h-8 mx-auto mb-2 text-red-600" />
            <h3 className="font-semibold">Konut Kredisi</h3>
          </CardContent>
        </Card>
        <Card className="text-center cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate('/tasit-kredisi')}>
          <CardContent className="p-6">
            <Car className="w-8 h-8 mx-auto mb-2 text-red-600" />
            <h3 className="font-semibold">Taşıt Kredisi</h3>
          </CardContent>
        </Card>
        <Card className="text-center cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate('/kobi-kredisi')}>
          <CardContent className="p-6">
            <Store className="w-8 h-8 mx-auto mb-2 text-red-600" />
            <h3 className="font-semibold">Kobi Kredisi</h3>
          </CardContent>
        </Card>
        <Card className="text-center cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate('/mevduat')}>
          <CardContent className="p-6">
            <Wallet className="w-8 h-8 mx-auto mb-2 text-red-600" />
            <h3 className="font-semibold">Mevduat</h3>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BankProducts;