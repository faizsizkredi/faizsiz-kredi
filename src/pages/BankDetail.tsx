import { useParams } from "react-router-dom";
import { Building, Building2, Landmark, CircleDollarSign, Wallet, BadgePercent, CreditCard, PiggyBank, Banknote, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const BANK_ICONS = {
  "Ziraat Bankası": <Building className="w-8 h-8 text-green-600" />,
  "Vakıfbank": <Building2 className="w-8 h-8 text-green-700" />,
  "Halkbank": <Landmark className="w-8 h-8 text-blue-600" />,
  "İş Bankası": <CircleDollarSign className="w-8 h-8 text-blue-700" />,
  "Garanti BBVA": <Wallet className="w-8 h-8 text-teal-600" />,
  "Yapı Kredi": <BadgePercent className="w-8 h-8 text-blue-800" />,
  "QNB Finansbank": <CreditCard className="w-8 h-8 text-purple-600" />,
  "Denizbank": <PiggyBank className="w-8 h-8 text-cyan-600" />,
  "TEB": <Banknote className="w-8 h-8 text-orange-600" />,
  "Akbank": <DollarSign className="w-8 h-8 text-red-600" />,
};

const BANK_DATA = {
  "ziraat-bankasi": {
    name: "Ziraat Bankası",
    description: "Türkiye'nin ilk ve en köklü bankası olan Ziraat Bankası, 1863 yılından bu yana finansal hizmetler sunmaktadır.",
    features: [
      "Faizsiz kredi imkanları",
      "Düşük masraflı işlemler",
      "Yaygın şube ağı",
      "7/24 müşteri hizmetleri",
      "Mobil bankacılık"
    ],
    requirements: [
      "T.C. Kimlik Numarası",
      "Gelir belgesi",
      "İkametgah belgesi",
      "Son 3 aylık maaş bordrosu"
    ]
  },
  "vakifbank": {
    name: "Vakıfbank",
    description: "Vakıfbank, güçlü finansal yapısı ve yenilikçi hizmetleriyle Türkiye'nin önde gelen bankalarından biridir.",
    features: [
      "Özel kredi paketleri",
      "Dijital bankacılık çözümleri",
      "Geniş ATM ağı",
      "Uygun faiz oranları",
      "Hızlı kredi onayı"
    ],
    requirements: [
      "Kimlik fotokopisi",
      "Maaş belgesi",
      "İkametgah",
      "Çalışma belgesi"
    ]
  },
  // ... Add more banks as needed
};

const BankDetail = () => {
  const { bankSlug } = useParams();
  const { toast } = useToast();
  
  const bankData = BANK_DATA[bankSlug as keyof typeof BANK_DATA];

  const { data: interestRates, isLoading } = useQuery({
    queryKey: ['interestRates', bankData?.name],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('bank_interest_rates')
        .select('*')
        .eq('bank_name', bankData?.name)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!bankData?.name
  });
  
  if (!bankData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Banka bulunamadı</h1>
      </div>
    );
  }

  const handleApply = () => {
    toast({
      title: "Başvuru Başarılı",
      description: "Başvurunuz alınmıştır. En kısa sürede size dönüş yapılacaktır.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-4 mb-6">
          {BANK_ICONS[bankData.name as keyof typeof BANK_ICONS]}
          <h1 className="text-3xl font-bold">{bankData.name}</h1>
        </div>

        <div className="prose max-w-none mb-8">
          <p className="text-gray-600">{bankData.description}</p>
          {interestRates && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800">Güncel Faiz Oranları</h3>
              <p className="text-blue-700">Faiz Oranı: {interestRates.interest_rate}</p>
              {interestRates.loan_type && (
                <p className="text-blue-700">Kredi Türü: {interestRates.loan_type}</p>
              )}
              <p className="text-sm text-blue-600">
                Son Güncelleme: {new Date(interestRates.last_updated).toLocaleString('tr-TR')}
              </p>
            </div>
          )}
          {isLoading && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600">Faiz oranları yükleniyor...</p>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Özellikler</h2>
            <ul className="space-y-2">
              {bankData.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Başvuru Gereksinimleri</h2>
            <ul className="space-y-2">
              {bankData.requirements.map((requirement, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-blue-500">•</span>
                  {requirement}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Button onClick={handleApply} className="w-full md:w-auto">
          Hemen Başvur
        </Button>
      </div>
    </div>
  );
};

export default BankDetail;