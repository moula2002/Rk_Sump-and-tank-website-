import React from 'react';
import tankImg from '../assets/tank-clean.png';
import BookingForm from '../components/BookingForm';

const TankCleaning = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="section-padding grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold text-slate-900 leading-tight">
            Advanced <span className="text-blue-600">Tank Cleaning</span> Services
          </h1>
          <img src={tankImg} alt="Tank Cleaning" className="rounded-3xl shadow-2xl w-full h-80 object-cover" />
          
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p className="text-lg">
              Overhead tanks are exposed to sunlight and outdoor conditions, leading to rapid algae growth and heating of water. Our specialized cleaning process keeps your drinking water fresh and pathogen-free.
            </p>
            
            <h3 className="text-2xl font-bold text-slate-900">Our Tank Cleaning Benefits</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                'High-pressure wall scrubbing',
                'Algae and moss removal',
                'UV sterilization treatment',
                'Floating debris removal',
                'Outlet pipe descaling',
                'Food-grade disinfection'
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-center font-medium">
                  <span className="text-blue-600">✓</span> {item}
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mt-8">Scientific 6-Step Method</h3>
            <p>
              From dewatering to final UV sterilization, we follow a rigorous protocol that meets industrial hygiene standards, ensuring your family's safety from water-borne diseases.
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

export default TankCleaning;
