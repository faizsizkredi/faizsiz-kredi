
import BankRatesTable from "@/components/bank/BankRatesTable";
import { getCurrentMonthYear } from "@/utils/dateUtils";

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
  
  return (
    <div className="mt-12 prose max-w-none">
      <h2 className="text-2xl font-bold mb-6">Faizsiz Kredi Veren Bankalar ve Güncel Kampanyalar {currentDate}</h2>
      
      <h3 className="text-xl font-semibold mb-4">Faizsiz Kredi Kampanyaları ve Avantajları</h3>
      <p className="text-gray-700 mb-6">
        {new Date().getFullYear()} yılında faizsiz kredi veren bankalar, müşterilerine cazip fırsatlar sunmaya devam ediyor. Özellikle yeni müşterilere özel kampanyalar kapsamında, 6 aya varan vade seçenekleriyle faizsiz kredi kullanma imkanı bulunmaktadır. QNB Finansbank, Akbank, Garanti BBVA gibi önde gelen bankalar, düzenli olarak faizsiz kredi kampanyaları düzenlemektedir.
      </p>

      <h3 className="text-xl font-semibold mb-4">Faizsiz Kredi Veren Bankaların Güncel Kampanyaları</h3>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-4 py-2">Banka</th>
              <th className="border border-gray-200 px-4 py-2">Kredi Ürünü</th>
              <th className="border border-gray-200 px-4 py-2">Faiz Oranı</th>
              <th className="border border-gray-200 px-4 py-2">Vade</th>
              <th className="border border-gray-200 px-4 py-2">Maksimum Tutar</th>
              <th className="border border-gray-200 px-4 py-2">Şartlar</th>
            </tr>
          </thead>
          <tbody>
            {extendedRates.map((rate, index) => <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-200 px-4 py-2">{rate.bank}</td>
                <td className="border border-gray-200 px-4 py-2">{rate.product}</td>
                <td className="border border-gray-200 px-4 py-2">%{rate.rate}</td>
                <td className="border border-gray-200 px-4 py-2">{rate.term}</td>
                <td className="border border-gray-200 px-4 py-2">{rate.maxAmount}</td>
                <td className="border border-gray-200 px-4 py-2">{rate.requirements}</td>
              </tr>)}
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold mb-4">Faizsiz Kredi Başvuru Şartları</h3>
      <p className="text-gray-700 mb-4">
        Faizsiz kredi veren bankalar, başvuru sahiplerinden belirli kriterleri karşılamalarını beklemektedir. İşte temel başvuru şartları:
      </p>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li>18 yaşını doldurmuş olmak</li>
        <li>Düzenli gelir sahibi olmak</li>
        <li>Kredi notu 1300 ve üzeri olmak</li>
        <li>Son 6 ayda kredi ödemelerinde gecikme olmamak</li>
        <li>İlgili bankanın yeni müşterisi olmak</li>
        <li>SGK kayıtlı çalışan olmak</li>
      </ul>

      <h3 className="text-xl font-semibold mb-4">Faizsiz Kredi Veren Bankaların Sunduğu Avantajlar</h3>
      <p className="text-gray-700 mb-4">
        Faizsiz kredi veren bankalar, müşterilerine aşağıdaki avantajları sunmaktadır:
      </p>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li>6 aya varan vade seçenekleri</li>
        <li>50.000 TL'ye varan kredi tutarları</li>
        <li>Masrafsız kredi kullanım imkanı</li>
        <li>Hızlı başvuru ve onay süreci</li>
        <li>Online başvuru kolaylığı</li>
        <li>Esnek ödeme seçenekleri</li>
      </ul>

      <h3 className="text-xl font-semibold mb-4">Faizsiz Kredi Başvurusu İçin Gerekli Belgeler</h3>
      <p className="text-gray-700 mb-4">
        Faizsiz kredi başvurusu için bankaların talep ettiği temel belgeler:
      </p>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li>Nüfus cüzdanı veya kimlik kartı</li>
        <li>Gelir belgesi veya maaş bordrosu</li>
        <li>İkametgah belgesi</li>
        <li>Son 3 aylık banka hesap özeti</li>
        <li>Maaş hesap cüzdanı</li>
      </ul>

      <h3 className="text-xl font-semibold mb-4">Güncel Kredi Faiz Oranları</h3>
      <div className="mb-8">
        <BankRatesTable rates={currentRates} />
      </div>
    </div>
  );
};

export default MainContent;
