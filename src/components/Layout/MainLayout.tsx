
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const MainLayout = () => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  
  // Close sidebar by default on mobile when component mounts
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isMobile]);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar with improved z-index and transition */}
      <div className={cn(
        "transition-all duration-300 fixed md:relative z-50 h-screen", 
        sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        isMobile ? "shadow-xl" : ""
      )}>
        <Sidebar />
      </div>
      
      <div className="flex-1 flex flex-col w-full">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      
      {/* Improved overlay for mobile */}
      {sidebarOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default MainLayout;
