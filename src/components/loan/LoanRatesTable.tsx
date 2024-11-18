import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const LoanRatesTable = () => {
  const rates = [
    {
      bank: "Akbank",
      logo: "/bank-logos/akbank.png",
      amount: "1.000 - 500.000 TL",
      term: "1 - 36 Ay",
      rate: "%3.99"
    },
    {
      bank: "Alternatif Bank",
      logo: "/bank-logos/abank.png",
      amount: "20.000 - 250.000 TL",
      term: "1 - 36 Ay",
      rate: "%0.00 - %4.39"
    }
  ];

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-6">
        İhtiyaç Kredisi / Finansmanı Faiz ve Kâr Payı Oranları - 19 Kasım 2024
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Bankalar</TableHead>
            <TableHead>Kredi/Finansman Tutarı (min - max)</TableHead>
            <TableHead>Vade (min - max)</TableHead>
            <TableHead>Faiz/Kâr Payı (min - max)</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rates.map((rate, index) => (
            <TableRow key={index}>
              <TableCell>
                <img src={rate.logo} alt={rate.bank} className="h-8" />
              </TableCell>
              <TableCell>{rate.amount}</TableCell>
              <TableCell>{rate.term}</TableCell>
              <TableCell>{rate.rate}</TableCell>
              <TableCell>
                <Button variant="link" className="text-orange-500">
                  İncele <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LoanRatesTable;