import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import BankCard from "./BankCard";
import { useBankData } from "@/hooks/useBankData";

interface BankListProps {
  sortOption: "recommended" | "promotion" | "bank";
}

const BankList = ({ sortOption }: BankListProps) => {
  const { toast } = useToast();
  const { banks, isError, isLoading } = useBankData(sortOption);

  useEffect(() => {
    if (isError) {
      toast({
        title: "Hata",
        description: "Güncel faiz oranları alınamadı. Lütfen daha sonra tekrar deneyiniz.",
        variant: "destructive",
      });
    }
  }, [isError, toast]);

  if (isLoading) {
    return <div className="text-center py-8">Yükleniyor...</div>;
  }

  if (banks.length === 0) {
    return (
      <div className="text-center py-8 space-y-2">
        <p className="text-lg font-semibold text-gray-800">Şu anda faiz oranları görüntülenemiyor</p>
        <p className="text-gray-600">Lütfen daha sonra tekrar deneyiniz</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {banks.map((bank, index) => (
        <BankCard key={index} {...bank} />
      ))}
    </div>
  );
};

export default BankList;