import { useQuery } from "@tanstack/react-query";

interface InterestRate {
  bank: string;
  rate: string;
  lastupdate: string;
}

export const fetchInterestRates = async () => {
  const response = await fetch('https://api.collectapi.com/economy/allCurrency', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `apikey ${import.meta.env.VITE_COLLECT_API_KEY}`
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch currency rates');
  }

  const data = await response.json();
  // Transform the data to match our expected format
  const rates = data.result.map((item: any) => ({
    bank: item.name || 'Unknown Bank',
    rate: item.rate || '0%',
    lastupdate: new Date().toLocaleDateString('tr-TR')
  }));
  
  return rates as InterestRate[];
};

export const useInterestRates = () => {
  return useQuery({
    queryKey: ['interestRates'],
    queryFn: fetchInterestRates,
    refetchInterval: 24 * 60 * 60 * 1000, // Refetch every 24 hours
    staleTime: 23 * 60 * 60 * 1000, // Consider data stale after 23 hours
  });
};