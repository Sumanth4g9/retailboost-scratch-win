
import React, { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Home, Store, Utensils, Film, Car } from 'lucide-react';

interface Location {
  id: number;
  name: string;
  icon: React.ReactNode;
  position: number;
}

const locations: Location[] = [
  { id: 1, name: 'Home', icon: <Home className="w-6 h-6" />, position: 0 },
  { id: 2, name: 'Shop', icon: <Store className="w-6 h-6" />, position: 25 },
  { id: 3, name: 'Restaurant', icon: <Utensils className="w-6 h-6" />, position: 50 },
  { id: 4, name: 'Cinema', icon: <Film className="w-6 h-6" />, position: 75 },
  { id: 5, name: 'Transport', icon: <Car className="w-6 h-6" />, position: 100 },
];

const ExclusiveVouchers = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [activeLocation, setActiveLocation] = useState<number | null>(0);
  const [showCoins, setShowCoins] = useState(false);
  
  useEffect(() => {
    const animationInterval = setInterval(() => {
      // Find the next location
      const currentLocationIndex = locations.findIndex(loc => loc.position === currentPosition);
      
      if (currentLocationIndex >= 0 && currentLocationIndex < locations.length - 1) {
        const nextLocation = locations[currentLocationIndex + 1];
        
        // Person stops at location for 3 seconds
        setActiveLocation(locations[currentLocationIndex].id);
        
        // Then start moving to the next location
        setTimeout(() => {
          setActiveLocation(null);
          setCurrentPosition(nextLocation.position);
          
          // Show coins flowing after 3 seconds at each stop
          setTimeout(() => {
            setShowCoins(true);
            
            // Hide coins after animation
            setTimeout(() => {
              setShowCoins(false);
            }, 1500);
          }, 3000);
        }, 3000);
      } else if (currentLocationIndex === locations.length - 1) {
        // When at the last location, pause and then reset to home
        setActiveLocation(locations[currentLocationIndex].id);
        
        setTimeout(() => {
          setShowCoins(true);
          
          setTimeout(() => {
            setShowCoins(false);
            setActiveLocation(null);
            setCurrentPosition(0);
          }, 1500);
        }, 3000);
      }
    }, 10000); // Complete cycle approximately every 10 seconds

    return () => clearInterval(animationInterval);
  }, [currentPosition]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Earn Coins as You Shop</h2>
        <p className="text-lg text-gray-600 mb-12">Walk to stores, collect coins, and redeem them for discounts.</p>
        
        <div className="max-w-4xl mx-auto">
          {/* Walking Animation */}
          <div className="relative h-32 mb-10 border-b-2 border-dashed border-gray-300">
            {/* Path with locations */}
            <div className="absolute top-0 left-0 w-full h-full">
              {locations.map((location) => (
                <div 
                  key={location.id}
                  className={`absolute top-0 transform -translate-y-1/2 transition-all duration-300 ${
                    activeLocation === location.id ? 'scale-125 text-brand-purple' : ''
                  }`}
                  style={{ left: `${location.position}%` }}
                >
                  <div className="flex flex-col items-center">
                    <div className={`p-2 rounded-full ${activeLocation === location.id ? 'bg-brand-purple/20' : 'bg-gray-100'}`}>
                      {location.icon}
                    </div>
                    <span className="text-xs font-medium mt-1">{location.name}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Person walking */}
            <div 
              className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-3000 ease-linear"
              style={{ left: `${currentPosition}%` }}
            >
              <div className="relative">
                <div className="bg-brand-purple text-white rounded-full w-8 h-8 flex items-center justify-center">
                  <span className="text-sm">👤</span>
                </div>
                
                {/* Coins animation */}
                {showCoins && (
                  <>
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute animate-fade-out"
                        style={{
                          top: `-${10 + Math.random() * 20}px`,
                          left: `${Math.random() * 40 - 20}px`,
                          animation: `coin-float ${0.8 + Math.random() * 0.6}s ease-out forwards`
                        }}
                      >
                        <span className="text-xs">💰</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
          
          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏃</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Track Steps</h3>
              <p className="text-sm text-gray-600">Every 100 steps earns you 1 coin. Walk more to earn more!</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Collect Coins</h3>
              <p className="text-sm text-gray-600">Gather coins at each destination. Special locations offer bonus coins!</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛍️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Redeem Rewards</h3>
              <p className="text-sm text-gray-600">Use your coins for exclusive discounts at participating stores.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Badge className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-4 py-2">
              Coming Soon: Exclusive Vouchers Marketplace
            </Badge>
          </div>
        </div>
      </div>
      
      {/* Add keyframes for coin animation */}
      <style>
        {`
        @keyframes coin-float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-30px) scale(0.5);
            opacity: 0;
          }
        }
        `}
      </style>
    </section>
  );
};

export default ExclusiveVouchers;
