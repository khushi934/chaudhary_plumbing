import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Wrench, Droplets, ShowerHead, Bath, Container, Activity, Settings } from 'lucide-react';
import { BUSINESS } from '../data/business';
import { SERVICES } from '../data/services';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  // useEffect(() => {
  //   document.title = `Our Services | ${BUSINESS.name}`;
  //   document.querySelector('meta[name="description"]')?.setAttribute('content', 'Professional and reliable plumbing solutions tailored for your home. View our full list of services.');
  // }, []);

useEffect(() => {
  document.title = `Plumbing Services in Bhiwadi, Rajasthan | ${BUSINESS.name}`;

  const description =
    `Explore plumbing services in Bhiwadi, Rajasthan from ${BUSINESS.name}. Contact us about the plumbing services we offer and request an enquiry via WhatsApp.`;

  let metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }

  metaDescription.setAttribute('content', description);
}, []);

  const getIcon = (iconName) => {
    const defaultClasses = "w-10 h-10 text-brand-navy";
    switch(iconName) {
      case 'Wrench': return <Wrench className={defaultClasses} />;
      case 'Droplets': return <Droplets className={defaultClasses} />;
      case 'ShowerHead': return <ShowerHead className={defaultClasses} />;
      case 'Bath': return <Bath className={defaultClasses} />;
      case 'Container': return <Container className={defaultClasses} />;
      case 'Activity': return <Activity className={defaultClasses} />;
      case 'Tool': return <Settings className={defaultClasses} />;
      default: return <Wrench className={defaultClasses} />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-brand-navy pt-20 pb-16 text-center text-white">
        {/* <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('services.title')}</h1> */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
  Plumbing Services in Bhiwadi, Rajasthan
</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto px-4">
          {t('services.subtitle')}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const dynamicTitle = t(`servicesData.${service.id}.title`) || service.title;
            const whatsappMsg = `Hello, I am interested in your ${dynamicTitle} service.`;
            const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;
            
            return (
              <div key={service.id} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
                <div className="p-8 flex-grow">
                  <div className="mb-6 bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center border border-gray-100">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{t(`servicesData.${service.id}.title`) || service.title}</h3>
                  {/* <p className="text-gray-600 text-lg leading-relaxed">
                    {t(`servicesData.${service.id}.description`) || service.description}
                  </p> */}
                  
<p className="text-gray-600 text-lg leading-relaxed">
  {t(`servicesData.${service.id}.description`) || service.description}
</p>

{service.id === 'pipe-leakage' && (
  <Link
    to="/pipe-leakage-repair-bhiwadi"
    className="inline-block mt-4 font-semibold text-brand-navy underline"
  >
    Learn more about pipe leakage repair
  </Link>
)}

                </div>
                <div className="px-8 pb-8 mt-auto pt-4 border-t border-gray-50">
                  <a 
                    href={whatsappUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-brand-green/10 text-brand-greenHover hover:bg-brand-green hover:text-white font-semibold rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t('services.contactForService')}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
