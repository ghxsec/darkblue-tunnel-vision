
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";

const locations = [
  { id: 1, name: 'New York', country: 'United States', ping: 32 },
  { id: 2, name: 'London', country: 'United Kingdom', ping: 75 },
  { id: 3, name: 'Tokyo', country: 'Japan', ping: 125 },
  { id: 4, name: 'Sydney', country: 'Australia', ping: 180 },
  { id: 5, name: 'Amsterdam', country: 'Netherlands', ping: 45 },
];

const getPingColor = (ping: number) => {
  if (ping < 50) return 'bg-vpn-success';
  if (ping < 100) return 'bg-vpn-warning';
  return 'bg-vpn-error';
};

export const ServerLocationMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-vpn-text-primary">Server Location</h2>
        
        <div className="relative">
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 text-sm bg-white/5 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <span>{selectedLocation.name}</span>
            <ChevronDown size={16} className={cn(
              "transition-transform", 
              showDropdown && "transform rotate-180"
            )} />
          </button>
          
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-56 bg-card rounded-lg shadow-lg z-10 border border-border">
              <div className="py-1 max-h-64 overflow-y-auto">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    className={cn(
                      "w-full px-4 py-2 text-left text-sm hover:bg-white/5 flex items-center justify-between",
                      selectedLocation.id === location.id && "bg-vpn-blue/10"
                    )}
                    onClick={() => {
                      setSelectedLocation(location);
                      setShowDropdown(false);
                    }}
                  >
                    <div>
                      <p className="font-medium">{location.name}</p>
                      <p className="text-xs text-vpn-text-secondary">{location.country}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <span className={cn("w-2 h-2 rounded-full", getPingColor(location.ping))}></span>
                        <span className="text-xs text-vpn-text-secondary">{location.ping}ms</span>
                      </div>
                      {selectedLocation.id === location.id && (
                        <Check size={14} className="text-vpn-blue" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="bg-white/5 rounded-lg overflow-hidden h-[280px] flex items-center justify-center relative">
        <div className="absolute inset-0 opacity-50 pattern-grid"></div>
        <div className="relative z-10 text-center">
          <p className="text-vpn-text-secondary mb-2">World Map Visualization</p>
          <p className="text-sm">Selected server: <span className="font-medium">{selectedLocation.name}, {selectedLocation.country}</span></p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className={cn("w-2 h-2 rounded-full", getPingColor(selectedLocation.ping))}></span>
            <span className="text-xs text-vpn-text-secondary">{selectedLocation.ping}ms ping</span>
          </div>
        </div>
      </div>
    </div>
  );
};
