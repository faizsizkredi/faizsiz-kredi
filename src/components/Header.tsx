import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            Faizsiz Kredi
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            <Link to="/ihtiyac-kredisi" className="px-4 py-2 hover:text-primary">
              İhtiyaç Kredisi
            </Link>
            <Link to="/konut-kredisi" className="px-4 py-2 hover:text-primary">
              Konut Kredisi
            </Link>
            <Link to="/tasit-kredisi" className="px-4 py-2 hover:text-primary">
              Taşıt Kredisi
            </Link>
            <Link to="/kobi-kredisi" className="px-4 py-2 hover:text-primary">
              Kobi Kredisi
            </Link>
            <Link to="/kredi-faiz-hesaplama" className="px-4 py-2 hover:text-primary">
              Kredi Faiz Hesaplama
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex space-x-4">
            <Button variant="ghost" onClick={() => navigate("/login")}>
              Giriş Yap
            </Button>
            <Button onClick={() => navigate("/signup")}>Üye Ol</Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/ihtiyac-kredisi" className="px-4 py-2 hover:text-primary">
                İhtiyaç Kredisi
              </Link>
              <Link to="/konut-kredisi" className="px-4 py-2 hover:text-primary">
                Konut Kredisi
              </Link>
              <Link to="/tasit-kredisi" className="px-4 py-2 hover:text-primary">
                Taşıt Kredisi
              </Link>
              <Link to="/kobi-kredisi" className="px-4 py-2 hover:text-primary">
                Kobi Kredisi
              </Link>
              <Link to="/kredi-faiz-hesaplama" className="px-4 py-2 hover:text-primary">
                Kredi Faiz Hesaplama
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" onClick={() => navigate("/login")}>
                  Giriş Yap
                </Button>
                <Button onClick={() => navigate("/signup")}>Üye Ol</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;