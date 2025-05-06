
import React from 'react';
import { Lock, FileText, Mail } from 'lucide-react';

const ClientPortal = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="section-title">Client Portal</h1>
          <p className="section-subtitle mx-auto">
            Our secure client portal provides easy access to your financial documents and streamlined communication with our team.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="glass p-8 rounded-xl animate-fade-in">
            <div className="bg-accounting-blue-dark/10 p-4 rounded-full inline-block mb-4">
              <Lock className="text-accounting-blue-dark" size={24} />
            </div>
            <h2 className="text-2xl font-semibold text-accounting-blue-dark mb-4">Portal Login</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-accounting-gray mb-1 font-medium">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full p-3 border border-accounting-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-accounting-blue"
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-accounting-gray mb-1 font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 border border-accounting-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-accounting-blue"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Log In
                </button>
                <a href="#" className="text-accounting-blue hover:text-accounting-blue-dark transition-colors">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
          
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-semibold text-accounting-blue-dark mb-4">Portal Benefits</h2>
            
            <div className="flex items-start gap-4">
              <div className="bg-accounting-blue-dark/10 p-3 rounded-full">
                <FileText className="text-accounting-blue-dark" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-accounting-blue-dark mb-1">Secure Document Sharing</h3>
                <p className="text-accounting-gray">
                  Exchange sensitive financial documents securely with bank-level encryption.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-accounting-blue-dark/10 p-3 rounded-full">
                <Mail className="text-accounting-blue-dark" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-accounting-blue-dark mb-1">Direct Communication</h3>
                <p className="text-accounting-gray">
                  Communicate directly with your accountant through our secure messaging system.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-accounting-blue-dark/10 p-3 rounded-full">
                <Lock className="text-accounting-blue-dark" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-accounting-blue-dark mb-1">24/7 Access</h3>
                <p className="text-accounting-gray">
                  Access your financial documents anytime, anywhere, from any device.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass-dark p-8 rounded-xl text-center">
          <h2 className="text-2xl font-semibold mb-4">New to the Portal?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            To register for our client portal, please contact our office and we'll set up your account with secure credentials.
          </p>
          <button className="bg-white text-accounting-blue-dark px-6 py-3 rounded-md hover:bg-accounting-gray-light transition-all duration-200 font-medium">
            Contact Us to Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
