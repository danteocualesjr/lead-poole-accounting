
import React from 'react';
import { FileCheck, CheckCircle, UserPlus, FileText, Lock } from 'lucide-react';

const TaxOrganizer = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="section-title">Online Tax Organizer</h1>
          <p className="section-subtitle mx-auto">
            Our online tax organizer helps you organize your tax information to ensure that you don't miss any important deductions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h2 className="text-2xl font-semibold text-accounting-blue-dark mb-6">How It Works</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-accounting-blue p-3 rounded-full text-white">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-accounting-blue-dark mb-1">Create an Account</h3>
                  <p className="text-accounting-gray">
                    Register for a new account or log in to your existing account.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accounting-blue p-3 rounded-full text-white">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-accounting-blue-dark mb-1">Fill Out the Organizer</h3>
                  <p className="text-accounting-gray">
                    Complete the questionnaire and upload your tax documents.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accounting-blue p-3 rounded-full text-white">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-accounting-blue-dark mb-1">Submit Your Information</h3>
                  <p className="text-accounting-gray">
                    Send your completed organizer to our team for review.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accounting-blue p-3 rounded-full text-white">
                  <span className="font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-accounting-blue-dark mb-1">We Prepare Your Return</h3>
                  <p className="text-accounting-gray">
                    Our team will prepare your tax return and contact you if additional information is needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass p-8 rounded-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex gap-4 mb-6">
              <div className="bg-accounting-blue-dark/10 p-3 rounded-full">
                <FileText className="text-accounting-blue-dark" size={24} />
              </div>
              <h2 className="text-2xl font-semibold text-accounting-blue-dark">Tax Organizer Login</h2>
            </div>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-accounting-gray mb-1 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-accounting-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-accounting-blue"
                  placeholder="Enter your email address"
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
              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Log In
                </button>
              </div>
            </form>
            
            <div className="mt-6 pt-6 border-t border-accounting-gray-light">
              <h3 className="font-semibold text-accounting-blue-dark mb-4 flex items-center">
                <UserPlus size={18} className="mr-2" /> New User Registration
              </h3>
              <p className="text-accounting-gray mb-4">
                First time using our tax organizer? Create a new account to get started.
              </p>
              <button className="btn-secondary w-full">
                Register New Account
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass rounded-xl p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-accounting-blue-dark/10 p-3 rounded-full inline-block mb-4">
              <FileCheck className="text-accounting-blue-dark" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-accounting-blue-dark mb-3">Simple & User-Friendly</h3>
            <p className="text-accounting-gray">
              Our tax organizer is designed to be easy to use, guiding you through the tax preparation process step by step.
            </p>
          </div>
          
          <div className="glass rounded-xl p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-accounting-blue-dark/10 p-3 rounded-full inline-block mb-4">
              <CheckCircle className="text-accounting-blue-dark" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-accounting-blue-dark mb-3">Maximize Deductions</h3>
            <p className="text-accounting-gray">
              Our comprehensive questionnaire helps ensure you don't miss any potential deductions or credits.
            </p>
          </div>
          
          <div className="glass rounded-xl p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-accounting-blue-dark/10 p-3 rounded-full inline-block mb-4">
              <Lock className="text-accounting-blue-dark" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-accounting-blue-dark mb-3">Secure & Confidential</h3>
            <p className="text-accounting-gray">
              Your personal and financial information is protected with bank-level security encryption.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxOrganizer;
