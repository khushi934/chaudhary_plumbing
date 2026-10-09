import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Droplet } from 'lucide-react';
import { BUSINESS } from '../data/business';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white pb-20 md:pb-8 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Droplet className="h-7 w-7 text-white" strokeWidth={2.5} />
              <span className="font-bold text-xl tracking-wide">{BUSINESS.name}</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm mt-4">
              Providing reliable, professional, and prompt plumbing solutions for residential requirements. Your satisfaction is our priority.
            </p>
          </div>

          {/* Quick Links Col */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm leading-snug">{BUSINESS.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-300 flex-shrink-0" />
                <a href={`tel:${BUSINESS.phone}`} className="text-gray-300 hover:text-white text-sm">
                  {BUSINESS.phone}
                </a>
              </li>
              {BUSINESS.email && (
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-300 flex-shrink-0" />
                  <a href={`mailto:${BUSINESS.email}`} className="text-gray-300 hover:text-white text-sm break-all">
                    {BUSINESS.email}
                  </a>
                </li>
              )}
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} {BUSINESS.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
