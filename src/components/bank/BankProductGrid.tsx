
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface BankProduct {
  title: string;
  interestRate: string;
  minTerm: string;
  maxTerm: string;
}

interface BankProductGridProps {
  products?: BankProduct[];
  bankName?: string; // Add bankName prop
}

// Default products if none are provided
const defaultProducts = [
  {
    title: "İhtiyaç Kredisi",
    interestRate: "1.89",
    minTerm: "3",
    maxTerm: "36"
  },
  {
    title: "Konut Kredisi",
    interestRate: "1.29",
    minTerm: "12",
    maxTerm: "120"
  },
  {
    title: "Taşıt Kredisi",
    interestRate: "1.59",
    minTerm: "12",
    maxTerm: "60"
  },
  {
    title: "KOBİ Kredisi",
    interestRate: "1.69",
    minTerm: "6",
    maxTerm: "48"
  }
];

const BankProductGrid = ({ products = defaultProducts, bankName }: BankProductGridProps) => {
  // If bankName is provided, update product titles to include the bank name
  const displayProducts = bankName 
    ? products.map(product => ({
        ...product,
        title: `${bankName} ${product.title}`
      })) 
    : products;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {displayProducts.map((product, index) => (
        <Card key={index} className="bg-white">
          <CardContent className="p-6">
            <div className="mb-4 h-12">
              <h3 className="font-semibold">{product.title}</h3>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Faiz Oranı</span>
                <span className="font-semibold">%{product.interestRate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Min. Vade</span>
                <span className="font-semibold">{product.minTerm} ay</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Maks. Vade</span>
                <span className="font-semibold">{product.maxTerm} ay</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Detayları gör
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BankProductGrid;
