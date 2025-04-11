
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CoinIconProps {
  coins: number;
}

const CoinIcon: React.FC<CoinIconProps> = ({ coins }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Journey');
  };

  return (
    <div 
      className="fixed top-4 right-6 rounded-full bg-indigo-500 cursor-pointer hover:scale-110 transition-transform duration-200 boader-radiu shadow-lg p-2"
      onClick={handleClick}
    >
      <div className="relative">
        {/* Coin background */}
        <div className="w-16 h-16 rounded-full bg-coin-primary flex items-center justify-center shadow-lg">
          {/* Inner coin pattern */}
          <div className="w-12 h-12 rounded-full border-2 border-coin-accent flex items-center justify-center">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-coin-accent"
            >
              <path 
                d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M12 16C8.13401 16 5 19.134 5 23H19C19 19.134 15.866 16 12 16Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        
        {/* Coin count badge */}
        <div className="absolute -bottom-2 -right-2 bg-coin-accent text-coin-dark font-bold rounded-full w-8 h-8 flex items-center justify-center border-2 border-white">
          {coins}
        </div>
      </div>
    </div>
  );
};

export default CoinIcon;
