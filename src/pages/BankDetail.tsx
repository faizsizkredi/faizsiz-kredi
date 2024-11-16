import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import BankHeader from "@/components/bank/BankHeader";
import BankCalculator from "@/components/bank/BankCalculator";
import BankProductGrid from "@/components/bank/BankProductGrid";
import BankRatesTable from "@/components/bank/BankRatesTable";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BankDetail = () => {
  const { bankSlug } = useParams();
  
  const bankName = bankSlug?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  const products = [
    {
      title: "Hızlı İhtiyaç Kredisi",
      interestRate: "0.00",
      minTerm: "1",
      maxTerm: "6",
    },
    {
      title: "İlk Evim Konut Kredisi",
      interestRate: "2.89",
      minTerm: "25",
      maxTerm: "120",
    },
    {
      title: "Ticari Kredi",
      interestRate: "3.49",
      minTerm: "3",
      maxTerm: "36",
    },
    {
      title: "0 km Taşıt Kredisi",
      interestRate: "3.85",
      minTerm: "13",
      maxTerm: "48",
    }
  ];

  const rates = [
    {
      name: bankName || "",
      productName: "Ticari Kredi",
      interestRate: "3.49",
      minTerm: "3",
      maxTerm: "36",
    },
    {
      name: bankName || "",
      productName: "Hızlı İhtiyaç Kredisi",
      interestRate: "0.00",
      minTerm: "1",
      maxTerm: "6",
    },
    {
      name: bankName || "",
      productName: "İlk Evim Konut Kredisi",
      interestRate: "2.89",
      minTerm: "25",
      maxTerm: "120",
    }
  ];

  const relatedSearches = [
    `${bankName?.toLowerCase()} faizsiz kredi 7500`,
    `${bankName?.toLowerCase()} 5.000 tl faizsiz kredi`,
    `${bankName?.toLowerCase()} 7500 tl faizsiz kredi`,
    `${bankName?.toLowerCase()} faizsiz 20 bin`,
    `${bankName?.toLowerCase()} 20 bin faizsiz kredi`,
    `${bankName?.toLowerCase()} 20000 tl faizsiz kredi`,
    `${bankName?.toLowerCase()} 5000 tl faizsiz kredi`,
    `${bankName?.toLowerCase()} 7.500 tl faizsiz kredi`
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
        <BankHeader bankName={bankName || ""} />
        
        <div className="container mx-auto px-4 py-8">
          <BankCalculator />
          
          <h2 className="text-2xl font-bold mb-6">{bankName} Kredi Kampanyaları</h2>
          <BankProductGrid products={products} />
          
          <h2 className="text-2xl font-bold mb-6">{bankName} Kredi Faiz Oranları</h2>
          <BankRatesTable rates={rates} />

          <div className="mt-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">İlgili Aramalar</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {relatedSearches.map((search, index) => (
                    <a
                      key={index}
                      href={`#${search}`}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      {search}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Accordion type="single" collapsible>
              <AccordionItem value="about">
                <AccordionTrigger>{bankName} Hakkında</AccordionTrigger>
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