
const BankCardBadge = () => {
  return (
    <div className="absolute top-4 right-4 z-20">
      <div className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 text-white px-4 py-2 rounded-2xl text-xs font-bold shadow-lg shadow-yellow-500/25 animate-bounce hover:animate-none transition-all duration-300 hover:scale-110">
        <div className="flex items-center gap-1">
          <span className="text-sm">⭐</span>
          <span>ÖNERİLEN</span>
          <span className="text-sm">🔥</span>
        </div>
      </div>
    </div>
  );
};

export default BankCardBadge;
