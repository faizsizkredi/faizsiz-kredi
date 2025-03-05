
import React from 'react';
import { Building, Check, Zap, Shield } from 'lucide-react';
import { PageMeta } from "@/utils/seoUtils";
import { getCurrentMonthYear } from "@/utils/dateUtils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const KefilsizKredi = () => {
  const currentDate = getCurrentMonthYear();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <PageMeta
        title={`Kefilsiz Kredi Veren Bankalar ${currentDate} | En Kolay Kefilsiz Kredi`}
        description={`${currentDate} itibariyle kefil olmadan kredi veren bankalar. Kefilsiz ihtiyaç kredisi, kefilsiz konut kredisi ve kefilsiz taşıt kredisi kampanyaları ve başvuru şartları.`}
        keywords="kefilsiz kredi, kefil gerektirmeyen kredi, kefil olmadan kredi, kefilsiz ihtiyaç kredisi, kefilsiz konut kredisi"
        pageSlug="kefilsiz-kredi"
        pageType="loan"
      />
      
      <div className="container mx-auto py-12 px-4">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Kefilsiz Kredi Veren Bankalar {currentDate}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kefil gerektirmeyen krediler ile ihtiyaçlarınızı hızlıca karşılayın. Bankalar tarafından sunulan kefilsiz kredi seçenekleri ile tanışın.
          </p>
        </header>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Kefil Olmadan Kredi Nasıl Alınır?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Güçlü Kredi Notu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  700 ve üzeri kredi notuna sahip kişiler, çoğu bankadan kefil olmadan kredi kullanabilir. Kredi notunuz ne kadar yüksekse kefilsiz kredi çekme ihtimaliniz o kadar artar.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Düzenli Gelir</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Düzenli ve belgelenebilir bir gelire sahip olmak, kefil olmadan kredi almak için en önemli şartlardan biridir. Bankalar, geri ödeme gücünüzü değerlendirirken gelir durumunuza öncelik verir.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">İpotekli Kredi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Eğer bir gayrimenkulü teminat olarak gösterebilirseniz, kefil olmadan yüksek limitli krediler kullanabilirsiniz. İpotek karşılığı krediler, kefilsiz kredi almanın en güvenilir yollarından biridir.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-8">Kefilsiz Kredi Veren Bankalar</h2>
          
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold text-primary mb-2">Akbank</h3>
              <p className="mb-3">Akbank, yüksek kredi notuna sahip müşterilerine kefilsiz ihtiyaç kredisi sunmaktadır.</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>50.000 TL'ye kadar kefilsiz kredi imkanı</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>36 aya varan vade seçenekleri</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Dijital kanallardan başvurularda özel faiz avantajı</span>
                </li>
              </ul>
              <div className="mt-4">
                <Link to="/bank/akbank/50000-tl-faizsiz-kredi">
                  <Button>Akbank Kefilsiz Kredi</Button>
                </Link>
              </div>
            </div>
            
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold text-primary mb-2">QNB Finansbank</h3>
              <p className="mb-3">QNB Finansbank, maaş müşterilerine özel kefilsiz kredi seçenekleri sunmaktadır.</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>120.000 TL'ye kadar kefilsiz kredi imkanı</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>48 aya varan vade seçenekleri</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Maaş müşterilerine özel uygun faiz oranları</span>
                </li>
              </ul>
              <div className="mt-4">
                <Link to="/bank/qnb/50000-tl-faizsiz-kredi">
                  <Button>QNB Finansbank Kefilsiz Kredi</Button>
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Denizbank</h3>
              <p className="mb-3">Denizbank, kefilsiz ihtiyaç kredisi ve kefilsiz kredi kartı kullanımı için çeşitli fırsatlar sunmaktadır.</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>75.000 TL'ye kadar kefilsiz kredi imkanı</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>60 aya varan vade seçenekleri</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>İlk 3 ay ödemesiz dönem imkanı</span>
                </li>
              </ul>
              <div className="mt-4">
                <Link to="/bank/denizbank/50000-tl-faizsiz-kredi">
                  <Button>Denizbank Kefilsiz Kredi</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Sıkça Sorulan Sorular</h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Kefilsiz kredi çekmek için kredi notum kaç olmalı?</h3>
              <p className="text-gray-700">
                Kefilsiz kredi çekmek için genellikle 700 ve üzeri bir kredi notuna sahip olmanız gerekmektedir. Kredi notunuz ne kadar yüksekse, kefilsiz kredi çekme ihtimaliniz o kadar artar.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hangi durumlarda kefil istenmez?</h3>
              <p className="text-gray-700">
                Yüksek kredi notu, düzenli ve yeterli gelir, uzun süreli iş geçmişi, kredi geçmişinin temiz olması ve teminat gösterilmesi durumlarında bankalar genellikle kefil talep etmezler.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Kefilsiz kredi başvurusu nasıl yapılır?</h3>
              <p className="text-gray-700">
                Kefilsiz kredi başvurusu bankaların internet şubesi, mobil uygulaması, şubeleri veya çağrı merkezleri üzerinden yapılabilir. Başvuru için kimlik belgeniz ve gelir belgeniz yeterlidir.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Emekliler kefilsiz kredi kullanabilir mi?</h3>
              <p className="text-gray-700">
                Evet, emekliler düzenli maaş gelirlerini belgelendirerek kefilsiz kredi kullanabilirler. Emeklilere özel kredi kampanyalarını takip etmeniz avantajlı olacaktır.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KefilsizKredi;
