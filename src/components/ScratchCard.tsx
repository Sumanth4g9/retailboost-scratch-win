
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ScratchCardProps {
  discount: number;
  onReveal: () => void;
}

const ScratchCard: React.FC<ScratchCardProps> = ({ discount, onReveal }) => {
  const [isScratched, setIsScratched] = useState(false);

  const handleScratch = () => {
    if (!isScratched) {
      setIsScratched(true);
      setTimeout(() => {
        onReveal();
      }, 1000);
    }
  };

  return (
    <div 
      className="scratch-card bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm h-64 flex items-center justify-center"
      onClick={handleScratch}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="text-center z-0 px-6">
          <div className="mb-4 text-5xl font-bold text-brand-purple">Congratulations</div>
          <div className="mb-4 text-5xl font-bold text-brand-purple">{discount}%</div>
          <div className="text-2xl text-gray-700">Discount</div>
        </div>
        
        <div 
          className={`scratch-card-overlay ${isScratched ? 'scratched' : ''} flex items-center justify-center text-white font-bold text-2xl`}
        >
          SCRATCH HERE!
        </div>
      </div>
    </div>
  );
};

export default ScratchCard;
