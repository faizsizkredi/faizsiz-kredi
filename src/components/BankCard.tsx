import { useState } from "react";
import { ChevronDown, ChevronUp, Star, ShieldCheck, Clock, FileText, Users, ThumbsUp, Award, CheckCircle, AlertCircle, Calendar, Calculator } from "lucide-react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
  advantages?: string[];
  disadvantages?: string[];
  requirements?: string[];
  applicationSteps?: string[];
  customerReviews?: Array<{ rating: number; comment: string; author: string; date: string }>;
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
  advantages = ["Hızlı başvuru süreci", "Masrafsız kullandırım"],
  disadvantages = ["Belirli şartlar geçerlidir"],
  requirements = ["18 yaşını doldurmuş olmak", "Düzenli gelir sahibi olmak"],
  applicationSteps = ["Online başvuru yapın", "Belgeleri yükleyin", "Onay bekleyin"],
  customerReviews = [
    {
      rating: 5,
      comment: "Çok hızlı ve kolay bir süreçti",
      author: "Ahmet Y.",
      date: "2024-02-15"
    }
  ]
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

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": `${name} - ${specialOffer}`,
    "description": `${amount} tutarında, ${term} vadeli, ${interestRate} faiz oranlı kredi fırsatı`,
    "provider": {
      "@type": "BankOrCreditUnion",
      "name": name
    },
    "interestRate": interestRate,
    "amount": amount,
    "term": term,
    "review": {
      "@type": "AggregateRating",
      "ratingValue": userRating,
      "reviewCount": parseInt(applicationCount) || 1000
    }
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      <Card className="mb-4 transition-all hover:shadow-lg">
        <CardContent className="p-6">
          <article itemScope itemType="https://schema.org/FinancialProduct">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="w-24 h-12 flex items-center justify-center bg-gray-50 rounded-lg">
                  {typeof icon === 'function' ? <IconComponent /> : icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Link 
                      to={`/bank/${getBankSlug(name)}`} 
                      className="text-xl font-semibold hover:text-primary transition-colors"
                      itemProp="url"
                    >
                      <span itemProp="name">{name}</span>
                    </Link>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="flex items-center text-yellow-500">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="ml-1 text-sm" itemProp="ratingValue">{userRating}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Kullanıcı Değerlendirmesi</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <h2 className="text-lg font-medium text-gray-900" itemProp="description">{specialOffer}</h2>
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
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md transition-colors flex items-center gap-2"
                >
                  <span>Hemen Başvur</span>
                  <CheckCircle className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-600">Faiz Oranı</p>
                <p className="font-semibold" itemProp="interestRate">{interestRate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Vade</p>
                <p className="font-semibold" itemProp="term">{term}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Kredi Tutarı</p>
                <p className="font-semibold" itemProp="amount">{amount}</p>
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
                <Users className="w-4 h-4" />
                <span>Hedef Kitle: {targetAudience}</span>
              </div>
              <div className="flex items-center gap-1">
                <ThumbsUp className="w-4 h-4" />
                <span>{applicationCount} başvuru</span>
              </div>
            </div>

            <Accordion type="single" collapsible className="mt-4">
              <AccordionItem value="details">
                <AccordionTrigger onClick={() => setIsExpanded(!isExpanded)}>
                  Detaylar ve Avantajlar
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4 text-green-500" />
                        Kredi Avantajları
                      </h3>
                      <ul className="space-y-2">
                        {advantages.map((advantage, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {advantage}
                          </li>
                        ))}
                      </ul>

                      <h3 className="font-medium mb-2 mt-4 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-red-500" />
                        Dikkat Edilmesi Gerekenler
                      </h3>
                      <ul className="space-y-2">
                        {disadvantages.map((disadvantage, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="text-red-500">•</span>
                            {disadvantage}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-blue-500" />
                        Başvuru Şartları ve Belgeler
                      </h3>
                      <ul className="space-y-2">
                        {requirements.map((requirement, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-blue-500" />
                            {requirement}
                          </li>
                        ))}
                      </ul>

                      <h3 className="font-medium mb-2 mt-4 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-purple-500" />
                        Başvuru Adımları
                      </h3>
                      <ul className="space-y-2">
                        {applicationSteps.map((step, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="text-purple-500">{index + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      Müşteri Yorumları
                    </h3>
                    <div className="space-y-4">
                      {customerReviews.map((review, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="font-medium">{review.author}</span>
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <p className="text-sm text-gray-600">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Calculator className="w-4 h-4 text-indigo-500" />
                      Örnek Ödeme Planı
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Toplam Geri Ödeme</p>
                          <p className="font-semibold">{amount}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Aylık Taksit</p>
                          <p className="font-semibold">{monthlyPayment}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Toplam Maliyet</p>
                          <p className="font-semibold">Hesaplanıyor...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </article>
        </CardContent>
      </Card>
    </>
  );
};

export default BankCard;