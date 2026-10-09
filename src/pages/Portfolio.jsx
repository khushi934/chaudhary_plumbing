import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ImageIcon } from 'lucide-react';
import { BUSINESS } from '../data/business';

const Portfolio = () => {
  useEffect(() => {
    document.title = `Our Work Portfolio | ${BUSINESS.name}`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', `Explore our gallery of completed plumbing projects by ${BUSINESS.name}.`);
  }, []);

  const categories = [
    {
      id: "bathroom",
      title: "Bathroom Fittings",
      description: "Installation of modern showers, taps, and washbasins.",
      images: [
        "/images/WhatsApp Image 2026-10-06 at 9.58.04 AM.jpeg",
        "/images/WhatsApp Image 2026-10-06 at 9.58.11 AM.jpeg",
        "/images/Bathroomfiting.jpeg",
        "/images/PipeFittingjpeg.jpeg",
        "/images/WhatsApp Image 2026-10-06 at 9.58.14 AM.jpeg",
        "/images/shower_head.png"
      ]
    },
    {
      id: "sanitary",
      title: "Sanitary Wares & Toilets",
      description: "Professional installation of Indian and Western toilets.",
      images: [
        "/images/WhatsApp Image 2026-10-06 at 9.58.03 AM.jpeg",
        "/images/WhatsApp Image 2026-10-06 at 9.58.06 AM.jpeg",
        "/images/WhatsApp Image 2026-10-06 at 9.58.12 AM.jpeg",
        "/images/WhatsApp Image 2026-10-06 at 9.58.13 AM.jpeg",
        "/images/Bathroom fitting.jpeg",
        "/images/image1.jpeg"
      ]
    },
    {
      id: "commercial",
      title: "Commercial Installations & Tanks",
      description: "Urinal setups for commercial spaces and water tank installations.",
      images: [
        "/images/WhatsApp Image 2026-10-06 at 9.58.05 AM.jpeg",
        "/images/WhatsApp Image 2026-10-06 at 9.58.09 AM.jpeg",
        "/images/WhatsApp Image 2026-10-06 at 9.58.10 AM.jpeg",
        "/images/Installation.jpeg",
        "/images/Pipe Repairing.jpeg",
        "/images/Repairing.jpeg"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-brand-navy pt-20 pb-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work Gallery</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto px-4">
          A glimpse into the professional plumbing projects we have completed.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20">
        
        {categories.map((category) => (
          <div key={category.id} className="space-y-8">
            <div className="border-b border-gray-200 pb-4">
              <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
              <p className="text-lg text-gray-600 mt-2">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.images.map((img, idx) => (
                <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/3] bg-gray-200 border border-gray-200">
                  {img ? (
                    <img 
                      src={img} 
                      alt={`Project showcasing ${category.title.toLowerCase()}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 p-6 text-center bg-gray-100 group-hover:bg-gray-200 transition-colors">
                      <ImageIcon className="w-12 h-12 mb-3 opacity-50" />
                      <p className="font-medium text-gray-500">[Photo Placeholder]</p>
                      <p className="text-sm mt-1 text-gray-400">Replace with real image of {category.title.toLowerCase()}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center pt-10 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Need similar work done?</h3>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-navy text-white font-bold rounded-xl hover:bg-opacity-90 transition-all shadow-lg"
          >
            Contact Us Today <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
