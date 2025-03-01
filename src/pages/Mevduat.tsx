
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import DepositTypes from "@/components/mevduat/DepositTypes";
import DepositAdvantages from "@/components/mevduat/DepositAdvantages";
import InterestRates from "@/components/mevduat/InterestRates";
import DepositFAQ from "@/components/mevduat/DepositFAQ";
import { PageMeta } from "@/utils/seoUtils";

const Mevduat = () => {
  const currentYear = new Date().getFullYear();
  const title = `Mevduat Hesabı Açma ${currentYear} | En Yüksek Faizli Mevduat`;
  const description = "En yüksek faizli mevduat hesapları, vadeli ve vadesiz mevduat seçenekleri, döviz mevduatı ve e-mevduat hesapları hakkında detaylı bilgi. Güncel faiz oranları ve kampanyaları karşılaştırın.";
  const keywords = "mevduat hesabı, vadeli mevduat, vadesiz mevduat, yüksek faizli mevduat, döviz mevduatı, e-mevduat, mevduat faiz oranları, mevduat hesabı açma";

  return (
    <div className="min-h-screen bg-gray-50">
      <PageMeta
        title={title}
        description={description}
        keywords={keywords}
        pageSlug="mevduat"
        pageType="other"
      />

      <main className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Wallet className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Mevduat Hesabı</h1>
          </div>
          <p className="text-gray-600 max-w-3xl">
            Birikimlerinizi güvenle değerlendirin, yüksek faiz oranlarından yararlanın. 
            Vadeli, vadesiz ve döviz mevduat hesapları ile paranızı en iyi şekilde değerlendirin.
          </p>
        </header>

        <DepositTypes />
        <DepositAdvantages />
        <InterestRates />
        <DepositFAQ />

        <section className="bg-primary/5 rounded-lg p-8 text-center mt-8">
          <h2 className="text-2xl font-bold mb-4">Hemen Mevduat Hesabı Açın</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Birikimlerinizi değerlendirmek için en uygun mevduat hesabını seçin, 
            yüksek faiz avantajlarından yararlanın.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Başvuru Yap
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Mevduat;
