import { ReactNode } from "react";
import { Helmet } from "react-helmet";
import BankCard from "../BankCard";
import FilterTabs from "../FilterTabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BankRatesTable from "../bank/BankRatesTable";
import { Card } from "../ui/card";

interface FilterContentProps {
  title: string;
  description: string;
  banks: any[];
  currentTab: string;
  onSortChange: (option: string) => void;
  faqItems?: { question: string; answer: string }[];
  additionalContent?: ReactNode;
}

const FilterContent = ({
  title,
  description,
  banks,
  currentTab,
  onSortChange,
  faqItems = [],
  additionalContent,
}: FilterContentProps) => {
  const createdAt = "2024-01-01";
  const updatedAt = new Date().toLocaleDateString('tr-TR');
  const author = "Finans Uzmanı";

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta property="article:published_time" content={createdAt} />
        <meta property="article:modified_time" content={updatedAt} />
        
        {/* Hidden images for Google SEO */}
        <meta property="og:image" content="https://yourwebsite.com/images/kredi-karti.jpg" />
        <meta property="og:image:alt" content="Kredi Kartı" />
        <meta name="twitter:image" content="https://yourwebsite.com/images/kredi-karti.jpg" />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 mb-8">{description}</p>

        <div className="mb-6 text-sm text-gray-500">
          <div>Yazar: {author}</div>
          <div>Oluşturulma Tarihi: {createdAt}</div>
          <div>Son Güncelleme: {updatedAt}</div>
        </div>

        <FilterTabs onSortChange={onSortChange} activeTab={currentTab} />

        <div className="space-y-4 mb-12">
          {banks.map((bank, index) => (
            <BankCard key={index} {...bank} />
          ))}
        </div>

        <div className="mt-16 mb-8">
          <h2 className="text-2xl font-bold mb-6">Bankaların Güncel İhtiyaç Kredisi Faiz Oranları</h2>
          <BankRatesTable
            rates={CURRENT_RATES.map(rate => ({
              name: rate.bank,
              productName: rate.name,
              interestRate: rate.rate,
              minTerm: rate.minTerm,
              maxTerm: rate.maxTerm
            }))}
          />
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

export default FilterContent;