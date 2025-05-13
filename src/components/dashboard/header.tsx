
import { Bell, User, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-border">
      <div>
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <p className="text-xs text-vpn-text-secondary">Welcome back to SecureVPN</p>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative hidden md:flex items-center">
          <Search size={16} className="absolute left-3 text-vpn-text-secondary" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-9 pr-4 py-2 text-sm bg-muted rounded-lg border-none focus:outline-none focus:ring-1 focus:ring-vpn-blue w-[200px]" 
          />
        </div>
        
        <div className="flex items-center gap-4">
          <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/5 relative">
            <Bell size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-vpn-blue rounded-full"></span>
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-vpn-blue/20 rounded-full flex items-center justify-center">
              <User size={18} className="text-vpn-blue" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
