
import BankLoanHeader from "./loan-template/BankLoanHeader";
import BankLoanDetails from "./loan-template/BankLoanDetails";
import BankLoanCalculator from "./loan-template/BankLoanCalculator";
import BankLoanApplicationForm from "./loan-template/BankLoanApplicationForm";
import BankLoanRating from "./loan-template/BankLoanRating";
import BankLoanSimilar from "./loan-template/BankLoanSimilar";
import BankLoanSEO from "./loan-template/BankLoanSEO";
import BankLoanAmounts from "./BankLoanAmounts";
import BankProductGrid from "./BankProductGrid";
import { Bank } from "@/types/bank";

interface BankLoanTemplateProps {
  bankName: string;
  amount: string;
  iconColor: string;
  otherBanks?: Bank[];
}

const BankLoanTemplate = ({
  bankName,
  amount,
  iconColor,
  otherBanks = []
}: BankLoanTemplateProps) => {
  const formattedAmount = amount.replace(/\./g, "");
  const pageSlug = `bank/${bankName.toLowerCase()}/${formattedAmount}-tl-faizsiz-kredi`;
  const bankSlug = bankName.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="min-h-screen bg-gray-50">
      <BankLoanSEO 
        bankName={bankName} 
        formattedAmount={formattedAmount} 
        pageSlug={pageSlug} 
      />

      <main className="container mx-auto px-4 py-8">
        <BankLoanHeader 
          bankName={bankName} 
          amount={formattedAmount} 
          iconColor={iconColor} 
        />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <BankLoanDetails 
              bankName={bankName} 
              amount={amount} 
              formattedAmount={formattedAmount} 
            />
            
            <BankLoanCalculator formattedAmount={formattedAmount} />
            
            <BankLoanAmounts 
              bankName={bankName} 
              bankSlug={bankSlug} 
              currentAmount={formattedAmount} 
            />
          </div>

          <div>
            <BankLoanApplicationForm />
            <BankLoanRating />
            <BankLoanSimilar otherBanks={otherBanks} />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Diğer {bankName} Kredi Ürünleri</h2>
          <BankProductGrid bankName={bankName} />
        </div>
      </main>
    </div>
  );
};

export default BankLoanTemplate;
