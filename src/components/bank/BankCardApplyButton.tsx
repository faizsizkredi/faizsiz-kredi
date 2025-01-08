import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const BankCardApplyButton = () => {
  return (
    <button
      onClick={() => window.open("#", "_blank")}
      className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md transition-colors flex items-center justify-center gap-2"
    >
      <span>Hemen Başvur</span>
      <CheckCircle className="w-4 h-4" />
    </button>
  );
};

export default BankCardApplyButton;