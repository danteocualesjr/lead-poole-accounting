
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Users, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 relative">
      {/* Background with gradient and subtle image */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
          alt=""
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-radial from-accounting-blue-light/10 to-transparent"></div>
      </div>
      
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accounting-blue-dark leading-tight mb-6">
              Professional Accounting Services in Annapolis
            </h1>
            <p className="text-lg text-accounting-gray mb-8 max-w-lg">
              Poole Accounting, LLC is a full-service accounting firm offering a broad range of services for business owners, executives, and independent professionals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn-primary">
                Explore Our Services
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="glass p-8 rounded-2xl animate-fade-in relative overflow-hidden" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 -z-10">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
                alt=""
                className="w-full h-full object-cover opacity-5"
              />
            </div>
            <h2 className="text-2xl font-semibold text-accounting-blue-dark mb-6">How Can We Help You?</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-accounting-blue-dark/10 p-3 rounded-full">
                  <FileText className="text-accounting-blue-dark" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-accounting-blue-dark mb-1">Tax Services</h3>
                  <p className="text-accounting-gray">Don't pay more in taxes than you have to! Take full advantage of all deductions and credits.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accounting-blue-dark/10 p-3 rounded-full">
                  <Users className="text-accounting-blue-dark" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-accounting-blue-dark mb-1">Business Services</h3>
                  <p className="text-accounting-gray">Run your business at peak performance with our accounting and advisory services.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accounting-blue-dark/10 p-3 rounded-full">
                  <Phone className="text-accounting-blue-dark" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-accounting-blue-dark mb-1">Client Resources</h3>
                  <p className="text-accounting-gray">Access our secure client portal, online tax organizer, and more.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
