import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BankCalculatorProps {
  bankName: string;
}

const BankCalculator = ({ bankName }: BankCalculatorProps) => {
  const [amount, setAmount] = useState("100000");
  const [term, setTerm] = useState("12");

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex flex-wrap gap-4 items-end">
        <div className="flex-1">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
            Almak İstediğiniz Kredi Tutarı
          </label>
          <div className="relative">
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="pr-12"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">TL</span>
          </div>
        </div>
        <div className="w-48">
          <label htmlFor="term" className="block text-sm font-medium text-gray-700 mb-1">
            Vade
          </label>
          <Select value={term} onValueChange={setTerm}>
            <SelectTrigger id="term">
              <SelectValue placeholder="Vade seçin" />
            </SelectTrigger>
            <SelectContent>
              {[3, 6, 12, 24, 36, 48].map((months) => (
                <SelectItem key={months} value={months.toString()}>
                  {months} ay
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button className="bg-green-500 hover:bg-green-600">
          Kredi hesapla
          <span className="ml-2">→</span>
        </Button>
      </div>
    </div>
  );
};

export default BankCalculator;