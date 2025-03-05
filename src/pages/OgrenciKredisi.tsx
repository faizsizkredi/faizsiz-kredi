
import React from 'react';
import { GraduationCap, CreditCard, BookOpen, PiggyBank, School, FileText, Calculator, Check } from 'lucide-react';
import { PageMeta } from "@/utils/seoUtils";
import { getCurrentMonthYear } from "@/utils/dateUtils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const OgrenciKredisi = () => {
  const currentDate = getCurrentMonthYear();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <PageMeta
        title={`Öğrenci Kredisi Veren Bankalar ${currentDate} | Öğrenci Kredi Başvurusu`}
        description={`Öğrencilere özel kredi ve kredi kartı veren bankalar. Öğrenci kredisi, eğitim kredisi ve öğrenci kredi kartı başvurusu nasıl yapılır? En avantajlı öğrenci kredileri.`}
        keywords="öğrenci kredisi, öğrenci kredi kartı, eğitim kredisi, öğrencilere kredi, öğrencilere özel kredi, öğrenci kredisi başvurusu"
        pageSlug="ogrenci-kredisi"
        pageType="loan"
      />
      
      <div className="container mx-auto py-12 px-4">
        <header className="mb-16 text-center">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Öğrencilere Özel Fırsatlar
          </div>
          <h1 className="text-4xl font-bold mb-4">Öğrenci Kredisi Veren Bankalar {currentDate}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Eğitim masraflarınızı karşılamak için öğrencilere özel kredi ve kredi kartı seçenekleri
          </p>
        </header>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Öğrenci Kredisi Türleri</h2>
          
          <Tabs defaultValue="egitim" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="egitim">Eğitim Kredisi</TabsTrigger>
              <TabsTrigger value="ihtiyac">İhtiyaç Kredisi</TabsTrigger>
              <TabsTrigger value="kart">Kredi Kartı</TabsTrigger>
              <TabsTrigger value="burs">Burs & Hibeler</TabsTrigger>
            </TabsList>
            
            <TabsContent value="egitim" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-blue-100 p-4 rounded-full flex items-center justify-center">
                  <School className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Eğitim Kredisi</h3>
                  <p className="text-gray-700 mb-4">
                    Eğitim kredisi, üniversite harç ve eğitim masraflarınızı karşılamak için tasarlanmış özel bir kredi türüdür. Genellikle daha düşük faiz oranları ve esnek ödeme seçenekleri sunar.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Okul harcı, kitap, bilgisayar gibi eğitim masrafları için kullanılabilir</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Mezuniyet sonrası ödeme başlangıcı seçenekleri sunan bankalar vardır</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Genellikle kefil veya veli onayı gerektirir</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ihtiyac" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-blue-100 p-4 rounded-full flex items-center justify-center">
                  <PiggyBank className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Öğrenci İhtiyaç Kredisi</h3>
                  <p className="text-gray-700 mb-4">
                    Öğrenci ihtiyaç kredisi, eğitim dışındaki barınma, ulaşım ve diğer günlük harcamalarınızı karşılamak için kullanabileceğiniz bir kredi türüdür.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Öğrenci kimliği ile başvurulabilir</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Genellikle düşük limitli ve kısa vadeli kredilerdir</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Kefil veya ebeveyn gelir belgesi gerekebilir</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="kart" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-blue-100 p-4 rounded-full flex items-center justify-center">
                  <CreditCard className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Öğrenci Kredi Kartı</h3>
                  <p className="text-gray-700 mb-4">
                    Öğrenci kredi kartları, öğrencilerin finansal ihtiyaçlarına yönelik düşük limitli, ek avantajlara sahip kredi kartlarıdır.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>500 TL - 2.000 TL arası limitler</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Sinema, kitap, kırtasiye gibi alanlarda indirim ve ek puanlar</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Yıllık kart ücreti olmayan seçenekler mevcuttur</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="burs" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-blue-100 p-4 rounded-full flex items-center justify-center">
                  <FileText className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Burs ve Hibeler</h3>
                  <p className="text-gray-700 mb-4">
                    Kredi yerine geri ödemesiz burs ve hibe imkanlarını da değerlendirebilirsiniz. Birçok banka, vakıf ve kurum öğrencilere burs imkanı sağlamaktadır.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Bankaların eğitim bursu programları</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Vakıfların eğitim desteği programları</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Devlet kurumlarının hibe programları</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Öğrenci Kredisi Veren Bankalar</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="bg-red-100 p-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-red-600" />
                  </div>
                </div>
                <CardTitle className="text-center text-xl text-red-700">Akbank</CardTitle>
              </div>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Eğitim Kredisi</h4>
                    <p className="text-sm text-gray-600">Okul masraflarını karşılamak için özel eğitim kredisi</p>
                    <div className="mt-2 flex items-center">
                      <span className="font-semibold">%1,79</span>
                      <span className="text-xs ml-1 text-gray-500">aylık faiz ile</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Neo Kart</h4>
                    <p className="text-sm text-gray-600">Öğrenciler için özel tasarlanmış kredi kartı</p>
                    <div className="mt-2 flex items-center">
                      <span className="font-semibold">1.000 TL</span>
                      <span className="text-xs ml-1 text-gray-500">limit ile başlangıç</span>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Link to="/bank/akbank/10000-tl-faizsiz-kredi">
                      <Button className="w-full">Başvur</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="bg-purple-100 p-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
                <CardTitle className="text-center text-xl text-purple-700">QNB Finansbank</CardTitle>
              </div>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Eğitim Finansmanı</h4>
                    <p className="text-sm text-gray-600">Tüm eğitim giderlerinizi karşılayan özel kredi</p>
                    <div className="mt-2 flex items-center">
                      <span className="font-semibold">%1,65</span>
                      <span className="text-xs ml-1 text-gray-500">aylık faiz ile</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">CardFinans GO</h4>
                    <p className="text-sm text-gray-600">Öğrencilere özel avantajlı kredi kartı</p>
                    <div className="mt-2 flex items-center">
                      <span className="font-semibold">%50 İndirim</span>
                      <span className="text-xs ml-1 text-gray-500">kırtasiye harcamalarında</span>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Link to="/bank/qnb/15000-tl-faizsiz-kredi">
                      <Button className="w-full">Başvur</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="bg-blue-100 p-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <CardTitle className="text-center text-xl text-blue-700">Denizbank</CardTitle>
              </div>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Eğitim Destek Kredisi</h4>
                    <p className="text-sm text-gray-600">Lisans ve yüksek lisans öğrencilerine özel kredi</p>
                    <div className="mt-2 flex items-center">
                      <span className="font-semibold">%1,75</span>
                      <span className="text-xs ml-1 text-gray-500">aylık faiz ile</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">D-Kart Öğrenci</h4>
                    <p className="text-sm text-gray-600">Öğrencilere özel indirim ve ayrıcalıklar</p>
                    <div className="mt-2 flex items-center">
                      <span className="font-semibold">750 TL</span>
                      <span className="text-xs ml-1 text-gray-500">limitli kredi kartı</span>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <Link to="/bank/denizbank/10000-tl-faizsiz-kredi">
                      <Button className="w-full">Başvur</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Öğrenci Kredisi Faiz Oranları</h2>
          
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[180px]">Banka</TableHead>
                  <TableHead>Kredi Türü</TableHead>
                  <TableHead className="text-right">Faiz Oranı</TableHead>
                  <TableHead className="text-right">Vade</TableHead>
                  <TableHead className="text-right">Maks. Tutar</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Akbank</TableCell>
                  <TableCell>Eğitim Kredisi</TableCell>
                  <TableCell className="text-right">%1,79</TableCell>
                  <TableCell className="text-right">48 ay</TableCell>
                  <TableCell className="text-right">100.000 TL</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">QNB Finansbank</TableCell>
                  <TableCell>Eğitim Finansmanı</TableCell>
                  <TableCell className="text-right">%1,65</TableCell>
                  <TableCell className="text-right">36 ay</TableCell>
                  <TableCell className="text-right">75.000 TL</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Denizbank</TableCell>
                  <TableCell>Eğitim Destek Kredisi</TableCell>
                  <TableCell className="text-right">%1,75</TableCell>
                  <TableCell className="text-right">60 ay</TableCell>
                  <TableCell className="text-right">120.000 TL</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Garanti BBVA</TableCell>
                  <TableCell>Eğitim İhtiyaç Kredisi</TableCell>
                  <TableCell className="text-right">%1,89</TableCell>
                  <TableCell className="text-right">48 ay</TableCell>
                  <TableCell className="text-right">90.000 TL</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">İş Bankası</TableCell>
                  <TableCell>Eğitim Kredisi</TableCell>
                  <TableCell className="text-right">%1,85</TableCell>
                  <TableCell className="text-right">60 ay</TableCell>
                  <TableCell className="text-right">150.000 TL</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="text-center text-sm text-gray-500 mt-3">
            * Faiz oranları bankalar tarafından değiştirilebilir. En güncel oranlar için bankaların web sitelerini ziyaret ediniz.
          </p>
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Öğrenci Kredisi Hesaplama</h2>
          
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-6 w-6 text-blue-600" />
                Kredi Hesaplama Aracı
              </CardTitle>
              <CardDescription>
                İhtiyacınız olan kredi miktarını ve ödeme planınızı hesaplayın
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Kredi Tutarı</label>
                  <select className="w-full p-2 border rounded">
                    <option>5.000 TL</option>
                    <option>10.000 TL</option>
                    <option>15.000 TL</option>
                    <option>20.000 TL</option>
                    <option>25.000 TL</option>
                    <option>30.000 TL</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Vade</label>
                  <select className="w-full p-2 border rounded">
                    <option>12 Ay</option>
                    <option>24 Ay</option>
                    <option>36 Ay</option>
                    <option>48 Ay</option>
                    <option>60 Ay</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-center mb-6">
                <Button className="w-full md:w-1/2">Hesapla</Button>
              </div>
              
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">Aylık Taksit Tutarı</p>
                  <p className="text-2xl font-bold text-blue-600">1.245,67 TL</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Toplam Geri Ödeme</p>
                    <p className="font-semibold">29.896,08 TL</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Toplam Faiz</p>
                    <p className="font-semibold">4.896,08 TL</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Sıkça Sorulan Sorular</h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Öğrenci kredisi için gerekli belgeler nelerdir?</h3>
              <p className="text-gray-700">
                Öğrenci kredisi için genellikle kimlik belgesi, öğrenci belgesi veya öğrenci kimliği, adres belgesi ve kefil veya ebeveyn gelir belgesi gereklidir. Bazı durumlarda okul tarafından düzenlenen harç tutarını gösteren belge de istenebilir.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Öğrenci kredileri ne zaman ödenmeye başlanır?</h3>
              <p className="text-gray-700">
                Bu, tercih ettiğiniz kredi türüne ve bankaya göre değişiklik gösterir. Bazı eğitim kredileri mezuniyet sonrası ödeme başlangıcı sunarken, çoğu ihtiyaç kredisi ve kredi kartı ödemeleri hemen başlar. Her bankanın şartlarını incelemeniz önemlidir.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Öğrenci kredi kartı limiti ne kadardır?</h3>
              <p className="text-gray-700">
                Öğrenci kredi kartları genellikle 500 TL ile 2.000 TL arasında başlangıç limitleri sunar. Düzenli ödeme alışkanlığınıza göre bu limit zamanla artırılabilir.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Kefil olmadan öğrenci kredisi alabilir miyim?</h3>
              <p className="text-gray-700">
                Kefil olmadan öğrenci kredisi almak zordur, ancak bazı bankalar düşük limitli kredi kartları veya küçük tutarlı krediler için kefil şartı aramayabilir. Yüksek tutarlı kredilerde genellikle kefil veya ebeveyn gelir belgesi istenir.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OgrenciKredisi;
