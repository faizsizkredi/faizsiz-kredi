import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Kredi Çekerken Dikkat Edilmesi Gereken 10 Önemli Nokta",
      slug: "kredi-cekerken-dikkat-edilmesi-gereken-noktalar",
      excerpt: "Kredi başvurusu yapmadan önce bilmeniz gereken önemli detaylar ve püf noktalar.",
      date: "2024-03-15",
      readTime: "8 dk",
      image: "/blog/kredi-dikkat.jpg"
    },
    {
      id: 2,
      title: "2024 Konut Kredisi Faiz Oranları Karşılaştırması",
      slug: "2024-konut-kredisi-faiz-oranlari",
      excerpt: "Türkiye'deki bankaların güncel konut kredisi faiz oranları ve detaylı karşılaştırma.",
      date: "2024-03-10",
      readTime: "6 dk",
      image: "/blog/konut-kredisi.jpg"
    },
    {
      id: 3,
      title: "İhtiyaç Kredisi Başvurunuz Neden Reddediliyor?",
      slug: "ihtiyac-kredisi-basvuru-red-nedenleri",
      excerpt: "Kredi başvurunuzun reddedilme sebepleri ve çözüm önerileri.",
      date: "2024-03-05",
      readTime: "5 dk",
      image: "/blog/kredi-red.jpg"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Kredi ve Finans Blogu | Faizsiz Kredi</title>
        <meta 
          name="description" 
          content="Kredi, finans ve bankacılık dünyasından güncel haberler, öneriler ve detaylı rehberler."
        />
        <meta 
          name="keywords" 
          content="kredi blogu, finans blog, bankacılık blog, kredi haberleri, kredi tavsiyeleri"
        />
        <link rel="canonical" href="https://faizsizkredi.com/blog" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Faizsiz Kredi Blog",
            "description": "Kredi, finans ve bankacılık dünyasından güncel haberler ve öneriler",
            "url": "https://faizsizkredi.com/blog",
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

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link to={`/blog/${post.slug}`}>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('tr-TR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="text-gray-600">
                    {post.excerpt}
                  </p>
                  <div className="mt-4">
                    <span className="text-primary font-medium hover:underline">
                      Devamını Oku →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;