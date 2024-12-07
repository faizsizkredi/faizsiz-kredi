import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calculator, Check, AlertCircle } from "lucide-react";

interface BankCardDetailsProps {
  amount: string;
  monthlyPayment?: string;
  advantages?: string[];
  requirements?: string[];
}

const BankCardDetails = ({
  amount,
  monthlyPayment = "Hesaplanıyor...",
  advantages = [],
  requirements = []
}: BankCardDetailsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Accordion type="single" collapsible className="mt-4">
      <AccordionItem value="details">
        <AccordionTrigger onClick={() => setIsExpanded(!isExpanded)}>
          Detaylar
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-6">
            <div>
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
                    <p className="font-semibold">{monthlyPayment}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Toplam Maliyet</p>
                    <p className="font-semibold">Hesaplanıyor...</p>
                  </div>
                </div>
              </div>
            </div>

            {advantages && advantages.length > 0 && (
              <div>
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Avantajlar
                </h3>
                <ul className="space-y-2">
                  {advantages.map((advantage, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500" />
                      {advantage}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {requirements && requirements.length > 0 && (
              <div>
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-500" />
                  Başvuru Şartları
                </h3>
                <ul className="space-y-2">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <AlertCircle className="w-4 h-4 text-orange-500" />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default BankCardDetails;