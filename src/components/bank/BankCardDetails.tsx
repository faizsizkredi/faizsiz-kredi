import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calculator } from "lucide-react";

interface BankCardDetailsProps {
  amount: string;
  monthlyPayment?: string;
  interestRate?: string;
  term?: string;
}

const BankCardDetails = ({
  amount,
  monthlyPayment = "Hesaplanıyor...",
  interestRate = "0",
  term = "36"
}: BankCardDetailsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const calculateMonthlyPayment = () => {
    const loanAmount = parseFloat(amount.replace(/[^0-9.-]+/g, ""));
    const maxTerm = parseInt(term);
    
    if (isNaN(loanAmount) || isNaN(maxTerm)) return "Hesaplanamadı";
    
    return (loanAmount / maxTerm).toLocaleString('tr-TR', { 
      minimumFractionDigits: 2,
      maximumFractionDigits: 2 
    });
  };

  const calculateTotalCost = () => {
    const loanAmount = parseFloat(amount.replace(/[^0-9.-]+/g, ""));
    const rate = parseFloat(interestRate.replace(/[^0-9.-]+/g, ""));
    const maxTerm = parseInt(term);
    
    if (isNaN(loanAmount) || isNaN(rate) || isNaN(maxTerm)) return "Hesaplanamadı";
    
    const totalCost = loanAmount * (1 + (rate / 100) * (maxTerm / 12));
    
    return totalCost.toLocaleString('tr-TR', { 
      minimumFractionDigits: 2,
      maximumFractionDigits: 2 
    });
  };

  return (
    <Accordion type="single" collapsible className="mt-4">
      <AccordionItem value="details">
        <AccordionTrigger onClick={() => setIsExpanded(!isExpanded)}>
          Detaylar
        </AccordionTrigger>
        <AccordionContent>
          <div className="mt-6">
            <h3 className="font-medium mb-2 flex items-center gap-2">
              <Calculator className="w-4 h-4 text-indigo-500" />
              Örnek Ödeme Planı
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Toplam Geri Ödeme</p>
                  <p className="font-semibold">{amount}</p>
                </div>
                <div>
                  <p className="text-gray-600">Aylık Taksit</p>
                  <p className="font-semibold">{calculateMonthlyPayment()} TL</p>
                </div>
                <div>
                  <p className="text-gray-600">Toplam Maliyet</p>
                  <p className="font-semibold">{calculateTotalCost()} TL</p>
                </div>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default BankCardDetails;