import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const PopularLoans = () => {
  const popularLoans = [
    {
      title: "İhtiyaç Kredisi",
      amount: "50.000 TL",
      term: "12 Ay"
    },
    {
      title: "İhtiyaç Kredisi",
      amount: "10.000 TL",
      term: "6 Ay"
    },
    {
      title: "İhtiyaç Kredisi",
      amount: "20.000 TL",
      term: "12 Ay"
    }
  ];

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-6">Popüler Aramalar</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {popularLoans.map((loan, index) => (
          <Card key={index} className="p-4">
            <h3 className="font-medium mb-2">{loan.title}</h3>
            <p className="text-lg font-bold mb-1">{loan.amount}</p>
            <p className="text-sm text-gray-600 mb-4">{loan.term}</p>
            <Button variant="ghost" size="sm" className="w-full">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PopularLoans;