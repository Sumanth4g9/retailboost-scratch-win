
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { QrCode } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScratchCard from '@/components/ScratchCard';
import SpinWheel from '@/components/SpinWheel';

const Demo = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [billAmount, setBillAmount] = useState('');
  const [step, setStep] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [extraDiscount, setExtraDiscount] = useState(0);
  const [isRepeatCustomer, setIsRepeatCustomer] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !billAmount) {
      toast({
        title: "Error",
        description: "Please enter your name and bill amount.",
        variant: "destructive"
      });
      return;
    }
    
    // Calculate a random discount (5-15% of bill amount)
    const billAmountNum = parseFloat(billAmount);
    const minDiscount = Math.max(5, billAmountNum * 0.05);
    const maxDiscount = Math.max(15, billAmountNum * 0.15);
    const calculatedDiscount = Math.floor(Math.random() * (maxDiscount - minDiscount + 1)) + minDiscount;
    
    setDiscount(calculatedDiscount);
    
    // Simulate if this is a repeat customer (50% chance)
    setIsRepeatCustomer(Math.random() > 0.5);
    
    // Move to step 2 (Scratch Card)
    setStep(2);
  };

  const handleScratchReveal = () => {
    // If repeat customer, proceed to spin wheel
    if (isRepeatCustomer) {
      setTimeout(() => {
        toast({
          title: "You're a Repeat Customer!",
          description: "Spin the wheel for an extra discount!",
        });
        setStep(3);
      }, 1000);
    } else {
      // Otherwise, show final summary
      setTimeout(() => {
        setStep(4);
      }, 1000);
    }
  };

  const handleSpinComplete = (extraDiscountValue: number) => {
    setExtraDiscount(extraDiscountValue);
    setTimeout(() => {
      setStep(4);
    }, 1000);
  };

  const handleTryAgain = () => {
    // Reset all states
    setName('');
    setBillAmount('');
    setStep(1);
    setDiscount(0);
    setExtraDiscount(0);
    setIsRepeatCustomer(false);
  };

  // Calculate the final discount amount and price
  const totalDiscount = discount + (extraDiscount > 0 ? (parseFloat(billAmount) * extraDiscount / 100) : 0);
  const finalPrice = parseFloat(billAmount) - totalDiscount;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Demo Content - Updated to be properly centered */}
      <section className="pt-28 pb-20 flex-grow bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50 flex items-center justify-center">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center">Try RetailBoost Demo</h1>
            <p className="mt-4 text-xl text-gray-600 text-center">
              Experience the customer side of RetailBoost and see how our scratch card system works.
            </p>
          </div>
          
          <div className="max-w-xl w-full">
            {/* Step 1: Form */}
            {step === 1 && (
              <div className="bg-white rounded-lg p-8 shadow-lg mx-auto">
                <div className="mb-6 flex justify-center">
                  <div className="h-24 w-24 rounded-full bg-brand-purple/10 flex items-center justify-center">
                    <QrCode className="h-12 w-12 text-brand-purple" />
                  </div>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="billAmount" className="block text-sm font-medium text-gray-700 mb-1">
                        Bill Amount (₹)
                      </label>
                      <Input
                        id="billAmount"
                        type="number"
                        value={billAmount}
                        onChange={(e) => setBillAmount(e.target.value)}
                        placeholder="Enter bill amount"
                        className="w-full"
                        min="1"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-brand-purple hover:bg-brand-purple/90">
                      Get Your Scratch Card
                    </Button>
                  </div>
                </form>
              </div>
            )}
            
            {/* Step 2: Scratch Card */}
            {step === 2 && (
              <div className="text-center flex flex-col items-center">
                <p className="text-lg mb-4">Tap/click on the card to scratch and reveal your discount</p>
                <ScratchCard discount={discount} onReveal={handleScratchReveal} />
              </div>
            )}
            
            {/* Step 3: Spin Wheel (for repeat customers) */}
            {step === 3 && (
              <div className="text-center flex flex-col items-center">
                <p className="text-xl font-semibold mb-2">You're a repeat customer!</p>
                <p className="text-lg mb-6">Spin the wheel for an extra discount</p>
                <SpinWheel onSpinComplete={handleSpinComplete} />
              </div>
            )}
            
            {/* Step 4: Final Summary */}
            {step === 4 && (
              <div className="bg-white rounded-lg p-8 shadow-lg text-center mx-auto">
                <h2 className="text-2xl font-bold mb-2">Congratulations, {name}!</h2>
                <p className="text-lg mb-6">
                  You got a discount of <span className="text-brand-purple font-bold">₹{totalDiscount.toFixed(2)}</span>
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="flex justify-between mb-2">
                    <span>Original Bill:</span>
                    <span>₹{parseFloat(billAmount).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Base Discount:</span>
                    <span>₹{discount.toFixed(2)}</span>
                  </div>
                  {extraDiscount > 0 && (
                    <div className="flex justify-between mb-2">
                      <span>Extra Discount ({extraDiscount}%):</span>
                      <span>₹{(parseFloat(billAmount) * extraDiscount / 100).toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t pt-2 flex justify-between font-bold">
                    <span>Final Price:</span>
                    <span>₹{finalPrice.toFixed(2)}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">Hope to see you again soon!</p>
                
                <Button onClick={handleTryAgain} className="bg-brand-purple hover:bg-brand-purple/90">
                  Try Again
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Demo;
