import React from 'react';
import { Link } from 'react-router-dom';

const TopBanner = () => {
  return (
    <div className="relative bg-blue-700 py-24 overflow-hidden">

      {/* Hexagon Pattern Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      {/* Section Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-10 text-white">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight drop-shadow-sm">
          Clean Water, Healthy Life
        </h1>

        <div className="space-y-8 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed text-blue-50/90 font-medium">
            At Sump and Tank cleaning company, we are committed to delivering top-notch sump and water tank cleaning solutions that safeguard your water quality and ensure a healthier living and working environment. Founded on principles of hygiene, customer trust, and environmental responsibility, we bring professional expertise to a service that is too often neglected – clean water storage.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-blue-50/90 font-medium">
            We combine modern cleaning technologies with eco-friendly practices, ensuring that your tanks and sumps are cleaned without compromising the environment or the structural integrity of your system.
          </p>
        </div>

        <div className="pt-6 text-center flex justify-center">
          <Link
            to="/about"
            className="bg-white text-blue-900 px-10 py-3.5 rounded font-bold shadow-2xl hover:bg-slate-50 transition-all uppercase tracking-wider text-sm inline-block"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Wavy Bottom Overlay */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-px">
        <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#F8FAFC"></path>
        </svg>
      </div>
    </div>
  );
};

export default TopBanner;
