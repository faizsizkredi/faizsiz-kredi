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

// Yapı Kredi Pages
import YapiKrediFiveThousandLoan from "./pages/bank/yapikredi/FiveThousandLoan";
import YapiKrediSevenThousandFiveHundredLoan from "./pages/bank/yapikredi/SevenThousandFiveHundredLoan";
import YapiKrediTenThousandLoan from "./pages/bank/yapikredi/TenThousandLoan";
import YapikrediFifteenThousandLoan from "./pages/bank/yapikredi/FifteenThousandLoan";
import YapikrediTwentyThousandLoan from "./pages/bank/yapikredi/TwentyThousandLoan";
import YapikrediTwentyFiveThousandLoan from "./pages/bank/yapikredi/TwentyFiveThousandLoan";
import YapikrediFiftyThousandLoan from "./pages/bank/yapikredi/FiftyThousandLoan";
import YapikrediHundredThousandLoan from "./pages/bank/yapikredi/HundredThousandLoan";

// Other Pages
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
                
                {/* Yapı Kredi Routes - Updated URLs */}
                <Route path="/bank/yapi-kredi/5000-tl-faizsiz-kredi" element={<YapiKrediFiveThousandLoan />} />
                <Route path="/bank/yapi-kredi/7500-tl-faizsiz-kredi" element={<YapiKrediSevenThousandFiveHundredLoan />} />
                <Route path="/bank/yapi-kredi/10000-tl-faizsiz-kredi" element={<YapiKrediTenThousandLoan />} />
                <Route path="/bank/yapi-kredi/15000-tl-faizsiz-kredi" element={<YapikrediFifteenThousandLoan />} />
                <Route path="/bank/yapi-kredi/20000-tl-faizsiz-kredi" element={<YapikrediTwentyThousandLoan />} />
                <Route path="/bank/yapi-kredi/25000-tl-faizsiz-kredi" element={<YapikrediTwentyFiveThousandLoan />} />
                <Route path="/bank/yapi-kredi/50000-tl-faizsiz-kredi" element={<YapikrediFiftyThousandLoan />} />
                <Route path="/bank/yapi-kredi/100000-tl-faizsiz-kredi" element={<YapikrediHundredThousandLoan />} />
                
                {/* Generic Route */}
                <Route path="/bank/:bankSlug/:amount-tl-faizsiz-kredi" element={<BankDetail />} />
                
                {/* Other Routes */}
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
