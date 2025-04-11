import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import WalkingAnimation from '@/components/WalkingAnimation';
import { useNavigate } from 'react-router-dom';

const Journey: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <Button 
        variant="outline" 
        className="mb-6"
        onClick={() => navigate('/')}
      >
        ← Back to Home
      </Button>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Coin Quest Journey</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Journey to the Store</CardTitle>
            <CardDescription>
              Watch your progress as you walk toward the store and collect coins along the way
            </CardDescription>
          </CardHeader>
          <CardContent>
            <WalkingAnimation />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>How to Earn Coins</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>1000 steps = 1 coin</li>
                <li>Reach milestones to earn bonus coins</li>
                <li>Complete daily challenges for extra rewards</li>
                <li>Walk faster to increase your coin multiplier</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rewards at the Store</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>1 Coin = ₹1 Rupee </li>
                <li>50 coins - Small discount</li>
                <li>100 coins - Medium discount</li>
                <li>200 coins - Large discount</li>
                <li>500 coins - Free item of your choice</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Journey;
