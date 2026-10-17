import { updateSEO } from '../utils/seo';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, CheckCircle2, AlertTriangle, Wrench, Droplets } from 'lucide-react';
import { BUSINESS } from '../data/business';

export default function PipeLeakageRepair() {
  useEffect(() => {
    document.title = `Pipe Leakage Repair in Bhiwadi, Rajasthan | ${BUSINESS.name}`;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://www.chaudharyplumbingworks.tech/pipe-leakage-repair-bhiwadi');

    let desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', `Expert pipe leakage repair in Bhiwadi, Rajasthan by ${BUSINESS.name}. We fix burst pipes, hidden leaks, bathroom leakage & water seepage. Call ${BUSINESS.phone} for fast response.`);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', `Pipe Leakage Repair in Bhiwadi | ${BUSINESS.name}`);
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', 'https://www.chaudharyplumbingworks.tech/pipe-leakage-repair-bhiwadi');

    updateSEO(
      `Pipe Leakage Repair in Bhiwadi | ${BUSINESS.name}`,
      `Expert pipe leakage repair in Bhiwadi, Rajasthan. We fix burst pipes, hidden leaks & water seepage. Call now!`,
      '/pipe-leakage-repair-bhiwadi'
    );
  }, []);

  const whatsappUrl =
    `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
      'Hello, I need help with pipe leakage repair in Bhiwadi.'
    )}`;

  const problems = [
    { icon: <Droplets className="w-6 h-6 text-blue-500" />, title: 'Burst Pipes', desc: 'Sudden pipe bursts causing water flooding in your home or building.' },
    { icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />, title: 'Hidden Wall Leakage', desc: 'Water seeping through walls or ceilings causing damp patches and mold.' },
    { icon: <Wrench className="w-6 h-6 text-brand-navy" />, title: 'Joint Leakage', desc: 'Loose or corroded pipe joints dripping water constantly.' },
    { icon: <Droplets className="w-6 h-6 text-blue-400" />, title: 'Underground Leaks', desc: 'Water loss from underground supply lines causing low pressure.' },
    { icon: <AlertTriangle className="w-6 h-6 text-red-500" />, title: 'Bathroom Pipe Leaks', desc: 'Leaking pipes in bathrooms affecting tiles, floor and structure.' },
    { icon: <Wrench className="w-6 h-6 text-green-600" />, title: 'Kitchen Pipe Repair', desc: 'Drain and supply pipe leaks under kitchen sinks and counters.' },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-brand-navy pt-20 pb-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6 flex justify-center gap-2" aria-label="breadcrumb">
            <Link to="/" className="hover:text-white underline">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white underline">Services</Link>
            <span>/</span>
            <span className="text-gray-300">Pipe Leakage Repair</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Pipe Leakage Repair in Bhiwadi, Rajasthan
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Fast, reliable pipe leak detection and repair service in Bhiwadi. 
            Contact us for an immediate response to any pipe leakage problem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex justify-center items-center gap-2 rounded-lg bg-white text-brand-navy font-bold px-8 py-3 text-lg hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 rounded-lg bg-[#25D366] text-white font-bold px-8 py-3 text-lg hover:bg-[#1ebe57] transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">

        {/* Intro */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
            Trusted Pipe Leakage Repair Service in Bhiwadi
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Chaudhary Plumbing Works provides professional pipe leakage repair services in Bhiwadi, Rajasthan. 
            Whether you have a small drip or a major burst pipe, our experienced team can diagnose the problem 
            and provide a lasting repair. We serve customers across UIT Sector 3, Chopanki, Tapukara, Khushkhera 
            and all areas of Bhiwadi.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Pipe leaks left untreated can cause serious damage to your walls, flooring, and structure. 
            Contact us as soon as you notice signs of leakage — wet walls, reduced water pressure, 
            unusually high water bills, or water stains.
          </p>
        </section>

        {/* Problems We Fix */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-8">
            Pipe Leakage Problems We Fix
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  {p.icon}
                  <h3 className="font-bold text-gray-900 text-lg">{p.title}</h3>
                </div>
                <p className="text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12 bg-brand-navy text-white rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Chaudhary Plumbing Works?</h2>
          <ul className="space-y-4">
            {[
              'Experienced plumber based in Bhiwadi, Rajasthan',
              'Fast response — available 6 days a week',
              'Transparent pricing — no hidden charges',
              'Proper tools for leak detection including concealed pipes',
              'Quality repair materials for a long-lasting fix',
              'Trusted by hundreds of customers across Bhiwadi',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold text-brand-navy mb-3">Have a Pipe Leakage Problem?</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Don't wait — contact us now for a quick response in Bhiwadi and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex justify-center items-center gap-2 rounded-lg bg-brand-navy text-white font-bold px-8 py-4 text-lg hover:bg-opacity-90 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call {BUSINESS.phone}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 rounded-lg bg-green-600 text-white font-bold px-8 py-4 text-lg hover:bg-green-700 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </section>

        <p className="text-gray-500 text-center">
          Need another plumbing service?{' '}
          <Link to="/services" className="underline text-brand-navy font-semibold">
            View all plumbing services in Bhiwadi
          </Link>.
        </p>
      </div>
    </main>
  );
}
