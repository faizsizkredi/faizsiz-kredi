import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const BlogPost = () => {
  const { slug } = useParams();
  
  // Bu örnek için sabit blog içerikleri
  const blogPosts = {
    "kredi-cekerken-dikkat-edilmesi-gereken-noktalar": {
      title: "Kredi Çekerken Dikkat Edilmesi Gereken 10 Önemli Nokta",
      date: "2024-03-15",
      author: "Finans Uzmanı",
      content: `
        <h2>1. Kredi Notunuzu Kontrol Edin</h2>
        <p>Kredi başvurusu yapmadan önce kredi notunuzu kontrol etmek, başvurunuzun onaylanma şansını artırır. Düşük kredi notu, yüksek faiz oranlarına veya başvurunuzun reddedilmesine neden olabilir.</p>

        <h2>2. Farklı Bankaları Karşılaştırın</h2>
        <p>Her bankanın sunduğu kredi koşulları farklıdır. Faiz oranları, vade seçenekleri ve ek masraflar açısından bankaları karşılaştırmak, size en uygun krediye ulaşmanızı sağlar.</p>

        <h2>3. Ödeme Planını İyi Hesaplayın</h2>
        <p>Aylık gelirinizi ve giderlerinizi göz önünde bulundurarak, kredi taksitlerini rahatça ödeyebileceğinizden emin olun. Gelecekteki olası gelir değişikliklerini de hesaba katın.</p>
      `,
      image: "/blog/kredi-dikkat.jpg"
    },
    "2024-konut-kredisi-faiz-oranlari": {
      title: "2024 Konut Kredisi Faiz Oranları Karşılaştırması",
      date: "2024-03-10",
      author: "Mortgage Uzmanı",
      content: `
        <h2>Güncel Konut Kredisi Faiz Oranları</h2>
        <p>2024 yılının ilk çeyreğinde konut kredisi faiz oranları bankalara göre değişkenlik göstermektedir. Kamu bankaları ortalama %1.20 ile %1.50 arasında faiz oranları sunarken, özel bankalar %1.40 ile %1.70 arasında oranlar sunmaktadır.</p>

        <h2>Konut Kredisi Seçerken Dikkat Edilmesi Gerekenler</h2>
        <p>Sadece faiz oranlarına değil, dosya masrafı, ekspertiz ücreti gibi ek maliyetlere de dikkat etmelisiniz. Ayrıca, bankaların sunduğu özel kampanyaları ve avantajları değerlendirin.</p>
      `,
      image: "/blog/konut-kredisi.jpg"
    },
    "ihtiyac-kredisi-basvuru-red-nedenleri": {
      title: "İhtiyaç Kredisi Başvurunuz Neden Reddediliyor?",
      date: "2024-03-05",
      author: "Kredi Danışmanı",
      content: `
        <h2>Düşük Kredi Notu</h2>
        <p>Kredi başvurularının reddedilmesinin en yaygın nedeni düşük kredi notudur. Geçmiş kredi ve kredi kartı ödemelerinizin düzenli olması, kredi notunuzu olumlu etkiler.</p>

        <h2>Yetersiz veya Düzensiz Gelir</h2>
        <p>Bankaların kredi verirken en çok dikkat ettiği konulardan biri de düzenli ve belgelenebilir gelirdir. Gelir düzeyinizin talep ettiğiniz kredi tutarının geri ödemesi için yeterli olması gerekir.</p>

        <h2>Mevcut Kredi Yükü</h2>
        <p>Halihazırda çok sayıda krediniz veya yüksek kredi kartı borçlarınız varsa, yeni kredi başvurunuz reddedilebilir. Toplam borç/gelir oranınızın makul seviyelerde olması önemlidir.</p>
      `,
      image: "/blog/kredi-red.jpg"
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return <div>Blog yazısı bulunamadı.</div>;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Faizsiz Kredi Blog</title>
        <meta 
          name="description" 
          content={post.content.substring(0, 155) + "..."}
        />
        <meta 
          name="keywords" 
          content={`${post.title.toLowerCase()}, kredi, finans, bankacılık`}
        />
        <link rel="canonical" href={`https://faizsizkredi.com/blog/${slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": post.image,
            "datePublished": post.date,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Faizsiz Kredi",
              "logo": {
                "@type": "ImageObject",
                "url": "https://faizsizkredi.com/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('tr-TR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </header>

        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </>
  );
};

export default BlogPost;