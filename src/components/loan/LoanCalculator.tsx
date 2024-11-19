import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const LoanCalculator = () => {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [totalPayment, setTotalPayment] = useState<number | null>(null);
  const { toast } = useToast();

  const calculateLoan = () => {
    const principal = parseFloat(amount);
    const monthlyRate = parseFloat(rate) / 100 / 12;
    const numberOfPayments = parseInt(term);

    if (!principal || !monthlyRate || !numberOfPayments) {
      toast({
        title: "Hata",
        description: "Lütfen tüm alanları doldurun.",
        variant: "destructive"
      });
      return;
    }

    const monthly = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                   (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    setMonthlyPayment(monthly);
    setTotalPayment(monthly * numberOfPayments);

    toast({
      title: "Hesaplama Tamamlandı",
      description: "Kredi hesaplaması başarıyla yapıldı."
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Kredi Tutarı (TL)</label>
          <Input 
            type="number" 
            placeholder="Örn: 100000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Vade (Ay)</label>
          <Select value={term} onValueChange={setTerm}>
            <SelectTrigger>
              <SelectValue placeholder="Vade seçin" />
            </SelectTrigger>
            <SelectContent>
              {[12, 24, 36, 48, 60, 120].map((months) => (
                <SelectItem key={months} value={months.toString()}>
                  {months} Ay
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Faiz Oranı (%)</label>
          <Input 
            type="number" 
            step="0.01"
            placeholder="Örn: 1.99"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>

        <div className="flex items-end">
          <Button 
            onClick={calculateLoan}
            className="w-full bg-primary hover:bg-primary/90"
          >
            <Calculator className="w-4 h-4 mr-2" />
            Hesapla
          </Button>
        </div>
      </div>

      {monthlyPayment && totalPayment && (
        <Card className="mt-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Aylık Taksit</h3>
                <p className="text-2xl font-bold text-primary">
                  {monthlyPayment.toLocaleString('tr-TR', { 
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2 
                  })} TL
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Toplam Geri Ödeme</h3>
                <p className="text-2xl font-bold text-primary">
                  {totalPayment.toLocaleString('tr-TR', { 
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2 
                  })} TL
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <p className="text-sm text-gray-500 text-center">
        * Hesaplamalar yaklaşık değerler içerir. Kesin kredi tutarı ve taksit bilgileri için bankanızla görüşün.
      </p>
    </div>
  );
};

export default LoanCalculator;