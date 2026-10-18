import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, CheckCircle2, Wrench, Settings, ShieldCheck } from 'lucide-react';
import { BUSINESS } from '../data/business';

export default function GeneralMaintenance() {
  useEffect(() => {
    document.title = `General Plumbing Maintenance in Bhiwadi, Rajasthan | ${BUSINESS.name}`;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://www.chaudharyplumbingworks.tech/general-plumbing-maintenance-bhiwadi');

    let desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', `Routine plumbing maintenance services in Bhiwadi, Rajasthan by ${BUSINESS.name}. Regular inspections, preventive repairs, plumbing check-ups to avoid costly breakdowns. Call ${BUSINESS.phone}.`);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', `General Plumbing Maintenance in Bhiwadi | ${BUSINESS.name}`);
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', 'https://www.chaudharyplumbingworks.tech/general-plumbing-maintenance-bhiwadi');

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'service-schema';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "General Plumbing Maintenance in Bhiwadi",
      "provider": {
        "@type": "Plumber",
        "name": "Chaudhary Plumbing Works",
        "telephone": BUSINESS.phone,
        "address": { "@type": "PostalAddress", "addressLocality": "Bhiwadi", "addressRegion": "Rajasthan", "addressCountry": "IN" }
      },
      "areaServed": { "@type": "City", "name": "Bhiwadi" },
      "description": "General plumbing maintenance and inspection services in Bhiwadi, Rajasthan. Preventive check-ups to identify leaks, worn fittings and plumbing issues before they become expensive."
    });
    const old = document.getElementById('service-schema');
    if (old) old.remove();
    document.head.appendChild(script);
    return () => { const s = document.getElementById('service-schema'); if (s) s.remove(); };
  }, []);

  const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hello, I need general plumbing maintenance in Bhiwadi.')}`;

  const services = [
    { icon: <ShieldCheck className="w-6 h-6 text-green-600" />, title: 'Full Plumbing Inspection', desc: 'A thorough check of all water supply pipes, joints, valves, and fixtures in your home or property.' },
    { icon: <Wrench className="w-6 h-6 text-brand-navy" />, title: 'Preventive Leak Checks', desc: 'Identifying small leaks before they become big, expensive problems — saving you water and money.' },
    { icon: <Settings className="w-6 h-6 text-blue-500" />, title: 'Valve Servicing', desc: 'Checking and servicing all stop cocks, ball valves, and isolation valves to ensure they work properly.' },
    { icon: <Wrench className="w-6 h-6 text-orange-500" />, title: 'Pipe Condition Check', desc: 'Inspecting exposed pipes for corrosion, joint wear, and early signs of leakage or failure.' },
    { icon: <ShieldCheck className="w-6 h-6 text-purple-500" />, title: 'Post-Construction Checks', desc: 'Full plumbing inspection for newly constructed homes to verify all fittings are correct and watertight.' },
    { icon: <Settings className="w-6 h-6 text-cyan-500" />, title: 'Annual Maintenance Contract', desc: 'Scheduled periodic plumbing maintenance for homes and commercial properties across Bhiwadi.' },
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
            <span className="text-gray-300">General Maintenance</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            General Plumbing Maintenance in Bhiwadi, Rajasthan
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Regular plumbing maintenance and inspections in Bhiwadi — prevent costly breakdowns before they happen.
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
            Routine Plumbing Maintenance in Bhiwadi
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Preventive plumbing maintenance is the best way to avoid expensive emergency repairs.
            Chaudhary Plumbing Works provides professional plumbing inspection and maintenance services across Bhiwadi, Rajasthan.
            A routine check-up can identify small leaks, worn valves, and weak pipe joints before they cause serious water damage.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We serve residential homes, commercial properties, and industrial premises in UIT Sector 3, Chopanki, Tapukara,
            Khushkhera, and all areas of Bhiwadi.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-8">What We Check &amp; Maintain</h2>
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
              'Thorough inspection by experienced Bhiwadi plumber',
              'Catch problems early — save money on repairs',
              'Detailed findings and honest recommendations',
              'Available for both residential and commercial properties',
              'Flexible scheduling across Bhiwadi',
              'Transparent, upfront pricing',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold text-brand-navy mb-3">Book a Plumbing Check-Up in Bhiwadi</h2>
          <p className="text-gray-600 mb-6 text-lg">A small maintenance visit today can prevent a big, costly emergency tomorrow.</p>
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
