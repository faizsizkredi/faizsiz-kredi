import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const BlogPost = () => {
  const { slug } = useParams();

  // Bu kısımda normalde bir API'den blog post detayları çekilecek
  // Şimdilik statik veri kullanıyoruz
  const post = {
    title: "Evlilik kredisi şartları neler? Faizsiz evlilik kredisi nasıl alınır?",
    content: "Blog yazısının içeriği buraya gelecek...",
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
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.content.substring(0, 160)} />
        <meta property="og:type" content="article" />
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
            
            <div className="prose max-w-none">
              {post.content}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;