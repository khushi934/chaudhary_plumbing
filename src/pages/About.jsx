import { useEffect } from 'react';
import { Users, Target, Shield } from 'lucide-react';
import { BUSINESS } from '../data/business';

const About = () => {
  useEffect(() => {
    document.title = `About Us | ${BUSINESS.name}`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', `Learn more about ${BUSINESS.name} and our commitment to quality plumbing services.`);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-brand-navy pt-20 pb-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto px-4">
          Learn more about {BUSINESS.name} and our commitment to quality plumbing services.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {BUSINESS.name} is a dedicated local plumbing service provider. We specialize in residential plumbing solutions, from minor repairs and maintenance to full-scale installations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our approach to customer service is simple: be reliable, communicate clearly, and perform the job to the highest standard.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We understand that plumbing issues can be stressful. That's why we emphasize prompt response times and direct communication so you always know what to expect. Quality workmanship is the cornerstone of our business, ensuring that every faucet we install and every pipe we repair stands the test of time.
            </p>
          </div>

          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img src="/images/realistic_about.png" alt="Professional Pipe Repair Work" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            <div className="text-center p-6 space-y-4">
              <div className="w-16 h-16 mx-auto bg-brand-navy rounded-full flex items-center justify-center text-white shadow-md">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">What We Do</h3>
              <p className="text-gray-600">
                We handle a variety of plumbing needs including leaks, installations, sanitary fittings, and general maintenance for homes.
              </p>
            </div>

            <div className="text-center p-6 space-y-4">
              <div className="w-16 h-16 mx-auto bg-brand-navy rounded-full flex items-center justify-center text-white shadow-md">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Quality Workmanship</h3>
              <p className="text-gray-600">
                We take pride in our work. Doing the job right the first time is our priority, giving you peace of mind and long-lasting solutions.
              </p>
            </div>

            <div className="text-center p-6 space-y-4">
              <div className="w-16 h-16 mx-auto bg-brand-navy rounded-full flex items-center justify-center text-white shadow-md">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Clear Communication</h3>
              <p className="text-gray-600">
                No jargon, no runarounds. We explain the problem clearly and discuss the solution with you before any work begins.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
