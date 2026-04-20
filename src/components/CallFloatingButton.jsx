import React from 'react';

const CallFloatingButton = () => {
  const phoneNumber = "+918123432009";

  return (
    <a
      href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
      className="fixed bottom-24 right-6 z-[999] group"
      aria-label="Call Us"
    >
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-slate-900 text-sm font-bold rounded-xl shadow-2xl opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap border border-slate-100">
        Call us now!
      </span>

      {/* Vibration/Pulse Ring */}
      <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
      
      {/* Main Button */}
      <div className="relative bg-blue-600 hover:bg-blue-700 w-14 h-14 rounded-full shadow-[0_10px_40px_rgba(37,99,235,0.4)] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-active:scale-95">
        <svg 
          className="w-7 h-7 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.81 12.81 0 0 0 .62 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.62A2 2 0 0 1 22 16.92z" />
        </svg>
      </div>
    </a>
  );
};

export default CallFloatingButton;
