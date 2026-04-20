import React from 'react';

const TermsOfService = () => {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 bg-white p-12 rounded-[40px] shadow-xl">
        <h1 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">Terms of Service</h1>

        <div className="space-y-8 text-slate-600 leading-relaxed font-medium">
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">1. Service Agreements</h2>
            <p>By booking a service with RK Sump & Tank Cleaning, you agree to provide accurate location details and ensure access to the water systems (sump/tank) at the scheduled time.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">2. Pricing & Payment</h2>
            <p>Cleaning quotes are based on the capacity and condition of the tank/sump. Standard rates apply for Bangalore urban areas, while additional travel fees may apply for remote surroundings.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">3. Customer Responsibility</h2>
            <p>Customers must ensure a continuous power supply and water source if required for our high-pressure cleaning machinery during the cleaning process.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">4. Liability</h2>
            <p>While we handle your property with extreme care, RK Cleaning is not responsible for pre-existing leakages or structural damages in old or poorly maintained tanks.</p>
          </section>

          <section className="pt-8 border-t border-slate-100">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Effective Date: April 2024</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
