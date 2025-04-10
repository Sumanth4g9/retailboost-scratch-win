
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About RetailBoost</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Supporting local businesses in the age of quick commerce with innovative loyalty solutions.
          </p>
        </div>
      </section>
      
      {/* Vision & Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                RetailBoost was founded with a simple but powerful vision: to help local retailers compete in an increasingly digital world.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that local businesses are the backbone of our communities, and they deserve tools that help them engage customers just as effectively as large corporations.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to provide affordable, easy-to-use technology that helps small retailers create meaningful connections with their customers, drive repeat business, and thrive in the digital age.
              </p>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-brand-purple/20 rounded-full filter blur-3xl opacity-70"></div>
                <img 
                  src="https://placehold.co/600x400/8B5CF6/FFFFFF?text=Our+Vision" 
                  alt="Our Vision" 
                  className="relative z-10 rounded-lg shadow-xl w-full" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Founder Section
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">Our Founder</h2>
              <p className="text-lg text-gray-600 mb-6">
                RetailBoost was created by , who saw firsthand the challenges faced by local retailers in competing with quick commerce apps.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Having grown up around small businesses, Sumanth understood that these retailers needed affordable digital solutions that could help them build customer loyalty without breaking the bank.
              </p>
              <p className="text-lg text-gray-600">
                With a background in technology and a passion for supporting local communities, Sumanth developed RetailBoost to bridge the gap between traditional retail and modern customer expectations.
              </p>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative">
                <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-brand-orange/20 rounded-full filter blur-3xl opacity-70"></div>
                <img 
                  src="https://placehold.co/600x400/8B5CF6/FFFFFF?text=Founder" 
                  alt=" - Founder" 
                  className="relative z-10 rounded-lg shadow-xl w-full" 
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Testimonials Section */}
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
                quote: "RetailBoost has helped us increase repeat customers by 30% in just three months. Our customers love the scratch card experience!",
                name: "Raj Kumar",
                business: "Fresh Grocery Mart",
                rating: 5
              },
              { 
                quote: "The system was easy to set up and our customers find it exciting. We're seeing more repeat visits and higher average spend.",
                name: "Priya Sharma",
                business: "Spice & Nice Restaurant",
                rating: 5
              },
              { 
                quote: "Our customers are actually choosing us over the quick commerce apps because they enjoy the shopping experience and rewards.",
                name: "Vikram Singh",
                business: "Singh's Kirana Store",
                rating: 4
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
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-brand-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Join the RetailBoost Family?</h2>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
            Take the first step toward customer loyalty and increased sales today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/retailers">
              <Button className="w-full sm:w-auto bg-white text-brand-purple hover:bg-white/90 text-lg py-6 px-8">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 text-lg py-6 px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
