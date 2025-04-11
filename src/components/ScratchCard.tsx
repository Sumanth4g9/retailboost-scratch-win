
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

interface ScratchCardProps {
  discount?: number;
  couponCode?: string;
  onReveal?: () => void;
}

const ScratchCard: React.FC<ScratchCardProps> = ({ discount, couponCode, onReveal }) => {
  const [isScratched, setIsScratched] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [cardData, setCardData] = useState({
    discount: discount || 0,
    couponCode: couponCode || '',
    retailerId: '',
    billAmount: '',
  });

  useEffect(() => {
    // If we have state data from the location, use it
    if (location.state) {
      const { discount, couponCode, retailerId, billAmount } = location.state;
      setCardData({
        discount: discount || Math.floor(Math.random() * 25) + 5, // 5-30% if not provided
        couponCode: couponCode || 'RB' + Math.random().toString(36).substring(2, 10).toUpperCase(),
        retailerId: retailerId || '',
        billAmount: billAmount || '',
      });
    }
  }, [location]);

  const handleScratch = () => {
    if (!isScratched) {
      setIsScratched(true);
      setTimeout(() => {
        if (onReveal) {
          onReveal();
        }
        // Show toast notification
        toast({
          title: "Congrats!",
          description: `You got ${cardData.discount}% discount with coupon: ${cardData.couponCode}`,
        });
      }, 1000);
    }
  };

  const handleGoHome = () => {
    navigate('/');
  };

  // Calculate the savings amount if we have a bill amount
  const savingsAmount = cardData.billAmount ? 
    (parseFloat(cardData.billAmount) * cardData.discount / 100).toFixed(2) : 
    null;

  return (
    <div className="container mx-auto max-w-md py-8">
      <Card className="shadow-xl">
        <CardContent className="p-6">
          <div 
            className="scratch-card bg-white rounded-lg overflow-hidden mx-auto h-64 flex items-center justify-center"
            onClick={handleScratch}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="text-center z-0 px-6">
                <div className="mb-4 text-4xl font-bold text-brand-purple">Congratulations!</div>
                <div className="mb-4 text-5xl font-bold text-brand-purple">{cardData.discount}%</div>
                <div className="text-2xl text-gray-700 mb-2">Discount</div>
                <div className="text-lg font-semibold bg-gray-100 p-2 rounded">{cardData.couponCode}</div>
                
                {savingsAmount && (
                  <div className="mt-3 text-brand-orange font-medium">
                    You saved ₹{savingsAmount}!
                  </div>
                )}
              </div>
              
              <div 
                className={`scratch-card-overlay ${isScratched ? 'scratched' : ''} flex items-center justify-center text-white font-bold text-2xl`}
              >
                SCRATCH HERE!
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <Button onClick={handleGoHome} className="w-full">
              Go Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScratchCard;
