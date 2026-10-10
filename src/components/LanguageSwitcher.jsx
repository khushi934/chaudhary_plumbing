import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = ({ className = "" }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 font-medium ${
        language === 'en' 
          ? 'bg-brand-navy text-white border-brand-navy' 
          : 'bg-white text-brand-navy border-gray-300 hover:border-brand-navy'
      } ${className}`}
      aria-label="Toggle language between English and Hindi"
    >
      <span className={`text-sm ${language === 'en' ? 'font-bold opacity-100' : 'opacity-70'}`}>EN</span>
      <span className="text-gray-400 text-xs">|</span>
      <span className={`text-sm ${language === 'hi' ? 'font-bold opacity-100 font-hindi' : 'opacity-70 font-hindi'}`}>
        हिंदी
      </span>
    </button>
  );
};

export default LanguageSwitcher;
