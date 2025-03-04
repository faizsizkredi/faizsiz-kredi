
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Percent, Clock, Shield, CreditCard, Heart, ClipboardCheck } from 'lucide-react';

const RetiredBenefits = () => {
  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-6">Emekliye Özel Kredi Avantajları</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <Percent className="w-8 h-8 text-blue-600 mb-2" />
            <CardTitle>Düşük Faiz Oranları</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Emeklilere özel düşük faiz oranları ile daha uygun maliyetli kredi imkanı sunulmaktadır.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <Clock className="w-8 h-8 text-green-600 mb-2" />
            <CardTitle>Uzun Vade Seçenekleri</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              36 aya varan uzun vade seçenekleri ile aylık taksit tutarlarınızı düşürebilirsiniz.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <Shield className="w-8 h-8 text-purple-600 mb-2" />
            <CardTitle>Sigorta Avantajları</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Emeklilere özel indirimli hayat sigortası ve sağlık sigortası imkanları sunulmaktadır.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CreditCard className="w-8 h-8 text-red-600 mb-2" />
            <CardTitle>Maaş Promosyonları</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Emekli maaşınızı ilgili bankaya taşıdığınızda özel promosyon ödemeleri alabilirsiniz.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <Heart className="w-8 h-8 text-pink-600 mb-2" />
            <CardTitle>Sağlık Hizmetleri</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Bazı bankalar emekli müşterilerine özel check-up, hastane indirimleri ve sağlık danışmanlığı sunmaktadır.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <ClipboardCheck className="w-8 h-8 text-teal-600 mb-2" />
            <CardTitle>Kolay Başvuru</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Emekliler için sadeleştirilmiş başvuru süreçleri ve öncelikli değerlendirme imkanı bulunmaktadır.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RetiredBenefits;
