import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS } from '../data/business';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => location.pathname === path;
  
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent("Hello, I need a plumber.")}`;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
            : 'bg-white border-b border-gray-100 shadow-sm py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Elegant Logomark */}
            <div className="flex items-center shrink-0">
              <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
                <div className="bg-gradient-to-tr from-brand-navy to-blue-800 text-white p-2 rounded-lg shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <span className="font-serif font-bold text-xl leading-none">C</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-lg md:text-xl text-gray-900 tracking-tight leading-tight group-hover:text-brand-navy transition-colors">
                    Chaudhary
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold text-brand-green tracking-widest uppercase leading-none">
                    Plumbing Works
                  </span>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center gap-3 lg:gap-4 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-base font-medium transition-all duration-300 ease-in-out shrink-0
                    ${isActive(link.path) 
                      ? 'bg-gray-100 text-brand-navy' 
                      : 'text-gray-600 hover:text-brand-navy hover:bg-gray-50'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-2.5 bg-green-50 text-brand-green rounded-full hover:bg-brand-green hover:text-white transition-all duration-300"
                aria-label="WhatsApp Us"
              >
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href={`tel:${BUSINESS.phone}`}
                className="group flex items-center gap-2 bg-brand-navy text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-900 shadow-md transition-all duration-300"
              >
                <Phone size={16} className="group-hover:animate-pulse" />
                <span>Call Us</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors focus:ring-2 focus:ring-gray-200 outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full mt-2 transition-all duration-400 ease-in-out overflow-hidden Origin-top ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="mx-4 bg-white rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.1)] border border-gray-100 p-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={`block px-5 py-3.5 rounded-xl text-base font-semibold transition-colors ${
                  isActive(link.path) 
                    ? 'bg-gray-50 text-brand-navy' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 bg-green-50 text-brand-green px-4 py-3.5 rounded-xl font-bold active:scale-95 transition-transform"
              >
                <MessageCircle size={18} />
                <span>Chat</span>
              </a>
              <a 
                href={`tel:${BUSINESS.phone}`}
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 bg-brand-navy text-white px-4 py-3.5 rounded-xl font-bold active:scale-95 transition-transform shadow-md"
              >
                <Phone size={18} />
                <span>Call</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content jump due to fixed navbar */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
