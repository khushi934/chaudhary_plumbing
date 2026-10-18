import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, CheckCircle2, Wrench, Settings, Bath } from 'lucide-react';
import { BUSINESS } from '../data/business';

export default function SanitaryFitting() {
  useEffect(() => {
    document.title = `Sanitary Fitting & Installation in Bhiwadi, Rajasthan | ${BUSINESS.name}`;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://www.chaudharyplumbingworks.tech/sanitary-fitting-bhiwadi');

    let desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', `Sanitary fitting and installation services in Bhiwadi, Rajasthan by ${BUSINESS.name}. Washbasin, toilet, flush tank, commode installation & replacement. Call ${BUSINESS.phone}.`);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', `Sanitary Fitting & Installation in Bhiwadi | ${BUSINESS.name}`);
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', 'https://www.chaudharyplumbingworks.tech/sanitary-fitting-bhiwadi');

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'service-schema';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Sanitary Fitting and Installation in Bhiwadi",
      "provider": {
        "@type": "Plumber",
        "name": "Chaudhary Plumbing Works",
        "telephone": BUSINESS.phone,
        "address": { "@type": "PostalAddress", "addressLocality": "Bhiwadi", "addressRegion": "Rajasthan", "addressCountry": "IN" }
      },
      "areaServed": { "@type": "City", "name": "Bhiwadi" },
      "description": "Sanitary fitting and installation in Bhiwadi, Rajasthan. Washbasin, toilet commode, flush tank, and complete sanitary ware installation for homes and properties."
    });
    const old = document.getElementById('service-schema');
    if (old) old.remove();
    document.head.appendChild(script);
    return () => { const s = document.getElementById('service-schema'); if (s) s.remove(); };
  }, []);

  const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hello, I need sanitary fitting help in Bhiwadi.')}`;

  const services = [
    { icon: <Bath className="w-6 h-6 text-blue-500" />, title: 'Toilet / Commode Installation', desc: 'Installing Western and Indian style commodes with proper plumbing connections and wax ring sealing.' },
    { icon: <Wrench className="w-6 h-6 text-brand-navy" />, title: 'Washbasin Fitting', desc: 'Wall-hung and pedestal washbasin installation with supply, drain and mixer connections.' },
    { icon: <Settings className="w-6 h-6 text-green-600" />, title: 'Flush Tank Installation', desc: 'Concealed and external flush tank installation and repair for toilets in Bhiwadi.' },
    { icon: <Bath className="w-6 h-6 text-purple-500" />, title: 'Toilet Seat Replacement', desc: 'Replacing broken or old toilet seats with new fittings including soft-close seats.' },
    { icon: <Wrench className="w-6 h-6 text-orange-500" />, title: 'Urinal Fitting', desc: 'Urinal installation and repair for homes, offices and commercial properties in Bhiwadi.' },
    { icon: <Settings className="w-6 h-6 text-cyan-500" />, title: 'Complete Sanitary Renovation', desc: 'Full sanitary ware removal and new fitting for bathroom renovation projects in Bhiwadi.' },
  ];

  return (
    <main className="bg-white min-h-screen">
      <div className="bg-brand-navy pt-20 pb-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6 flex justify-center gap-2" aria-label="breadcrumb">
            <Link to="/" className="hover:text-white underline">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white underline">Services</Link>
            <span>/</span>
            <span className="text-gray-300">Sanitary Fitting</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Sanitary Fitting &amp; Installation in Bhiwadi, Rajasthan
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional washbasin, toilet, flush tank and sanitary ware installation and replacement services in Bhiwadi, Rajasthan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href={`tel:${BUSINESS.phone}`} className="inline-flex justify-center items-center gap-2 rounded-lg bg-white text-brand-navy font-bold px-8 py-3 text-lg hover:bg-gray-100 transition-all">
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 rounded-lg bg-[#25D366] text-white font-bold px-8 py-3 text-lg hover:bg-[#1ebe57] transition-all">
              <MessageCircle className="w-5 h-5" /> WhatsApp Enquiry
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
            Sanitary Fitting Services in Bhiwadi, Rajasthan
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Chaudhary Plumbing Works provides complete sanitary fitting and installation services across Bhiwadi, Rajasthan.
            From installing a new toilet to replacing a broken washbasin, we handle all sanitary ware work with precision.
            We serve UIT Sector 3, Chopanki, Tapukara, Khushkhera and all surrounding areas.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you're renovating your bathroom or need a single fixture replaced, our experienced team ensures clean,
            watertight installations that last.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-8">Sanitary Services We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col gap-3">
                <div className="flex items-center gap-3">{s.icon}<h3 className="font-bold text-gray-900 text-lg">{s.title}</h3></div>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 bg-brand-navy text-white rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Chaudhary Plumbing Works?</h2>
          <ul className="space-y-4">
            {[
              'Experienced sanitary fitting specialist in Bhiwadi',
              'Clean, tidy installation with no mess left behind',
              'Works with all brands of sanitary ware',
              'Both new installation and replacement services',
              'Honest pricing before work begins',
              'Available 6 days a week across Bhiwadi',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold text-brand-navy mb-3">Need Sanitary Fitting in Bhiwadi?</h2>
          <p className="text-gray-600 mb-6 text-lg">Call or WhatsApp us for a quick response across Bhiwadi and nearby areas.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${BUSINESS.phone}`} className="inline-flex justify-center items-center gap-2 rounded-lg bg-brand-navy text-white font-bold px-8 py-4 text-lg hover:bg-opacity-90 transition-all">
              <Phone className="w-5 h-5" /> Call {BUSINESS.phone}
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 rounded-lg bg-green-600 text-white font-bold px-8 py-4 text-lg hover:bg-green-700 transition-all">
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </section>

        <p className="text-gray-500 text-center">
          Need another plumbing service?{' '}
          <Link to="/services" className="underline text-brand-navy font-semibold">View all plumbing services in Bhiwadi</Link>.
        </p>
      </div>
    </main>
  );
}
