import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";

const LoanCalculator = () => {
  const [amount, setAmount] = useState<string>("");
  const [term, setTerm] = useState<string>("");
  const [rate, setRate] = useState<string>("");
  const location = useLocation();

  const tabs = [
    { name: "İhtiyaç", path: "/ihtiyac-kredisi" },
    { name: "Konut", path: "/konut-kredisi" },
    { name: "Taşıt", path: "/tasit-kredisi" },
    { name: "Kobi", path: "/kobi-kredisi" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex space-x-1 rounded-lg bg-gray-50 p-1 mb-6">
        {tabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            className={cn(
              "flex-1 rounded-lg px-3 py-2 text-sm font-medium text-center transition-colors",
              location.pathname === tab.path
                ? "bg-white text-primary shadow"
                : "text-gray-600 hover:bg-white/50 hover:text-primary"
            )}
          >
            {tab.name}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Kredi Tutarı (TL)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Tutar giriniz"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Vade (Ay)
          </label>
          <input
            type="number"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Vade giriniz"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Faiz Oranı (%)
          </label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Faiz oranı giriniz"
          />
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;