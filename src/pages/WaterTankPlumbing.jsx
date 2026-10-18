import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, CheckCircle2, Droplets, Wrench, Settings } from 'lucide-react';
import { BUSINESS } from '../data/business';

export default function WaterTankPlumbing() {
  useEffect(() => {
    document.title = `Water Tank Plumbing in Bhiwadi, Rajasthan | ${BUSINESS.name}`;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://www.chaudharyplumbingworks.tech/water-tank-plumbing-bhiwadi');

    let desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', `Water tank installation, repair & plumbing services in Bhiwadi, Rajasthan by ${BUSINESS.name}. Overhead & underground tank connections, ball valve repair, tank cleaning. Call ${BUSINESS.phone}.`);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', `Water Tank Plumbing in Bhiwadi | ${BUSINESS.name}`);
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', 'https://www.chaudharyplumbingworks.tech/water-tank-plumbing-bhiwadi');

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'service-schema';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Water Tank Plumbing in Bhiwadi",
      "provider": {
        "@type": "Plumber",
        "name": "Chaudhary Plumbing Works",
        "telephone": BUSINESS.phone,
        "address": { "@type": "PostalAddress", "addressLocality": "Bhiwadi", "addressRegion": "Rajasthan", "addressCountry": "IN" }
      },
      "areaServed": { "@type": "City", "name": "Bhiwadi" },
      "description": "Water tank plumbing, installation and repair services in Bhiwadi, Rajasthan. Overhead and underground tank connections, ball valve repair, and water tank maintenance."
    });
    const old = document.getElementById('service-schema');
    if (old) old.remove();
    document.head.appendChild(script);
    return () => { const s = document.getElementById('service-schema'); if (s) s.remove(); };
  }, []);

  const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hello, I need water tank plumbing help in Bhiwadi.')}`;

  const services = [
    { icon: <Droplets className="w-6 h-6 text-blue-500" />, title: 'Overhead Tank Installation', desc: 'Proper plumbing connections for new overhead tanks including inlet, outlet, and overflow pipes.' },
    { icon: <Settings className="w-6 h-6 text-brand-navy" />, title: 'Ball Valve Repair', desc: 'Repairing or replacing faulty ball valves that cause tanks to overflow or not fill properly.' },
    { icon: <Wrench className="w-6 h-6 text-green-600" />, title: 'Tank Pipe Connection', desc: 'Fitting supply and distribution pipes to water tanks with proper joints and fittings.' },
    { icon: <Droplets className="w-6 h-6 text-cyan-500" />, title: 'Underground Sump Tank', desc: 'Plumbing and pump connections for underground sump and borewell tanks.' },
    { icon: <Settings className="w-6 h-6 text-purple-500" />, title: 'Water Pump Issues', desc: 'Diagnosing and fixing pump and motor connection issues causing water supply problems.' },
    { icon: <Wrench className="w-6 h-6 text-orange-500" />, title: 'Leaking Tank Outlet', desc: 'Fixing leaks from tank outlets, cracks, and faulty tank fittings.' },
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
            <span className="text-gray-300">Water Tank Plumbing</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Water Tank Plumbing in Bhiwadi, Rajasthan
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional water tank installation, pipe connections, ball valve repair and maintenance services in Bhiwadi, Rajasthan.
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
            Water Tank Plumbing Services in Bhiwadi
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Chaudhary Plumbing Works provides complete water tank plumbing services across Bhiwadi and surrounding areas.
            Whether you need a new overhead tank connected, a ball valve replaced, or an underground sump tank plumbed,
            our experienced team gets the job done right.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We serve residential homes, apartments, shops, and commercial properties in Bhiwadi, Chopanki, Tapukara,
            Khushkhera, and nearby areas of Rajasthan.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-8">Water Tank Services We Offer</h2>
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
              'Expert plumber with experience in water tank plumbing in Bhiwadi',
              'Available 6 days a week for quick response',
              'Proper pipe sizing and fittings for long-lasting connections',
              'Both overhead and underground tank services',
              'Affordable rates with no hidden charges',
              'Trusted by families and businesses across Bhiwadi',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold text-brand-navy mb-3">Water Tank Problem in Bhiwadi?</h2>
          <p className="text-gray-600 mb-6 text-lg">Call us now for professional water tank plumbing anywhere in Bhiwadi, Rajasthan.</p>
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
