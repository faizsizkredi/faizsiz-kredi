
import React from 'react';
import { HeartHandshake, DollarSign, Home, CreditCard, CheckCircle, AlertCircle } from 'lucide-react';
import { PageMeta } from "@/utils/seoUtils";
import { getCurrentMonthYear } from "@/utils/dateUtils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const EvHanimKredi = () => {
  const currentDate = getCurrentMonthYear();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <PageMeta
        title={`Ev Hanımlarına Kredi Veren Bankalar ${currentDate} | Ev Hanımı Kredi Başvurusu`}
        description={`Ev hanımlarına özel kredi veren bankalar, ev hanımlarına kredi kartı ve ihtiyaç kredisi başvurusu nasıl yapılır? Gelirsiz kredi almanın yolları.`}
        keywords="ev hanımlarına kredi, ev hanımı kredi, ev hanımı ihtiyaç kredisi, ev hanımlarına özel kredi, gelirsiz kredi, ev hanımı kredi başvurusu"
        pageSlug="ev-hanımlarina-kredi"
        pageType="loan"
      />
      
      <div className="container mx-auto py-12 px-4">
        <header className="mb-16 text-center">
          <div className="inline-block bg-pink-100 text-pink-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Ev Hanımları İçin Özel Fırsatlar
          </div>
          <h1 className="text-4xl font-bold mb-4">Ev Hanımlarına Kredi Veren Bankalar {currentDate}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Düzenli gelir belgeniz olmasa bile kredi ve kredi kartı alabileceğiniz banka seçenekleri ve başvuru şartları.
          </p>
        </header>
        
        <section className="mb-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-t-4 border-t-pink-500">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <HeartHandshake className="h-6 w-6 text-pink-500" />
                </div>
                <CardTitle>Eş Gelirli Kredi</CardTitle>
                <CardDescription>
                  Eşinizin gelirini kullanarak kredi başvurusu yapabilirsiniz
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Eşinizin düzenli geliri varsa, onun adına kredi başvurusu yapabilir ve ortak borçlu olabilirsiniz. Bu yöntem, ev hanımlarının kredi kullanmasının en yaygın yoludur.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Eşinizin maaş bordrosu veya gelir belgesi gereklidir</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Evlilik cüzdanı ile başvuru yapılabilir</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-pink-500">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-pink-500" />
                </div>
                <CardTitle>İpotekli Kredi</CardTitle>
                <CardDescription>
                  Ev, arsa gibi gayrimenkullerinizi teminat göstererek kredi alabilirsiniz
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Adınıza kayıtlı bir gayrimenkulünüz varsa, bunu teminat göstererek ihtiyaç kredisi kullanabilirsiniz. Bu durumda düzenli gelir şartı aranmayabilir.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Tapu ve gerekli evraklar ile başvuru yapılabilir</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Gayrimenkulün değerinin %50-70'i kadar kredi alınabilir</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-pink-500">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-pink-500" />
                </div>
                <CardTitle>Düşük Limitli Kredi Kartı</CardTitle>
                <CardDescription>
                  Gelir beyanı ile düşük limitli kredi kartları çıkartabilirsiniz
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Bazı bankalar, ev hanımlarına özel, gelir belgesi olmadan düşük limitli kredi kartları sunmaktadır. Bu kredi kartları, acil ihtiyaçlarınızı karşılamanıza yardımcı olabilir.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>1.000-5.000 TL arası limitli kredi kartları</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Sadece kimlik ve ikamet belgesi ile başvuru</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="mb-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-8">Ev Hanımlarına Kredi Veren Bankalar</h2>
          
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="col-span-1">
                <h3 className="text-xl font-semibold text-pink-600">Akbank</h3>
                <div className="flex items-center mt-2">
                  <DollarSign className="h-5 w-5 text-yellow-500" />
                  <span className="ml-1 text-sm font-medium text-gray-500">Limit: 5.000 TL - 20.000 TL</span>
                </div>
              </div>
              <div className="col-span-2">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Eşinizin maaş müşterisi olması durumunda ek kart imkanı</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>İpotekli bireysel kredi seçenekleri</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Düşük limitli ilk kredi kartı fırsatları</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Link to="/bank/akbank/20000-tl-faizsiz-kredi">
                    <Button className="bg-pink-600 hover:bg-pink-700">Başvur</Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="col-span-1">
                <h3 className="text-xl font-semibold text-pink-600">QNB Finansbank</h3>
                <div className="flex items-center mt-2">
                  <DollarSign className="h-5 w-5 text-yellow-500" />
                  <span className="ml-1 text-sm font-medium text-gray-500">Limit: 2.000 TL - 15.000 TL</span>
                </div>
              </div>
              <div className="col-span-2">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ev hanımlarına özel kredi kartı kampanyaları</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Eş gelir belgesiz ortak hesap açılabilir</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Teminat karşılığı kredi imkanları</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Link to="/bank/qnb/15000-tl-faizsiz-kredi">
                    <Button className="bg-pink-600 hover:bg-pink-700">Başvur</Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="col-span-1">
                <h3 className="text-xl font-semibold text-pink-600">Denizbank</h3>
                <div className="flex items-center mt-2">
                  <DollarSign className="h-5 w-5 text-yellow-500" />
                  <span className="ml-1 text-sm font-medium text-gray-500">Limit: 1.000 TL - 10.000 TL</span>
                </div>
              </div>
              <div className="col-span-2">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Gelir belgesiz mini kredi kartı kampanyası</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Maaş müşterisi eşinizin yanında ek kart imkanı</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ortak borçluluk ile ev hanımlarına özel kredi fırsatları</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Link to="/bank/denizbank/10000-tl-faizsiz-kredi">
                    <Button className="bg-pink-600 hover:bg-pink-700">Başvur</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Önemli Bilgiler</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-l-green-500">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                Avantajlar
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Bazı bankalar, gelir belgesiz mini kredi kartları sunmaktadır</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Eşinizin geliriyle ortak borçlu olarak kredi kullanabilirsiniz</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>İpotekli kredi seçenekleri ile yüksek tutarlı krediler kullanabilirsiniz</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Bazı bankalar, özel günlerde (Anneler Günü vb.) ev hanımlarına kampanyalar düzenlemektedir</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-l-red-500">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <AlertCircle className="h-6 w-6 text-red-500 mr-2" />
                Dikkat Edilmesi Gerekenler
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Kredi limitleri düzenli geliri olan kişilere göre daha düşüktür</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>İpotekli kredilerde, ödenememe durumunda gayrimenkulünüz risk altındadır</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Eş borçluluğunda, eşinizin kredi notunun etkilenebileceğini unutmayın</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Gelir belgesiz kredi veren bazı kurumlar yüksek faiz ve ücret talep edebilir, dikkatli olun</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Sıkça Sorulan Sorular</h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Ev hanımları nasıl kredi çekebilir?</h3>
              <p className="text-gray-700">
                Ev hanımları eşlerinin gelir belgesi ile ortak borçlu olarak, gayrimenkul ipoteği karşılığında veya bazı özel banka kampanyaları kapsamında belirli kredi türlerini kullanabilirler.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Ev hanımları gelir belgesiz kredi çekebilir mi?</h3>
              <p className="text-gray-700">
                Tamamen gelir belgesiz kredi çekmek zordur, ancak düşük limitli kredi kartları, eş geliriyle ortak kredi veya ipotek karşılığı kredi seçenekleri mevcuttur.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hangi bankalar ev hanımlarına kredi veriyor?</h3>
              <p className="text-gray-700">
                QNB Finansbank, Akbank, Denizbank, Garanti BBVA ve İş Bankası gibi bankalar, belirli şartlar altında ev hanımlarına yönelik kredi ve kredi kartı fırsatları sunmaktadır.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Kredi notum düşükse ev hanımı olarak kredi çekebilir miyim?</h3>
              <p className="text-gray-700">
                Kredi notunuz düşükse, ipotekli kredi veya yüksek kredi notuna sahip bir kefil ile kredi başvurusu yapabilirsiniz. Ancak şartlar her bankada değişiklik gösterebilir.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EvHanimKredi;
