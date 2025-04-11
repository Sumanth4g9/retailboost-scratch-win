
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface SpinWheelProps {
  onSpinComplete: (extraDiscount: number) => void;
}

const SpinWheel: React.FC<SpinWheelProps> = ({ onSpinComplete }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinDegrees, setSpinDegrees] = useState(0);
  const sections = [5, 10, 15, 20, 25, 0, 5, 10];

  const handleSpin = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      
      // Random number of full rotations (3-5) plus a random section
      const fullRotations = 3 + Math.floor(Math.random() * 3);
      const randomSection = Math.floor(Math.random() * sections.length);
      const sectionDegrees = (randomSection * 45);
      
      const totalDegrees = fullRotations * 360 + sectionDegrees;
      setSpinDegrees(totalDegrees);
      
      // Get the section that will be at the top when the wheel stops
      const landingSection = sections[randomSection];
      
      setTimeout(() => {
        onSpinComplete(landingSection);
        setIsSpinning(false);
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-6">
        <div className="w-64 h-64 rounded-full relative">
          <div 
            className="w-full h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-orange"
            style={{
              transform: `rotate(${spinDegrees}deg)`,
              transition: isSpinning ? 'transform 3s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'none',
              backgroundImage: 'conic-gradient(from 0deg, #8B5CF6 0deg 45deg, #F97316 45deg 90deg, #8B5CF6 90deg 135deg, #F97316 135deg 180deg, #8B5CF6 180deg 225deg, #F97316 225deg 270deg, #8B5CF6 270deg 315deg, #F97316 315deg 360deg)'
            }}
          >
            {sections.map((section, index) => (
              <div 
              key={index}
              className="absolute bottom-1/2 left-1/2 text-white font-bold text-sm"
              style={{
                transform: `rotate(${index * 45}deg) translateY(-100px) rotate(-${index * 45}deg)`,
                transformOrigin: 'bottom center',
                }}
              >
                {section === 0 ? "Try Again" : `+${section}%`}
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 z-10">
            <div className="w-6 h-6 bg-white shadow-md transform rotate-45"></div>
          </div>
        </div>
      </div>
      
      <Button 
        className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3 text-lg"
        onClick={handleSpin}
        disabled={isSpinning}
      >
        {isSpinning ? "Spinning..." : "Spin the Wheel!"}
      </Button>
    </div>
  );
};

export default SpinWheel;
