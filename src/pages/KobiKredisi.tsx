import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoanCalculator from "@/components/loan/LoanCalculator";
import RecommendedLoans from "@/components/loan/RecommendedLoans";
import PopularLoans from "@/components/loan/PopularLoans";
import LoanRatesTable from "@/components/loan/LoanRatesTable";
import { Building2 } from "lucide-react";

const KobiKredisi = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>KOBİ Kredisi 2024 | En Uygun KOBİ Kredisi Başvurusu</title>
        <meta 
          name="description" 
          content="2024 yılı güncel KOBİ kredisi kampanyaları, faiz oranları ve başvuru koşulları. En uygun KOBİ kredisi veren bankalar." 
        />
        <meta 
          name="keywords" 
          content="KOBİ kredisi, işletme kredisi, esnaf kredisi, kredi hesaplama, kredi başvurusu" 
        />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Building2 className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">KOBİ Kredisi</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <Tabs defaultValue="kobi">
            <TabsList className="mb-4">
              <TabsTrigger value="ihtiyac">İhtiyaç</TabsTrigger>
              <TabsTrigger value="konut">Konut</TabsTrigger>
              <TabsTrigger value="tasit">Taşıt</TabsTrigger>
              <TabsTrigger value="kobi">Kobi</TabsTrigger>
            </TabsList>
            <TabsContent value="kobi">
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

export default KobiKredisi;