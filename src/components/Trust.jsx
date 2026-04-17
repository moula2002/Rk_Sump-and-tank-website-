import React from 'react';
import teamImg from '../assets/team.png';

const Trust = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 space-y-8">
          <h2 className="text-4xl md:text-5xl text-slate-900 leading-tight">
            Trusted by Thousands of <span className="text-blue-600">Bangalore Homes</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Our team of dedicated professionals is trained in the latest safety and hygiene protocols. We don't just clean; we sanitize your water storage to ensure it's safe for your entire family.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-3xl font-bold text-blue-600 mb-1">100%</p>
                <p className="text-sm font-bold text-slate-500 uppercase">Chemical Free</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-3xl font-bold text-blue-600 mb-1">60 Min</p>
                <p className="text-sm font-bold text-slate-500 uppercase">Response Time</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-green-50 border border-green-100">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            </div>
            <p className="text-green-800 font-semibold">
                Fully Insured and Background Checked Service Professionals.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="absolute -inset-4 bg-blue-600/5 rounded-[40px] rotate-3"></div>
          <img 
            src={teamImg} 
            alt="Our Professional Team" 
            className="relative rounded-[32px] shadow-2xl w-full h-[500px] object-cover"
          />
          <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-slate-100">
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    4.9
                </div>
                <div>
                    <p className="font-bold text-slate-900 leading-none">Google Rating</p>
                    <p className="text-xs text-slate-500 mt-1">Based on 2500+ reviews</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
