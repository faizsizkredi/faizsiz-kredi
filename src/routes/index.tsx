import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import BankDetail from "../pages/BankDetail";
import Mevduat from "../pages/Mevduat";
import RetiredIndex from "../pages/retired/Index";
import RiskyIndex from "../pages/risky/Index";
import EasyIndex from "../pages/easiest/Index";
import PromotionIndex from "../pages/promotion/Index";
import AffordableIndex from "../pages/affordable/Index";
import ZeroInterestIndex from "../pages/zeroInterest/Index";
import BanksIndex from "../pages/banks/Index";
import NewCustomerIndex from "../pages/newCustomer/Index";
import IhtiyacKredisi from "../pages/IhtiyacKredisi";
import KonutKredisi from "../pages/KonutKredisi";
import KrediFaizHesaplama from "../pages/KrediFaizHesaplama";
import TasitKredisi from "../pages/TasitKredisi";
import KobiKredisi from "../pages/KobiKredisi";

// QNB Pages
import FiveThousandLoan from "../pages/bank/qnb/FiveThousandLoan";
import SevenThousandFiveHundredLoan from "../pages/bank/qnb/SevenThousandFiveHundredLoan";
import TenThousandLoan from "../pages/bank/qnb/TenThousandLoan";
import FifteenThousandLoan from "../pages/bank/qnb/FifteenThousandLoan";
import TwentyThousandLoan from "../pages/bank/qnb/TwentyThousandLoan";
import TwentyFiveThousandLoan from "../pages/bank/qnb/TwentyFiveThousandLoan";
import FiftyThousandLoan from "../pages/bank/qnb/FiftyThousandLoan";
import HundredThousandLoan from "../pages/bank/qnb/HundredThousandLoan";

// Denizbank Pages
import DenizbankFiveThousandLoan from "../pages/bank/denizbank/FiveThousandLoan";
import DenizbankSevenThousandFiveHundredLoan from "../pages/bank/denizbank/SevenThousandFiveHundredLoan";
import DenizbankTenThousandLoan from "../pages/bank/denizbank/TenThousandLoan";
import DenizbankFifteenThousandLoan from "../pages/bank/denizbank/FifteenThousandLoan";
import DenizbankTwentyThousandLoan from "../pages/bank/denizbank/TwentyThousandLoan";
import DenizbankTwentyFiveThousandLoan from "../pages/bank/denizbank/TwentyFiveThousandLoan";
import DenizbankFiftyThousandLoan from "../pages/bank/denizbank/FiftyThousandLoan";
import DenizbankHundredThousandLoan from "../pages/bank/denizbank/HundredThousandLoan";

// Akbank Pages
import AkbankFiveThousandLoan from "../pages/bank/akbank/FiveThousandLoan";
import AkbankSevenThousandFiveHundredLoan from "../pages/bank/akbank/SevenThousandFiveHundredLoan";
import AkbankTenThousandLoan from "../pages/bank/akbank/TenThousandLoan";
import AkbankFifteenThousandLoan from "../pages/bank/akbank/FifteenThousandLoan";
import AkbankTwentyThousandLoan from "../pages/bank/akbank/TwentyThousandLoan";
import AkbankTwentyFiveThousandLoan from "../pages/bank/akbank/TwentyFiveThousandLoan";
import AkbankFiftyThousandLoan from "../pages/bank/akbank/FiftyThousandLoan";
import AkbankHundredThousandLoan from "../pages/bank/akbank/HundredThousandLoan";

// Garanti BBVA Pages
import GarantiFiveThousandLoan from "../pages/bank/garanti/FiveThousandLoan";
import GarantiSevenThousandFiveHundredLoan from "../pages/bank/garanti/SevenThousandFiveHundredLoan";
import GarantiTenThousandLoan from "../pages/bank/garanti/TenThousandLoan";
import GarantiFifteenThousandLoan from "../pages/bank/garanti/FifteenThousandLoan";
import GarantiTwentyThousandLoan from "../pages/bank/garanti/TwentyThousandLoan";
import GarantiTwentyFiveThousandLoan from "../pages/bank/garanti/TwentyFiveThousandLoan";
import GarantiFiftyThousandLoan from "../pages/bank/garanti/FiftyThousandLoan";
import GarantiHundredThousandLoan from "../pages/bank/garanti/HundredThousandLoan";

// İş Bankası Pages
import IsBankasiFiveThousandLoan from "../pages/bank/isbankasi/FiveThousandLoan";
import IsBankasiSevenThousandFiveHundredLoan from "../pages/bank/isbankasi/SevenThousandFiveHundredLoan";
import IsBankasiTenThousandLoan from "../pages/bank/isbankasi/TenThousandLoan";
import IsBankasiFifteenThousandLoan from "../pages/bank/isbankasi/FifteenThousandLoan";
import IsBankasiTwentyThousandLoan from "../pages/bank/isbankasi/TwentyThousandLoan";
import IsBankasiTwentyFiveThousandLoan from "../pages/bank/isbankasi/TwentyFiveThousandLoan";
import IsBankasiFiftyThousandLoan from "../pages/bank/isbankasi/FiftyThousandLoan";
import IsBankasiHundredThousandLoan from "../pages/bank/isbankasi/HundredThousandLoan";

// Enpara Pages
import EnparaFiveThousandLoan from "../pages/bank/enpara/FiveThousandLoan";
import EnparaSevenThousandFiveHundredLoan from "../pages/bank/enpara/SevenThousandFiveHundredLoan";
import EnparaTenThousandLoan from "../pages/bank/enpara/TenThousandLoan";
import EnparaFifteenThousandLoan from "../pages/bank/enpara/FifteenThousandLoan";
import EnparaTwentyThousandLoan from "../pages/bank/enpara/TwentyThousandLoan";
import EnparaTwentyFiveThousandLoan from "../pages/bank/enpara/TwentyFiveThousandLoan";
import EnparaFiftyThousandLoan from "../pages/bank/enpara/FiftyThousandLoan";
import EnparaHundredThousandLoan from "../pages/bank/enpara/HundredThousandLoan";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/bank/:bankSlug" element={<BankDetail />} />
      <Route path="/mevduat" element={<Mevduat />} />
      
      {/* Enpara Routes */}
      <Route path="/bank/enpara/5000-tl-faizsiz-kredi" element={<EnparaFiveThousandLoan />} />
      <Route path="/bank/enpara/7500-tl-faizsiz-kredi" element={<EnparaSevenThousandFiveHundredLoan />} />
      <Route path="/bank/enpara/10000-tl-faizsiz-kredi" element={<EnparaTenThousandLoan />} />
      <Route path="/bank/enpara/15000-tl-faizsiz-kredi" element={<EnparaFifteenThousandLoan />} />
      <Route path="/bank/enpara/20000-tl-faizsiz-kredi" element={<EnparaTwentyThousandLoan />} />
      <Route path="/bank/enpara/25000-tl-faizsiz-kredi" element={<EnparaTwentyFiveThousandLoan />} />
      <Route path="/bank/enpara/50000-tl-faizsiz-kredi" element={<EnparaFiftyThousandLoan />} />
      <Route path="/bank/enpara/100000-tl-faizsiz-kredi" element={<EnparaHundredThousandLoan />} />
      
      {/* QNB Routes */}
      <Route path="/bank/qnb/5000-tl-faizsiz-kredi" element={<FiveThousandLoan />} />
      <Route path="/bank/qnb/7500-tl-faizsiz-kredi" element={<SevenThousandFiveHundredLoan />} />
      <Route path="/bank/qnb/10000-tl-faizsiz-kredi" element={<TenThousandLoan />} />
      <Route path="/bank/qnb/15000-tl-faizsiz-kredi" element={<FifteenThousandLoan />} />
      <Route path="/bank/qnb/20000-tl-faizsiz-kredi" element={<TwentyThousandLoan />} />
      <Route path="/bank/qnb/25000-tl-faizsiz-kredi" element={<TwentyFiveThousandLoan />} />
      <Route path="/bank/qnb/50000-tl-faizsiz-kredi" element={<FiftyThousandLoan />} />
      <Route path="/bank/qnb/100000-tl-faizsiz-kredi" element={<HundredThousandLoan />} />
      
      {/* Denizbank Routes */}
      <Route path="/bank/denizbank/5000-tl-faizsiz-kredi" element={<DenizbankFiveThousandLoan />} />
      <Route path="/bank/denizbank/7500-tl-faizsiz-kredi" element={<DenizbankSevenThousandFiveHundredLoan />} />
      <Route path="/bank/denizbank/10000-tl-faizsiz-kredi" element={<DenizbankTenThousandLoan />} />
      <Route path="/bank/denizbank/15000-tl-faizsiz-kredi" element={<DenizbankFifteenThousandLoan />} />
      <Route path="/bank/denizbank/20000-tl-faizsiz-kredi" element={<DenizbankTwentyThousandLoan />} />
      <Route path="/bank/denizbank/25000-tl-faizsiz-kredi" element={<DenizbankTwentyFiveThousandLoan />} />
      <Route path="/bank/denizbank/50000-tl-faizsiz-kredi" element={<DenizbankFiftyThousandLoan />} />
      <Route path="/bank/denizbank/100000-tl-faizsiz-kredi" element={<DenizbankHundredThousandLoan />} />
      
      {/* Akbank Routes */}
      <Route path="/bank/akbank/5000-tl-faizsiz-kredi" element={<AkbankFiveThousandLoan />} />
      <Route path="/bank/akbank/7500-tl-faizsiz-kredi" element={<AkbankSevenThousandFiveHundredLoan />} />
      <Route path="/bank/akbank/10000-tl-faizsiz-kredi" element={<AkbankTenThousandLoan />} />
      <Route path="/bank/akbank/15000-tl-faizsiz-kredi" element={<AkbankFifteenThousandLoan />} />
      <Route path="/bank/akbank/20000-tl-faizsiz-kredi" element={<AkbankTwentyThousandLoan />} />
      <Route path="/bank/akbank/25000-tl-faizsiz-kredi" element={<AkbankTwentyFiveThousandLoan />} />
      <Route path="/bank/akbank/50000-tl-faizsiz-kredi" element={<AkbankFiftyThousandLoan />} />
      <Route path="/bank/akbank/100000-tl-faizsiz-kredi" element={<AkbankHundredThousandLoan />} />
      
      {/* Garanti BBVA Routes */}
      <Route path="/bank/garanti/5000-tl-faizsiz-kredi" element={<GarantiFiveThousandLoan />} />
      <Route path="/bank/garanti/7500-tl-faizsiz-kredi" element={<GarantiSevenThousandFiveHundredLoan />} />
      <Route path="/bank/garanti/10000-tl-faizsiz-kredi" element={<GarantiTenThousandLoan />} />
      <Route path="/bank/garanti/15000-tl-faizsiz-kredi" element={<GarantiFifteenThousandLoan />} />
      <Route path="/bank/garanti/20000-tl-faizsiz-kredi" element={<GarantiTwentyThousandLoan />} />
      <Route path="/bank/garanti/25000-tl-faizsiz-kredi" element={<GarantiTwentyFiveThousandLoan />} />
      <Route path="/bank/garanti/50000-tl-faizsiz-kredi" element={<GarantiFiftyThousandLoan />} />
      <Route path="/bank/garanti/100000-tl-faizsiz-kredi" element={<GarantiHundredThousandLoan />} />
      
      {/* İş Bankası Routes */}
      <Route path="/bank/isbankasi/5000-tl-faizsiz-kredi" element={<IsBankasiFiveThousandLoan />} />
      <Route path="/bank/isbankasi/7500-tl-faizsiz-kredi" element={<IsBankasiSevenThousandFiveHundredLoan />} />
      <Route path="/bank/isbankasi/10000-tl-faizsiz-kredi" element={<IsBankasiTenThousandLoan />} />
      <Route path="/bank/isbankasi/15000-tl-faizsiz-kredi" element={<IsBankasiFifteenThousandLoan />} />
      <Route path="/bank/isbankasi/20000-tl-faizsiz-kredi" element={<IsBankasiTwentyThousandLoan />} />
      <Route path="/bank/isbankasi/25000-tl-faizsiz-kredi" element={<IsBankasiTwentyFiveThousandLoan />} />
      <Route path="/bank/isbankasi/50000-tl-faizsiz-kredi" element={<IsBankasiFiftyThousandLoan />} />
      <Route path="/bank/isbankasi/100000-tl-faizsiz-kredi" element={<IsBankasiHundredThousandLoan />} />
      
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
  );
};

export default AppRoutes;
