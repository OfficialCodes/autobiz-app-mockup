
import React, { useState } from 'react';
import { Phone, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const transactions = [
  { id: 1, type: 'Airtime Top up', time: '9:29 PM', amount: 2000, status: 'Successful' },
  { id: 2, type: 'Airtime Top up', time: '9:29 PM', amount: 2000, status: 'Successful' },
  { id: 3, type: 'Airtime Top up', time: '9:29 PM', amount: 2000, status: 'Successful' },
  { id: 4, type: 'Airtime Top up', time: '9:29 PM', amount: 2000, status: 'Successful' },
  { id: 5, type: 'Airtime Top up', time: '9:29 PM', amount: 2000, status: 'Successful' },
];

const pieData = [
  { name: 'Airtime', value: 45, color: '#1A1F2C' },
  { name: 'Data', value: 20, color: '#505968' },
  { name: 'Bills', value: 15, color: '#8E9196' },
  { name: 'Education', value: 20, color: '#C4C7CA' },
];

const serviceTypes = [
  { value: 'data', label: 'Data Card' },
  { value: 'broadband', label: 'Broadband' },
  { value: 'education', label: 'Educational Bills' },
  { value: 'airtime', label: 'Airtime to Cash' },
];

const History = () => {
  const [category, setCategory] = useState('all');
  
  return (
    <div className="space-y-8">
      {/* Service Type Filter */}
      <div className="flex flex-wrap gap-3">
        {serviceTypes.map((service) => (
          <Button
            key={service.value}
            variant="outline"
            className="bg-gray-50 border-gray-200"
          >
            {service.label}
          </Button>
        ))}
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Transaction History */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Transaction History</CardTitle>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="airtime">Airtime</SelectItem>
                  <SelectItem value="data">Data</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="utility">Utility</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-4">
              {transactions.map((transaction) => (
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
          </CardContent>
        </Card>

        {/* Service Breakdown */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Service Breakdown</CardTitle>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={0}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend 
                    layout="vertical" 
                    align="right"
                    verticalAlign="middle"
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default History;
