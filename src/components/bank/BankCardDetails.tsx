
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calculator, PieChart, TrendingDown, AlertCircle, CheckCircle2 } from "lucide-react";

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
    const rate = parseFloat(interestRate.replace(/[^0-9.-]+/g, ""));
    const months = parseInt(term.replace(/[^0-9]/g, ""));
    
    if (isNaN(loanAmount) || isNaN(months)) return "Hesaplanamadı";
    
    if (rate === 0) {
      return (loanAmount / months).toLocaleString('tr-TR', { 
        minimumFractionDigits: 2,
        maximumFractionDigits: 2 
      });
    }
    
    const monthlyRate = rate / 100 / 12;
    const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                   (Math.pow(1 + monthlyRate, months) - 1);
    
    return payment.toLocaleString('tr-TR', { 
      minimumFractionDigits: 2,
      maximumFractionDigits: 2 
    });
  };

  const calculateTotalCost = () => {
    const loanAmount = parseFloat(amount.replace(/[^0-9.-]+/g, ""));
    const rate = parseFloat(interestRate.replace(/[^0-9.-]+/g, ""));
    const months = parseInt(term.replace(/[^0-9]/g, ""));
    
    if (isNaN(loanAmount) || isNaN(rate) || isNaN(months)) return "Hesaplanamadı";
    
    if (rate === 0) {
      return loanAmount.toLocaleString('tr-TR', { 
        minimumFractionDigits: 2,
        maximumFractionDigits: 2 
      });
    }
    
    const monthlyRate = rate / 100 / 12;
    const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                   (Math.pow(1 + monthlyRate, months) - 1);
    const totalCost = payment * months;
    
    return totalCost.toLocaleString('tr-TR', { 
      minimumFractionDigits: 2,
      maximumFractionDigits: 2 
    });
  };

  const calculateInterestSavings = () => {
    const rate = parseFloat(interestRate.replace(/[^0-9.-]+/g, ""));
    if (rate === 0) {
      return "Faizsiz kredi ile %100 tasarruf!";
    }
    const averageRate = 3.5; // Average market rate
    const savingsPercent = ((averageRate - rate) / averageRate * 100).toFixed(1);
    return `Piyasa ortalamasına göre %${savingsPercent} tasarruf`;
  };

  return (
    <Accordion type="single" collapsible className="mt-6">
      <AccordionItem value="details" className="border border-gray-200 rounded-2xl overflow-hidden">
        <AccordionTrigger 
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-6 py-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Calculator className="w-5 h-5 text-blue-600" />
            </div>
            <span className="font-semibold text-lg">Detaylı Kredi Hesaplaması</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-6">
          <div className="space-y-6">
            {/* Enhanced Payment Plan Section */}
            <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6 rounded-2xl border border-blue-100">
              <h4 className="font-semibold mb-4 flex items-center gap-2 text-lg">
                <PieChart className="w-5 h-5 text-blue-600" />
                Ödeme Planı Detayları
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Calculator className="w-4 h-4 text-green-600" />
                    <p className="text-sm text-gray-600 font-medium">Aylık Taksit</p>
                  </div>
                  <p className="text-2xl font-bold text-green-700">{calculateMonthlyPayment()} TL</p>
                  <p className="text-xs text-gray-500 mt-1">Net aylık ödeme</p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingDown className="w-4 h-4 text-blue-600" />
                    <p className="text-sm text-gray-600 font-medium">Toplam Geri Ödeme</p>
                  </div>
                  <p className="text-2xl font-bold text-blue-700">{calculateTotalCost()} TL</p>
                  <p className="text-xs text-gray-500 mt-1">Vade sonunda ödenecek</p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <p className="text-sm text-gray-600 font-medium">Tasarruf</p>
                  </div>
                  <p className="text-sm font-bold text-purple-700">{calculateInterestSavings()}</p>
                  <p className="text-xs text-gray-500 mt-1">Piyasa karşılaştırması</p>
                </div>
              </div>
            </div>

            {/* Enhanced Advantages Section */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
              <h4 className="font-semibold mb-4 flex items-center gap-2 text-lg">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Kredi Avantajları
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Anında Onay</p>
                    <p className="text-sm text-gray-600">5 dakika içinde sonuç</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Masrafsız Kullandırım</p>
                    <p className="text-sm text-gray-600">Dosya masrafı yok</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Erken Ödeme İndirimi</p>
                    <p className="text-sm text-gray-600">Vade bitiminden önce ödeyebilirsiniz</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Dijital Süreç</p>
                    <p className="text-sm text-gray-600">Şubeye gitmeye gerek yok</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Information */}
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-amber-800 mb-1">Önemli Bilgiler</p>
                  <p className="text-sm text-amber-700">
                    Kredi faiz oranları ve koşulları bankanın değerlendirmesi sonucunda belirlenir. 
                    Gösterilen tutarlar tahmini olup, nihai koşullar başvuru sonrası netleşir.
                  </p>
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
