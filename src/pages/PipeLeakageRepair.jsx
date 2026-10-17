
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS } from '../data/business';

export default function PipeLeakageRepair() {
  useEffect(() => {
    document.title =
      `Pipe Leakage Repair in Bhiwadi | ${BUSINESS.name}`;

    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }

    description.content =
      `Contact ${BUSINESS.name} for pipe leakage repair services in Bhiwadi, Rajasthan. Enquire about inspection and repair for leaking pipes.`;
  }, []);

  const whatsappUrl =
    `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
      'Hello, I need help with pipe leakage repair.'
    )}`;

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-6">
        <Link to="/" className="underline">Home</Link>
        {' / '}
        <Link to="/services" className="underline">Services</Link>
        {' / Pipe Leakage Repair'}
      </nav>

      <h1 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6">
        Pipe Leakage Repair in Bhiwadi, Rajasthan
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Chaudhary Plumbing Works provides plumbing services for
        customers in Bhiwadi. Contact us to discuss leaking pipes,
        water leakage problems and suitable repair options.
      </p>

      <h2 className="text-2xl font-bold mb-3">
        Pipe Leakage Problems We Can Help With
      </h2>

      <p className="text-gray-700 leading-relaxed mb-8">
        If you notice water leaking from a pipe or plumbing connection,
        contact us with details about the location and severity of
        the problem so we can discuss the appropriate service.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <a
          href={`tel:${BUSINESS.phone}`}
          className="inline-flex justify-center items-center gap-2 rounded-lg bg-brand-navy text-white px-6 py-3"
        >
          <Phone className="w-5 h-5" />
          Call for Service
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center items-center gap-2 rounded-lg bg-green-600 text-white px-6 py-3"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp Enquiry
        </a>
      </div>

      <p className="text-gray-600">
        Need another plumbing service?{' '}
        <Link to="/services" className="underline text-brand-navy">
          View all plumbing services
        </Link>.
      </p>
    </main>
  );
}
