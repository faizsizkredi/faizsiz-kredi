
import React from 'react';
import { Check } from "lucide-react";

const EasyLoanSteps = () => {
  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-6">En Kolay Kredi Başvuru Adımları</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-600 font-semibold">{index + 1}</span>
              </div>
              <h3 className="font-semibold text-lg">{step.title}</h3>
            </div>
            <p className="text-gray-600">{step.description}</p>
            <div className="mt-4">
              {step.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start mt-2">
                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const steps = [
  {
    title: "Dijital Kanallardan Başvur",
    description: "Bankaların mobil uygulamaları veya internet şubelerinden hızlıca başvuru yapın.",
    benefits: [
      "7/24 başvuru imkanı",
      "Sıra bekleme yok",
      "Dakikalar içinde sonuç alabilirsiniz"
    ]
  },
  {
    title: "Minimum Evrak İle Onay",
    description: "E-Devlet entegrasyonu sayesinde minimum evrak ile başvurunuzu tamamlayın.",
    benefits: [
      "Kimlik belgesi yeterli",
      "Gelir belgesi çoğu zaman gerekmiyor",
      "E-imza ile hızlı onay"
    ]
  },
  {
    title: "Online Kimlik Doğrulama",
    description: "Görüntülü görüşme ile kimlik doğrulaması yaparak şubeye gitmeye gerek kalmadan kredi kullanın.",
    benefits: [
      "Şubeye gitmeye gerek yok",
      "Video görüşme ile hızlı doğrulama",
      "Güvenli kimlik teyidi"
    ]
  },
  {
    title: "Anında Hesaba Aktarım",
    description: "Onaylanan kredi tutarı anında hesabınıza aktarılır.",
    benefits: [
      "Beklemeden paranızı kullanabilirsiniz",
      "Transfer ücreti yok",
      "Hesap açma zorunluluğu olmayan bankalar mevcut"
    ]
  }
];

export default EasyLoanSteps;
