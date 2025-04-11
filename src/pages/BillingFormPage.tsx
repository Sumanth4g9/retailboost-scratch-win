
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BillingForm from '@/components/BillingForm';

const BillingFormPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Enter Bill Details</h1>
          <BillingForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BillingFormPage;
