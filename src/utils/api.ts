import { useQuery } from "@tanstack/react-query";

interface InterestRate {
  bank: string;
  rate: string;
  lastupdate: string;
}

export const fetchInterestRates = async () => {
  const response = await fetch('https://api.collectapi.com/economy/interestRates', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `apikey ${import.meta.env.VITE_COLLECT_API_KEY}`
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch interest rates');
  }

  const data = await response.json();
  return data.result as InterestRate[];
};

export const useInterestRates = () => {
  return useQuery({
    queryKey: ['interestRates'],
    queryFn: fetchInterestRates,
    refetchInterval: 24 * 60 * 60 * 1000, // Refetch every 24 hours
    staleTime: 23 * 60 * 60 * 1000, // Consider data stale after 23 hours
  });
};