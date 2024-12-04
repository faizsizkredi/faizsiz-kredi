import { Wallet, PiggyBank, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const depositTypes = [
  {
    title: "Vadeli Mevduat",
    description: "Paranızı belirli bir süre için yatırın, yüksek faiz oranlarından yararlanın",
    icon: PiggyBank,
    rate: "45%",
    term: "32 gün"
  },
  {
    title: "Vadesiz Mevduat",
    description: "Günlük bankacılık işlemleriniz için esnek hesap yönetimi",
    icon: Wallet,
    rate: "0%",
    term: "Süresiz"
  },
  {
    title: "Döviz Mevduatı",
    description: "Döviz kurlarındaki değişimlerden faydalanın",
    icon: TrendingUp,
    rate: "3.5%",
    term: "32 gün"
  }
];

const DepositTypes = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {depositTypes.map((type, index) => (
        <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <type.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
            <p className="text-gray-600 mb-4">{type.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>Faiz: {type.rate}</span>
              <span>Vade: {type.term}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

export default DepositTypes;