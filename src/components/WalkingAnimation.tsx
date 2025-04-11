import React, { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";

const WalkingAnimation: React.FC = () => {
  const [position, setPosition] = useState(0);
  
  // Update the position for walking animation
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => {
        // Reset position when it reaches end
        if (prev >= 100) return 0;
        return prev + 0.5;
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
      <div className="relative h-64">
        {/* Straight path with subtle design */}
        <div className="absolute top-32 left-0 right-0 h-2 bg-gray-200 rounded-full"></div>
        
        {/* Path markers */}
        <div className="absolute top-28 left-0 right-0 flex justify-between px-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-2 h-8 bg-gray-300 rounded-full"></div>
              <div className="mt-6 text-xs font-medium text-gray-600">
                {i === 0 ? 'Start' : i === 4 ? 'Destination' : `+${i * 10} coins`}
              </div>
            </div>
          ))}
        </div>
        
        {/* Store building - with color */}
        <div className="absolute top-1 right-4">
          <div className="w-24 h-20 bg-blue-600 rounded-md"></div>
          <div className="w-28 h-4 bg-blue-800 -mt-1 -ml-2 rounded-t-md"></div>
          <div className="absolute top-8 left-8 w-8 h-10 bg-blue-400 rounded-t-md"></div>
          <div className="absolute top-4 left-4 w-4 h-4 bg-blue-400 rounded-sm"></div>
          <div className="mt-2 text-center font-semibold text-xs">STORE</div>
        </div>
        
        {/* Home building - with color */}
        <div className="absolute top-6 left-4">
          <div className="w-20 h-16 bg-red-400 rounded-md"></div>
          <div className="w-24 h-4 bg-red-600 -mt-4 -ml-2"></div>
          <div className="absolute top-6 left-7 w-6 h-8 bg-red-300 rounded-t-md"></div>
          <div className="mt-2 text-center font-semibold text-xs">HOME</div>
        </div>
        
        {/* Trees with different shapes */}
        {/* Pine Tree */}
        <div className="absolute top-12 left-[25%]">
          <div className="w-6 h-12 bg-coin-primary rounded-t-full"></div>
          <div className="w-2 h-4 bg-gray-600 mx-auto"></div>
        </div>
        
        {/* Round Bush */}
        <div className="absolute top-14 left-[45%]">
          <div className="w-8 h-8 bg-coin-primary rounded-full"></div>
          <div className="w-1 h-3 bg-gray-600 mx-auto"></div>
        </div>
        
        {/* Triangle Tree */}
        <div className="absolute top-12 left-[65%]">
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[12px] border-l-transparent border-r-transparent border-b-coin-primary mx-auto"></div>
          <div className="w-2 h-4 bg-gray-600 mx-auto"></div>
        </div>
        
        {/* Square Topiary */}
        <div className="absolute top-14 right-[25%]">
          <div className="w-6 h-6 bg-coin-primary rounded-sm"></div>
          <div className="w-1 h-3 bg-gray-600 mx-auto"></div>
        </div>
        
        {/* Walking human character - more human-like appearance */}
        <div 
          className="absolute top-24" 
          style={{ left: `${position}%`, transition: 'left 0.05s linear' }}
        >
          <div className="relative">
            {/* Human body - more detailed */}
            <div className="w-6 h-10 bg-indigo-500 rounded-lg"></div>
            
            {/* Head with face features */}
            <div className="w-5 h-5 bg-[#F5D0A9] rounded-full -mt-2.5 mx-auto relative">
              {/* Eyes */}
              <div className="absolute top-1.5 left-1 w-0.5 h-1 bg-black rounded-full"></div>
              <div className="absolute top-1.5 right-1 w-0.5 h-1 bg-black rounded-full"></div>
              {/* Mouth */}
              <div className="absolute bottom-1.5 left-1.5 w-2 h-0.5 bg-black rounded-full"></div>
            </div>
            
            {/* Arms */}
            <div 
              className={`w-2 h-6 bg-indigo-500 absolute -left-1 top-1 rounded-full transform origin-bottom ${position % 4 < 2 ? 'rotate-30' : '-rotate-30'}`}
            ></div>
            <div 
              className={`w-2 h-6 bg-indigo-500 absolute -right-1 top-1 rounded-full transform origin-bottom ${position % 4 < 2 ? '-rotate-30' : 'rotate-30'}`}
            ></div>
            
            {/* Legs */}
            <div 
              className={`w-2 h-7 bg-blue-600 absolute left-0.5 bottom-0 rounded-full transform origin-top ${position % 4 < 2 ? 'rotate-20' : '-rotate-20'}`}
            ></div>
            <div 
              className={`w-2 h-7 bg-blue-600 absolute right-0.5 bottom-0 rounded-full transform origin-top ${position % 4 < 2 ? '-rotate-20' : 'rotate-20'}`}
            ></div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0">
          <Progress value={position} className="h-2" />
        </div>
      </div>
      
      <div className="mt-4 text-center text-sm">
        <p className="font-medium text-gray-700">Next milestone: +{Math.ceil((100 - position) / 25) * 15} coins</p>
        <p className="text-gray-500 text-xs">Continue your journey to earn rewards</p>
      </div>
    </div>
  );
};

export default WalkingAnimation;