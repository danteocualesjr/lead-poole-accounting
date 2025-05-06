
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Printer, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accounting-blue-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Poole Accounting, LLC</h3>
            <p className="text-white/80 mb-4">
              A full-service accounting firm licensed in MD, offering a broad range of services for business owners, executives, and independent professionals.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="shrink-0 mt-1" />
                <span>34 Defense Street Suite 200, Annapolis, MD 21401</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:taxes@poole-accounting.com" className="hover:text-white transition-colors">
                  taxes@poole-accounting.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:4102248838" className="hover:text-white transition-colors">
                  (410) 224-8838
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Printer size={18} />
                <span>(410) 224-8735</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Hours of Operation</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2">
                <Clock size={18} />
                <span>Monday – Friday: 8:30 am – 5:00 pm</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={18} />
                <span>Saturday: 8:30 am – 4:00 pm</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={18} />
                <span>Sunday: Closed</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">Our Team</Link>
              </li>
              <li>
                <Link to="/client-portal" className="hover:text-white transition-colors">Client Portal</Link>
              </li>
              <li>
                <Link to="/tax-organizer" className="hover:text-white transition-colors">Tax Organizer</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Poole Accounting, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
