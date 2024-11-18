import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const LoanCalculator = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input 
            type="number" 
            placeholder="Kredi Tutarı" 
            className="w-full"
          />
        </div>
        <div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Kredi Vadesi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="12">12 Ay</SelectItem>
              <SelectItem value="24">24 Ay</SelectItem>
              <SelectItem value="36">36 Ay</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button className="w-full bg-orange-500 hover:bg-orange-600">
        Hesapla
      </Button>
      <p className="text-sm text-gray-600 text-center">
        Avantajlı faiz oranları ile ihtiyaç kredisi hesaplamak ve bankalara ücretsiz kredisi başvurusunda bulunmak Hangikredi.com'da güvenli ve ücretsiz!
      </p>
    </div>
  );
};

export default LoanCalculator;