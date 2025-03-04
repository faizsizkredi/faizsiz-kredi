
import { Card, CardContent } from "@/components/ui/card";

const NewCustomerEligibility = () => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Kredi Başvuru Şartları</h2>
      <Card>
        <CardContent className="p-6">
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>18 yaşını doldurmuş olmak</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>Düzenli gelir sahibi olmak</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>İlgili bankada daha önce hesap açmamış olmak</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>Son 6 ayda kredi ödemelerinde gecikme yaşamamış olmak</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span>Geçerli bir kimlik belgesine sahip olmak</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewCustomerEligibility;
