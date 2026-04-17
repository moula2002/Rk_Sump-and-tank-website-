import React from 'react';

const steps = [
  { n: '01', title: 'Dewatering', desc: 'Removing existing water using efficient submersible pumps.' },
  { n: '02', title: 'Sludge Removal', desc: 'Manual scraping of settled silt and thick sludge from floor and walls.' },
  { n: '03', title: 'High Pressure Jetting', desc: 'Removing calcium deposits and algae using professional jet pumps.' },
  { n: '04', title: 'Vacuum Cleaning', desc: 'Extracting fine particles and leftover dirty water.' },
  { n: '05', title: 'Antibacterial Spray', desc: 'Applying food-grade anti-microbial solution for disinfection.' },
  { n: '06', title: 'UV Treatment', desc: 'Killing remaining pathogens with specialized UV-C lamps.' },
];

const Process = () => {
  return (
    <section id="process" className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-6">Our 6-Step Methodology</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We follow a rigorous scientific process to ensure your water storage is 100% hygienic and safe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="flex items-start gap-6">
                <span className="text-6xl font-black text-blue-500/20 group-hover:text-blue-500/40 transition-colors leading-none">
                  {step.n}
                </span>
                <div className="pt-2">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-px bg-slate-800"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 rounded-3xl bg-blue-600/10 border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
                <h4 className="text-2xl font-bold mb-2">Ready for a healthier home?</h4>
                <p className="text-blue-200">Book our deep cleaning service today and get 10% off!</p>
            </div>
            <button className="btn-primary bg-white text-blue-600 hover:bg-blue-50">Claim Discount</button>
        </div>
      </div>
    </section>
  );
};

export default Process;
