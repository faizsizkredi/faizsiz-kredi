import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BankDetail from "./pages/BankDetail";
import RetiredIndex from "./pages/retired/Index";
import RiskyIndex from "./pages/risky/Index";
import EasyIndex from "./pages/easiest/Index";
import PromotionIndex from "./pages/promotion/Index";
import AffordableIndex from "./pages/affordable/Index";
import ZeroInterestIndex from "./pages/zeroInterest/Index";
import BanksIndex from "./pages/banks/Index";
import NewCustomerIndex from "./pages/newCustomer/Index";
import IhtiyacKredisi from "./pages/IhtiyacKredisi";
import KonutKredisi from "./pages/KonutKredisi";
import KrediFaizHesaplama from "./pages/KrediFaizHesaplama";
import TasitKredisi from "./pages/TasitKredisi";
import KobiKredisi from "./pages/KobiKredisi";
import FiveThousandLoan from "./pages/bank/qnb/FiveThousandLoan";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/bank/:bankSlug" element={<BankDetail />} />
                <Route path="/bank/qnb/5000-tl-faizsiz-kredi" element={<FiveThousandLoan />} />
                <Route path="/bank/:bankSlug/:amount-tl-faizsiz-kredi" element={<BankDetail />} />
                <Route path="/emekliye-faizsiz-kredi" element={<RetiredIndex />} />
                <Route path="/riskli-musteriye-kredi" element={<RiskyIndex />} />
                <Route path="/en-kolay-kredi" element={<EasyIndex />} />
                <Route path="/promosyonlu-krediler" element={<PromotionIndex />} />
                <Route path="/en-uygun-kredi" element={<AffordableIndex />} />
                <Route path="/sifir-faizli-kredi" element={<ZeroInterestIndex />} />
                <Route path="/tum-bankalar" element={<BanksIndex />} />
                <Route path="/yeni-musteriye-kredi" element={<NewCustomerIndex />} />
                <Route path="/ihtiyac-kredisi" element={<IhtiyacKredisi />} />
                <Route path="/konut-kredisi" element={<KonutKredisi />} />
                <Route path="/kredi-faiz-hesaplama" element={<KrediFaizHesaplama />} />
                <Route path="/tasit-kredisi" element={<TasitKredisi />} />
                <Route path="/kobi-kredisi" element={<KobiKredisi />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <Toaster />
          <Sonner />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;