
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Settings, 
  Globe, 
  Shield, 
  Users, 
  Clock, 
  ChevronLeft, 
  ChevronRight,
  ActivitySquare
} from "lucide-react";

type NavItemProps = {
  icon: React.ElementType;
  label: string;
  to: string;
  isCollapsed: boolean;
  isActive?: boolean;
};

const NavItem = ({ icon: Icon, label, to, isCollapsed, isActive = false }: NavItemProps) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200",
        isActive 
          ? "bg-vpn-blue/10 text-vpn-blue" 
          : "text-vpn-text-secondary hover:bg-white/5 hover:text-vpn-text-primary"
      )}
    >
      <Icon size={20} className={cn("flex-shrink-0", isActive ? "text-vpn-blue" : "text-vpn-text-secondary")} />
      {!isCollapsed && <span className="transition-opacity duration-200">{label}</span>}
    </Link>
  );
};

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div 
      className={cn(
        "fixed top-0 left-0 z-40 h-screen bg-sidebar transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex flex-col h-full border-r border-border">
        <div className={cn(
          "flex items-center gap-3 px-4 h-16 border-b border-border transition-all duration-300",
          collapsed && "justify-center"
        )}>
          {!collapsed ? (
            <div className="flex items-center gap-3">
              <Shield size={24} className="text-vpn-blue" />
              <span className="font-bold text-lg text-vpn-text-primary tracking-tight">SecureVPN</span>
            </div>
          ) : (
            <Shield size={24} className="text-vpn-blue" />
          )}
        </div>
        
        <div className="flex-1 py-4 overflow-y-auto scrollbar-hide">
          <nav className="space-y-1 px-2">
            <NavItem icon={LayoutDashboard} label="Dashboard" to="/" isCollapsed={collapsed} isActive />
            <NavItem icon={Globe} label="Locations" to="/locations" isCollapsed={collapsed} />
            <NavItem icon={ActivitySquare} label="Activity" to="/activity" isCollapsed={collapsed} />
            <NavItem icon={Clock} label="History" to="/history" isCollapsed={collapsed} />
            <NavItem icon={Users} label="Devices" to="/devices" isCollapsed={collapsed} />
            <NavItem icon={Settings} label="Settings" to="/settings" isCollapsed={collapsed} />
          </nav>
        </div>
        
        <div className="p-2 border-t border-border flex justify-center">
          <button 
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-md hover:bg-white/5 text-vpn-text-secondary transition-colors"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};
