
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, QrCode, Smartphone, BarChart, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Reward Every Purchase with a Scratch!
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Boost loyalty, drive repeat visits, and delight your customers with our innovative QR-based scratch-and-win system.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/retailers">
                  <Button className="w-full sm:w-auto bg-brand-purple hover:bg-brand-purple/90 text-white text-lg py-6 px-8">
                    For Retailers: Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/demo">
                  <Button variant="outline" className="w-full sm:w-auto border-brand-purple text-brand-purple hover:bg-brand-purple/10 text-lg py-6 px-8">
                    Try a Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-brand-purple/20 rounded-full filter blur-3xl opacity-70"></div>
                <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-brand-orange/20 rounded-full filter blur-3xl opacity-70"></div>
                <img 
                  src="https://placehold.co/600x400/8B5CF6/FFFFFF?text=RetailBoost+Demo" 
                  alt="RetailBoost Demo" 
                  className="relative z-10 rounded-lg shadow-xl w-full" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">How It Works (For Customers)</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              A simple yet engaging experience that keeps your customers coming back.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: <QrCode className="h-10 w-10 text-brand-purple" />, title: "Scan the QR Code", desc: "Customers scan your unique QR code at checkout" },
              { icon: <Smartphone className="h-10 w-10 text-brand-purple" />, title: "Enter Details", desc: "They enter their name & bill amount" },
              { icon: <div className="flex justify-center"><div className="w-12 h-8 bg-brand-purple text-white rounded flex items-center justify-center">₹50</div></div>, title: "Scratch to Reveal", desc: "They scratch digitally to reveal their discount" },
              { icon: <div className="rounded-full w-10 h-10 border-4 border-dashed border-brand-orange animate-spin"></div>, title: "Spin to Win More", desc: "Optional wheel spin for loyal customers" },
              { icon: <div className="text-2xl font-bold text-green-500">₹</div>, title: "Enjoy Savings!", desc: "They apply the discount to their purchase" }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="h-20 w-20 rounded-full bg-indigo-50 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
                {index < 4 && (
                  <div className="hidden md:block h-0.5 w-full bg-gray-200 relative mt-4">
                    <ArrowRight className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Benefits to Customers</h2>
              <ul className="space-y-6">
                {[
                  { title: "Fun Experience", desc: "Adds excitement to the ordinary shopping experience" },
                  { title: "Instant Rewards", desc: "Immediate discounts with no waiting" },
                  { title: "Extra Discounts for Loyalty", desc: "More rewards for regular customers" }
                ].map((benefit, index) => (
                  <li key={index} className="flex">
                    <div className="mr-4 mt-1">
                      <div className="h-6 w-6 rounded-full bg-brand-purple text-white flex items-center justify-center">
                        ✓
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{benefit.title}</h3>
                      <p className="text-gray-600 mt-1">{benefit.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8">Benefits to Businesses</h2>
              <ul className="space-y-6">
                {[
                  { icon: <Users />, title: "More Repeat Customers", desc: "Keep customers coming back for more rewards" },
                  { icon: <BarChart />, title: "Customer Tracking & Insights", desc: "Learn about your customers' habits and preferences" },
                  { icon: <div className="font-bold">%</div>, title: "Customizable Discount Rules", desc: "Set your own rules based on your business needs" }
                ].map((benefit, index) => (
                  <li key={index} className="flex">
                    <div className="mr-4 mt-1">
                      <div className="h-6 w-6 rounded-full bg-brand-orange text-white flex items-center justify-center">
                        {benefit.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{benefit.title}</h3>
                      <p className="text-gray-600 mt-1">{benefit.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-brand-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Boost Your Retail Business?</h2>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
            Join thousands of local businesses already using RetailBoost to increase customer loyalty and drive sales.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/retailers">
              <Button className="w-full sm:w-auto bg-white text-brand-purple hover:bg-white/90 text-lg py-6 px-8">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 text-lg py-6 px-8">
                Try a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
