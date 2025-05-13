
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/dashboard/header";
import { StatusCard } from "@/components/dashboard/status-card";
import { ServerLocationMap } from "@/components/dashboard/server-location-map";
import { StatsCard } from "@/components/dashboard/stats-card";
import { ActivityCard } from "@/components/dashboard/activity-card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-vpn-dark-blue to-vpn-darker-blue">
      <Sidebar />
      
      <div className="ml-16 md:ml-64 transition-all duration-300">
        <Header />
        
        <main className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <StatusCard />
            </div>
            
            <div className="lg:col-span-2">
              <ServerLocationMap />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2">
              <StatsCard />
            </div>
            
            <div className="lg:col-span-1">
              <ActivityCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
