
import React from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const menuItems = [
  { id: 'security', label: 'Account & Security', hasSubmenu: true },
  { id: 'subscription', label: 'Subscription & Pricing', hasSubmenu: false },
  { id: 'payment', label: 'Payment & Transactions', hasSubmenu: false },
  { id: 'referral', label: 'Referral & Promotions', hasSubmenu: false },
  { id: 'communication', label: 'Communication & Notifications', hasSubmenu: false },
  { id: 'developer', label: 'Developer & API', hasSubmenu: false },
  { id: 'airtime', label: 'Airtime, Data & Vouchers', hasSubmenu: false },
  { id: 'website', label: 'Website & UI Customization', hasSubmenu: false },
  { id: 'admin', label: 'Admin & System Logs', hasSubmenu: false },
];

const settingsOptions = [
  { id: 'pin', label: 'Change Security PIN Code' },
  { id: 'registration', label: 'Registration Settings' },
  { id: 'kyc', label: 'KYC Settings' },
  { id: 'users', label: 'View Users By KYC' },
  { id: 'airtime', label: 'Change Airtime Limit' },
  { id: 'login', label: 'Set Login Notifications' },
  { id: 'whitelist', label: 'Whitelist IP Address' },
  { id: 'members', label: 'Manage Members' },
];

const Settings = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid gap-8 md:grid-cols-[300px_1fr]">
        <div className="space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search"
              className="pl-9 bg-white"
            />
          </div>
          
          <Card>
            <CardContent className="p-0">
              <div className="space-y-1 py-2">
                {menuItems.map((item) => (
                  <Button
                    key={item.id}
                    variant={item.id === 'security' ? 'secondary' : 'ghost'}
                    className={`w-full justify-between rounded-none px-4 ${
                      item.id === 'security' ? 'bg-gray-100 font-medium' : ''
                    }`}
                  >
                    {item.label}
                    {item.hasSubmenu && <ChevronRight className="h-4 w-4 opacity-70" />}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <h2 className="text-xl font-medium mb-4">My Settings</h2>
          
          <div className="space-y-2">
            {settingsOptions.map((option) => (
              <Card key={option.id} className="hover:bg-gray-50">
                <CardContent className="p-4">
                  <Button variant="ghost" className="w-full justify-start p-0 h-auto font-normal hover:bg-transparent">
                    {option.label}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
