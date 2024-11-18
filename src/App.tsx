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

// QNB Pages
import FiveThousandLoan from "./pages/bank/qnb/FiveThousandLoan";
import SevenThousandFiveHundredLoan from "./pages/bank/qnb/SevenThousandFiveHundredLoan";
import TenThousandLoan from "./pages/bank/qnb/TenThousandLoan";
import TwentyThousandLoan from "./pages/bank/qnb/TwentyThousandLoan";

// VakıfBank Pages
import VakifbankFiveThousandLoan from "./pages/bank/vakifbank/FiveThousandLoan";
import VakifbankSevenThousandFiveHundredLoan from "./pages/bank/vakifbank/SevenThousandFiveHundredLoan";
import VakifbankTenThousandLoan from "./pages/bank/vakifbank/TenThousandLoan";
import VakifbankFifteenThousandLoan from "./pages/bank/vakifbank/FifteenThousandLoan";
import VakifbankTwentyThousandLoan from "./pages/bank/vakifbank/TwentyThousandLoan";
import VakifbankTwentyFiveThousandLoan from "./pages/bank/vakifbank/TwentyFiveThousandLoan";
import VakifbankFiftyThousandLoan from "./pages/bank/vakifbank/FiftyThousandLoan";
import VakifbankHundredThousandLoan from "./pages/bank/vakifbank/HundredThousandLoan";

// İş Bankası Pages
import IsBankasiFiveThousandLoan from "./pages/bank/is-bankasi/FiveThousandLoan";
import IsBankasiSevenThousandFiveHundredLoan from "./pages/bank/is-bankasi/SevenThousandFiveHundredLoan";
import IsBankasiTenThousandLoan from "./pages/bank/is-bankasi/TenThousandLoan";
import IsBankasiFifteenThousandLoan from "./pages/bank/is-bankasi/FifteenThousandLoan";
import IsBankasiTwentyThousandLoan from "./pages/bank/is-bankasi/TwentyThousandLoan";
import IsBankasiTwentyFiveThousandLoan from "./pages/bank/is-bankasi/TwentyFiveThousandLoan";
import IsBankasiFiftyThousandLoan from "./pages/bank/is-bankasi/FiftyThousandLoan";
import IsBankasiHundredThousandLoan from "./pages/bank/is-bankasi/HundredThousandLoan";

// Garanti BBVA Pages
import GarantiFiveThousandLoan from "./pages/bank/garanti/FiveThousandLoan";
import GarantiSevenThousandFiveHundredLoan from "./pages/bank/garanti/SevenThousandFiveHundredLoan";
import GarantiTenThousandLoan from "./pages/bank/garanti/TenThousandLoan";
import GarantiFifteenThousandLoan from "./pages/bank/garanti/FifteenThousandLoan";
import GarantiTwentyThousandLoan from "./pages/bank/garanti/TwentyThousandLoan";
import GarantiTwentyFiveThousandLoan from "./pages/bank/garanti/TwentyFiveThousandLoan";
import GarantiFiftyThousandLoan from "./pages/bank/garanti/FiftyThousandLoan";
import GarantiHundredThousandLoan from "./pages/bank/garanti/HundredThousandLoan";

// Denizbank Pages
import DenizbankFiveThousandLoan from "./pages/bank/denizbank/FiveThousandLoan";
import DenizbankSevenThousandFiveHundredLoan from "./pages/bank/denizbank/SevenThousandFiveHundredLoan";
import DenizbankTenThousandLoan from "./pages/bank/denizbank/TenThousandLoan";
import DenizbankFifteenThousandLoan from "./pages/bank/denizbank/FifteenThousandLoan";
import DenizbankTwentyThousandLoan from "./pages/bank/denizbank/TwentyThousandLoan";
import DenizbankTwentyFiveThousandLoan from "./pages/bank/denizbank/TwentyFiveThousandLoan";
import DenizbankFiftyThousandLoan from "./pages/bank/denizbank/FiftyThousandLoan";
import DenizbankHundredThousandLoan from "./pages/bank/denizbank/HundredThousandLoan";

// Enpara Pages
import EnparaFiveThousandLoan from "./pages/bank/enpara/FiveThousandLoan";
import EnparaSevenThousandFiveHundredLoan from "./pages/bank/enpara/SevenThousandFiveHundredLoan";
import EnparaTenThousandLoan from "./pages/bank/enpara/TenThousandLoan";
import EnparaFifteenThousandLoan from "./pages/bank/enpara/FifteenThousandLoan";
import EnparaTwentyThousandLoan from "./pages/bank/enpara/TwentyThousandLoan";
import EnparaTwentyFiveThousandLoan from "./pages/bank/enpara/TwentyFiveThousandLoan";
import EnparaFiftyThousandLoan from "./pages/bank/enpara/FiftyThousandLoan";
import EnparaHundredThousandLoan from "./pages/bank/enpara/HundredThousandLoan";

// Albaraka Türk Pages
import AlbarakaFiveThousandLoan from "./pages/bank/albaraka/FiveThousandLoan";
import AlbarakaSevenThousandFiveHundredLoan from "./pages/bank/albaraka/SevenThousandFiveHundredLoan";
import AlbarakaTenThousandLoan from "./pages/bank/albaraka/TenThousandLoan";
import AlbarakaFifteenThousandLoan from "./pages/bank/albaraka/FifteenThousandLoan";
import AlbarakaTwentyThousandLoan from "./pages/bank/albaraka/TwentyThousandLoan";
import AlbarakaTwentyFiveThousandLoan from "./pages/bank/albaraka/TwentyFiveThousandLoan";
import AlbarakaFiftyThousandLoan from "./pages/bank/albaraka/FiftyThousandLoan";
import AlbarakaHundredThousandLoan from "./pages/bank/albaraka/HundredThousandLoan";

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

                {/* QNB Routes */}
                <Route path="/bank/qnb/5000-tl-faizsiz-kredi" element={<FiveThousandLoan />} />
                <Route path="/bank/qnb/7500-tl-faizsiz-kredi" element={<SevenThousandFiveHundredLoan />} />
                <Route path="/bank/qnb/10000-tl-faizsiz-kredi" element={<TenThousandLoan />} />
                <Route path="/bank/qnb/20000-tl-faizsiz-kredi" element={<TwentyThousandLoan />} />

                {/* VakıfBank Routes */}
                <Route path="/bank/vakifbank/5000-tl-faizsiz-kredi" element={<VakifbankFiveThousandLoan />} />
                <Route path="/bank/vakifbank/7500-tl-faizsiz-kredi" element={<VakifbankSevenThousandFiveHundredLoan />} />
                <Route path="/bank/vakifbank/10000-tl-faizsiz-kredi" element={<VakifbankTenThousandLoan />} />
                <Route path="/bank/vakifbank/15000-tl-faizsiz-kredi" element={<VakifbankFifteenThousandLoan />} />
                <Route path="/bank/vakifbank/20000-tl-faizsiz-kredi" element={<VakifbankTwentyThousandLoan />} />
                <Route path="/bank/vakifbank/25000-tl-faizsiz-kredi" element={<VakifbankTwentyFiveThousandLoan />} />
                <Route path="/bank/vakifbank/50000-tl-faizsiz-kredi" element={<VakifbankFiftyThousandLoan />} />
                <Route path="/bank/vakifbank/100000-tl-faizsiz-kredi" element={<VakifbankHundredThousandLoan />} />

                {/* İş Bankası Routes */}
                <Route path="/bank/is-bankasi/5000-tl-faizsiz-kredi" element={<IsBankasiFiveThousandLoan />} />
                <Route path="/bank/is-bankasi/7500-tl-faizsiz-kredi" element={<IsBankasiSevenThousandFiveHundredLoan />} />
                <Route path="/bank/is-bankasi/10000-tl-faizsiz-kredi" element={<IsBankasiTenThousandLoan />} />
                <Route path="/bank/is-bankasi/15000-tl-faizsiz-kredi" element={<IsBankasiFifteenThousandLoan />} />
                <Route path="/bank/is-bankasi/20000-tl-faizsiz-kredi" element={<IsBankasiTwentyThousandLoan />} />
                <Route path="/bank/is-bankasi/25000-tl-faizsiz-kredi" element={<IsBankasiTwentyFiveThousandLoan />} />
                <Route path="/bank/is-bankasi/50000-tl-faizsiz-kredi" element={<IsBankasiFiftyThousandLoan />} />
                <Route path="/bank/is-bankasi/100000-tl-faizsiz-kredi" element={<IsBankasiHundredThousandLoan />} />

                {/* Garanti BBVA Routes */}
                <Route path="/bank/garanti/5000-tl-faizsiz-kredi" element={<GarantiFiveThousandLoan />} />
                <Route path="/bank/garanti/7500-tl-faizsiz-kredi" element={<GarantiSevenThousandFiveHundredLoan />} />
                <Route path="/bank/garanti/10000-tl-faizsiz-kredi" element={<GarantiTenThousandLoan />} />
                <Route path="/bank/garanti/15000-tl-faizsiz-kredi" element={<GarantiFifteenThousandLoan />} />
                <Route path="/bank/garanti/20000-tl-faizsiz-kredi" element={<GarantiTwentyThousandLoan />} />
                <Route path="/bank/garanti/25000-tl-faizsiz-kredi" element={<GarantiTwentyFiveThousandLoan />} />
                <Route path="/bank/garanti/50000-tl-faizsiz-kredi" element={<GarantiFiftyThousandLoan />} />
                <Route path="/bank/garanti/100000-tl-faizsiz-kredi" element={<GarantiHundredThousandLoan />} />

                {/* Denizbank Routes */}
                <Route path="/bank/denizbank/5000-tl-faizsiz-kredi" element={<DenizbankFiveThousandLoan />} />
                <Route path="/bank/denizbank/7500-tl-faizsiz-kredi" element={<DenizbankSevenThousandFiveHundredLoan />} />
                <Route path="/bank/denizbank/10000-tl-faizsiz-kredi" element={<DenizbankTenThousandLoan />} />
                <Route path="/bank/denizbank/15000-tl-faizsiz-kredi" element={<DenizbankFifteenThousandLoan />} />
                <Route path="/bank/denizbank/20000-tl-faizsiz-kredi" element={<DenizbankTwentyThousandLoan />} />
                <Route path="/bank/denizbank/25000-tl-faizsiz-kredi" element={<DenizbankTwentyFiveThousandLoan />} />
                <Route path="/bank/denizbank/50000-tl-faizsiz-kredi" element={<DenizbankFiftyThousandLoan />} />
                <Route path="/bank/denizbank/100000-tl-faizsiz-kredi" element={<DenizbankHundredThousandLoan />} />

                {/* Enpara Routes */}
                <Route path="/bank/enpara/5000-tl-faizsiz-kredi" element={<EnparaFiveThousandLoan />} />
                <Route path="/bank/enpara/7500-tl-faizsiz-kredi" element={<EnparaSevenThousandFiveHundredLoan />} />
                <Route path="/bank/enpara/10000-tl-faizsiz-kredi" element={<EnparaTenThousandLoan />} />
                <Route path="/bank/enpara/15000-tl-faizsiz-kredi" element={<EnparaFifteenThousandLoan />} />
                <Route path="/bank/enpara/20000-tl-faizsiz-kredi" element={<EnparaTwentyThousandLoan />} />
                <Route path="/bank/enpara/25000-tl-faizsiz-kredi" element={<EnparaTwentyFiveThousandLoan />} />
                <Route path="/bank/enpara/50000-tl-faizsiz-kredi" element={<EnparaFiftyThousandLoan />} />
                <Route path="/bank/enpara/100000-tl-faizsiz-kredi" element={<EnparaHundredThousandLoan />} />

                {/* Albaraka Türk Routes */}
                <Route path="/bank/albaraka/5000-tl-faizsiz-kredi" element={<AlbarakaFiveThousandLoan />} />
                <Route path="/bank/albaraka/7500-tl-faizsiz-kredi" element={<AlbarakaSevenThousandFiveHundredLoan />} />
                <Route path="/bank/albaraka/10000-tl-faizsiz-kredi" element={<AlbarakaTenThousandLoan />} />
                <Route path="/bank/albaraka/15000-tl-faizsiz-kredi" element={<AlbarakaFifteenThousandLoan />} />
                <Route path="/bank/albaraka/20000-tl-faizsiz-kredi" element={<AlbarakaTwentyThousandLoan />} />
                <Route path="/bank/albaraka/25000-tl-faizsiz-kredi" element={<AlbarakaTwentyFiveThousandLoan />} />
                <Route path="/bank/albaraka/50000-tl-faizsiz-kredi" element={<AlbarakaFiftyThousandLoan />} />
                <Route path="/bank/albaraka/100000-tl-faizsiz-kredi" element={<AlbarakaHundredThousandLoan />} />
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
