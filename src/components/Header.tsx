
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-accounting-blue-dark">
              Poole Accounting, LLC
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={isActive('/') ? 'nav-link-active' : 'nav-link'}>
              Home
            </Link>
            <Link to="/team" className={isActive('/team') ? 'nav-link-active' : 'nav-link'}>
              Our Team
            </Link>
            <Link to="/services" className={isActive('/services') ? 'nav-link-active' : 'nav-link'}>
              Services
            </Link>
            <Link to="/client-portal" className={isActive('/client-portal') ? 'nav-link-active' : 'nav-link'}>
              Client Portal
            </Link>
            <Link to="/tax-organizer" className={isActive('/tax-organizer') ? 'nav-link-active' : 'nav-link'}>
              Tax Organizer
            </Link>
            <Link to="/contact" className={isActive('/contact') ? 'nav-link-active' : 'nav-link'}>
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-accounting-blue-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden glass-dark absolute top-full left-0 right-0 p-4">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-white hover:text-accounting-blue-light py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/team"
              className="text-white hover:text-accounting-blue-light py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Team
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-accounting-blue-light py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/client-portal"
              className="text-white hover:text-accounting-blue-light py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Client Portal
            </Link>
            <Link
              to="/tax-organizer"
              className="text-white hover:text-accounting-blue-light py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Tax Organizer
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-accounting-blue-light py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
