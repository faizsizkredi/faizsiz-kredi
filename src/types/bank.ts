import { ReactNode } from "react";

export interface Bank {
  name: string;
  icon: ReactNode | React.ComponentType;
  specialOffer: string;
  interestRate: string;
  term: string;
  amount: string;
  details: string[];
  promotionScore?: number;
  lastUpdate?: string;
  products?: BankProduct[];
  description?: string;
}

export interface BankProduct {
  title: string;
  interestRate: string;
  minTerm: string;
  maxTerm: string;
  description?: string;
  features?: string[];
}

export interface BankRate {
  name: string;
  productName: string;
  interestRate: string;
  minTerm: string;
  maxTerm: string;
}