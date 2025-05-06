
import React from 'react';
import { MapPin, Mail, Phone, Printer, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle mx-auto">
            We're here to answer your questions. Reach out to us through any of the channels below.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="glass p-8 rounded-xl animate-fade-in">
            <h2 className="text-2xl font-semibold text-accounting-blue-dark mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-accounting-gray mb-1 font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full p-3 border border-accounting-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-accounting-blue"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-accounting-gray mb-1 font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full p-3 border border-accounting-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-accounting-blue"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-accounting-gray mb-1 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-accounting-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-accounting-blue"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-accounting-gray mb-1 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border border-accounting-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-accounting-blue"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-accounting-gray mb-1 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 border border-accounting-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-accounting-blue"
                  placeholder="Subject of your message"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-accounting-gray mb-1 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 border border-accounting-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-accounting-blue"
                  placeholder="Type your message here"
                ></textarea>
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-accounting-blue-dark mb-4">Contact Information</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="bg-accounting-blue-dark/10 p-3 rounded-full shrink-0">
                    <MapPin className="text-accounting-blue-dark" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-accounting-blue-dark mb-1">Office Address</h3>
                    <p className="text-accounting-gray">
                      34 Defense Street Suite 200<br />
                      Annapolis, MD 21401
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-accounting-blue-dark/10 p-3 rounded-full shrink-0">
                    <Mail className="text-accounting-blue-dark" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-accounting-blue-dark mb-1">Email</h3>
                    <a href="mailto:taxes@poole-accounting.com" className="text-accounting-blue hover:text-accounting-blue-dark transition-colors">
                      taxes@poole-accounting.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-accounting-blue-dark/10 p-3 rounded-full shrink-0">
                    <Phone className="text-accounting-blue-dark" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-accounting-blue-dark mb-1">Phone</h3>
                    <a href="tel:4102248838" className="text-accounting-blue hover:text-accounting-blue-dark transition-colors">
                      (410) 224-8838
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-accounting-blue-dark/10 p-3 rounded-full shrink-0">
                    <Printer className="text-accounting-blue-dark" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-accounting-blue-dark mb-1">Fax</h3>
                    <p className="text-accounting-gray">
                      (410) 224-8735
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-semibold text-accounting-blue-dark mb-4">Office Hours</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Clock className="text-accounting-blue-dark" size={18} />
                  <span className="text-accounting-gray">Monday – Friday: 8:30 am – 5:00 pm</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="text-accounting-blue-dark" size={18} />
                  <span className="text-accounting-gray">Saturday: 8:30 am – 4:00 pm</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="text-accounting-blue-dark" size={18} />
                  <span className="text-accounting-gray">Sunday: Closed</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-dark p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Visit Our Office</h3>
              <p className="text-white/80 mb-4">
                If you have any unanswered questions, please let us know. Feel free to call, email, fax, write or just stop by.
              </p>
              <a href="https://maps.google.com/?q=34+Defense+Street+Suite+200,+Annapolis,+MD+21401" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-accounting-blue-dark px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all">
                Get Directions
              </a>
            </div>
          </div>
        </div>
        
        {/* Map Placeholder - In a real implementation this would be a Google Map */}
        <div className="bg-accounting-gray-light h-[400px] rounded-xl flex items-center justify-center animate-fade-in">
          <p className="text-accounting-gray text-lg font-medium">Interactive Map Would Be Displayed Here</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
