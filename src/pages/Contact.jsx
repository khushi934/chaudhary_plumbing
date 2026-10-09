import { useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Clock, ExternalLink } from 'lucide-react';
import { BUSINESS } from '../data/business';

const Contact = () => {
  useEffect(() => {
    document.title = `Contact Us | ${BUSINESS.name}`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', `Get in touch with ${BUSINESS.name} for all your plumbing needs. Call or WhatsApp us today.`);
  }, []);

  const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent("Hello, I need a plumber.")}`;
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address)}`;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-brand-navy pt-20 pb-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto px-4">
          Get in touch with us for all your plumbing needs. We are just a call or a message away.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Contact Details */}
            <div className="p-8 md:p-12 space-y-8 bg-brand-navy text-white">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-200">Phone</h3>
                  <a href={`tel:${BUSINESS.phone}`} className="text-xl font-medium hover:text-brand-green transition-colors">
                    {BUSINESS.phone}
                  </a>
                  <p className="text-sm text-gray-400 mt-1">Tap to call</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MessageCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-200">WhatsApp</h3>
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl font-medium hover:text-brand-green transition-colors"
                  >
                    Click to message
                  </a>
                  <p className="text-sm text-gray-400 mt-1">Fastest way to reach us</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-200">Address</h3>
                  <p className="text-lg text-gray-100">
                    {BUSINESS.address}
                  </p>
                  <a 
                    href={mapSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-brand-green hover:text-white transition-colors mt-2"
                  >
                    Get Directions <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-200">Business Hours</h3>
                  <p className="text-lg text-gray-100">{BUSINESS.businessHours}</p>
                </div>
              </div>

            </div>

            {/* Actions */}
            <div className="p-8 md:p-12 flex flex-col justify-center bg-white space-y-6 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Ready to fix your plumbing?</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Reach out directly via phone or WhatsApp. We do not use contact forms to ensure we connect with you as quickly as possible.
              </p>
              
              <a 
                href={`tel:${BUSINESS.phone}`}
                className="w-full flex items-center justify-center gap-3 py-4 bg-brand-navy text-white text-lg font-bold rounded-xl hover:bg-opacity-90 transition-all shadow-md shadow-brand-navy/10"
              >
                <Phone className="w-6 h-6" />
                Call {BUSINESS.phone}
              </a>
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-4 bg-[#25D366] text-white text-lg font-bold rounded-xl hover:bg-[#1ebe57] transition-all shadow-md shadow-[#25D366]/20"
              >
                <MessageCircle className="w-6 h-6" />
                Message on WhatsApp
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
