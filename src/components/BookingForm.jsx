import React from 'react';

const BookingForm = () => {
  return (
    <div className="glass-card p-8 w-full max-w-md">
      <h3 className="text-2xl font-bold mb-6 text-slate-900">Book Your Cleaning</h3>
      <form className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase mb-1 ml-1 leading-relaxed">Full Name</label>
          <input
            type="text"
            className="w-full bg-slate-100/50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase mb-1 ml-1 leading-relaxed">Phone Number</label>
          <input
            type="tel"
            className="w-full bg-slate-100/50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            placeholder="+91 00000 00000"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase mb-1 ml-1 leading-relaxed">Location / Address</label>
          <textarea
            className="w-full bg-slate-100/50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
            rows="3"
            placeholder="Enter your address in Bangalore..."
          ></textarea>
        </div>
        <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors">
          Book Service Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
