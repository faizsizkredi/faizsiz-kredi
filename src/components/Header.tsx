import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            Faizsiz Kredi
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/ihtiyac-kredisi" className="px-4 py-2 hover:text-primary">
                  İhtiyaç Kredisi
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/konut-kredisi" className="px-4 py-2 hover:text-primary">
                  Konut Kredisi
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/tasit-kredisi" className="px-4 py-2 hover:text-primary">
                  Taşıt Kredisi
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/kobi-kredisi" className="px-4 py-2 hover:text-primary">
                  Kobi Kredisi
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/kredi-faiz-hesaplama" className="px-4 py-2 hover:text-primary">
                  Kredi Faiz Hesaplama
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <nav className="space-x-4">
            <Button variant="ghost" onClick={() => navigate("/login")}>
              Giriş Yap
            </Button>
            <Button onClick={() => navigate("/signup")}>Üye Ol</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;