import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, CheckCircle2, Wrench, Droplets, AlertTriangle } from 'lucide-react';
import { BUSINESS } from '../data/business';

export default function TapFaucetRepair() {
  useEffect(() => {
    document.title = `Tap & Faucet Repair in Bhiwadi, Rajasthan | ${BUSINESS.name}`;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://www.chaudharyplumbingworks.tech/tap-repair-bhiwadi');

    let desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', `Expert tap and faucet repair in Bhiwadi, Rajasthan by ${BUSINESS.name}. Fix dripping taps, leaking faucets, mixer valve repair & replacement. Call ${BUSINESS.phone} for fast service.`);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', `Tap & Faucet Repair in Bhiwadi | ${BUSINESS.name}`);
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', 'https://www.chaudharyplumbingworks.tech/tap-repair-bhiwadi');

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'service-schema';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Tap and Faucet Repair in Bhiwadi",
      "provider": {
        "@type": "Plumber",
        "name": "Chaudhary Plumbing Works",
        "telephone": BUSINESS.phone,
        "address": { "@type": "PostalAddress", "addressLocality": "Bhiwadi", "addressRegion": "Rajasthan", "addressCountry": "IN" }
      },
      "areaServed": { "@type": "City", "name": "Bhiwadi" },
      "description": "Tap and faucet repair and replacement services in Bhiwadi, Rajasthan. Fixing dripping taps, leaking faucets, mixer valves, and water flow problems."
    });
    const old = document.getElementById('service-schema');
    if (old) old.remove();
    document.head.appendChild(script);
    return () => { const s = document.getElementById('service-schema'); if (s) s.remove(); };
  }, []);

  const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hello, I need tap/faucet repair in Bhiwadi.')}`;

  const problems = [
    { icon: <Droplets className="w-6 h-6 text-blue-500" />, title: 'Dripping Taps', desc: 'A dripping tap wastes hundreds of litres of water per day. We fix the root cause permanently.' },
    { icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />, title: 'Leaking Faucets', desc: 'Water leaking from the base or spout of your faucet repaired quickly and cleanly.' },
    { icon: <Wrench className="w-6 h-6 text-brand-navy" />, title: 'Mixer Tap Repair', desc: 'Hot/cold mixer tap valve repairs and cartridge replacements for kitchens and bathrooms.' },
    { icon: <Droplets className="w-6 h-6 text-cyan-500" />, title: 'Low Water Pressure', desc: 'Diagnosing and fixing low pressure issues in taps caused by blockages or valve problems.' },
    { icon: <Wrench className="w-6 h-6 text-green-600" />, title: 'Tap Replacement', desc: 'Full tap and faucet replacement with quality fittings in Bhiwadi homes and offices.' },
    { icon: <AlertTriangle className="w-6 h-6 text-red-500" />, title: 'Outdoor Tap Repair', desc: 'Garden taps, outdoor hose connections, and external faucet repairs.' },
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
            <span className="text-gray-300">Tap &amp; Faucet Repair</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Tap &amp; Faucet Repair in Bhiwadi, Rajasthan
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Dripping tap? Leaking faucet? Call Chaudhary Plumbing Works for fast, affordable tap repair services anywhere in Bhiwadi.
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
            Professional Tap &amp; Faucet Repair in Bhiwadi
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Chaudhary Plumbing Works provides tap and faucet repair services throughout Bhiwadi and surrounding areas including
            UIT Sector 3, Chopanki, Tapukara, and Khushkhera. A dripping tap is not just annoying — it wastes water and increases your water bill.
            We diagnose and fix the issue permanently using quality replacement parts.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From old-style compression taps to modern mixer faucets, our experienced plumber handles all types of tap repairs
            and replacements at affordable prices.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-8">Tap Problems We Fix in Bhiwadi</h2>
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
              'Experienced plumber serving Bhiwadi, Rajasthan',
              'Same-day tap repair available 6 days a week',
              'Transparent pricing — know the cost before we start',
              'Quality parts for long-lasting repairs',
              'All types of taps and faucets handled',
              'Trusted by hundreds of customers in Bhiwadi',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold text-brand-navy mb-3">Dripping Tap in Bhiwadi? Call Us Now!</h2>
          <p className="text-gray-600 mb-6 text-lg">Don't let a small drip become a big problem. Get it fixed today.</p>
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
