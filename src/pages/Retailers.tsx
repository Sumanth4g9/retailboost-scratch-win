
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, BarChart4, Users, Settings, Database, QrCode } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Retailers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Stand Out From Your Competitors
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                In the age of quick commerce, RetailBoost helps local businesses compete with digital rewards that keep customers coming back.
              </p>
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white text-lg py-6 px-8">
                    Contact for Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-brand-purple/20 rounded-full filter blur-3xl opacity-70"></div>
                <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-brand-orange/20 rounded-full filter blur-3xl opacity-70"></div>
                <img 
                  src="/public/l.png" 
                  alt="RetailBoost Dashboard" 
                  className="relative z-10 rounded-lg shadow-xl w-full" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why RetailBoost Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why RetailBoost?</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              A cost-effective loyalty system designed specifically for local businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <div className="text-3xl font-bold text-brand-purple">vs.</div>, 
                title: "Stand Out From Competitors", 
                desc: "Differentiate your business from online competitors like Zepto/Blinkit with unique rewards"
              },
              { 
                icon: <QrCode className="h-10 w-10 text-brand-purple" />, 
                title: "Digital Rewards at Checkout", 
                desc: "Create a memorable checkout experience that customers will talk about"
              },
              { 
                icon: <div className="text-2xl font-bold text-green-500">₹</div>, 
                title: "Cost-Effective Loyalty System", 
                desc: "Lower cost than traditional loyalty programs with higher engagement"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-16 w-16 rounded-full bg-indigo-50 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Features</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create a successful loyalty program.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                icon: <Settings className="h-8 w-8 text-brand-purple" />, 
                title: "Custom Discount Settings",
                list: [
                  "Set minimum bill amounts",
                  "Configure discount ranges",
                  "Special rewards for loyal customers"
                ]
              },
              { 
                icon: <Users className="h-8 w-8 text-brand-purple" />, 
                title: "Customer Visit Tracking",
                list: [
                  "Know who your repeat customers are",
                  "Track visit frequency and spending",
                  "Build customer profiles"
                ]
              },
              { 
                icon: <Database className="h-8 w-8 text-brand-purple" />, 
                title: "High Spender Recognition",
                list: [
                  "Identify your best customers",
                  "Offer VIP rewards automatically",
                  "Encourage higher value purchases"
                ]
              },
              { 
                icon: <BarChart4 className="h-8 w-8 text-brand-purple" />, 
                title: "Analytics Dashboard",
                list: [
                  "Clear visual reports",
                  "Customer spending insights",
                  "Measure program effectiveness"
                ]
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-indigo-50 flex items-center justify-center mr-4 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <ul className="space-y-2">
                      {feature.list.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-brand-orange mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Use Cases</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              RetailBoost works for a variety of local businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { image: "https://placehold.co/300x200/8B5CF6/FFFFFF?text=Grocery", title: "Grocery Shops" },
              { image: "https://placehold.co/300x200/8B5CF6/FFFFFF?text=Food", title: "Food Stalls" },
              { image: "https://placehold.co/300x200/8B5CF6/FFFFFF?text=Restaurant", title: "Restaurants" },
              { image: "https://placehold.co/300x200/8B5CF6/FFFFFF?text=Vegetable", title: "Vegetable Vendors" },
              { image: "https://placehold.co/300x200/8B5CF6/FFFFFF?text=Kirana", title: "Local Kirana Stores" }
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
      </section> */}
      
      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Pricing / Plans</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent pricing to help your business grow.
            </p>
            {/* <div className="mt-4 inline-block bg-gray-200 rounded-full px-2 py-1 text-sm">
              Coming Soon
            </div> */}
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Exclusive For Retailers", 
                price: "₹299",
                period: " 28 DAYS",
                features: [
                  "Basic QR code generation",
                  "Up to 100 customer records",
                  "Standard discount settings",
                  "Email support",
                  "Free Banner and Marketing"
                ]
              },
              { 
                name: "Standard", 
                price: "₹499",
                period: " 28 DAYS",
                popular: true,
                features: [
                  "Advanced QR codes",
                  "Unlimited customer records",
                  "Custom discount rules",
                  "Customer analytics",
                  "Priority support",
                  "Free Banner and Marketing"
                ]
              },
              { 
                name: "Premium", 
                price: "₹1,499",
                period: " 28 DAYS",
                features: [
                  "Everything in Standard",
                  "White-labeled experience",
                  "API access",
                  "Dedicated account manager",
                  "Custom integrations",
                  "Free Banner and Marketing"
                ]
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-lg overflow-hidden shadow-lg border ${
                  plan.popular 
                    ? 'border-brand-purple relative' 
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-brand-purple text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                    Popular
                  </div>
                )}
                <div className={`p-6 ${plan.popular ? 'bg-indigo-50' : 'bg-white'}`}>
                  <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-brand-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-brand-purple hover:bg-brand-purple/90 text-white' 
                        : 'bg-white border border-brand-purple text-brand-purple hover:bg-brand-purple/10'
                    }`}
                  >
                    Coming Soon
                  </Button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-brand-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
            Book a demo today and see how RetailBoost can transform your business.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact">
              <Button className="w-full sm:w-auto bg-white text-brand-purple hover:bg-white/90 text-lg py-6 px-8">
                Contact for Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 text-lg py-6 px-8">
                Try the Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Retailers;
