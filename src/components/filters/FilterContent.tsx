import { ReactNode } from "react";
import { Helmet } from "react-helmet";
import BankCard from "../BankCard";
import FilterTabs from "../FilterTabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface FilterContentProps {
  title: string;
  description: string;
  banks: any[];
  currentTab: string;
  onSortChange: (option: string) => void;
  faqItems?: { question: string; answer: string }[];
  additionalContent?: ReactNode;
}

const CURRENT_RATES = [
  { bank: "Garanti BBVA", name: "İhtiyaç Kredisi", rate: "4.00", minTerm: "25", maxTerm: "36" },
  { bank: "QNB", name: "İyi ki Tanışmışız Dedirten Kredi", rate: "0.00", minTerm: "1", maxTerm: "6" },
  { bank: "Akbank", name: "Hızlı İhtiyaç Kredisi", rate: "0.00", minTerm: "1", maxTerm: "6" },
  { bank: "Halkbank", name: "İhtiyaç Kredisi", rate: "5.25", minTerm: "1", maxTerm: "36" },
  { bank: "Vakıfbank", name: "İhtiyaç Kredisi Kampanyası", rate: "4.99", minTerm: "3", maxTerm: "12" },
  { bank: "Ziraat Bankası", name: "Tüketici Ürün Paketi", rate: "4.54", minTerm: "3", maxTerm: "24" },
  { bank: "Alternatif Bank", name: "Dijital İhtiyaç Kredisi", rate: "0.00", minTerm: "12", maxTerm: "12" },
  { bank: "Enpara.com", name: "Masrafsız İhtiyaç Kredisi", rate: "4.09", minTerm: "25", maxTerm: "36" },
  { bank: "CEPTETEB", name: "Hoş Geldin Kredisi", rate: "3.84", minTerm: "25", maxTerm: "36" },
  { bank: "ING", name: "Yeni Müşterilere Özel", rate: "0.99", minTerm: "3", maxTerm: "6" }
];

const FilterContent = ({
  title,
  description,
  banks,
  currentTab,
  onSortChange,
  faqItems = [],
  additionalContent,
}: FilterContentProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 mb-8">{description}</p>

        <FilterTabs onSortChange={onSortChange} activeTab={currentTab} />

        <div className="space-y-4 mb-12">
          {banks.map((bank, index) => (
            <BankCard key={index} {...bank} />
          ))}
        </div>

        <div className="mt-16 mb-8">
          <h2 className="text-2xl font-bold mb-6">Bankaların Güncel İhtiyaç Kredisi Faiz Oranları</h2>
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
                {CURRENT_RATES.map((rate, index) => (
                  <TableRow key={index}>
                    <TableCell>{rate.bank}</TableCell>
                    <TableCell>{rate.name}</TableCell>
                    <TableCell>%{rate.rate}</TableCell>
                    <TableCell>{rate.minTerm} Ay</TableCell>
                    <TableCell>{rate.maxTerm} Ay</TableCell>
                    <TableCell>
                      <a href="#" className="text-blue-500 hover:text-blue-700">
                        Hesapla
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {faqItems.length > 0 && (
          <div className="mt-16 mb-8">
            <h2 className="text-2xl font-bold mb-6">Sıkça Sorulan Sorular</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}

        {additionalContent}
      </div>
    </div>
  );
};

export default FilterContent;