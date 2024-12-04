import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface LoanMenuItemProps {
  title: string;
  url: string;
  Icon: LucideIcon;
}

const LoanMenuItem = ({ title, url, Icon }: LoanMenuItemProps) => {
  return (
    <li className="hover:bg-gray-100 transition-colors rounded">
      <Link 
        to={url} 
        className="flex items-center gap-2 p-2 text-gray-700 hover:text-primary"
      >
        <Icon className="w-5 h-5" />
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default LoanMenuItem;