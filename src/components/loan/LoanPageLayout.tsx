import { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import LoanCalculator from "./LoanCalculator";
import RecommendedLoans from "./RecommendedLoans";
import PopularLoans from "./PopularLoans";
import LoanRatesTable from "./LoanRatesTable";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface LoanPageLayoutProps {
  title: string;
  description: string;
  keywords: string;
  icon: LucideIcon;
  activeTab: string;
  faqs?: Array<{ question: string; answer: string }>;
  additionalContent?: ReactNode;
}

const LoanPageLayout = ({
  title,
  description,
  keywords,
  icon: Icon,
  activeTab,
  faqs,
  additionalContent
}: LoanPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{title} 2024 | En Uygun {title} Başvurusu</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Icon className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <Tabs defaultValue={activeTab}>
            <TabsContent value={activeTab}>
              <LoanCalculator />
            </TabsContent>
          </Tabs>
        </div>

        <RecommendedLoans />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Başvuru Şartları</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>18 yaşını doldurmuş olmak</li>
                <li>T.C. vatandaşı olmak</li>
                <li>Düzenli gelir sahibi olmak</li>
                <li>Son 6 aydır aynı işyerinde çalışıyor olmak</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Gerekli Belgeler</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Kimlik fotokopisi</li>
                <li>Gelir belgesi / Maaş bordrosu</li>
                <li>İkametgah belgesi</li>
                <li>Son 3 aylık banka hesap özeti</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <LoanRatesTable />
        <PopularLoans />

        {faqs && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Sıkça Sorulan Sorular</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
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

export default LoanPageLayout;