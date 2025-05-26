
interface BankCardTrustIndicatorsProps {
  lastUpdate?: string;
}

const BankCardTrustIndicators = ({ lastUpdate }: BankCardTrustIndicatorsProps) => {
  return (
    <div className="flex items-center justify-between pt-6 border-t border-gradient-to-r from-gray-100 via-blue-100 to-gray-100">
      <div className="flex items-center space-x-4 text-sm">
        <div className="flex items-center group/indicator">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse group-hover/indicator:scale-125 transition-transform duration-300"></div>
          <span className="text-gray-700 font-medium">Anlık Onay</span>
        </div>
        <div className="flex items-center group/indicator">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 group-hover/indicator:scale-125 transition-transform duration-300"></div>
          <span className="text-gray-700 font-medium">BDDK Güvencesi</span>
        </div>
        <div className="flex items-center group/indicator">
          <div className="w-3 h-3 bg-purple-500 rounded-full mr-2 group-hover/indicator:scale-125 transition-transform duration-300"></div>
          <span className="text-gray-700 font-medium">SSL Korumalı</span>
        </div>
      </div>
      <div className="flex items-center bg-gradient-to-r from-gray-100 to-blue-100 px-4 py-2 rounded-full shadow-sm">
        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping"></div>
        <span className="text-xs text-gray-600 font-medium">
          Son güncelleme: {lastUpdate || 'Bugün'}
        </span>
      </div>
    </div>
  );
};

export default BankCardTrustIndicators;
