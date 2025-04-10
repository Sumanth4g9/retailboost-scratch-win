
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Smartphone, Apple } from 'lucide-react';

const HomeNavbar = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between py-6">
        <Link to="/" className="flex items-center">
          <span className="text-3xl font-bold text-white">retail<span className="text-[#FF3366]">boost</span></span>
          <span className="text-white/70 text-sm ml-2">Local Savings SuperApp</span>
        </Link>
        
        <div className="hidden md:flex space-x-6 items-center">
          <div className="flex items-center text-white group">
            <span>ABOUT US</span>
            <ChevronDown className="h-4 w-4 ml-1 group-hover:rotate-180 transition-transform duration-200" />
          </div>
          
          <Link to="/retailers" className="text-white">
            Velocity
          </Link>
          
          <Link to="/about" className="text-white">
            NEWS ROOM
          </Link>
          
          <Link to="/about" className="text-white">
            BLOG
          </Link>
          
          <div className="flex items-center text-white group">
            <span>BUSINESS</span>
            <ChevronDown className="h-4 w-4 ml-1 group-hover:rotate-180 transition-transform duration-200" />
          </div>
          
          <div className="flex items-center space-x-1 text-white">
            <span className="text-sm">Get app:</span>
            <Smartphone className="h-5 w-5" />
            <Apple className="h-5 w-5" />
          </div>
          
          <Link to="/demo">
            <Button className="bg-[#FF3366] hover:bg-[#FF3366]/90 text-white">
              Sign In/Up
            </Button>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
