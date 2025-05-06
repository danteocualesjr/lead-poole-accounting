
import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { Calculator, FileCheck, Shield, Users, Coffee, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-accounting-gray-light/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle mx-auto">
              We offer a comprehensive range of accounting and tax services to meet all your financial needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Tax Preparation" 
              description="Individual and business tax preparation services with maximized deductions and credits." 
              icon={FileCheck}
              delay={0.1}
              backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            />
            <ServiceCard 
              title="Small Business Accounting" 
              description="Comprehensive accounting services tailored to the unique needs of your business." 
              icon={Calculator}
              delay={0.2}
              backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            />
            <ServiceCard 
              title="Payroll Services" 
              description="Full-service payroll processing to ensure accuracy and compliance." 
              icon={Users}
              delay={0.3}
              backgroundImage="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            />
            <ServiceCard 
              title="Tax Planning" 
              description="Proactive tax planning strategies to minimize your tax liability." 
              icon={Coffee}
              delay={0.4}
              backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            />
            <ServiceCard 
              title="IRS Representation" 
              description="Professional representation during IRS audits and other tax matters." 
              icon={Shield}
              delay={0.5}
              backgroundImage="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            />
            <div className="glass rounded-xl p-6 flex flex-col justify-center items-center text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-xl font-semibold text-accounting-blue-dark mb-3">Explore All Services</h3>
              <p className="text-accounting-gray mb-4">Discover our full range of business and tax services.</p>
              <Link to="/services" className="flex items-center text-accounting-blue hover:text-accounting-blue-dark transition-colors">
                View All Services <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-accounting-blue-dark/90 -z-10 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt=""
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contact us today to schedule a consultation and discover how Poole Accounting can help you achieve your financial goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-accounting-blue-dark px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-200 font-medium">
              Contact Us
            </Link>
            <Link to="/client-portal" className="bg-transparent text-white px-6 py-3 rounded-md hover:bg-white/10 transition-all duration-200 font-medium border border-white/30">
              Client Portal
            </Link>
          </div>
        </div>
      </section>
      
      {/* Client Resources */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Client Resources</h2>
            <p className="section-subtitle mx-auto">
              Access our secure tools and resources designed to make managing your financial information easier.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <AspectRatio ratio={16/9}>
                <img 
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
                  alt="Client Portal"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <CardContent className="text-center pt-6">
                <h3 className="text-xl font-semibold text-accounting-blue-dark mb-4">Secure Client Portal</h3>
                <p className="text-accounting-gray mb-6">
                  Access your financial documents securely and communicate with our team.
                </p>
                <Link to="/client-portal" className="btn-primary inline-block">
                  Access Portal
                </Link>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <AspectRatio ratio={16/9}>
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
                  alt="Tax Organizer"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <CardContent className="text-center pt-6">
                <h3 className="text-xl font-semibold text-accounting-blue-dark mb-4">Online Tax Organizer</h3>
                <p className="text-accounting-gray mb-6">
                  Organize your tax information efficiently to ensure you don't miss any deductions.
                </p>
                <Link to="/tax-organizer" className="btn-primary inline-block">
                  Start Now
                </Link>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <AspectRatio ratio={16/9}>
                <img 
                  src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
                  alt="Newsletter Archive"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <CardContent className="text-center pt-6">
                <h3 className="text-xl font-semibold text-accounting-blue-dark mb-4">Newsletter Archive</h3>
                <p className="text-accounting-gray mb-6">
                  Access our newsletters with valuable tax tips and financial advice.
                </p>
                <button className="btn-primary">
                  View Newsletters
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
