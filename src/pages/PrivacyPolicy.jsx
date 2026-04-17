import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 bg-white p-12 rounded-[40px] shadow-xl">
        <h1 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">Privacy Policy</h1>
        
        <div className="space-y-8 text-slate-600 leading-relaxed font-medium">
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">1. Information Collection</h2>
            <p>At RK Sump & Tank Cleaning Services, we collect minimal personal information necessary to provide our services. This includes your name, phone number, and address when you book a cleaning service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">2. Use of Information</h2>
            <p>We use your information exclusively to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Coordinate and confirm cleaning appointments.</li>
              <li>Reach your location for the service.</li>
              <li>Provide service updates or follow-up maintenance reminders.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">3. Data Security</h2>
            <p>We implement strict security measures to protect your personal data. We do not sell, trade, or share your information with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">4. Compliance</h2>
            <p>Our practices comply with Bangalore local data protection guidelines and Indian privacy laws.</p>
          </section>

          <section className="pt-8 border-t border-slate-100">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Last Updated: April 2024</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
