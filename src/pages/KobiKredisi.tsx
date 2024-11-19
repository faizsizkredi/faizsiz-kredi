import { Building2 } from "lucide-react";
import LoanPageLayout from "@/components/loan/LoanPageLayout";
import LoanTypeTabs from "@/components/loan/LoanTypeTabs";

const KobiKredisi = () => {
  const faqs = [
    {
      question: "KOBİ kredisi için hangi belgeler gerekli?",
      answer: "Vergi levhası, son 3 yıllık bilanço ve gelir tablosu, ticaret sicil gazetesi, imza sirküleri ve şirket ortaklarının kimlikleri genellikle istenen temel belgelerdir."
    },
    {
      question: "KOBİ kredisi başvurusu ne kadar sürede sonuçlanır?",
      answer: "Başvurular genellikle 3-5 iş günü içinde sonuçlanır. Belgelerin eksiksiz olması süreci hızlandırır."
    },
    {
      question: "Yeni kurulan şirketler KOBİ kredisi alabilir mi?",
      answer: "Bazı bankalar yeni kurulan şirketlere özel kredi paketleri sunmaktadır. Genellikle 6 ay-1 yıl arası faaliyet geçmişi aranır."
    }
  ];

  return (
    <LoanPageLayout
      title="KOBİ Kredisi"
      description="2024 yılı güncel KOBİ kredisi kampanyaları, faiz oranları ve başvuru koşulları. En uygun KOBİ kredisi veren bankalar."
      keywords="KOBİ kredisi, işletme kredisi, esnaf kredisi, kredi hesaplama, kredi başvurusu"
      icon={Building2}
      activeTab="kobi"
      faqs={faqs}
      additionalContent={<LoanTypeTabs />}
    />
  );
};

export default KobiKredisi;