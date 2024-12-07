import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import BankDetail from "../pages/BankDetail";
import BanksIndex from "../pages/banks/Index";
import AffordableIndex from "../pages/affordable/Index";
import ZeroInterestIndex from "../pages/zeroInterest/Index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/bank/:bankSlug" element={<BankDetail />} />
      <Route path="/bank/:bankSlug/:amount-tl-faizsiz-kredi" element={<BankDetail />} />
      <Route path="/en-uygun-kredi" element={<AffordableIndex />} />
      <Route path="/sifir-faizli-kredi" element={<ZeroInterestIndex />} />
      <Route path="/tum-bankalar" element={<BanksIndex />} />
    </Routes>
  );
};

export default AppRoutes;