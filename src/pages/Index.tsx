
import { useState } from "react";
import FilterTabs from "../components/FilterTabs";
import { useInterestRates } from "../utils/api";
import { useToast } from "@/components/ui/use-toast";
import HomeMeta from "@/components/home/HomeMeta";
import HomeFAQ from "@/components/home/HomeFAQ";
import BankList from "@/components/home/BankList";
import IntroSection from "@/components/home/IntroSection";
import MainContent from "@/components/home/MainContent";

type SortOption = "recommended" | "promotion" | "bank" | "risky" | "easiest" | "affordable" | "zeroInterest" | "newCustomer" | "retired";

const Index = () => {
  const [sortOption, setSortOption] = useState<SortOption>("recommended");
  const { data: interestRates, isError } = useInterestRates();
  const { toast } = useToast();

  if (isError) {
    toast({
      title: "Hata",
      description: "Faiz oranları güncellenirken bir hata oluştu.",
      variant: "destructive"
    });
  }

  const currentRates = [
    {
      name: "QNB Finansbank",
      productName: "Hoş Geldin Kredisi",
      interestRate: "0.00",
      minTerm: "1",
      maxTerm: "6"
    },
    {
      name: "Akbank",
      productName: "Dijital Kredi",
      interestRate: "0.00",
      minTerm: "1",
      maxTerm: "6"
    },
    {
      name: "Garanti BBVA",
      productName: "İhtiyaç Kredisi",
      interestRate: "2.99",
      minTerm: "3",
      maxTerm: "36"
    },
    {
      name: "Yapı Kredi",
      productName: "İhtiyaç Kredisi",
      interestRate: "3.19",
      minTerm: "3",
      maxTerm: "36"
    },
    {
      name: "Ziraat Bankası",
      productName: "Tüketici Kredisi",
      interestRate: "2.89",
      minTerm: "3",
      maxTerm: "36"
    }
  ];

  const extendedRates = [
    {
      bank: "QNB Finansbank",
      product: "Hoş Geldin Kredisi",
      rate: "0.00",
      term: "6 Ay",
      maxAmount: "50.000 TL",
      requirements: "Yeni Müşteri"
    },
    {
      bank: "Akbank",
      product: "Dijital Kredi",
      rate: "0.00",
      term: "6 Ay",
      maxAmount: "45.000 TL",
      requirements: "Yeni Müşteri"
    },
    {
      bank: "Garanti BBVA",
      product: "İhtiyaç Kredisi",
      rate: "0.00",
      term: "3 Ay",
      maxAmount: "40.000 TL",
      requirements: "Yeni Müşteri"
    },
    {
      bank: "Yapı Kredi",
      product: "Hoş Geldin Kredisi",
      rate: "0.00",
      term: "3 Ay",
      maxAmount: "35.000 TL",
      requirements: "Yeni Müşteri"
    },
    {
      bank: "ING Bank",
      product: "Hoş Geldin Kredisi",
      rate: "0.00",
      term: "3 Ay",
      maxAmount: "30.000 TL",
      requirements: "Yeni Müşteri"
    },
    {
      bank: "TEB",
      product: "Hoş Geldin Kredisi",
      rate: "0.00",
      term: "6 Ay",
      maxAmount: "25.000 TL",
      requirements: "Yeni Müşteri"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <HomeMeta />

      <div className="container mx-auto py-8">
        <IntroSection />
        
        <FilterTabs onSortChange={setSortOption} />
        
        <BankList sortOption={sortOption} interestRates={interestRates} />
        
        <HomeFAQ />

        <MainContent currentRates={currentRates} extendedRates={extendedRates} />
      </div>
    </div>
  );
};

export default Index;
