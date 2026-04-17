import React from 'react';
import tankImg from '../assets/tank-clean.png';
import sumpImg from '../assets/sump-clean.png';

const About = () => {
    return (
        <section id="about" className="section-padding grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4 pt-12">
                        <img src={tankImg} alt="Tank Cleaning" className="rounded-3xl shadow-xl w-full h-64 object-cover" />
                        <div className="bg-blue-600 rounded-3xl p-8 text-white">
                            <h4 className="text-4xl font-bold mb-2">10+</h4>
                            <p className="text-sm opacity-80 uppercase tracking-wider font-bold">Years Experience</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-slate-900 rounded-3xl p-8 text-white overflow-hidden relative">
                            <h4 className="text-4xl font-bold mb-2">5k+</h4>
                            <p className="text-sm opacity-80 uppercase tracking-wider font-bold">Tanks Cleaned</p>
                            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-600/20 rounded-full blur-2xl"></div>
                        </div>
                        <img src={sumpImg} alt="Sump Cleaning" className="rounded-3xl shadow-xl w-full h-80 object-cover" />
                    </div>
                </div>
            </div>


            <div className="space-y-8">
                <div className="space-y-4">
                    <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm">About RK Cleaning</h4>
                    <h2 className="text-4xl md:text-5xl text-slate-900">Dedicated to Pure & Healthy Water Storage</h2>
                </div>
                
                <p className="text-slate-600 text-lg leading-relaxed">
                    RK Sump & Tank Cleaning Services was founded with a single mission: to provide the highest standard of hygiene for water storage systems in Bangalore. We understand that water is the essence of life, and its storage shouldn't be a source of disease.
                </p>

                <div className="space-y-4">
                    {[
                        'Professional & Certified Cleaning Staff',
                        'Eco-friendly & Non-toxic Disinfectants',
                        'Advanced European Machinery & UV Tech',
                        'Comprehensive Inspection & Repair Service'
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="font-semibold text-slate-700">{item}</span>
                        </div>
                    ))}
                </div>

                <div className="pt-4">
                    <button className="btn-primary">Learn More About Us</button>
                </div>
            </div>
        </section>
    );
};

export default About;
