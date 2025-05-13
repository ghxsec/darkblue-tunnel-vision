
import { Clock, Globe, Shield, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const activityItems = [
  { 
    id: 1, 
    type: 'connection', 
    message: 'Connected to New York server', 
    time: '2 minutes ago',
    icon: Shield,
    iconColor: 'text-vpn-success'
  },
  { 
    id: 2, 
    type: 'location', 
    message: 'Changed location to New York, USA', 
    time: '5 minutes ago',
    icon: Globe,
    iconColor: 'text-vpn-blue'
  },
  { 
    id: 3, 
    type: 'warning', 
    message: 'Potential tracking attempt blocked', 
    time: '15 minutes ago',
    icon: AlertCircle,
    iconColor: 'text-vpn-warning'
  },
  { 
    id: 4, 
    type: 'connection', 
    message: 'Disconnected from London server', 
    time: '20 minutes ago',
    icon: Shield,
    iconColor: 'text-vpn-error'
  },
];

export const ActivityCard = () => {
  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-vpn-text-primary">Recent Activity</h2>
        <button className="text-xs text-vpn-blue hover:underline">View All</button>
      </div>
      
      <div className="space-y-4">
        {activityItems.map((item) => (
          <div key={item.id} className="flex gap-4 bg-white/5 p-3 rounded-lg">
            <div className={cn("p-2 rounded-full h-fit", `bg-${item.iconColor.split('-').pop()}/10`)}>
              <item.icon size={16} className={item.iconColor} />
            </div>
            <div className="flex-1">
              <p className="text-sm">{item.message}</p>
              <div className="flex items-center text-xs text-vpn-text-secondary mt-1">
                <Clock size={12} className="mr-1" />
                <span>{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
