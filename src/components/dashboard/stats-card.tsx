
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpDown, Download, Upload } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample data - would come from your API in a real app
const bandwidthData = [
  { time: '00:00', download: 20, upload: 5 },
  { time: '06:00', download: 15, upload: 3 },
  { time: '12:00', download: 40, upload: 10 },
  { time: '18:00', download: 60, upload: 15 },
  { time: '24:00', download: 30, upload: 8 },
];

type StatItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  change?: number;
  colorClass?: string;
};

const StatItem = ({ icon, label, value, change, colorClass = "text-vpn-blue" }: StatItemProps) => {
  return (
    <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg">
      <div className={cn("p-2 rounded-lg", colorClass === "text-vpn-blue" ? "bg-vpn-blue/10" : "bg-white/5")}>
        {icon}
      </div>
      <div>
        <p className="text-vpn-text-secondary text-xs">{label}</p>
        <div className="flex items-center gap-2">
          <p className="text-vpn-text-primary font-medium">{value}</p>
          {change !== undefined && (
            <span className={cn(
              "text-xs flex items-center",
              change >= 0 ? "text-vpn-success" : "text-vpn-error"
            )}>
              {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export const StatsCard = () => {
  return (
    <div className="glass-card p-6 rounded-xl">
      <h2 className="text-xl font-semibold text-vpn-text-primary mb-6">Network Statistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatItem 
          icon={<Download size={16} className="text-vpn-blue" />}
          label="Download"
          value="128 MB/s"
          change={12}
        />
        <StatItem 
          icon={<Upload size={16} className="text-vpn-blue" />}
          label="Upload"
          value="32 MB/s"
          change={-5}
        />
        <StatItem 
          icon={<ArrowUpDown size={16} className="text-vpn-text-primary" />}
          label="Latency"
          value="32ms"
          colorClass="text-vpn-text-primary"
        />
      </div>
      
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-vpn-text-secondary">Bandwidth Usage</h3>
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-vpn-blue"></span>
              <span>Download</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-vpn-accent"></span>
              <span>Upload</span>
            </div>
          </div>
        </div>
        
        <div className="h-48 w-full bg-white/5 rounded-lg p-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={bandwidthData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
              <defs>
                <linearGradient id="downloadGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1EAEDB" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#1EAEDB" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="uploadGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5465FF" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#5465FF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#A3AED0', fontSize: 10 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(26, 31, 44, 0.9)',
                  borderColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '4px',
                  fontSize: '12px'
                }}
                itemStyle={{ color: '#fff' }}
                labelStyle={{ color: '#A3AED0', marginBottom: '5px' }}
              />
              <Area 
                type="monotone" 
                dataKey="download" 
                stroke="#1EAEDB" 
                fillOpacity={1} 
                fill="url(#downloadGradient)" 
                strokeWidth={2}
              />
              <Area 
                type="monotone" 
                dataKey="upload" 
                stroke="#5465FF" 
                fillOpacity={1} 
                fill="url(#uploadGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
