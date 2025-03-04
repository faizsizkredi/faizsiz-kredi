
import React from 'react';
import { AlertCircle } from "lucide-react";

const CreditApplicationTips = () => {
  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-6">Kolay Kredi Başvurusu İçin Önemli İpuçları</h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
        <div className="flex items-center mb-3">
          <AlertCircle className="h-6 w-6 text-blue-500 mr-2" />
          <h3 className="font-semibold text-lg text-blue-700">Başvuru Öncesi Hazırlık</h3>
        </div>
        <p className="text-blue-800">
          Kredi başvurusuna hazırlanırken, kredi notunuzu öğrenin, borç-gelir oranınızı hesaplayın ve kimlik bilgilerinizin güncel olduğundan emin olun. Bu hazırlıklar, başvurunuzun daha hızlı ve sorunsuz ilerlemesini sağlayacaktır.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {tips.map((tip, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
            <p className="text-gray-700">{tip.description}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-green-50 p-6 rounded-lg">
        <h3 className="font-semibold text-lg text-green-700 mb-3">Başvurunuzu Güçlendirin</h3>
        <ul className="list-disc pl-5 space-y-2">
          {strengthenTips.map((tip, index) => (
            <li key={index} className="text-green-800">{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const tips = [
  {
    title: "Kredi Notunuzu Bilin",
    description: "Başvuru öncesi güncel kredi notunuzu öğrenin. 1400 üzerindeki kredi notu, kolay kredi onayı almanızı sağlayabilir."
  },
  {
    title: "Banka Müşterisi Olun",
    description: "Hesabınızın bulunduğu bankadan kredi talep etmek, onay sürecini hızlandırabilir ve daha uygun faiz oranları almanızı sağlayabilir."
  },
  {
    title: "Kampanyaları Takip Edin",
    description: "Bankaların yeni müşteriler için sunduğu özel kampanyaları ve fırsatları takip edin. Bu kampanyalar, daha kolay kredi onayı ve avantajlı faiz oranları sunabilir."
  },
  {
    title: "Başvuru Zamanlaması",
    description: "Bankalar genellikle ayın ilk haftasında daha yüksek onay oranlarına sahiptir. Ay sonundaki yoğunluktan kaçınmak için başvurunuzu ayın başında yapın."
  }
];

const strengthenTips = [
  "Düzenli gelir akışınızı gösterecek banka hesap hareketlerinizi hazır bulundurun",
  "Eğer kredi notunuz düşükse, bir kefil veya ek teminat önerebilirsiniz",
  "Aynı anda birden fazla bankaya başvurmaktan kaçının, bu kredi notunuzu düşürebilir",
  "Kredi kartı borçlarınızı limit boşluğu bırakacak şekilde ödeyin (limitinizin %30'undan azını kullanın)",
  "Varsa önceki kredilerinizi düzenli ödediğinizi gösteren belgeleri hazırlayın"
];

export default CreditApplicationTips;
