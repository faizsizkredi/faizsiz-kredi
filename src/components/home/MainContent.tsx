
import BankRatesTable from "@/components/bank/BankRatesTable";
import { getCurrentMonthYear } from "@/utils/dateUtils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

interface MainContentProps {
  currentRates: Array<{
    name: string;
    productName: string;
    interestRate: string;
    minTerm: string;
    maxTerm: string;
  }>;
  extendedRates: Array<{
    bank: string;
    product: string;
    rate: string;
    term: string;
    maxAmount: string;
    requirements: string;
  }>;
}

const MainContent = ({ currentRates, extendedRates }: MainContentProps) => {
  const currentDate = getCurrentMonthYear();
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="mt-12 prose max-w-none">
      <h2 id="faiz-oranlari" className="text-3xl font-bold mb-6">Faizsiz Kredi Veren Bankalar ve Güncel Faiz Oranları {currentYear}</h2>
      
      <div className="mb-8">
        <Card className="bg-blue-50 border-blue-100">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">2025 Yılı Faizsiz Kredi Fırsatları</h3>
            <p>
              {currentYear} yılında bankalar, özellikle yeni müşterilere özel olmak üzere cazip faizsiz kredi kampanyaları sunmaktadır. Bu fırsatlar sayesinde, %0 faiz oranıyla 50.000 TL'ye varan tutarda kredi kullanmak mümkün hale gelmiştir. QNB Finansbank, Akbank ve Garanti BBVA gibi bankalar, faizsiz kredi kampanyalarıyla öne çıkmaktadır.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <h3 id="kampanyalar" className="text-2xl font-semibold mb-4">Faizsiz Kredi Kampanyaları {currentDate}</h3>
      
      <div className="overflow-x-auto mb-8">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="font-medium">Banka</TableHead>
              <TableHead className="font-medium">Kredi Ürünü</TableHead>
              <TableHead className="font-medium">Faiz Oranı</TableHead>
              <TableHead className="font-medium">Vade</TableHead>
              <TableHead className="font-medium">Maksimum Tutar</TableHead>
              <TableHead className="font-medium">Şartlar</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {extendedRates.map((rate, index) => (
              <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <TableCell className="font-medium">{rate.bank}</TableCell>
                <TableCell>{rate.product}</TableCell>
                <TableCell>%{rate.rate}</TableCell>
                <TableCell>{rate.term}</TableCell>
                <TableCell>{rate.maxAmount}</TableCell>
                <TableCell>{rate.requirements}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <h3 id="sartlar" className="text-2xl font-semibold mb-4">Faizsiz Kredi Başvuru Şartları {currentYear}</h3>
      <p className="text-gray-700 mb-4">
        Faizsiz kredi veren bankalar, başvuru sahiplerinden belirli kriterleri karşılamalarını beklemektedir. İşte temel başvuru şartları:
      </p>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li className="mb-2"><strong>Yaş:</strong> 18 yaşını doldurmuş olmak</li>
        <li className="mb-2"><strong>Gelir Durumu:</strong> Düzenli gelir sahibi olmak</li>
        <li className="mb-2"><strong>Kredi Notu:</strong> 1300 ve üzeri kredi notuna sahip olmak</li>
        <li className="mb-2"><strong>Ödeme Geçmişi:</strong> Son 6 ayda kredi ödemelerinde gecikme olmamak</li>
        <li className="mb-2"><strong>Müşteri İlişkisi:</strong> İlgili bankanın yeni müşterisi olmak</li>
        <li className="mb-2"><strong>Çalışma Durumu:</strong> SGK kayıtlı çalışan olmak</li>
      </ul>

      <h3 id="avantajlar" className="text-2xl font-semibold mb-4">Faizsiz Kredi Avantajları</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
          <h4 className="text-lg font-semibold mb-3">Maliyet Avantajı</h4>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Faiz ödemesi olmaması</li>
            <li>Masrafsız kredi kullanım imkanı</li>
            <li>Düşük KKDF ve BSMV oranları</li>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
          <h4 className="text-lg font-semibold mb-3">Uygulama Kolaylığı</h4>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Hızlı başvuru ve onay süreci</li>
            <li>Online başvuru kolaylığı</li>
            <li>Esnek ödeme seçenekleri</li>
          </ul>
        </div>
      </div>

      <h3 id="belgeler" className="text-2xl font-semibold mb-4">Faizsiz Kredi İçin Gerekli Belgeler {currentYear}</h3>
      <p className="text-gray-700 mb-4">
        Faizsiz kredi başvurusu için bankaların talep ettiği temel belgeler:
      </p>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li className="mb-2">Nüfus cüzdanı veya kimlik kartı</li>
        <li className="mb-2">Gelir belgesi veya maaş bordrosu</li>
        <li className="mb-2">İkametgah belgesi (E-Devlet'ten alınabilir)</li>
        <li className="mb-2">Son 3 aylık banka hesap özeti</li>
        <li className="mb-2">Maaş hesap cüzdanı (maaş müşterileri için)</li>
      </ul>

      <h3 id="kredi-oranlari" className="text-2xl font-semibold mb-4">Güncel Kredi Faiz Oranları - {currentDate}</h3>
      <div className="mb-8">
        <BankRatesTable rates={currentRates} />
      </div>
      
      <h3 id="sikca-sorulan" className="text-2xl font-semibold mb-4">Sık Sorulan Sorular</h3>
      <div className="mb-8">
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h4 className="text-lg font-semibold mb-2">Faizsiz kredi nasıl alınır?</h4>
            <p className="text-gray-700">
              Faizsiz kredi almak için ilgili bankanın mobil uygulaması, internet şubesi veya en yakın şubesi üzerinden başvuru yapabilirsiniz. Başvuru sonrası kredi onaylanırsa, anlaşma şartlarını kabul ederek kredinizi kullanabilirsiniz.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h4 className="text-lg font-semibold mb-2">20 bin TL faizsiz kredi veren bankalar hangileridir?</h4>
            <p className="text-gray-700">
              20.000 TL ve altı faizsiz kredi veren bankalar arasında QNB Finansbank, Akbank, Garanti BBVA, DenizBank, Enpara.com, ON Dijital ve CEPTETEB bulunmaktadır. Her bankanın farklı vade ve şartları bulunmaktadır.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h4 className="text-lg font-semibold mb-2">Faizsiz kredi için kredi notu kaç olmalıdır?</h4>
            <p className="text-gray-700">
              Faizsiz kredi için genellikle 1300 ve üzeri bir kredi notu tercih edilmektedir. Ancak bazı bankalar, özellikle yeni müşteriler için daha düşük kredi notuna sahip kişilere de kredi verebilmektedir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
