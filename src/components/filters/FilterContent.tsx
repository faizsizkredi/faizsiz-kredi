import { Bank } from "@/types/bank";
import BankCard from "../BankCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet";
import RecentBlogs from "../blog/RecentBlogs";

interface FilterContentProps {
  title: string;
  description: string;
  banks: Bank[];
  currentTab: string;
  onSortChange: (value: string) => void;
  faqItems: Array<{
    question: string;
    answer: string;
  }>;
}

const FilterContent = ({
  title,
  description,
  banks,
  currentTab,
  onSortChange,
  faqItems
}: FilterContentProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 mb-8">
          {description}
        </p>

        <div className="space-y-4 mb-12">
          {banks.map((bank, index) => (
            <BankCard key={index} {...bank} />
          ))}
        </div>

        <div className="mt-16 mb-8">
          <h2 className="text-2xl font-bold mb-6">Sıkça Sorulan Sorular</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <RecentBlogs />
      </div>
    </div>
  );
};

export default FilterContent;