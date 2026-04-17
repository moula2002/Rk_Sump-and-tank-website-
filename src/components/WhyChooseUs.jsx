import React from 'react';
import techIcon from '../assets/tech-icon.png';
import ecoIcon from '../assets/eco-icon.png';
import speedIcon from '../assets/speed-icon.png';
import priceIcon from '../assets/price-icon.png';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Experienced Technicians",
      icon: techIcon
    },
    {
      title: "Eco-Friendly Cleaning Solutions",
      icon: ecoIcon
    },
    {
      title: "No Downtime – Fast & Efficient",
      icon: speedIcon
    },
    {
      title: "Affordable Pricing",
      icon: priceIcon
    }
  ];


  return (
    <section className="relative bg-blue-600 pt-20 pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      <div className="section-padding relative z-10">
        <div className="text-center text-white mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black">Why Choose Us</h2>
          <p className="text-xl font-medium opacity-90">Professional & Quality Cleaning Services</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-tr-[50px] rounded-bl-[50px] shadow-2xl flex flex-col items-center text-center space-y-6 hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 flex items-center justify-center">
                <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-slate-900 font-bold text-lg leading-tight uppercase tracking-tight">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Wavy transition at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-px">
        <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill="#F8FAFC"></path>
        </svg>
      </div>
    </section>
  );
};

export default WhyChooseUs;
