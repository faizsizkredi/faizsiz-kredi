import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoanCalculator from "@/components/loan/LoanCalculator";
import RecommendedLoans from "@/components/loan/RecommendedLoans";
import PopularLoans from "@/components/loan/PopularLoans";
import LoanRatesTable from "@/components/loan/LoanRatesTable";
import { Car } from "lucide-react";

const TasitKredisi = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Taşıt Kredisi 2024 | En Uygun Taşıt Kredisi Başvurusu</title>
        <meta 
          name="description" 
          content="2024 yılı güncel taşıt kredisi kampanyaları, faiz oranları ve başvuru koşulları. En uygun taşıt kredisi veren bankalar." 
        />
        <meta 
          name="keywords" 
          content="taşıt kredisi, araba kredisi, araç kredisi, kredi hesaplama, kredi başvurusu" 
        />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Car className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">Taşıt Kredisi</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <Tabs defaultValue="tasit">
            <TabsList className="mb-4">
              <TabsTrigger value="ihtiyac">İhtiyaç</TabsTrigger>
              <TabsTrigger value="konut">Konut</TabsTrigger>
              <TabsTrigger value="tasit">Taşıt</TabsTrigger>
              <TabsTrigger value="kobi">Kobi</TabsTrigger>
            </TabsList>
            <TabsContent value="tasit">
              <LoanCalculator />
            </TabsContent>
          </Tabs>
        </div>

        <RecommendedLoans />
        <LoanRatesTable />
        <PopularLoans />
      </div>
    </div>
  );
};

export default TasitKredisi;