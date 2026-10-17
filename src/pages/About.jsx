import { useEffect } from 'react';
import { Users, Target, Shield } from 'lucide-react';
import { BUSINESS } from '../data/business';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  // useEffect(() => {
  //   document.title = `About Us | ${BUSINESS.name}`;
  //   document.querySelector('meta[name="description"]')?.setAttribute('content', `Learn more about ${BUSINESS.name} and our commitment to quality plumbing services.`);
  // }, []);


useEffect(() => {
  document.title =
    `About ${BUSINESS.name} | Bhiwadi, Rajasthan`;

  let description = document.querySelector(
    'meta[name="description"]'
  );

  if (!description) {
    description = document.createElement('meta');
    description.setAttribute('name', 'description');
    document.head.appendChild(description);
  }

  description.setAttribute(
    'content',
    `Learn about ${BUSINESS.name}, a plumbing business serving customers in Bhiwadi, Rajasthan. Explore our approach to plumbing services and customer support.`
  );
}, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-brand-navy pt-20 pb-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto px-4">
          {t('about.subtitle')}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">{t('about.whoWeAre')}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.p1')}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.p2')}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.p3')}
            </p>
          </div>

          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img src="/images/realistic_about.png" alt="Professional Pipe Repair Work" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            <div className="text-center p-6 space-y-4">
              <div className="w-16 h-16 mx-auto bg-brand-navy rounded-full flex items-center justify-center text-white shadow-md">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t('about.whatWeDo')}</h3>
              <p className="text-gray-600">
                {t('about.whatWeDoDesc')}
              </p>
            </div>

            <div className="text-center p-6 space-y-4">
              <div className="w-16 h-16 mx-auto bg-brand-navy rounded-full flex items-center justify-center text-white shadow-md">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t('about.quality')}</h3>
              <p className="text-gray-600">
                {t('about.qualityDesc')}
              </p>
            </div>

            <div className="text-center p-6 space-y-4">
              <div className="w-16 h-16 mx-auto bg-brand-navy rounded-full flex items-center justify-center text-white shadow-md">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t('about.communication')}</h3>
              <p className="text-gray-600">
                {t('about.communicationDesc')}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
