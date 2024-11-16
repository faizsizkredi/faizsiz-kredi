import { useState } from "react";
import { ChevronDown, ChevronUp, Star, ShieldCheck, Clock, FileText } from "lucide-react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface BankCardProps {
  name: string;
  icon: ReactNode | React.ComponentType;
  specialOffer: string;
  interestRate: string;
  term: string;
  amount: string;
  details: string[];
  promotionScore?: number;
  lastUpdate?: string;
  targetAudience?: string;
  monthlyPayment?: string;
  processingTime?: string;
  requiredDocuments?: string[];
  userRating?: number;
  applicationCount?: string;
  trustBadges?: string[];
}

const BankCard = ({
  name,
  icon,
  specialOffer,
  interestRate,
  term,
  amount,
  details,
  lastUpdate,
  targetAudience = "Tüm müşteriler",
  monthlyPayment = "Hesaplanıyor...",
  processingTime = "30 dakika",
  requiredDocuments = ["Kimlik", "Gelir belgesi"],
  userRating = 4.5,
  applicationCount = "1000+",
  trustBadges = ["BDDK Onaylı"],
}: BankCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getBankSlug = (bankName: string) => {
    return bankName
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/ı/g, 'i')
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c');
  };

  const IconComponent = icon as React.ComponentType;

  return (
    <Card className="mb-4 transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-24 h-12 flex items-center justify-center bg-gray-50 rounded-lg">
              {typeof icon === 'function' ? <IconComponent /> : icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Link to={`/bank/${getBankSlug(name)}`} className="text-xl font-semibold hover:text-primary transition-colors">
                  {name}
                </Link>
                <div className="flex items-center text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="ml-1 text-sm">{userRating}</span>
                </div>
              </div>
              <h2 className="text-lg font-medium text-gray-900">{specialOffer}</h2>
              <p className="text-sm text-gray-600 mt-1">
                {lastUpdate && `Son güncelleme: ${lastUpdate}`}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2">
              {trustBadges.map((badge, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  {badge}
                </Badge>
              ))}
            </div>
            <button
              onClick={() => window.open("#", "_blank")}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md transition-colors"
            >
              Hemen Başvur →
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-600">Faiz Oranı</p>
            <p className="font-semibold">{interestRate}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Vade</p>
            <p className="font-semibold">{term}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Kredi Tutarı</p>
            <p className="font-semibold">{amount}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Aylık Taksit</p>
            <p className="font-semibold">{monthlyPayment}</p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>Onay Süresi: {processingTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <FileText className="w-4 h-4" />
            <span>Hedef Kitle: {targetAudience}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            <span>{applicationCount} başvuru</span>
          </div>
        </div>

        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="details">
            <AccordionTrigger onClick={() => setIsExpanded(!isExpanded)}>
              Detaylar ve Avantajlar
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <h3 className="font-medium mb-2">Kredi Avantajları</h3>
                  <ul className="space-y-2">
                    {details.map((detail, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-green-500">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Gerekli Belgeler</h3>
                  <ul className="space-y-2">
                    {requiredDocuments.map((doc, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-blue-500">•</span>
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default BankCard;