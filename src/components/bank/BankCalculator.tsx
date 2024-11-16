import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const BankCalculator = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <div className="flex gap-4 items-end">
        <div className="flex-1">
          <label className="text-sm text-gray-600 mb-2 block">
            Almak İstediğiniz Kredi Tutarı
          </label>
          <div className="flex">
            <Input type="number" defaultValue="100000" className="rounded-r-none" />
            <span className="bg-gray-50 px-4 flex items-center border border-l-0 rounded-r-md">
              TL
            </span>
          </div>
        </div>
        <div className="w-48">
          <label className="text-sm text-gray-600 mb-2 block">Vade</label>
          <Select defaultValue="12">
            <SelectTrigger>
              <SelectValue placeholder="Vade seçin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="12">12 ay</SelectItem>
              <SelectItem value="24">24 ay</SelectItem>
              <SelectItem value="36">36 ay</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="bg-green-500 hover:bg-green-600">
          Kredi hesapla
        </Button>
      </div>
    </div>
  );
};

export default BankCalculator;