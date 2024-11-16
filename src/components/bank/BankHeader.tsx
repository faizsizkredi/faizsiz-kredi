import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface BankHeaderProps {
  bankName: string;
}

const BankHeader = ({ bankName }: BankHeaderProps) => {
  return (
    <div className="bg-red-600 text-white p-6 rounded-t-lg">
      <h1 className="text-2xl font-bold mb-6">{bankName} Kredileri</h1>
      <Tabs defaultValue="ihtiyac" className="w-full">
        <TabsList className="grid grid-cols-4 gap-2">
          <TabsTrigger value="ihtiyac" className="bg-white/10 hover:bg-white/20">
            İhtiyaç Kredisi
          </TabsTrigger>
          <TabsTrigger value="konut" className="bg-white/10 hover:bg-white/20">
            Konut Kredisi
          </TabsTrigger>
          <TabsTrigger value="tasit" className="bg-white/10 hover:bg-white/20">
            Taşıt Kredisi
          </TabsTrigger>
          <TabsTrigger value="kobi" className="bg-white/10 hover:bg-white/20">
            KOBİ ve Esnaf Kredisi
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default BankHeader;