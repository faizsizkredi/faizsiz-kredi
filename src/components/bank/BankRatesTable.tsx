import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface BankRate {
  name: string;
  productName: string;
  interestRate: string;
  minTerm: string;
  maxTerm: string;
}

interface BankRatesTableProps {
  rates: BankRate[];
}

const BankRatesTable = ({ rates }: BankRatesTableProps) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Banka</TableHead>
            <TableHead>Kredi Adı</TableHead>
            <TableHead>Faiz Oranı</TableHead>
            <TableHead>Min. Vade</TableHead>
            <TableHead>Maks. Vade</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rates.map((rate, index) => (
            <TableRow key={index}>
              <TableCell>{rate.name}</TableCell>
              <TableCell>{rate.productName}</TableCell>
              <TableCell>%{rate.interestRate}</TableCell>
              <TableCell>{rate.minTerm} Ay</TableCell>
              <TableCell>{rate.maxTerm} Ay</TableCell>
              <TableCell>
                <Button variant="link" className="text-blue-500 hover:text-blue-700">
                  İncele
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BankRatesTable;