import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { BANK_DATA } from "@/data/bankData";

export const useBankData = (sortOption: "recommended" | "promotion" | "bank") => {
  const { data: interestRates, isError, isLoading } = useQuery({
    queryKey: ['interestRates'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('bank_interest_rates')
        .select('*')
        .gt('last_updated', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString());
      
      if (error) throw error;
      if (!data || data.length === 0) throw new Error('Güncel faiz oranları bulunamadı');
      return data;
    },
    retry: 1
  });

  const getSortedBanks = () => {
    if (isLoading || isError || !interestRates) {
      return [];
    }

    let updatedBankData = [...BANK_DATA].map(bank => {
      const apiRate = interestRates.find(rate => 
        rate.bank_name.toLowerCase().includes(bank.name.toLowerCase())
      );
      
      return {
        ...bank,
        interestRate: apiRate ? apiRate.interest_rate : bank.interestRate,
        lastUpdate: apiRate?.last_updated ? new Date(apiRate.last_updated).toLocaleString('tr-TR') : undefined
      };
    });

    switch (sortOption) {
      case "promotion":
        return updatedBankData.sort((a, b) => b.promotionScore - a.promotionScore);
      case "bank":
        return updatedBankData.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return updatedBankData;
    }
  };

  return {
    banks: getSortedBanks(),
    isLoading,
    isError
  };
};