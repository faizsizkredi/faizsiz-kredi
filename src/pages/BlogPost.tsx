
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getPageUrls } from "@/utils/canonicalUrls";

const BlogPost = () => {
  const { slug } = useParams();
  const { canonical, homepage } = getPageUrls(slug || '', 'blog');

  // Statik blog içeriği
  const post = {
    title: "Evlilik kredisi şartları neler? Faizsiz evlilik kredisi nasıl alınır?",
    content: `
      <div class="prose max-w-none">
        <h2>Evlilik Kredisi Nedir?</h2>
        <p>Evlilik kredisi, evlenecek çiftlerin düğün masraflarını karşılamak için bankaların sunduğu özel bir kredi türüdür. Bu kredi türü, genellikle daha uygun faiz oranları ve esnek ödeme seçenekleriyle sunulmaktadır.</p>

        <h2>Evlilik Kredisi Şartları</h2>
        <ul>
          <li>18 yaşını doldurmuş olmak</li>
          <li>Düzenli gelir sahibi olmak</li>
          <li>Kredi notu 1400 ve üzeri olmak</li>
          <li>Son 6 aydır çalışıyor olmak</li>
          <li>Evlilik cüzdanı veya evlilik tarihini gösteren belge</li>
        </ul>

        <h2>Faizsiz Evlilik Kredisi Nasıl Alınır?</h2>
        <p>Faizsiz evlilik kredisi almak için izleyebileceğiniz yollar:</p>
        <ol>
          <li><strong>Kamu Bankaları Kampanyaları:</strong> Ziraat Bankası, Halkbank ve Vakıfbank düzenli olarak faizsiz veya düşük faizli evlilik kredisi kampanyaları düzenlemektedir.</li>
          <li><strong>Özel Banka Kampanyaları:</strong> Özel bankalar da belirli dönemlerde yeni evlenecek çiftlere özel kampanyalar sunmaktadır.</li>
          <li><strong>Yeni Müşteri Kampanyaları:</strong> Bankaların yeni müşterilerine özel faizsiz kredi kampanyalarından yararlanabilirsiniz.</li>
        </ol>

        <h2>Evlilik Kredisi Başvurusu İçin Gerekli Belgeler</h2>
        <ul>
          <li>Nüfus cüzdanı fotokopisi</li>
          <li>Gelir belgesi veya maaş bordrosu</li>
          <li>İkametgah belgesi</li>
          <li>Evlilik cüzdanı veya nikah tarihi belgesi</li>
        </ul>

        <h2>Evlilik Kredisi Avantajları</h2>
        <p>Evlilik kredisinin sunduğu başlıca avantajlar şunlardır:</p>
        <ul>
          <li>Düşük faiz oranları</li>
          <li>Esnek ödeme seçenekleri</li>
          <li>3 aya varan ödemesiz dönem imkanı</li>
          <li>60 aya varan vade seçenekleri</li>
          <li>Masrafsız kredi kullanım imkanı</li>
        </ul>

        <h2>Dikkat Edilmesi Gerekenler</h2>
        <p>Evlilik kredisi başvurusu yaparken dikkat edilmesi gereken noktalar:</p>
        <ul>
          <li>Kredi notunuzu önceden kontrol edin</li>
          <li>Farklı bankaların tekliflerini karşılaştırın</li>
          <li>Aylık taksit tutarının gelirinizin %30'unu geçmemesine dikkat edin</li>
          <li>Kampanya dönemlerini takip edin</li>
          <li>Sigorta ve masraf tutarlarını da hesaba katın</li>
        </ul>

        <h2>Sonuç</h2>
        <p>Evlilik kredisi, düğün masraflarınızı karşılamak için iyi bir finansman seçeneği olabilir. Ancak kredi çekmeden önce tüm şartları değerlendirmek ve bütçenize uygun bir kredi seçmek önemlidir. Faizsiz veya düşük faizli evlilik kredisi kampanyalarını takip ederek, en uygun koşullarda kredi kullanabilirsiniz.</p>
      </div>
    `,
    author: "Doğan Koç",
    date: "6 Aralık 2024",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{post.title} | Faizsiz Kredi Rehberi</title>
        <meta name="description" content={post.content.substring(0, 160)} />
        <meta name="author" content={post.author} />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" href={homepage} hrefLang="tr" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.content.substring(0, 160)} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={post.image} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
      </Helmet>

      <div className="container mx-auto py-8 px-4">
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center space-x-4 mb-8">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt={post.author}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="text-gray-500">{post.date}</p>
              </div>
            </div>
            
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
