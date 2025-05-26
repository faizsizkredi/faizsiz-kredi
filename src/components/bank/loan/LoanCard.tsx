
import { Clock, Users, Star, TrendingUp, Shield, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface LoanCardProps {
  bankName: string;
  loan: {
    amount: string;
    label: string;
    interestRate: string;
    term: string;
    processingTime: string;
    targetAudience: string;
    applicationCount: string;
    lastUpdate: string;
  };
  bankSlug: string;
}

const LoanCard = ({ bankName, loan, bankSlug }: LoanCardProps) => {
  const isZeroInterest = loan.interestRate === "%0";
  
  return (
    <Card className="group relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 border-2 border-transparent hover:border-blue-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/40 to-purple-100/30 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-100/40 to-emerald-100/30 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
      
      {/* Zero Interest Banner */}
      {isZeroInterest && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-pulse"></div>
      )}

      {/* Premium Badge */}
      <div className="absolute top-4 right-4 z-10">
        <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white border-0 shadow-lg animate-pulse hover:animate-none transition-all duration-300 hover:scale-110">
          <Star className="w-3 h-3 mr-1" />
          ÖNERİLEN
        </Badge>
      </div>

      <div className="relative p-6 space-y-6">
        {/* Header Section with Enhanced Design */}
        <div className="flex items-start justify-between">
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {bankName.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                  {bankName}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-current' : ''}`} />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">4.5</span>
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs font-medium">Yükselen</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-gray-900">
                {loan.label} {isZeroInterest ? 'Faizsiz' : ''} Kredi
              </h4>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Son güncelleme: {loan.lastUpdate}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid with Enhanced Visual Design */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100 hover:border-green-200 transition-all duration-300 hover:scale-105">
            <p className="text-xs text-green-700 font-medium mb-1">Faiz Oranı</p>
            <p className="text-lg font-bold text-green-800">{loan.interestRate}</p>
            {isZeroInterest && (
              <div className="text-xs text-green-600 font-medium mt-1 animate-pulse">
                🔥 Faizsiz!
              </div>
            )}
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:scale-105">
            <p className="text-xs text-blue-700 font-medium mb-1">Vade</p>
            <p className="text-lg font-bold text-blue-800">{loan.term}</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:scale-105">
            <p className="text-xs text-purple-700 font-medium mb-1">Kredi Tutarı</p>
            <p className="text-lg font-bold text-purple-800">{loan.label}</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-xl border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:scale-105">
            <p className="text-xs text-orange-700 font-medium mb-1">Aylık Taksit</p>
            <p className="text-lg font-bold text-orange-800">Hesaplanıyor...</p>
          </div>
        </div>

        {/* Info Row with Enhanced Icons */}
        <div className="flex flex-col sm:flex-row gap-3 text-sm">
          <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg border border-blue-100">
            <Clock className="w-4 h-4 text-blue-600" />
            <span className="text-gray-700">Onay: <strong>{loan.processingTime}</strong></span>
          </div>
          
          <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg border border-green-100">
            <Users className="w-4 h-4 text-green-600" />
            <span className="text-gray-700">Hedef: <strong>{loan.targetAudience}</strong></span>
          </div>
          
          <div className="flex items-center gap-2 bg-purple-50 px-3 py-2 rounded-lg border border-purple-100">
            <TrendingUp className="w-4 h-4 text-purple-600" />
            <span className="text-gray-700">Başvuru: <strong>{loan.applicationCount}</strong></span>
          </div>
          
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
            <Shield className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700">BDDK <strong>Onaylı</strong></span>
          </div>
        </div>

        {/* Action Section with Enhanced CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-gray-600">Anında Onay</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span className="text-gray-600">Masrafsız</span>
            </div>
          </div>
          
          <Link 
            to={`/bank/${bankSlug}/${loan.amount}-tl-faizsiz-kredi`}
            className="inline-flex"
          >
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span>Hemen Başvur</span>
              <TrendingUp className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/3 to-purple-600/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </Card>
  );
};

export default LoanCard;
