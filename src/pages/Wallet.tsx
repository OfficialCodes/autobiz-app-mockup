
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Wallet = () => {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Wallet Balance Card */}
        <Card className="bg-slate-800 text-white">
          <CardContent className="pt-6 pb-8 flex flex-col items-center justify-center">
            <h3 className="mb-4 text-lg font-medium text-center">My Wallet</h3>
            <h2 className="text-4xl font-bold tracking-tight mb-2">N90,810,565.83</h2>
            <p className="text-gray-300 mb-6">Total Balance</p>
            <Button className="bg-white hover:bg-gray-100 text-slate-800 font-medium px-6">
              Fund Wallet
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </CardContent>
        </Card>

        {/* Account Details Card */}
        <Card>
          <CardContent className="pt-6 pb-8">
            <h3 className="mb-4 text-lg font-medium">Pay for immediate funding via</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Bank: Sterling Bank</p>
                <div className="flex items-center space-x-2">
                  <p className="font-medium">8120010315</p>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Name: CDLPHUB</p>
              </div>
              <Button variant="link" className="text-blue-600 p-0 h-auto">
                View all accounts
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">Wallet Transactions</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 font-medium text-gray-500">Date</th>
                  <th className="text-left py-3 font-medium text-gray-500">Description</th>
                  <th className="text-left py-3 font-medium text-gray-500">Type</th>
                  <th className="text-right py-3 font-medium text-gray-500">Amount</th>
                  <th className="text-right py-3 font-medium text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 text-sm">12 Jun 2023</td>
                  <td className="py-3">Wallet Funding</td>
                  <td className="py-3 text-sm">Credit</td>
                  <td className="py-3 text-right">₦50,000.00</td>
                  <td className="py-3 text-right text-green-500">Completed</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 text-sm">10 Jun 2023</td>
                  <td className="py-3">Airtime Purchase</td>
                  <td className="py-3 text-sm">Debit</td>
                  <td className="py-3 text-right">₦2,000.00</td>
                  <td className="py-3 text-right text-green-500">Completed</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 text-sm">05 Jun 2023</td>
                  <td className="py-3">Data Bundle</td>
                  <td className="py-3 text-sm">Debit</td>
                  <td className="py-3 text-right">₦5,000.00</td>
                  <td className="py-3 text-right text-green-500">Completed</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 text-sm">01 Jun 2023</td>
                  <td className="py-3">Wallet Funding</td>
                  <td className="py-3 text-sm">Credit</td>
                  <td className="py-3 text-right">₦100,000.00</td>
                  <td className="py-3 text-right text-green-500">Completed</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 flex justify-center">
            <Button variant="outline" className="w-full sm:w-auto">
              View All Transactions
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Wallet;
