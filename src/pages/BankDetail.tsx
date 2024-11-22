import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const BankDetail = () => {
  const { bankSlug } = useParams();
  
  const bankName = bankSlug?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  const rates = [
    {
      name: bankName,
      productName: "Direkt İhtiyaç Kredisi",
      interestRate: "2.99",
      minTerm: "3",
      maxTerm: "36",
    },
    {
      name: bankName,
      productName: "Konut Kredisi",
      interestRate: "2.19",
      minTerm: "12",
      maxTerm: "120",
    }
  ];

  return (
    <>
      <Helmet>
        <title>{`${bankName} Faizsiz Kredi Başvurusu 2024 | Güncel Faiz Oranları`}</title>
        <meta
          name="description"
          content={`${bankName} faizsiz kredi başvurusu yapın! 2024 güncel ${bankName} kredi faiz oranları, hesaplama ve başvuru. İhtiyaç kredisi, konut kredisi, taşıt kredisi kampanyaları.`}
        />
        <link rel="canonical" href={`https://yourwebsite.com/bank/${bankSlug}`} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">{bankName} Kredi Faiz Oranları</h1>
          
          <div className="overflow-x-auto bg-white rounded-lg shadow">
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

          <div className="mt-8">
            <Accordion type="single" collapsible>
              <AccordionItem value="about">
                <AccordionTrigger>İlgili Aramalar</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    {bankName} Türkiye'nin önde gelen bankalarından biridir. Müşterilerine ihtiyaç kredisi, konut kredisi, taşıt kredisi ve KOBİ kredisi gibi çeşitli finansal çözümler sunmaktadır.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankDetail;