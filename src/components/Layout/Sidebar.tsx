
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Wallet, 
  History, 
  Smartphone, 
  Home, 
  Settings, 
  Users, 
  BarChart3, 
  FileText, 
  ChevronRight 
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="h-screen w-64 bg-[#273140] flex flex-col overflow-y-auto">
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-white text-xl font-medium">Autobiz App</h1>
      </div>
      
      <div className="px-4 py-2">
        <p className="text-gray-400 text-xs tracking-wider uppercase font-medium mb-2">HOME</p>
        <Link to="/">
          <div className={cn(
            "flex items-center p-3 mb-1 rounded-md",
            isActive("/") ? "bg-slate-600" : "hover:bg-slate-700"
          )}>
            <Home size={20} className="text-gray-300 mr-3" />
            <span className="text-gray-300">Dashboard</span>
          </div>
        </Link>
      </div>
      
      <div className="px-4 py-2">
        <p className="text-gray-400 text-xs tracking-wider uppercase font-medium mb-2">TRANSACTIONS</p>
        <Link to="/wallet">
          <div className={cn(
            "flex items-center p-3 mb-1 rounded-md",
            isActive("/wallet") ? "bg-slate-600" : "hover:bg-slate-700"
          )}>
            <Wallet size={20} className="text-gray-300 mr-3" />
            <span className="text-gray-300">Wallet</span>
          </div>
        </Link>
        <Link to="/history">
          <div className={cn(
            "flex items-center justify-between p-3 mb-1 rounded-md",
            isActive("/history") ? "bg-slate-600" : "hover:bg-slate-700"
          )}>
            <div className="flex items-center">
              <History size={20} className="text-gray-300 mr-3" />
              <span className="text-gray-300">History</span>
            </div>
            <ChevronRight size={18} className="text-gray-300" />
          </div>
        </Link>
      </div>
      
      <div className="px-4 py-2">
        <p className="text-gray-400 text-xs tracking-wider uppercase font-medium mb-2">SERVICES</p>
        <Link to="/mobile">
          <div className={cn(
            "flex items-center justify-between p-3 mb-1 rounded-md",
            isActive("/mobile") ? "bg-slate-600" : "hover:bg-slate-700"
          )}>
            <div className="flex items-center">
              <Smartphone size={20} className="text-gray-300 mr-3" />
              <span className="text-gray-300">Mobile</span>
            </div>
            <ChevronRight size={18} className="text-gray-300" />
          </div>
        </Link>
        <Link to="/utilities">
          <div className={cn(
            "flex items-center justify-between p-3 mb-1 rounded-md",
            isActive("/utilities") ? "bg-slate-600" : "hover:bg-slate-700"
          )}>
            <div className="flex items-center">
              <BarChart3 size={20} className="text-gray-300 mr-3" />
              <span className="text-gray-300">Utilities</span>
            </div>
            <ChevronRight size={18} className="text-gray-300" />
          </div>
        </Link>
        <Link to="/bills">
          <div className={cn(
            "flex items-center justify-between p-3 mb-1 rounded-md",
            isActive("/bills") ? "bg-slate-600" : "hover:bg-slate-700"
          )}>
            <div className="flex items-center">
              <FileText size={20} className="text-gray-300 mr-3" />
              <span className="text-gray-300">Bills</span>
            </div>
            <ChevronRight size={18} className="text-gray-300" />
          </div>
        </Link>
      </div>

      <div className="px-4 py-2">
        <p className="text-gray-400 text-xs tracking-wider uppercase font-medium mb-2">MANAGEMENT</p>
        <Link to="/panel">
          <div className={cn(
            "flex items-center justify-between p-3 mb-1 rounded-md",
            isActive("/panel") ? "bg-slate-600" : "hover:bg-slate-700"
          )}>
            <div className="flex items-center">
              <Users size={20} className="text-gray-300 mr-3" />
              <span className="text-gray-300">Manager Panel</span>
            </div>
            <ChevronRight size={18} className="text-gray-300" />
          </div>
        </Link>
        <Link to="/settings">
          <div className={cn(
            "flex items-center p-3 mb-1 rounded-md",
            isActive("/settings") ? "bg-slate-600" : "hover:bg-slate-700"
          )}>
            <Settings size={20} className="text-gray-300 mr-3" />
            <span className="text-gray-300">Settings</span>
          </div>
        </Link>
      </div>

      <div className="px-4 py-2 mt-auto mb-6">
        <p className="text-gray-400 text-xs tracking-wider uppercase font-medium mb-2">OTHER</p>
        <Link to="/referral">
          <div className={cn(
            "flex items-center p-3 mb-1 rounded-md",
            isActive("/referral") ? "bg-slate-600" : "hover:bg-slate-700"
          )}>
            <Users size={20} className="text-gray-300 mr-3" />
            <span className="text-gray-300">Referral</span>
          </div>
        </Link>
        <Link to="/features">
          <div className={cn(
            "flex items-center p-3 mb-1 rounded-md",
            isActive("/features") ? "bg-slate-600" : "hover:bg-slate-700"
          )}>
            <Settings size={20} className="text-gray-300 mr-3" />
            <span className="text-gray-300">Feature Updates</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
