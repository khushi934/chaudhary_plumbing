import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail } from 'lucide-react';
import { BUSINESS } from '../data/business';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-navy text-white pb-20 md:pb-8 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <div className="bg-white rounded-xl p-2 inline-block">
                <img
                  src={logo}
                  alt="Chaudhary Plumbing Works"
                  className="h-14 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm mt-4">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links Col */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">{t('nav.portfolio')}</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">{t('footer.contactInfo')}</h3>
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
          <p>&copy; {currentYear} {BUSINESS.name}. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
