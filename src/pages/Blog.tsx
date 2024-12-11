import { Helmet } from "react-helmet";
import { getCurrentMonthYear } from "@/utils/dateUtils";

const Blog = () => {
  const currentDate = getCurrentMonthYear();

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Kredi ve Finans Blogu | Faizsiz Kredi Rehberi</title>
        <meta name="description" content="Kredi, finans ve bankacılık dünyasından en güncel haberler, ipuçları ve uzman görüşleri." />
        <meta name="author" content="Faizsiz Kredi Rehberi" />
        <meta property="og:title" content="Kredi ve Finans Blogu" />
        <meta property="og:description" content="Kredi ve finans dünyasından güncel bilgiler ve öneriler." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" />
      </Helmet>

      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-8">Kredi ve Finans Blogu</h1>
        
        <article className="bg-white rounded-lg shadow-md p-6 mb-8">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Kredi başvurusu yapan kişi"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <h2 className="text-2xl font-bold mb-4">2024 Yılında Faizsiz Kredi Almanın 5 Etkili Yolu</h2>
          
          <div className="text-gray-600 mb-4">
            <span className="mr-4">Yazar: Finans Uzmanı</span>
            <span className="mr-4">Yayın Tarihi: {currentDate}</span>
          </div>
          
          <div className="prose max-w-none">
            <p className="mb-4">
              Günümüzde faizsiz kredi almak, doğru strateji ve bilgiyle mümkün hale geliyor. Bu yazımızda, 2024 yılında faizsiz kredi almanın en etkili 5 yöntemini sizlerle paylaşacağız.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">1. Kamu Bankalarının Kampanyalarını Takip Edin</h3>
            <p className="mb-4">
              Ziraat Bankası, Halkbank ve Vakıfbank gibi kamu bankaları düzenli olarak faizsiz veya düşük faizli kredi kampanyaları düzenliyor. Bu kampanyaları yakından takip ederek avantajlı kredilerden yararlanabilirsiniz.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">2. Yeni Müşteri Kampanyalarını Değerlendirin</h3>
            <p className="mb-4">
              Özel bankalar, yeni müşteri kazanmak için sıfır faizli kredi kampanyaları sunuyor. Bu kampanyalar genellikle düşük tutarlı ve kısa vadeli oluyor.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">3. Maaş Müşterisi Olun</h3>
            <p className="mb-4">
              Maaşınızı bir bankadan almaya başladığınızda, o banka size özel faizsiz kredi teklifleri sunabilir. Bu avantajdan yararlanmak için maaş aldığınız bankanın tekliflerini düzenli kontrol edin.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">4. Özel Dönemleri Takip Edin</h3>
            <p className="mb-4">
              Bayram dönemleri, yılbaşı ve özel günlerde bankalar faizsiz kredi kampanyaları düzenliyor. Bu dönemleri takip ederek avantajlı kredilerden yararlanabilirsiniz.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">5. Kredi Kartı Tekliflerini Değerlendirin</h3>
            <p className="mb-4">
              Bazı bankalar kredi kartı kullanıcılarına özel faizsiz kredi kampanyaları sunuyor. Kredi kartınızın kampanyalarını düzenli olarak kontrol edin.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blog;