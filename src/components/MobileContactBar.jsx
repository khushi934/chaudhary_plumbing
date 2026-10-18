import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS } from '../data/business';
import { useLanguage } from '../context/LanguageContext';

const MobileContactBar = () => {
  const { t } = useLanguage();
  const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent("Hello, I need a plumber.")}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 md:hidden pb-safe">
      <div className="flex h-16">
        <a 
          href={`tel:${BUSINESS.phone}`} 
          className="flex-1 flex flex-col justify-center items-center text-brand-navy border-r border-gray-100 hover:bg-gray-50 active:bg-gray-100 transition-colors"
        >
          <Phone className="w-5 h-5 mb-1" />
          <span className="text-xs font-semibold">{t('home.callNow') || 'Call Now'}</span>
        </a>
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 flex flex-col justify-center items-center text-brand-green hover:text-brand-greenHover hover:bg-gray-50 active:bg-gray-100 transition-colors"
        >
          <MessageCircle className="w-5 h-5 mb-1" />
          <span className="text-xs font-semibold">{t('home.whatsappUs') || 'WhatsApp'}</span>
        </a>
      </div>
    </div>
  );
};

export default MobileContactBar;
