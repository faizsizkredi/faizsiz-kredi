import { useQuery } from "@tanstack/react-query";

interface InterestRate {
  bank: string;
  rate: string;
  lastupdate: string;
}

// Mock data since we don't have API access
const mockInterestRates: InterestRate[] = [
  {
    bank: "Ziraat Bankası",
    rate: "1.89%",
    lastupdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    bank: "Vakıfbank",
    rate: "1.92%",
    lastupdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    bank: "Halkbank",
    rate: "1.95%",
    lastupdate: new Date().toLocaleDateString('tr-TR')
  },
  {
    bank: "İş Bankası",
    rate: "1.98%",
    lastupdate: new Date().toLocaleDateString('tr-TR')
  }
];

export const fetchInterestRates = async (): Promise<InterestRate[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockInterestRates;
};

export const useInterestRates = () => {
  return useQuery({
    queryKey: ['interestRates'],
    queryFn: fetchInterestRates,
    refetchInterval: 24 * 60 * 60 * 1000, // Refetch every 24 hours
    staleTime: 23 * 60 * 60 * 1000, // Consider data stale after 23 hours
  });
};