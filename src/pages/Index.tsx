
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ExclusiveVouchers from '@/components/ExclusiveVouchers';
import {Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import WalkingAnimation from '@/components/WalkingAnimation';

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
                  src="/retail.jpg" 
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
              {/* Use Cases Section */}
        <section className="py-20 bg-white">

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold"> OUR REACH  </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              RetailBoost works for a variety of local businesses.
            </p>
          </div>
          
          <div className="pl-30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { image: "2.jpg", title: "Grocery Shops" },
              { image: "1.webp", title: "Food Stalls" },
              { image: "3.jpg", title: "Restaurants" },
              { image: "4.jpg", title: "Vegetable Vendors" },
              { image: "5.jpg", title: "Clothing Stores" }

            ].map((useCase, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={useCase.image} alt={useCase.title} className="w-full h-48 object-cover" />
                <div className="p-4 bg-gray-50">
                  <h3 className="text-lg font-semibold text-center">{useCase.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Journey to Store Section - Centered */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Your Journey to the Store</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Watch your progress as you walk toward the store and collect coins along the way
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <WalkingAnimation />
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
        
        {/* Benefits Section */}
        <section className="py-16 bg-gray-50 ">
          <div className="container mx-auto px-4 flex justify-center items-center">
            <div className="text-center mb-12">
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
            </div>
          </div>
        </section>
        {/* exclusive vouchers */}
        <ExclusiveVouchers />

        <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">What Retailers Say</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from some of the businesses using RetailBoost to drive customer loyalty.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                quote: "I used to shop at my local store every day, but now with RetailBoost, I've saved over ₹1,200 just through scratch cards and spin wins! It makes shopping fun and rewarding.",
                name: "Anjali R.",
                business: "",
                rating: 5
              },
              { 
                quote: "I walk 1.5 km daily to my grocery store, and RetailBoost tracked my steps. I collected RB Coins and used them for discount vouchers. Never thought walking could save me money!",
                name: "Mahesh G.",
                business: "Fitness Enthusiast",
                rating: 5
              },
              { 
                quote: "With three kids at home, every rupee matters. RetailBoost gave me instant discounts and even cashback-like rewards. I've saved nearly ₹950 in just two months",
                name: "Kavitha D.",
                business: "Homemaker",
                rating: 4
              },
              {
                quote: "I love spinning the wheel after shopping—it's like a mini game! I once got 15% off on a ₹500 bill. That feeling? Priceless!",
                name: "Farhan S. ",
                business: "College Student",
                rating: 5

              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-brand-orange fill-brand-orange" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i + testimonial.rating} className="h-5 w-5 text-gray-300" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div className=''>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
