
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon!",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or want to schedule a demo? We're here to help you get started with RetailBoost.
          </p>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 lg:pr-12">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="business-type" className="block text-sm font-medium text-gray-700 mb-1">
                      Business Type
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="grocery">Grocery Shop</SelectItem>
                        <SelectItem value="restaurant">Restaurant</SelectItem>
                        <SelectItem value="food-stall">Food Stall</SelectItem>
                        <SelectItem value="vegetable">Vegetable Vendor</SelectItem>
                        <SelectItem value="kirana">Kirana Store</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you"
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-3">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="lg:w-1/2 mt-12 lg:mt-0 lg:pl-12">
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm h-full">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-brand-purple/10 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-brand-purple" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:hello@retailboost.com" className="text-brand-purple hover:underline">
                        hello@retailboost.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-brand-purple/10 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-brand-purple" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+919876543210" className="text-brand-purple hover:underline">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-brand-purple/10 flex items-center justify-center mr-4">
                      <MessageSquare className="h-5 w-5 text-brand-purple" />
                    </div>
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <a href="https://wa.me/919876543210" className="text-brand-purple hover:underline">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
                  
                  <div className="space-y-6">
                    {[
                      { 
                        q: "How much does RetailBoost cost?", 
                        a: "We offer flexible pricing options starting with a free trial. Contact us for a custom quote based on your business needs."
                      },
                      { 
                        q: "Do I need any special hardware?", 
                        a: "No! RetailBoost works entirely on customers' smartphones. You just need to display the QR code at your checkout counter."
                      },
                      { 
                        q: "How do I integrate RetailBoost with my existing systems?", 
                        a: "RetailBoost works as a standalone system, so no complex integration is needed. We can provide API access for premium customers."
                      }
                    ].map((faq, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-lg">{faq.q}</h4>
                        <p className="text-gray-600 mt-1">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
