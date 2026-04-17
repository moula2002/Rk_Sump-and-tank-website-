import React from 'react';

const Reviews = () => {
  const testimonials = [
    {
      name: "Prasanna Gowda",
      rating: 5,
      comment: "Amazing service! Very professional and reliable. They exceeded my expectations, and I highly recommend them.",
      date: "2 days ago"
    },
    {
      name: "Brunda Gowda",
      rating: 5,
      comment: "Really good work please visit all of u",
      date: "5 days ago"
    },
    {
      name: "Rashmi Ps",
      rating: 5,
      comment: "RK cleaning is the one of the best service with the affordable price RK team work is very nice recommend to my friend and family,relatives",
      date: "1 week ago"
    },
    {
      name: "Manju J P Kiccha",
      rating: 5,
      comment: "Really good work thank u. All of please visited.",
      date: "1 week ago"
    },
    {
      name: "SUCHITHRA R",
      rating: 5,
      comment: "Excellent",
      date: "6 days ago"
    }
  ];

  return (
    <section className="relative bg-slate-50 py-24 overflow-hidden">
      <div className="section-padding">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <div className="lg:w-1/3 space-y-6 text-center lg:text-left">
            <h4 className="text-blue-600 font-black uppercase tracking-[0.2em] text-sm">Customer Trust</h4>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Ratings & <br /> <span className="text-blue-600 text-gradient">Reviews</span>
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto lg:ml-0"></div>
          </div>

          
          <div className="lg:w-2/3 bg-white p-8 rounded-[40px] shadow-xl border border-blue-50 flex flex-col md:flex-row items-center gap-10">
            <div className="text-center md:border-r border-slate-100 md:pr-10">
              <div className="text-6xl font-black text-slate-900 mb-2">5.0</div>
              <div className="flex text-amber-400 mb-2">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest text-center">15 reviews</div>
            </div>
            
            <div className="flex-grow space-y-4 w-full">
              <div className="flex items-center gap-4">
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full w-[100%]"></div>
                </div>
                <span className="text-sm font-bold text-slate-600 min-w-[20px]">5★</span>
              </div>
              <div className="flex items-center gap-4 opacity-30">
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full w-[0%]"></div>
                </div>
                <span className="text-sm font-bold text-slate-600 min-w-[20px]">4★</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Carousel */}
      <div className="flex overflow-hidden relative">
        <div className="flex animate-marquee gap-8 whitespace-nowrap py-4">
          {[...testimonials, ...testimonials].map((t, index) => (
            <div key={index} className="inline-block w-[350px] bg-white p-8 rounded-[32px] shadow-lg border border-slate-50 space-y-4 hover:scale-105 transition-transform shrink-0">
              <div className="flex text-amber-400">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-slate-600 text-sm font-medium leading-relaxed italic whitespace-normal line-clamp-3">"{t.comment}"</p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{t.date}</span>
                    <span className="px-1.5 py-0.5 bg-blue-50 text-[8px] text-blue-600 font-black rounded uppercase">New</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
