
interface BankCardBackgroundProps {
  interestRate: string;
}

const BankCardBackground = ({ interestRate }: BankCardBackgroundProps) => {
  return (
    <>
      {/* Advanced Animated Background Elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100/60 via-purple-100/40 to-transparent rounded-full blur-2xl opacity-50 group-hover:opacity-80 group-hover:w-48 group-hover:h-48 transition-all duration-700 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-100/60 via-emerald-100/40 to-transparent rounded-full blur-xl opacity-30 group-hover:opacity-60 group-hover:w-40 group-hover:h-40 transition-all duration-700"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-100/20 to-pink-100/20 rounded-full blur-3xl opacity-20 group-hover:opacity-40 group-hover:rotate-45 transition-all duration-1000"></div>
      
      {/* Special Zero Interest Animated Banner */}
      {interestRate === "%0" && (
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-400 via-blue-500 via-purple-600 to-pink-500 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[slide-in-right_2s_ease-in-out_infinite]"></div>
        </div>
      )}

      {/* Floating Action Indicators */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-l-2xl px-3 py-2 shadow-lg border border-gray-200/50">
          <div className="text-xs text-gray-700 font-medium">Hemen Başvur</div>
          <div className="text-xl">→</div>
        </div>
      </div>
    </>
  );
};

export default BankCardBackground;
