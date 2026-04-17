import React from 'react';
import tankImg from '../assets/tank-clean.png';
import sumpImg from '../assets/sump-clean.png';
import BookingForm from '../components/BookingForm';

const ComboCleaning = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-2 rounded-full text-sm font-bold tracking-wide border border-amber-100 uppercase">
                    🔥 Best Value Offer
                </div>
                <h1 className="text-5xl font-bold text-slate-900 leading-tight">
                    Sump & Tank <span className="text-blue-600">Combo Wash</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Why settle for half hygiene? Book our comprehensive Combo Service and get your underground sump and overhead tanks cleaned on the same day with a massive discount.
                </p>
                
                <div className="bg-blue-600 rounded-[32px] p-10 text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-2">Flat 15% OFF</h3>
                        <p className="opacity-80 font-medium mb-6">On professional Combo Cleaning services in Bangalore.</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 font-bold"><span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">✓</span> Full Sump Deep Cleaning</li>
                            <li className="flex items-center gap-3 font-bold"><span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">✓</span> Overhead Tank Sterilization</li>
                            <li className="flex items-center gap-3 font-bold"><span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">✓</span> Pipeline Flushing (Free)</li>
                        </ul>
                    </div>
                    {/* Decorative shape */}
                    <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
                </div>
            </div>

            <div className="sticky top-32 space-y-8">
                <div className="glass-card p-1">
                    <div className="bg-white rounded-[28px] p-8">
                        <h3 className="text-2xl font-bold mb-6 text-slate-900 text-center">Get Your Special Quote</h3>
                        <BookingForm />
                    </div>
                </div>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-3xl h-64 shadow-lg">
                <img src={sumpImg} alt="Sump" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                    <p className="text-white font-bold text-xl uppercase tracking-wider">Step 1: Sump Deep Clean</p>
                </div>
            </div>
            <div className="relative group overflow-hidden rounded-3xl h-64 shadow-lg">
                <img src={tankImg} alt="Tank" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                    <p className="text-white font-bold text-xl uppercase tracking-wider">Step 2: Tank Sterilization</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ComboCleaning;
