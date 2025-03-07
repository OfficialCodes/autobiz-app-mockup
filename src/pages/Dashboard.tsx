
import React from 'react';
import { ChevronRight, Phone, Wifi, FileText, BarChart3, ArrowUpRight, ArrowDownRight, HelpCircle, MessageSquareText, CircleCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 20000 },
  { name: 'Feb', value: 15000 },
  { name: 'Mar', value: 22000 },
  { name: 'Apr', value: 33000 },
  { name: 'May', value: 25000 },
  { name: 'Jun', value: 35000 },
  { name: 'Jul', value: 42000 },
  { name: 'Aug', value: 38000 },
  { name: 'Sep', value: 32000 },
  { name: 'Oct', value: 42000 },
  { name: 'Nov', value: 38000 },
  { name: 'Dec', value: 28000 },
];

const recentTransactions = [
  { id: 1, type: 'Airtime Top up', time: '9:29 PM', amount: 2000, status: 'Successful' },
  { id: 2, type: 'Airtime Top up', time: '5:35 PM', amount: 2000, status: 'Successful' },
];

const Dashboard = () => {
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

      {/* Top-Up Services */}
      <Card>
        <CardHeader>
          <CardTitle>Top-Up Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            <div className="flex flex-col items-center">
              <div className="h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                <Phone className="h-6 w-6 text-gray-600" />
              </div>
              <span className="text-sm text-gray-600">Airtime</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                <Wifi className="h-6 w-6 text-gray-600" />
              </div>
              <span className="text-sm text-gray-600">Data</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                <FileText className="h-6 w-6 text-gray-600" />
              </div>
              <span className="text-sm text-gray-600">Education</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                <BarChart3 className="h-6 w-6 text-gray-600" />
              </div>
              <span className="text-sm text-gray-600">Utilities</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-gray-600"
                >
                  <rect width="16" height="13" x="4" y="5" rx="2" />
                  <path d="M16 2v3" />
                  <path d="M8 2v3" />
                  <path d="M4 10h16" />
                </svg>
              </div>
              <span className="text-sm text-gray-600">Subscriptions</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-gray-600"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <span className="text-sm text-gray-600">Shopping</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Transactions */}
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-lg">Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-4 space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                      <Phone className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-medium">{transaction.type}</p>
                      <p className="text-sm text-gray-500">{transaction.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{transaction.amount.toFixed(2)}</p>
                    <p className="text-sm text-green-500">{transaction.status}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <Button variant="outline" className="w-full">
                View All Transactions
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Help & Support Center */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Help & Support Center</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                    <HelpCircle className="h-5 w-5 text-gray-600" />
                  </div>
                  <p className="font-medium">Help Center</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                    <CircleCheck className="h-5 w-5 text-gray-600" />
                  </div>
                  <p className="font-medium">Product Feature Suggestion</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
              
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                <MessageSquareText className="mr-2 h-5 w-5" />
                Chat with Support Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Airtime Purchase Chart */}
        <Card>
          <CardHeader className="pb-0 flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle className="text-lg">Airtime Purchase</CardTitle>
              <div className="flex items-center mt-1">
                <span className="text-2xl font-bold">₦810,565.00</span>
                <span className="ml-2 text-green-500 text-sm font-medium flex items-center">
                  +12.9%
                </span>
                <span className="ml-2 text-gray-500 text-xs">in 6 months</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="text-xs h-7">1 W</Button>
              <Button variant="outline" size="sm" className="text-xs h-7">1 M</Button>
              <Button variant="outline" size="sm" className="text-xs h-7">6 M</Button>
              <Button variant="outline" size="sm" className="text-xs h-7">1 YR</Button>
              <Button variant="outline" size="sm" className="text-xs h-7">ALL</Button>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data}
                  margin={{
                    top: 10,
                    right: 10,
                    left: 10,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    tickLine={false} 
                    axisLine={false}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis 
                    tickLine={false} 
                    axisLine={false}
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => `${value / 1000}k`}
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#111827"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500 flex items-center">
                      <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                      Data Purchase
                    </p>
                    <p className="text-xl font-bold mt-2">₦810,565.00</p>
                    <div className="mt-1 flex items-center text-green-500 text-xs">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      <span>+50,255.00</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500 flex items-center">
                      <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
                      Airtime Purchase
                    </p>
                    <p className="text-xl font-bold mt-2">₦810,565.00</p>
                    <div className="mt-1 flex items-center text-green-500 text-xs">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      <span>+50,255.00</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500 flex items-center">
                      <span className="h-2 w-2 rounded-full bg-gray-500 mr-2"></span>
                      Educational Bills
                    </p>
                    <p className="text-xl font-bold mt-2">₦810,565.00</p>
                    <div className="mt-1 flex items-center text-green-500 text-xs">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      <span>+50,255.00</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500 flex items-center">
                      <span className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>
                      Others
                    </p>
                    <p className="text-xl font-bold mt-2">₦810,565.00</p>
                    <div className="mt-1 flex items-center text-red-500 text-xs">
                      <ArrowDownRight className="h-3 w-3 mr-1" />
                      <span>+10,777.00</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
