import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, CheckCircle2, Droplets, AlertTriangle, Activity } from 'lucide-react';
import { BUSINESS } from '../data/business';

export default function DrainageRepair() {
  useEffect(() => {
    document.title = `Drainage Repair in Bhiwadi, Rajasthan | ${BUSINESS.name}`;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://www.chaudharyplumbingworks.tech/drainage-repair-bhiwadi');

    let desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', `Expert drainage repair and blocked drain services in Bhiwadi, Rajasthan by ${BUSINESS.name}. We clear blocked drains, fix drainage pipes & restore water flow. Call ${BUSINESS.phone}.`);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', `Drainage Repair in Bhiwadi | ${BUSINESS.name}`);
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', 'https://www.chaudharyplumbingworks.tech/drainage-repair-bhiwadi');

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'service-schema';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Drainage Repair in Bhiwadi",
      "provider": {
        "@type": "Plumber",
        "name": "Chaudhary Plumbing Works",
        "telephone": BUSINESS.phone,
        "address": { "@type": "PostalAddress", "addressLocality": "Bhiwadi", "addressRegion": "Rajasthan", "addressCountry": "IN" }
      },
      "areaServed": { "@type": "City", "name": "Bhiwadi" },
      "description": "Drainage repair and blocked drain clearing services in Bhiwadi, Rajasthan. We fix blocked kitchen drains, bathroom drains, and main drainage line issues."
    });
    const old = document.getElementById('service-schema');
    if (old) old.remove();
    document.head.appendChild(script);
    return () => { const s = document.getElementById('service-schema'); if (s) s.remove(); };
  }, []);

  const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hello, I need drainage repair in Bhiwadi.')}`;

  const problems = [
    { icon: <Droplets className="w-6 h-6 text-blue-500" />, title: 'Blocked Kitchen Drain', desc: 'Clearing grease, food debris and blockages from kitchen sink drains quickly.' },
    { icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />, title: 'Blocked Bathroom Drain', desc: 'Removing hair, soap scum and other blockages from bathroom floor drains and showers.' },
    { icon: <Activity className="w-6 h-6 text-red-500" />, title: 'Slow Draining Water', desc: 'Diagnosing and fixing slow drainage in sinks, bathrooms and floor traps.' },
    { icon: <Droplets className="w-6 h-6 text-cyan-500" />, title: 'Drainage Pipe Repair', desc: 'Repairing cracked, broken or damaged drainage pipes causing leakage or water logging.' },
    { icon: <AlertTriangle className="w-6 h-6 text-orange-500" />, title: 'Foul Smell from Drain', desc: 'Cleaning blocked or dry traps causing bad smell from bathroom and kitchen drains.' },
    { icon: <Activity className="w-6 h-6 text-green-600" />, title: 'Main Drainage Line', desc: 'Clearing main drain line blockages causing water backup in multiple fixtures.' },
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
            <span className="text-gray-300">Drainage Repair</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Drainage Repair in Bhiwadi, Rajasthan
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Blocked drain? Slow drainage? Chaudhary Plumbing Works provides fast drainage repair and drain clearing services in Bhiwadi.
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
            Drainage Repair &amp; Blocked Drain Service in Bhiwadi
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            A blocked or slow drain can quickly escalate from a minor inconvenience to a serious problem.
            Chaudhary Plumbing Works provides reliable drainage repair services across Bhiwadi, Rajasthan including
            UIT Sector 3, Chopanki, Tapukara, and Khushkhera. We diagnose the root cause and provide lasting solutions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether it's a blocked kitchen sink, a slow bathroom drain, or a broken drainage pipe causing water logging,
            our team responds quickly to restore proper drainage in your home.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-8">Drainage Problems We Fix</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col gap-3">
                <div className="flex items-center gap-3">{p.icon}<h3 className="font-bold text-gray-900 text-lg">{p.title}</h3></div>
                <p className="text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 bg-brand-navy text-white rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Chaudhary Plumbing Works?</h2>
          <ul className="space-y-4">
            {[
              'Experienced drainage specialist in Bhiwadi, Rajasthan',
              'Fast response for blocked drain emergencies',
              'Complete drain inspection and root cause diagnosis',
              'Quality pipe repair for lasting results',
              'Fair and transparent pricing',
              'Serving all areas of Bhiwadi and surrounding localities',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold text-brand-navy mb-3">Blocked Drain in Bhiwadi? We Can Help!</h2>
          <p className="text-gray-600 mb-6 text-lg">Don't wait for the problem to worsen. Contact us now for fast drainage repair in Bhiwadi.</p>
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
