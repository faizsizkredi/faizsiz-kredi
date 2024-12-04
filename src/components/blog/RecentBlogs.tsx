import BlogPreview from "./BlogPreview";

const RecentBlogs = () => {
  const recentPosts = [
    {
      title: "Kredi Çekerken Dikkat Edilmesi Gereken 10 Önemli Nokta",
      excerpt: "Kredi başvurusu yapmadan önce dikkat etmeniz gereken önemli noktaları ve püf noktalarını sizler için derledik.",
      slug: "kredi-cekerken-dikkat-edilmesi-gerekenler",
      date: "15 Mart 2024",
      imageUrl: "/blog/kredi-dikkat.jpg"
    },
    {
      title: "2024 Konut Kredisi Faiz Oranları Karşılaştırması",
      excerpt: "2024 yılında bankaların sunduğu konut kredisi faiz oranlarını ve kampanyalarını karşılaştırmalı olarak inceledik.",
      slug: "konut-kredisi-faiz-oranlari-2024",
      date: "12 Mart 2024",
      imageUrl: "/blog/konut-kredisi.jpg"
    },
    {
      title: "İhtiyaç Kredisi Başvurunuz Neden Reddediliyor?",
      excerpt: "Kredi başvurunuzun reddedilme nedenlerini ve çözüm yollarını detaylı olarak açıklıyoruz.",
      slug: "kredi-basvurusu-red-nedenleri",
      date: "10 Mart 2024",
      imageUrl: "/blog/kredi-red.jpg"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Son Blog Yazıları</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post, index) => (
            <BlogPreview key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;