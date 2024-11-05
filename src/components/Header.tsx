import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          Faizsiz Kredi
        </Link>
        <nav className="space-x-4">
          <Button variant="ghost" onClick={() => navigate("/login")}>
            Giriş Yap
          </Button>
          <Button onClick={() => navigate("/signup")}>Üye Ol</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;