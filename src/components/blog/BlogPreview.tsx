import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPreviewProps {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  imageUrl: string;
}

const BlogPreview = ({ title, excerpt, slug, date, imageUrl }: BlogPreviewProps) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-1">
        <time className="text-sm text-gray-500">{date}</time>
        <h3 className="text-lg font-semibold mt-2 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-1">{excerpt}</p>
        <Link 
          to={`/blog/${slug}`}
          className="text-primary flex items-center gap-2 text-sm font-medium hover:underline mt-auto"
        >
          Devamını Oku
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default BlogPreview;