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
        <h1 className="text-4xl font-bold mb-8 text-center">Kredi ve Finans Blogu</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Article */}
          <article className="bg-white rounded-lg shadow-md p-6">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Kredi başvurusu yapan kişi"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            <h2 className="text-2xl font-bold mb-4">2024 Yılında Faizsiz Kredi Almanın 5 Etkili Yolu</h2>
            
            <div className="text-gray-600 mb-4">
              <span className="mr-4">Yazar: Finans Uzmanı</span>
              <span>{currentDate}</span>
            </div>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                Günümüzde faizsiz kredi almak, doğru strateji ve bilgiyle mümkün hale geliyor. Bu yazımızda, 2024 yılında faizsiz kredi almanın en etkili 5 yöntemini sizlerle paylaşacağız.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">1. Kamu Bankalarının Kampanyalarını Takip Edin</h3>
              <p className="mb-4">
                Ziraat Bankası, Halkbank ve Vakıfbank gibi kamu bankaları düzenli olarak faizsiz veya düşük faizli kredi kampanyaları düzenliyor.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">2. Yeni Müşteri Kampanyalarını Değerlendirin</h3>
              <p className="mb-4">
                Özel bankalar, yeni müşteri kazanmak için sıfır faizli kredi kampanyaları sunuyor.
              </p>
            </div>
          </article>

          {/* Second Article */}
          <article className="bg-white rounded-lg shadow-md p-6">
            <img 
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e"
              alt="Finansal planlama"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            <h2 className="text-2xl font-bold mb-4">Kredi Notunuzu Yükseltmenin 7 Garantili Yöntemi</h2>
            
            <div className="text-gray-600 mb-4">
              <span className="mr-4">Yazar: Kredi Danışmanı</span>
              <span>{currentDate}</span>
            </div>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                Kredi notunuz, finansal hayatınızın en önemli göstergelerinden biridir. İyi bir kredi notu, daha uygun faiz oranları ve daha yüksek kredi limitleri anlamına gelir.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">1. Kredi Kartı Ödemelerinizi Düzenli Yapın</h3>
              <p className="mb-4">
                Kredi kartı ödemelerinizi her zaman zamanında yapın ve mümkünse asgari tutarın üzerinde ödeme yapmaya çalışın.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">2. Kredi Kullanım Oranınızı Düşük Tutun</h3>
              <p className="mb-4">
                Kredi kartı limitinizin %30'undan fazlasını kullanmamaya özen gösterin. Bu, kredi notunuzu olumlu etkileyen faktörlerden biridir.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blog;