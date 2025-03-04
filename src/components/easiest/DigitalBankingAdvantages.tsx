
import React from 'react';
import { Clock, CreditCard, Lock, Smartphone } from "lucide-react";

const DigitalBankingAdvantages = () => {
  return (
    <div className="my-12 bg-gray-50 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-8 text-center">Dijital Bankacılık İle Kredi Avantajları</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="mx-auto bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
            <Clock className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="font-semibold text-lg mb-2">7/24 Başvuru</h3>
          <p className="text-gray-600">Mesai saatlerini beklemeden istediğiniz zaman başvuru yapabilirsiniz.</p>
        </div>
        
        <div className="text-center">
          <div className="mx-auto bg-green-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
            <Smartphone className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Mobil Onay</h3>
          <p className="text-gray-600">Kredi başvurunuzu mobil uygulama üzerinden kolayca onaylayabilirsiniz.</p>
        </div>
        
        <div className="text-center">
          <div className="mx-auto bg-purple-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
            <CreditCard className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Anında Kullanım</h3>
          <p className="text-gray-600">Onaylanan kredi tutarınızı anında kullanmaya başlayabilirsiniz.</p>
        </div>
        
        <div className="text-center">
          <div className="mx-auto bg-red-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
            <Lock className="h-8 w-8 text-red-600" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Güvenli İşlem</h3>
          <p className="text-gray-600">Gelişmiş güvenlik protokolleri ile kredi başvurunuz güvende.</p>
        </div>
      </div>
    </div>
  );
};

export default DigitalBankingAdvantages;
