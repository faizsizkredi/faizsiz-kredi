import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import BankCalculator from "@/components/bank/BankCalculator";
import BankProductCard from "@/components/bank/BankProductCard";
import BankRatesTable from "@/components/bank/BankRatesTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BankDetail = () => {
  const { bankSlug } = useParams();
  
  // This would normally come from an API
  const bankName = bankSlug?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  const products = [
    {
      title: "Hızlı İhtiyaç Kredisi",
      interestRate: "0.00",
      minTerm: "1",
      maxTerm: "6",
    },
    {
      title: "İlk Evim Konut Kredisi",
      interestRate: "2.89",
      minTerm: "25",
      maxTerm: "120",
    },
    // Add more products as needed
  ];

  const rates = [
    {
      name: bankName || "",
      productName: "Ticari Kredi",
      interestRate: "3.49",
      minTerm: "3",
      maxTerm: "36",
    },
    // Add more rates as needed
  ];

  return (
    <>
      <Helmet>
        <title>{`${bankName} Kredileri 2024 - Güncel Faiz Oranları ve Kampanyalar`}</title>
        <meta
          name="description"
          content={`${bankName} güncel kredi faiz oranları, kredi hesaplama ve başvuru. İhtiyaç kredisi, konut kredisi, taşıt kredisi ve KOBİ kredisi seçenekleri.`}
        />
        <link rel="canonical" href={`https://yourwebsite.com/bank/${bankSlug}`} />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">{bankName} Kredileri</h1>

        <Tabs defaultValue="consumer">
          <TabsList className="mb-8">
            <TabsTrigger value="consumer">İhtiyaç Kredisi</TabsTrigger>
            <TabsTrigger value="mortgage">Konut Kredisi</TabsTrigger>
            <TabsTrigger value="vehicle">Taşıt Kredisi</TabsTrigger>
            <TabsTrigger value="sme">KOBİ ve Esnaf Kredisi</TabsTrigger>
          </TabsList>

          <TabsContent value="consumer" className="space-y-8">
            <BankCalculator bankName={bankName || ""} />

            <h2 className="text-2xl font-bold mb-6">{bankName} Faiz Oranları</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {products.map((product, index) => (
                <BankProductCard
                  key={index}
                  {...product}
                  onClick={() => {}}
                />
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-6">{bankName} Kredi Faiz Oranları</h2>
            <BankRatesTable rates={rates} />

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">{bankName} Hakkında</h2>
              <p className="text-gray-600">
                {/* Add bank description here */}
              </p>
            </div>
          </TabsContent>

          {/* Add content for other tabs */}
        </Tabs>
      </div>
    </>
  );
};

export default BankDetail;
