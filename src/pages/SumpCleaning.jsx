import React from 'react';
import sumpImg from '../assets/sump-clean.png';
import BookingForm from '../components/BookingForm';

const SumpCleaning = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="section-padding grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold text-slate-900 leading-tight">
            Professional <span className="text-blue-600">Sump Cleaning</span> Services
          </h1>
          <img src={sumpImg} alt="Sump Cleaning" className="rounded-3xl shadow-2xl w-full h-80 object-cover" />
          
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p className="text-lg">
              Underground sumps are breeding grounds for bacteria, mosquitoes, and harmful microbes if not cleaned regularly. Our professional sump cleaning service ensures your water storage is sterile and safe for use.
            </p>
            
            <h3 className="text-2xl font-bold text-slate-900">Why Clean Your Sump?</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                'Remove accumulated silt and mud',
                'Prevent bacterial & fungal growth',
                'Eliminate bad odours from water',
                'Prevent mosquito breeding',
                'Maintain water pump longevity',
                'Ensure health of family members'
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-center font-medium">
                  <span className="text-blue-600">✓</span> {item}
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">Our Sump Cleaning Process</h3>
            <p>
              We use high-pressure jet pumps for internal wall cleaning, followed by sludge removal with industrial vacuum cleaners. The process concludes with UV sterilization and antibacterial treatment.
            </p>
          </div>
        </div>

        <div className="sticky top-32">
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default SumpCleaning;
