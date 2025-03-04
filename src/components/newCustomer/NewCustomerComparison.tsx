
import { Bank } from "@/types/bank";
import { Card, CardContent } from "@/components/ui/card";

interface NewCustomerComparisonProps {
  banks: Bank[];
}

const NewCustomerComparison = ({ banks }: NewCustomerComparisonProps) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Banka Karşılaştırma</h2>
      <Card>
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Banka</th>
                  <th className="text-left py-2">Maksimum Tutar</th>
                  <th className="text-left py-2">Faiz Oranı</th>
                  <th className="text-left py-2">Vade</th>
                </tr>
              </thead>
              <tbody>
                {banks.map((bank, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2">{bank.name}</td>
                    <td className="py-2">{bank.amount}</td>
                    <td className="py-2">{bank.interestRate}</td>
                    <td className="py-2">{bank.term}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewCustomerComparison;
