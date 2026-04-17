import React from 'react';
import howImg from '../assets/how-we-work.png';

const HowWeWork = () => {

  const steps = [
    "Inspection & Assessment",
    "Mechanical De-sludging",
    "High-Pressure Cleaning",
    "Vacuum Dewatering",
    "Anti-bacterial Spray & UV Treatment (if required)"
  ];

  return (
    <section className="relative bg-white pb-24 overflow-hidden">
      {/* Dashed Arrow Decoration (Top Right) */}
      <div className="absolute top-20 right-10 opacity-20 hidden lg:block">
        <svg width="200" height="150" viewBox="0 0 200 150" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" className="text-blue-600">
          <path d="M180,20 C140,20 100,60 100,100 S60,140 20,140" />
          <path d="M30,130 L15,140 L30,150" />
        </svg>
      </div>

      <div className="section-padding relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-blue-600/5 rounded-3xl group-hover:bg-blue-600/10 transition-colors"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src={howImg} 
              alt="How We Work" 
              className="w-full h-auto object-cover"
            />

          </div>
        </div>

        {/* Content Side */}
        <div className="space-y-10">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            How We Work
          </h2>
          
          <ul className="space-y-6">
            {steps.map((step, index) => (
              <li key={index} className="flex items-center gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-slate-700">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
