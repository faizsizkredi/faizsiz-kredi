import { Helmet } from "react-helmet";
import { getPageUrls } from "@/utils/canonicalUrls";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const KrediFaizHesaplama = () => {
  const { canonical, homepage } = getPageUrls('kredi-faiz-hesaplama');
  const { toast } = useToast();
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalPayment: number;
    totalInterest: number;
  } | null>(null);

  const calculateLoan = () => {
    if (!amount || !term || !interestRate) {
      toast({
        title: "Hata",
        description: "Lütfen tüm alanları doldurun.",
        variant: "destructive",
      });
      return;
    }

    const principal = parseFloat(amount);
    const monthlyRate = parseFloat(interestRate) / 12 / 100;
    const numberOfPayments = parseFloat(term);

    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;

    setResult({
      monthlyPayment: parseFloat(monthlyPayment.toFixed(2)),
      totalPayment: parseFloat(totalPayment.toFixed(2)),
      totalInterest: parseFloat(totalInterest.toFixed(2)),
    });

    toast({
      title: "Hesaplama Tamamlandı",
      description: "Kredi hesaplaması başarıyla yapıldı.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Kredi Faiz Hesaplama 2024 | Kredi Hesaplama Aracı</title>
        <meta 
          name="description" 
          content="2024 kredi faiz hesaplama aracı ile ihtiyaç kredisi, konut kredisi, taşıt kredisi faiz ve taksit tutarlarını ücretsiz hesaplayın." 
        />
        <meta 
          name="keywords" 
          content="kredi hesaplama, faiz hesaplama, kredi faiz oranları, kredi taksit hesaplama, kredi ödeme planı" 
        />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" href={homepage} hrefLang="tr" />
        <meta property="og:url" content={canonical} />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Calculator className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">Kredi Faiz Hesaplama</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Kredi Tutarı (TL)
                  </label>
                  <Input
                    type="number"
                    placeholder="Örn: 100000"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Vade (Ay)
                  </label>
                  <Select value={term} onValueChange={setTerm}>
                    <SelectTrigger>
                      <SelectValue placeholder="Vade seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      {[12, 24, 36, 48, 60].map((month) => (
                        <SelectItem key={month} value={month.toString()}>
                          {month} Ay
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Faiz Oranı (%)
                  </label>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="Örn: 1.99"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                  />
                </div>

                <Button 
                  className="w-full"
                  onClick={calculateLoan}
                >
                  Hesapla
                </Button>
              </div>
            </CardContent>
          </Card>

          {result && (
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Hesaplama Sonucu</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Aylık Taksit</span>
                    <span className="font-semibold">{result.monthlyPayment.toLocaleString('tr-TR')} TL</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Toplam Geri Ödeme</span>
                    <span className="font-semibold">{result.totalPayment.toLocaleString('tr-TR')} TL</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">Toplam Faiz</span>
                    <span className="font-semibold">{result.totalInterest.toLocaleString('tr-TR')} TL</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="mt-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Kredi Hesaplama Hakkında</h2>
              <p className="text-gray-600">
                Kredi hesaplama aracımız ile farklı kredi türleri için aylık taksit tutarını, toplam geri ödeme tutarını 
                ve toplam faiz tutarını kolayca hesaplayabilirsiniz. Hesaplama yaparken güncel faiz oranlarını 
                kullanmanız önemlidir. Kredi başvurusu yapmadan önce bankanızdan güncel faiz oranlarını öğrenmenizi öneririz.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default KrediFaizHesaplama;
