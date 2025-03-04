
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from "lucide-react";

const EasyBankComparison = () => {
  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-6">En Kolay Kredi Veren Bankaların Karşılaştırması</h2>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Banka</TableHead>
              <TableHead>Online Başvuru</TableHead>
              <TableHead>Anında Onay</TableHead>
              <TableHead>Gelir Belgesi</TableHead>
              <TableHead>Video Görüşme</TableHead>
              <TableHead>E-Devlet Entegrasyonu</TableHead>
              <TableHead>Min. Kredi Notu</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisonData.map((bank, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{bank.name}</TableCell>
                <TableCell>{bank.onlineApplication ? <Check className="h-5 w-5 text-green-500" /> : <X className="h-5 w-5 text-red-500" />}</TableCell>
                <TableCell>{bank.instantApproval ? <Check className="h-5 w-5 text-green-500" /> : <X className="h-5 w-5 text-red-500" />}</TableCell>
                <TableCell>{bank.incomeStatement ? <Check className="h-5 w-5 text-green-500" /> : <X className="h-5 w-5 text-red-500" />}</TableCell>
                <TableCell>{bank.videoCall ? <Check className="h-5 w-5 text-green-500" /> : <X className="h-5 w-5 text-red-500" />}</TableCell>
                <TableCell>{bank.eGovernment ? <Check className="h-5 w-5 text-green-500" /> : <X className="h-5 w-5 text-red-500" />}</TableCell>
                <TableCell>{bank.minCreditScore}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <p className="text-sm text-gray-500 mt-4">* Tablodaki veriler ilgili bankaların resmi web sitelerinden alınmıştır. Başvuru koşulları bankaların politikalarına göre değişiklik gösterebilir.</p>
    </div>
  );
};

const comparisonData = [
  {
    name: "Garanti BBVA",
    onlineApplication: true,
    instantApproval: true,
    incomeStatement: false,
    videoCall: true,
    eGovernment: true,
    minCreditScore: "1400"
  },
  {
    name: "Yapı Kredi",
    onlineApplication: true,
    instantApproval: true,
    incomeStatement: false,
    videoCall: true,
    eGovernment: true,
    minCreditScore: "1300"
  },
  {
    name: "CEPTETEB",
    onlineApplication: true,
    instantApproval: true,
    incomeStatement: false,
    videoCall: true,
    eGovernment: true,
    minCreditScore: "1350"
  },
  {
    name: "İş Bankası",
    onlineApplication: true,
    instantApproval: false,
    incomeStatement: true,
    videoCall: false,
    eGovernment: true,
    minCreditScore: "1450"
  },
  {
    name: "Enpara",
    onlineApplication: true,
    instantApproval: true,
    incomeStatement: false,
    videoCall: true,
    eGovernment: false,
    minCreditScore: "1500"
  }
];

export default EasyBankComparison;
