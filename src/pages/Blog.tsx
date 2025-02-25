import { Helmet } from "react-helmet";
import { getCurrentMonthYear } from "@/utils/dateUtils";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import { getPageUrls } from "@/utils/canonicalUrls";

const Blog = () => {
  const { canonical, homepage } = getPageUrls('blog');

  const blogPosts = [
    {
      id: 1,
      title: "Evlilik kredisi şartları neler? Faizsiz evlilik kredisi nasıl alınır?",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "Kredi",
      author: "Doğan Koç",
      date: "6 Aralık 2024",
      views: 59215,
      slug: "evlilik-kredisi-sartlari"
    },
    {
      id: 2,
      title: "Taşıt kredisi nedir ve hangi araçlara çıkar?",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e",
      category: "Kredi",
      author: "Doğan Koç",
      date: "6 Aralık 2024",
      views: 519,
      slug: "tasit-kredisi-nedir"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Kredi ve Finans Blogu | Faizsiz Kredi Rehberi</title>
        <meta name="description" content="Kredi, finans ve bankacılık dünyasından en güncel haberler, ipuçları ve uzman görüşleri." />
        <meta name="author" content="Faizsiz Kredi Rehberi" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" href={homepage} hrefLang="tr" />
        <meta property="og:title" content="Kredi ve Finans Blogu" />
        <meta property="og:description" content="Kredi ve finans dünyasından güncel bilgiler ve öneriler." />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" />
      </Helmet>

      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-8">Son Eklenen Kredi Yazıları</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link to={`/blog/${post.slug}`} className="block">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                
                <div className="p-6">
                  <span className="inline-block bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {post.category}
                  </span>
                  
                  <h2 className="text-2xl font-bold mb-4 hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt={post.author}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-semibold">{post.author}</p>
                        <p className="text-gray-500 text-sm">{post.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Eye className="w-5 h-5 mr-2" />
                      <span>{post.views.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
