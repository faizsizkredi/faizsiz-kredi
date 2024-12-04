import BankCard from "../BankCard";
import { BANK_DATA } from "@/data/bankData";

interface BankListProps {
  sortOption: string;
  interestRates: any;
}

const BankList = ({ sortOption, interestRates }: BankListProps) => {
  const getSortedBanks = () => {
    let updatedBankData = [...BANK_DATA].map(bank => {
      const apiRate = interestRates?.find(rate => 
        rate.bank.toLowerCase().includes(bank.name.toLowerCase())
      );

      return {
        ...bank,
        interestRate: apiRate ? apiRate.rate : bank.interestRate,
        lastUpdate: apiRate?.lastupdate || bank.lastUpdate
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

  return (
    <div className="space-y-4 mb-12">
      {getSortedBanks().map((bank, index) => (
        <BankCard key={index} {...bank} />
      ))}
    </div>
  );
};

export default BankList;