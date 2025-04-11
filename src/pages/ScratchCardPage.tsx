
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScratchCard from '@/components/ScratchCard';

const ScratchCardPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Your Discount Scratch Card</h1>
          <ScratchCard />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ScratchCardPage;
