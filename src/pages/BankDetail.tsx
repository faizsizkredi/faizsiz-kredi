import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BankDetail = () => {
  const { bankSlug } = useParams();
  
  const bankName = bankSlug?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

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
          <h1 className="text-3xl font-bold mb-8">{bankName}</h1>
          
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