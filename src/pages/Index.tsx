
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ExclusiveVouchers from '@/components/ExclusiveVouchers';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 pb-12">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-brand-purple/10 to-brand-light">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  The Future of Retail Engagement
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Boost loyalty, drive repeat visits, and delight your customers with our innovative QR-based scratch-and-win system.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/retailers">
                    <Button size="lg" className="bg-brand-purple hover:bg-brand-purple/90">
                      For Retailers
                    </Button>
                  </Link>
                  <Link to="/demo">
                    <Button size="lg" variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple/10">
                      Try Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="RetailBoost Illustration" 
                  className="max-w-full h-auto rounded-lg shadow-lg"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: 1, title: "Scan QR Code", description: "Customer scans the QR code at checkout" },
                { step: 2, title: "Enter Details", description: "Enter name and bill amount" },
                { step: 3, title: "Scratch Card", description: "Scratch to reveal discount" },
                { step: 4, title: "Bonus Spin", description: "Loyal customers get extra rewards" },
                { step: 5, title: "Save Money", description: "Enjoy the discount and come back soon!" },
              ].map((item) => (
                <div key={item.step} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-12 h-12 bg-brand-purple text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Exclusive Vouchers Section */}
        <ExclusiveVouchers />
        
        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-8">Benefits to Customers</h2>
                <ul className="space-y-4">
                  {[
                    "Fun and engaging shopping experience",
                    "Instant rewards on every purchase",
                    "Extra discounts for loyalty",
                    "No need to download any app",
                    "Simple and easy to use",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-brand-purple/20 text-brand-purple flex items-center justify-center mr-3 mt-1">✓</div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-8">Benefits to Businesses</h2>
                <ul className="space-y-4">
                  {[
                    "Increase customer retention and loyalty",
                    "Track customer visits and spending",
                    "Customize discount rules and offers",
                    "Stand out from competitors",
                    "Affordable alternative to loyalty apps",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center mr-3 mt-1">✓</div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Business?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Join RetailBoost today and start rewarding your customers with a fun and engaging discount system.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/retailers">
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90">
                  Join as a Retailer
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
