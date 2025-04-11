
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import CoinIcon from './CoinIcon';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const coins= 5; // Example coin count, replace with actual state or prop
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Journey');
  }

  return (
    <nav className="w-full bg-white shadow-sm py-4 fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-brand-purple">Retail<span className="text-brand-orange">Boost</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-brand-purple transition-colors">
            Home
          </Link>
          <Link to="/retailers" className="text-gray-700 hover:text-brand-purple transition-colors">
            For Retailers
          </Link>
          <Link to="/demo" className="text-gray-700 hover:text-brand-purple transition-colors">
            Try Demo
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-brand-purple transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-brand-purple transition-colors">
            Contact
          </Link>
          <Button onClick ={handleClick}className="bg-brand-purple hover:bg-brand-purple/90 text-white">
            Points : {coins}</Button>
          {/* <CoinIcon coins={5} /> Example coin count */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full py-4 px-6 flex flex-col space-y-4 z-50">
          <Link to="/" onClick={toggleMobileMenu} className="text-gray-700 hover:text-brand-purple transition-colors py-2">
            Home
          </Link>
          <Link to="/retailers" onClick={toggleMobileMenu} className="text-gray-700 hover:text-brand-purple transition-colors py-2">
            For Retailers
          </Link>
          <Link to="/demo" onClick={toggleMobileMenu} className="text-gray-700 hover:text-brand-purple transition-colors py-2">
            Try Demo
          </Link>
          <Link to="/about" onClick={toggleMobileMenu} className="text-gray-700 hover:text-brand-purple transition-colors py-2">
            About
          </Link>
          <Link to="/contact" onClick={toggleMobileMenu} className="text-gray-700 hover:text-brand-purple transition-colors py-2">
            Contact
          </Link>
          <Button className="bg-brand-purple hover:bg-brand-purple/90 w-full">
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
