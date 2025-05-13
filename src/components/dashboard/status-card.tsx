
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { Shield, Globe, Timer } from "lucide-react";

export const StatusCard = () => {
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  
  const handleToggleConnection = () => {
    if (connected) {
      setConnected(false);
    } else {
      setConnecting(true);
      setTimeout(() => {
        setConnecting(false);
        setConnected(true);
      }, 1500);
    }
  };

  return (
    <div className="glass-card p-6 rounded-xl relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-vpn-text-primary">Connection Status</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-vpn-text-secondary">
              {connecting ? 'Connecting...' : connected ? 'Connected' : 'Disconnected'}
            </span>
            <Switch 
              checked={connected || connecting} 
              onCheckedChange={handleToggleConnection}
              disabled={connecting}
              className={cn(
                connected ? "bg-vpn-success" : "bg-muted",
                connecting && "opacity-70"
              )}
            />
          </div>
        </div>
        
        <div className="flex items-center justify-center py-8">
          <div className="relative">
            <div 
              className={cn(
                "w-36 h-36 rounded-full flex items-center justify-center border-4",
                connected ? "border-vpn-success" : "border-vpn-error",
                connecting && "border-vpn-warning"
              )}
            >
              <Shield size={64} className={cn(
                connected ? "text-vpn-success" : "text-vpn-error",
                connecting && "text-vpn-warning"
              )} />
              
              {/* Ripple effect when connected */}
              {connected && (
                <>
                  <div className="absolute inset-0 rounded-full border border-vpn-success animate-ripple"></div>
                  <div className="absolute inset-0 rounded-full border border-vpn-success animate-ripple animation-delay-500"></div>
                </>
              )}
            </div>
            
            {/* Status indicator */}
            <div 
              className={cn(
                "absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium",
                connected ? "bg-vpn-success" : "bg-vpn-error",
                connecting && "bg-vpn-warning animate-pulse"
              )}
            >
              {connecting ? 'CONNECTING' : connected ? 'PROTECTED' : 'VULNERABLE'}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-white/5 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Globe size={16} className="text-vpn-text-secondary" />
              <span className="text-xs text-vpn-text-secondary">Location</span>
            </div>
            <p className="text-sm font-medium">{connected ? 'New York, USA' : '—'}</p>
          </div>
          
          <div className="bg-white/5 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Timer size={16} className="text-vpn-text-secondary" />
              <span className="text-xs text-vpn-text-secondary">Session Time</span>
            </div>
            <p className="text-sm font-medium">{connected ? '00:42:18' : '—'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
