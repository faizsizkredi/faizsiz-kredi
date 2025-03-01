
import { ReactNode } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import LoanCalculator from "./LoanCalculator";
import RecommendedLoans from "./RecommendedLoans";
import PopularLoans from "./PopularLoans";
import LoanRatesTable from "./LoanRatesTable";
import { LucideIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageMeta } from "@/utils/seoUtils";

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
  const currentYear = new Date().getFullYear();
  const pageTitle = `${title} ${currentYear} | En Uygun ${title} Başvurusu`;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <PageMeta
        title={pageTitle}
        description={description}
        keywords={keywords}
        pageSlug={`${activeTab}-kredisi`}
        pageType="loan"
      />

      <main className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Icon className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">{title}</h1>
          </div>
          <p className="text-gray-600 max-w-3xl">{description}</p>
        </header>

        <section className="grid gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <Tabs defaultValue={activeTab}>
              <TabsContent value={activeTab}>
                <LoanCalculator />
              </TabsContent>
            </Tabs>
          </div>

          <RecommendedLoans />

          <LoanRatesTable />

          <PopularLoans />

          {faqs && (
            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-6">Sıkça Sorulan Sorular</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          )}

          {additionalContent}
        </section>
      </main>
    </div>
  );
};

export default LoanPageLayout;
