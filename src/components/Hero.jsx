import React from 'react';
import BookingForm from './BookingForm';
import heroImg from '../assets/hero-bg.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Cleaning Service" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      <div className="section-padding relative z-10 grid lg:grid-cols-2 gap-12 items-start lg:pt-12">
        <div className="space-y-8 lg:mt-12">

          <h1 className="text-5xl lg:text-7xl leading-tight text-slate-900">
            Professional <span className="text-gradient">Sump & Tank</span> Cleaning Services
          </h1>
          
          <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
            Ensure your family's health with our 6-step deep cleaning process. 
            We use advanced UV sterilization and high-pressure cleaning to remove 99.9% of bacteria.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end lg:-translate-y-8">
          <BookingForm />
        </div>
      </div>

    </section>
  );
};

export default Hero;
