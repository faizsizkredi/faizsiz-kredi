
const BankCardOverlay = () => {
  return (
    <>
      {/* Advanced Hover Effect Overlay with Gradient Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/3 via-transparent to-green-600/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>

      {/* Subtle Border Animation */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-lg border-2 border-gradient-to-r from-blue-400/30 via-purple-400/30 to-green-400/30 animate-pulse"></div>
      </div>
    </>
  );
};

export default BankCardOverlay;
