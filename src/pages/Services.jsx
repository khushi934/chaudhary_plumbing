import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Wrench, Droplets, ShowerHead, Bath, Container, Activity, Settings, ArrowRight } from 'lucide-react';
import { BUSINESS } from '../data/business';
import { SERVICES } from '../data/services';
import { useLanguage } from '../context/LanguageContext';

// Map service IDs to their dedicated SEO landing pages
const SERVICE_PAGE_MAP = {
  'pipe-leakage': '/pipe-leakage-repair-bhiwadi',
  'bathroom-plumbing': '/bathroom-plumbing-bhiwadi',
  'tap-faucet': '/tap-repair-bhiwadi',
  'sanitary-fitting': '/sanitary-fitting-bhiwadi',
  'water-tank': '/water-tank-plumbing-bhiwadi',
  'drainage-repair': '/drainage-repair-bhiwadi',
  'general-maintenance': '/general-plumbing-maintenance-bhiwadi',
};

const Services = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = `Plumbing Services in Bhiwadi, Rajasthan | ${BUSINESS.name}`;

    const description = `Explore plumbing services in Bhiwadi, Rajasthan from ${BUSINESS.name}. Pipe leakage repair, bathroom fitting, tap repair, drainage repair, water tank plumbing & more. Call now!`;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://www.chaudharyplumbingworks.tech/services');

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', `Plumbing Services in Bhiwadi, Rajasthan | ${BUSINESS.name}`);
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', 'https://www.chaudharyplumbingworks.tech/services');
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
            const servicePage = SERVICE_PAGE_MAP[service.id];
            
            return (
              <div key={service.id} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
                <div className="p-8 flex-grow">
                  <div className="mb-6 bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center border border-gray-100">
                    {getIcon(service.icon)}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {t(`servicesData.${service.id}.title`) || service.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {t(`servicesData.${service.id}.description`) || service.description}
                  </p>

                  {/* Link to dedicated service page */}
                  {servicePage && (
                    <Link
                      to={servicePage}
                      className="inline-flex items-center gap-1 mt-4 font-semibold text-brand-navy hover:gap-2 transition-all text-sm"
                    >
                      Learn more <ArrowRight className="w-4 h-4" />
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
