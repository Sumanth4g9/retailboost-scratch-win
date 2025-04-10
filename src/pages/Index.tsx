
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Utensils, Truck, ShoppingBag, Tv, Scissors } from 'lucide-react';
import Footer from '@/components/Footer';
import HomeNavbar from '@/components/HomeNavbar';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[#2D0A8F] bg-purple-pattern min-h-screen">
        <HomeNavbar />
        
        {/* Hero Section */}
        <section className="pt-20 pb-32 flex flex-col items-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-16">
              India's <span className="text-[#FF3366]">No. 1</span> Local Savings SuperApp
            </h1>
            
            <div className="relative max-w-4xl mx-auto mt-8">
              <div className="flex items-center bg-white rounded-md overflow-hidden">
                <div className="flex items-center justify-center px-4 py-3 border-r border-gray-200">
                  <MapPin className="h-5 w-5 text-[#FF3366] mr-2" />
                  <span className="text-gray-500">Search Location</span>
                </div>
                <Input 
                  type="text" 
                  placeholder="Search for places, cuisines, and more..."
                  className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0 py-6"
                />
                <div className="px-4">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Category Icons */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {[
                { icon: <div className="text-center text-xs font-bold">ONDC</div>, name: "ONDC", bg: "bg-white" },
                { icon: <Utensils className="h-10 w-10 text-[#FF9966]" />, name: "DINE-OUT", bg: "bg-[#FFF8F0]" },
                { icon: <Truck className="h-10 w-10 text-[#FFC44D]" />, name: "FOOD DELIVERY", bg: "bg-[#FFF8F0]" },
                { icon: <ShoppingBag className="h-10 w-10 text-[#FF6699]" />, name: "FASHION", bg: "bg-[#FFF0F5]" },
                { icon: <Tv className="h-10 w-10 text-[#3399FF]" />, name: "ELECTRONICS", bg: "bg-[#F0F8FF]" },
                { icon: <Scissors className="h-10 w-10 text-[#FF6666]" />, name: "BEAUTY", bg: "bg-[#FFF0F0]" },
              ].map((category, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full ${category.bg} flex items-center justify-center mb-4 shadow-md`}>
                    {category.icon}
                  </div>
                  <span className="text-white font-medium">{category.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
