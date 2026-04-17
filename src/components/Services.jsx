import React from 'react';
import { Link } from 'react-router-dom';
import tankImg from '../assets/tank-clean.png';
import sumpImg from '../assets/sump-clean.png';
import teamImg from '../assets/team.png';

const Services = () => {
  const mainServices = [
    {
      title: "Sump Cleaning",
      desc: "Detailed deep cleaning for underground sumps. We remove sludge, dirt, and bacteria using high-pressure jet pumps and specialized scrubbing tools, followed by advanced UV sterilization for 100% pure water storage.",
      img: sumpImg,
      link: "/sump-cleaning"
    },
    {
      title: "Tank Cleaning",
      desc: "Professional overhead tank cleaning services. Our team ensures complete removal of algae, silt, and contaminants from roof-top tanks, providing safe and hygienic water for your family's daily needs.",
      img: tankImg,
      link: "/tank-cleaning"
    }
  ];


  return (
    <section id="services" className="relative pb-32 overflow-hidden bg-white">
      <div className="section-padding relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Services</h2>
          <p className="text-xl font-medium text-blue-600">Experience the elegance of pure refreshment.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {mainServices.map((service, index) => (
            <div key={index} className="bg-white rounded-[32px] shadow-2xl overflow-hidden border border-slate-100 flex flex-col group hover:-translate-y-2 transition-all duration-500">
              <div className="h-[400px] relative overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-10 flex flex-col items-center text-center space-y-8 flex-grow">
                <h3 className="text-3xl font-bold text-blue-600">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {service.desc}
                </p>
                <div className="pt-4 mt-auto">
                  <Link 
                    to={service.link}
                    className="inline-block border-2 border-blue-500 text-blue-600 px-10 py-2.5 rounded shadow-md font-bold hover:bg-blue-600 hover:text-white transition-all uppercase text-sm tracking-wider"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Wave Background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-px">
        <svg className="relative block w-full h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill="#0274be"></path>
        </svg>
      </div>
    </section>
  );
};

export default Services;
