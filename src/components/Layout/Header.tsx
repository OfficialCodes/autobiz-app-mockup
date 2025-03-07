
import React from 'react';
import { Bell, ChevronDown, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeaderProps {
  toggleSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const isMobile = useIsMobile();
  
  return (
    <header className="w-full h-16 bg-white border-b border-gray-100 px-4 flex items-center justify-between">
      {isMobile && (
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="mr-2">
          <Menu className="h-5 w-5" />
        </Button>
      )}
      
      <div className="flex items-center">
        {!isMobile && <div className="w-6" />}
        <div className="flex items-center ml-4">
          <nav className="flex">
            <ol className="flex items-center text-sm">
              <li className="text-gray-500">Home</li>
              <li className="mx-2 text-gray-400">/</li>
              <li className="text-gray-700">Dashboard</li>
            </ol>
          </nav>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-blue-50 text-blue-600 rounded-full px-3 py-1.5">
          <span className="text-sm font-medium">Autobiz App 2.0</span>
          <ChevronDown className="ml-1 h-4 w-4" />
        </div>
        
        <Button variant="outline" className="hidden md:flex bg-blue-500 hover:bg-blue-600 text-white border-0">
          Share portal
        </Button>
        
        <div className="relative">
          <Bell className="h-5 w-5 text-gray-500" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-yellow-400 rounded-full flex items-center justify-center text-xs text-white">
            1
          </span>
        </div>
        
        <Avatar className="h-8 w-8 border-2 border-gray-200">
          <img src="https://github.com/shadcn.png" alt="User" />
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
