
import React from 'react';
import { Bank } from '@/types/bank';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, XCircle } from 'lucide-react';

interface RetiredComparisonProps {
  banks: Bank[];
}

const RetiredComparison: React.FC<RetiredComparisonProps> = ({ banks }) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Emekliye Faizsiz Kredi Veren Bankalar Karşılaştırması</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Banka</TableHead>
              <TableHead>Promosyon</TableHead>
              <TableHead>Kredi Faiz Oranı</TableHead>
              <TableHead>Limit</TableHead>
              <TableHead>Vade</TableHead>
              <TableHead>Maaş Müşterisi Olma Şartı</TableHead>
              <TableHead>Online Başvuru</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {banks.map((bank, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{bank.name}</TableCell>
                <TableCell>{bank.specialOffer.replace('!', '')}</TableCell>
                <TableCell>{bank.interestRate}</TableCell>
                <TableCell>{bank.amount}</TableCell>
                <TableCell>{bank.term}</TableCell>
                <TableCell>
                  {bank.name === "Ziraat Bankası" || bank.name === "Halkbank" || bank.name === "Vakıfbank" ? 
                    <CheckCircle className="w-5 h-5 text-green-500" /> : 
                    <XCircle className="w-5 h-5 text-red-500" />
                  }
                </TableCell>
                <TableCell>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="text-sm text-gray-500 mt-4">
        * Tablodaki bilgiler bankaların resmi web sitelerinden alınmıştır ve son güncelleme tarihi: {new Date().toLocaleDateString('tr-TR')}
      </p>
    </div>
  );
};

export default RetiredComparison;
