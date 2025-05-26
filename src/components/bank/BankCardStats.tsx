
import { Clock, Users, ThumbsUp, TrendingUp, Calculator, Shield } from "lucide-react";

interface BankCardStatsProps {
  interestRate: string;
  term: string;
  amount: string;
  monthlyPayment?: string;
  processingTime?: string;
  targetAudience?: string;
  applicationCount?: string;
}

const BankCardStats = ({
  interestRate,
  term,
  amount,
  monthlyPayment = "Hesaplanıyor...",
  processingTime = "30 dakika",
  targetAudience = "Tüm müşteriler",
  applicationCount = "1000+"
}: BankCardStatsProps) => {
  return (
    <div className="space-y-6">
      {/* Main Stats Grid with Enhanced Design */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="group/stat bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl border border-green-100 hover:border-green-200 transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-green-600 group-hover/stat:scale-110 transition-transform duration-300" />
            <p className="text-sm text-green-700 font-medium">Faiz Oranı</p>
          </div>
          <p className="text-xl font-bold text-green-800" itemProp="interestRate">{interestRate}</p>
          {interestRate === "%0" && (
            <div className="text-xs text-green-600 font-medium mt-1 animate-pulse">
              🔥 Faizsiz Fırsat!
            </div>
          )}
        </div>

        <div className="group/stat bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-2xl border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-blue-600 group-hover/stat:scale-110 transition-transform duration-300" />
            <p className="text-sm text-blue-700 font-medium">Vade</p>
          </div>
          <p className="text-xl font-bold text-blue-800" itemProp="term">{term}</p>
          <div className="text-xs text-blue-600 font-medium mt-1">
            Esnek ödeme
          </div>
        </div>

        <div className="group/stat bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-2xl border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <Calculator className="w-4 h-4 text-purple-600 group-hover/stat:scale-110 transition-transform duration-300" />
            <p className="text-sm text-purple-700 font-medium">Kredi Tutarı</p>
          </div>
          <p className="text-xl font-bold text-purple-800" itemProp="amount">{amount}</p>
          <div className="text-xs text-purple-600 font-medium mt-1">
            Maksimum limit
          </div>
        </div>

        <div className="group/stat bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-2xl border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <Calculator className="w-4 h-4 text-orange-600 group-hover/stat:scale-110 transition-transform duration-300" />
            <p className="text-sm text-orange-700 font-medium">Aylık Taksit</p>
          </div>
          <p className="text-xl font-bold text-orange-800">{monthlyPayment}</p>
          <div className="text-xs text-orange-600 font-medium mt-1">
            Tahmini tutar
          </div>
        </div>
      </div>

      {/* Secondary Info Row with Enhanced Icons and Styling */}
      <div className="flex flex-col sm:flex-row gap-4 text-sm">
        <div className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-md group/info">
          <div className="p-1 bg-blue-100 rounded-lg group-hover/info:bg-blue-200 transition-colors duration-300">
            <Clock className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <span className="text-gray-500 font-medium">Onay Süresi:</span>
            <span className="text-gray-700 font-semibold ml-1">{processingTime}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-md group/info">
          <div className="p-1 bg-green-100 rounded-lg group-hover/info:bg-green-200 transition-colors duration-300">
            <Users className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <span className="text-gray-500 font-medium">Hedef Kitle:</span>
            <span className="text-gray-700 font-semibold ml-1">{targetAudience}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-md group/info">
          <div className="p-1 bg-purple-100 rounded-lg group-hover/info:bg-purple-200 transition-colors duration-300">
            <ThumbsUp className="w-4 h-4 text-purple-600" />
          </div>
          <div>
            <span className="text-gray-500 font-medium">Başvuru:</span>
            <span className="text-gray-700 font-semibold ml-1">{applicationCount}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-md group/info">
          <div className="p-1 bg-red-100 rounded-lg group-hover/info:bg-red-200 transition-colors duration-300">
            <Shield className="w-4 h-4 text-red-600" />
          </div>
          <div>
            <span className="text-gray-500 font-medium">Güvenlik:</span>
            <span className="text-gray-700 font-semibold ml-1">256-bit SSL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankCardStats;
