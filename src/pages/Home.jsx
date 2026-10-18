import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageCircle, CheckCircle2, ShieldCheck, Wrench, Droplets, ShowerHead, Users, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { BUSINESS } from '../data/business';
import { SERVICES } from '../data/services';
import { useLanguage } from '../context/LanguageContext';

// --- FAQ Data ---
const faqs = [
  {
    q: 'How much does a plumber cost in Bhiwadi?',
    a: 'Plumbing service charges in Bhiwadi typically start from ₹200–₹500 for small repairs like tap fixing. Pipe leakage, bathroom fitting, or water tank work may cost more depending on the scope. We provide transparent pricing with no hidden charges. Call us for a free estimate.'
  },
  {
    q: 'Do you provide emergency plumbing services in Bhiwadi?',
    a: 'Yes! We provide fast-response plumbing services in Bhiwadi, available 6 days a week (Sun–Mon, Wed–Sat: 8 AM–8 PM; Tue: 8 AM–4 PM). For urgent problems like burst pipes, call us immediately.'
  },
  {
    q: 'Which areas do you serve near Bhiwadi?',
    a: 'We serve Bhiwadi and surrounding areas including UIT Sector 3, Chopanki, Tapukara, Khushkhera, Bhiwadi Industrial Area, Alwar Road, Dharuhera, and Neemrana.'
  },
  {
    q: 'Do you fix bathroom fittings in Bhiwadi?',
    a: 'Yes, we provide complete bathroom plumbing services including shower fitting, washbasin installation, geyser installation, flush tank repair, and tap replacement across Bhiwadi.'
  },
  {
    q: 'How do I contact a plumber in Bhiwadi?',
    a: `Call or WhatsApp ${BUSINESS.phone}. We respond quickly and are available across all of Bhiwadi and surrounding areas.`
  },
  {
    q: 'Do you repair pipe leakages in concealed pipes?',
    a: 'Yes, we use proper leak detection methods to locate and repair leaks in concealed and underground pipes in Bhiwadi homes and buildings.'
  }
];

// --- Reviews Data ---
const reviews = [
  { name: 'Rajesh Kumar', location: 'UIT Sector 3, Bhiwadi', rating: 5, text: 'Excellent service! Fixed our pipe leakage quickly. Very professional and honest pricing. Highly recommended for anyone in Bhiwadi needing a reliable plumber.' },
  { name: 'Sunita Sharma', location: 'Chopanki, Bhiwadi', rating: 5, text: 'Best plumber in Bhiwadi! Installed all our bathroom fittings in our new home. Very clean work and completed on time. Will definitely call again.' },
  { name: 'Mohit Agarwal', location: 'Tapukara, Bhiwadi', rating: 5, text: 'Very reliable. Had a dripping tap issue and they came the same day. Fair charges and the problem was fixed permanently. Good work!' },
  { name: 'Priya Singh', location: 'Khushkhera, Bhiwadi', rating: 5, text: 'Water tank connection and ball valve replacement done perfectly. No hidden charges, good quality work. Definitely the go-to plumber in Bhiwadi.' },
];

// --- FAQ Item Component ---
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left px-6 py-5 bg-white hover:bg-gray-50 transition-colors gap-4"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 text-base md:text-lg">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-brand-navy flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-brand-navy flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-gray-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

const Home = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = `Plumber in Bhiwadi, Rajasthan | ${BUSINESS.name}`;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', `Looking for a plumber in Bhiwadi, Rajasthan? ${BUSINESS.name} offers pipe leakage repair, bathroom fitting, tap repair & all plumbing services. Call now!`);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://www.chaudharyplumbingworks.tech/');

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', `Plumber in Bhiwadi, Rajasthan | ${BUSINESS.name}`);
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', `Need a plumber in Bhiwadi? ${BUSINESS.name} offers reliable pipe repair, bathroom fitting & all plumbing services. Call or WhatsApp us today!`);
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', 'https://www.chaudharyplumbingworks.tech/');
  }, []);

  const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent("Hello, I need a plumber.")}`;
  const highlightedServices = SERVICES.slice(0, 4);

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'Wrench': return <Wrench className="w-8 h-8 text-brand-navy" />;
      case 'Droplets': return <Droplets className="w-8 h-8 text-brand-navy" />;
      case 'ShowerHead': return <ShowerHead className="w-8 h-8 text-brand-navy" />;
      default: return <Wrench className="w-8 h-8 text-brand-navy" />;
    }
  };

  // Map service id to their dedicated page
  const servicePageMap = {
    'pipe-leakage': '/pipe-leakage-repair-bhiwadi',
    'bathroom-plumbing': '/bathroom-plumbing-bhiwadi',
    'tap-faucet': '/tap-repair-bhiwadi',
    'sanitary-fitting': '/sanitary-fitting-bhiwadi',
    'water-tank': '/water-tank-plumbing-bhiwadi',
    'drainage-repair': '/drainage-repair-bhiwadi',
    'general-maintenance': '/general-plumbing-maintenance-bhiwadi',
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-50 pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.1]">
                {t('home.title')}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                {t('home.subtitle')}
              </p>

              {/* Local SEO text for Google crawlers */}
              <p className="sr-only">
                Chaudhary Plumbing Works is a professional plumber in Bhiwadi, Rajasthan serving UIT Sector 3, 
                Chopanki, Tapukara, Khushkhera and surrounding areas. We specialize in pipe leakage repair, 
                bathroom fitting, tap repair, geyser installation, drainage repair, and water tank services. 
                Call us on {BUSINESS.phone} for fast, reliable plumbing services in Bhiwadi.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
                <a 
                  href={`tel:${BUSINESS.phone}`} 
                  className="w-full sm:w-auto px-8 py-3.5 bg-brand-navy text-white font-medium rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-navy/20"
                >
                  <Phone className="w-5 h-5" />
                  {t('home.callNow')}
                </a>
                <a 
                  href={whatsappUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] text-white font-medium rounded-lg hover:bg-[#1ebe57] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('home.whatsappUs')}
                </a>
              </div>
              <div className="pt-2">
                <Link 
                  to="/services" 
                  className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:gap-3 transition-all"
                >
                  {t('home.exploreServices')} <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg mx-auto md:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group border-4 border-white bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
                  alt="Professional Plumbing Services in Bhiwadi Rajasthan by Chaudhary Plumbing Works"
                  className="w-full h-full object-cover aspect-[4/3] transform transition-transform duration-700 group-hover:scale-105"
                  fetchpriority="high"
                  width="800"
                  height="600"
                />
                
                {/* Floating Trust Badge 1 */}
                <div className="absolute bottom-6 left-4 md:-left-8 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-gray-100 flex items-center gap-4 transition-transform hover:-translate-y-1">
                  <div className="bg-green-100 p-2.5 rounded-full">
                    <CheckCircle2 className="w-7 h-7 text-brand-green" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-extrabold text-sm sm:text-base">{t('home.guaranteed')}</p>
                    <p className="text-gray-500 text-xs sm:text-sm font-medium">{t('home.proService')}</p>
                  </div>
                </div>

                {/* Floating Trust Badge 2 */}
                <div className="absolute top-6 right-4 md:-right-8 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-2xl border border-gray-100 flex flex-col gap-1 transition-transform hover:-translate-y-1">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(star => <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                  </div>
                  <p className="text-gray-900 font-extrabold text-sm">{t('home.trustedPro')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">{t('home.ourServicesTitle')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {t('home.ourServicesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlightedServices.map((service) => (
              <Link
                key={service.id} 
                to={servicePageMap[service.id] || '/services'}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t(`servicesData.${service.id}.title`) || service.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {t(`servicesData.${service.id}.description`) || service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-brand-navy font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-brand-navy text-brand-navy font-semibold rounded-lg hover:bg-brand-navy hover:text-white transition-colors"
            >
              {t('home.viewAllServices')}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 w-full flex flex-col gap-6">
              <div className="bg-brand-navy p-6 sm:p-8 rounded-2xl text-white shadow-xl flex items-center gap-6 transform hover:-translate-y-2 transition-transform duration-300">
                <ShieldCheck className="w-14 h-14 text-brand-green flex-shrink-0" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{t('home.why1Title')}</h3>
                  <p className="text-gray-300 text-sm sm:text-base">{t('home.why1Desc')}</p>
                </div>
              </div>
              
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl flex items-center gap-6 border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-brand-navy/5 rounded-bl-full -mr-16 -mt-16"></div>
                <Users className="w-14 h-14 text-brand-navy flex-shrink-0 relative z-10" />
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">{t('home.why2Title')}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{t('home.why2Desc')}</p>
                </div>
              </div>
              
              <div className="bg-brand-green p-6 sm:p-8 rounded-2xl text-white shadow-xl flex items-center gap-6 transform hover:-translate-y-2 transition-transform duration-300">
                <CheckCircle2 className="w-14 h-14 text-white flex-shrink-0" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{t('home.why3Title')}</h3>
                  <p className="text-green-50 text-sm sm:text-base">{t('home.why3Desc')}</p>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">{t('home.whyChooseUs')}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t('home.whyChooseUsSubtitle')}
                </p>
              </div>

              <ul className="space-y-6">
                {[
                  t('home.bullet1'),
                  t('home.bullet2'),
                  t('home.bullet3'),
                  t('home.bullet4')
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1 bg-green-100 rounded-full p-1">
                      <CheckCircle2 className="w-5 h-5 text-brand-green" />
                    </div>
                    <span className="text-lg text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ Customer Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              What Our Customers in Bhiwadi Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hundreds of happy customers across Bhiwadi trust Chaudhary Plumbing Works for all their plumbing needs.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              {[1,2,3,4,5].map(s => <Star key={s} className="w-6 h-6 text-yellow-400 fill-current" />)}
              <span className="text-gray-700 font-bold text-lg ml-1">4.9 / 5</span>
              <span className="text-gray-500 text-sm ml-1">(47 reviews)</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-grow">"{r.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{r.name}</p>
                  <p className="text-gray-500 text-xs">{r.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Areas Served — important for local SEO */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
            Plumbing Services Near You in Bhiwadi
          </h2>
          <p className="text-gray-600 text-lg mb-6 max-w-3xl mx-auto">
            We serve customers across Bhiwadi and surrounding areas including UIT Sector 3, 
            Chopanki, Tapukara, Khushkhera, Neemrana, and Alwar. Fast response, honest pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {['UIT Sector 3', 'Chopanki', 'Tapukara', 'Khushkhera', 'Neemrana', 'Bhiwadi Industrial Area', 'Alwar Road', 'Dharuhera'].map(area => (
              <span key={area} className="bg-white text-brand-navy px-4 py-2 rounded-full font-medium border border-gray-200 shadow-sm">
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ❓ FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Common questions about plumbing services in Bhiwadi, Rajasthan.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Have a question not listed here?</p>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-navy text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all"
            >
              <Phone className="w-5 h-5" /> Call Us — {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-brand-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ShieldCheck className="w-16 h-16 mx-auto text-brand-green mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('home.ctaTitle')}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            {t('home.ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={`tel:${BUSINESS.phone}`} 
              className="w-full sm:w-auto px-10 py-4 bg-white text-brand-navy font-bold rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-3 text-lg"
            >
              <Phone className="w-6 h-6" />
              {t('home.callNow')}
            </a>
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#1ebe57] transition-all flex items-center justify-center gap-3 text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              {t('home.whatsappUs')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
