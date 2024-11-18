import { Building } from "lucide-react";
import BankHeader from "@/components/bank/BankHeader";
import BankCalculator from "@/components/bank/BankCalculator";
import BankProductGrid from "@/components/bank/BankProductGrid";
import BankRatesTable from "@/components/bank/BankRatesTable";
import BankLoanAmounts from "@/components/bank/BankLoanAmounts";
import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AkbankIndex = () => {
  const products = [
    {
      title: "Direkt İhtiyaç Kredisi",
      interestRate: "2.99",
      minTerm: "3",
      maxTerm: "36",
    },
    {
      title: "Konut Kredisi",
      interestRate: "2.19",
      minTerm: "12",
      maxTerm: "120",
    },
    {
      title: "Taşıt Kredisi",
      interestRate: "2.59",
      minTerm: "12",
      maxTerm: "48",
    }
  ];

  const rates = [
    {
      name: "Akbank",
      productName: "Direkt İhtiyaç Kredisi",
      interestRate: "2.99",
      minTerm: "3",
      maxTerm: "36",
    },
    {
      name: "Akbank",
      productName: "Konut Kredisi",
      interestRate: "2.19",
      minTerm: "12",
      maxTerm: "120",
    }
  ];

  return (
    <>
      <Helmet>
        <title>Akbank Kredi Başvurusu 2024 | Güncel Faiz Oranları</title>
        <meta
          name="description"
          content="Akbank kredi başvurusu yapın! 2024 güncel Akbank kredi faiz oranları, hesaplama ve başvuru. İhtiyaç kredisi, konut kredisi, taşıt kredisi kampanyaları."
        />
        <link rel="canonical" href="https://yourwebsite.com/bank/akbank" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <BankHeader bankName="Akbank" />
        
        <div className="container mx-auto px-4 py-8">
          <BankCalculator />
          
          <h2 className="text-2xl font-bold mb-6">Akbank Kredi Kampanyaları</h2>
          <BankProductGrid products={products} />
          
          <h2 className="text-2xl font-bold mb-6">Akbank Kredi Faiz Oranları</h2>
          <BankRatesTable rates={rates} />

          <BankLoanAmounts bankName="Akbank" bankSlug="akbank" />

          <div className="mt-8">
            <Accordion type="single" collapsible>
              <AccordionItem value="about">
                <AccordionTrigger>Akbank Hakkında</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    Akbank, 1948 yılında kurulan Türkiye'nin önde gelen bankalarından biridir. Müşterilerine ihtiyaç kredisi, konut kredisi, taşıt kredisi ve KOBİ kredisi gibi çeşitli finansal çözümler sunmaktadır.
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

export default AkbankIndex;