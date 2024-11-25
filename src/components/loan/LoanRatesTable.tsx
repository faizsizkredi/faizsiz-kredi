import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

const LoanRatesTable = () => {
  const currentDate = format(new Date(), "d MMMM yyyy", { locale: tr });
  
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
    },
    {
      bank: "Garanti BBVA",
      logo: "/bank-logos/garanti.png",
      amount: "5.000 - 300.000 TL",
      term: "1 - 48 Ay",
      rate: "%3.89"
    },
    {
      bank: "Yapı Kredi",
      logo: "/bank-logos/yapikredi.png",
      amount: "1.000 - 400.000 TL",
      term: "1 - 36 Ay",
      rate: "%4.09"
    },
    {
      bank: "İş Bankası",
      logo: "/bank-logos/isbank.png",
      amount: "5.000 - 350.000 TL",
      term: "1 - 48 Ay",
      rate: "%3.95"
    },
    {
      bank: "Ziraat Bankası",
      logo: "/bank-logos/ziraat.png",
      amount: "1.000 - 450.000 TL",
      term: "1 - 36 Ay",
      rate: "%3.79"
    },
    {
      bank: "Halkbank",
      logo: "/bank-logos/halkbank.png",
      amount: "5.000 - 250.000 TL",
      term: "1 - 36 Ay",
      rate: "%3.85"
    },
    {
      bank: "Vakıfbank",
      logo: "/bank-logos/vakifbank.png",
      amount: "1.000 - 400.000 TL",
      term: "1 - 48 Ay",
      rate: "%3.89"
    },
    {
      bank: "QNB Finansbank",
      logo: "/bank-logos/qnb.png",
      amount: "5.000 - 300.000 TL",
      term: "1 - 36 Ay",
      rate: "%4.15"
    },
    {
      bank: "TEB",
      logo: "/bank-logos/teb.png",
      amount: "10.000 - 350.000 TL",
      term: "1 - 48 Ay",
      rate: "%4.25"
    }
  ];

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-6">
        İhtiyaç Kredisi / Finansmanı Faiz ve Kâr Payı Oranları - {currentDate}
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
                <div className="flex items-center gap-2">
                  <img src={rate.logo} alt={rate.bank} className="h-8" />
                  <span>{rate.bank}</span>
                </div>
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