
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, XCircle } from "lucide-react";

const RiskyComparison = () => {
  const comparisonData = [
    {
      feature: "Düşük Kredi Notu",
      standardBanks: false,
      riskyBanks: true
    },
    {
      feature: "Kredi Sicili Bozuk Kişiler",
      standardBanks: false,
      riskyBanks: true
    },
    {
      feature: "Kara Listedeki Müşteriler",
      standardBanks: false,
      riskyBanks: true
    },
    {
      feature: "Gelir Belgesiz Başvuru",
      standardBanks: false,
      riskyBanks: "Kısmi"
    },
    {
      feature: "Kefilsiz Kredi İmkanı",
      standardBanks: true,
      riskyBanks: "Kısmi"
    },
    {
      feature: "Hızlı Değerlendirme",
      standardBanks: true,
      riskyBanks: false
    },
    {
      feature: "Düşük Faiz Oranları",
      standardBanks: true,
      riskyBanks: false
    },
    {
      feature: "Esnek Ödeme Seçenekleri",
      standardBanks: "Kısmi",
      riskyBanks: true
    }
  ];

  const renderStatus = (status: boolean | string) => {
    if (status === true) {
      return <CheckCircle2 className="h-5 w-5 text-green-500" />;
    } else if (status === false) {
      return <XCircle className="h-5 w-5 text-red-500" />;
    } else if (status === "Kısmi") {
      return <span className="text-amber-500 font-medium">Kısmi</span>;
    }
    return status;
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Standart Bankalar vs Riskli Müşteriye Kredi Veren Bankalar</h3>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Özellik</TableHead>
              <TableHead>Standart Bankalar</TableHead>
              <TableHead>Riskli Müşteri Kredisi Veren Bankalar</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisonData.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{row.feature}</TableCell>
                <TableCell className="text-center">{renderStatus(row.standardBanks)}</TableCell>
                <TableCell className="text-center">{renderStatus(row.riskyBanks)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RiskyComparison;
