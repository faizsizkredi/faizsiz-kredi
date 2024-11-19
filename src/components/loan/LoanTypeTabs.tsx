import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const LoanTypeTabs = () => {
  const location = useLocation();
  
  const tabs = [
    { name: "İhtiyaç", path: "/ihtiyac-kredisi" },
    { name: "Konut", path: "/konut-kredisi" },
    { name: "Taşıt", path: "/tasit-kredisi" },
    { name: "Kobi", path: "/kobi-kredisi" },
  ];

  return (
    <div className="flex space-x-1 rounded-lg bg-gray-100 p-1 mb-6">
      {tabs.map((tab) => (
        <Link
          key={tab.path}
          to={tab.path}
          className={cn(
            "w-full rounded-lg px-3 py-2 text-sm font-medium transition-colors",
            location.pathname === tab.path
              ? "bg-white text-primary shadow"
              : "text-gray-600 hover:bg-white/50 hover:text-primary"
          )}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default LoanTypeTabs;