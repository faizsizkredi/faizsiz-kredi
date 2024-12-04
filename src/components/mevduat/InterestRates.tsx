import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InterestRates = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Güncel Mevduat Faiz Oranları</h2>
      <Tabs defaultValue="tl" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="tl">TL Mevduat</TabsTrigger>
          <TabsTrigger value="usd">USD Mevduat</TabsTrigger>
          <TabsTrigger value="eur">EUR Mevduat</TabsTrigger>
        </TabsList>
        <TabsContent value="tl" className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="font-semibold">32 Gün</span>
              <span className="text-primary">%45,00</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="font-semibold">91 Gün</span>
              <span className="text-primary">%44,00</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="font-semibold">180 Gün</span>
              <span className="text-primary">%43,00</span>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="usd" className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="font-semibold">32 Gün</span>
              <span className="text-primary">%3,50</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="font-semibold">91 Gün</span>
              <span className="text-primary">%3,75</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="font-semibold">180 Gün</span>
              <span className="text-primary">%4,00</span>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="eur" className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="font-semibold">32 Gün</span>
              <span className="text-primary">%2,50</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="font-semibold">91 Gün</span>
              <span className="text-primary">%2,75</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="font-semibold">180 Gün</span>
              <span className="text-primary">%3,00</span>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default InterestRates;