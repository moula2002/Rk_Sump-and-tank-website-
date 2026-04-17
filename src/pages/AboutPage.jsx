import React from 'react';
import { Link } from 'react-router-dom';
import tankImg from '../assets/tank-clean.png';
import teamImg from '../assets/team.png';

const AboutPage = () => {
  return (
    <div className="pt-32 min-h-screen bg-white">
      {/* 1. Banner Section */}
      <div className="relative h-[650px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={teamImg} alt="Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>



        <div className="relative z-10 space-y-6 px-6">
          <h1 className="text-5xl md:text-7xl font-black">About Us</h1>
          <p className="text-xl md:text-2xl font-medium tracking-wide">
            Sump and Water Tank Cleaning Company in Bangalore
          </p>
          <div className="pt-4">
            <a
              href="tel:+919741617916"
              className="bg-white text-blue-600 px-10 py-4 rounded shadow-xl font-bold hover:bg-slate-50 transition-all inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              CALL NOW
            </a>
          </div>
        </div>
      </div>

      {/* 2. Introduction Section */}
      <div className="section-padding grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-blue-600/5 rounded-[40px] rotate-3 blur-2xl"></div>
          <img
            src={tankImg}
            alt="Cleaning Technicians"
            className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
          />
        </div>

        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p className="text-lg">
            At <span className="font-bold text-slate-900">Sump and Tank Cleaning</span>, we are committed to delivering top-notch sump and water tank cleaning solutions that safeguard your water quality and ensure a healthier living and working environment. Founded on principles of hygiene, customer trust, and environmental responsibility, we bring professional expertise to a service that is too often neglected - clean water storage.
          </p>
          <p className="text-lg text-slate-600">
            With years of experience and a team of trained technicians, we have become a trusted name in water hygiene solutions across Bangalore. From small residential tanks to large industrial sump systems, we take on every project with the same attention to detail, safety, and customer satisfaction.
          </p>
          <p className="text-lg text-slate-600 font-medium italic">
            We combine <span className="font-bold text-slate-900 not-italic">modern cleaning technologies</span> with <span className="font-bold text-slate-900 not-italic">eco-friendly practices</span>, ensuring that your tanks and sumps are cleaned without compromising the environment or the structural integrity of your system.
          </p>
        </div>
      </div>

      {/* 3. Vision & Mission Section */}
      <div className="bg-[#f8f7ff] py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-600 uppercase tracking-widest">Vision</h2>
            <p className="text-lg text-slate-700 leading-relaxed font-semibold">
              To be the most trusted and innovative provider of sump and water tank cleaning services, promoting clean water practices in every household and institution for a healthier tomorrow.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-600 uppercase tracking-widest">Mission</h2>
            <ul className="space-y-6">
              {[
                { title: 'Safe & Reliable', desc: 'To deliver safe, reliable, and efficient cleaning services tailored to the specific needs of our clients.' },
                { title: 'Education', desc: 'To educate communities about the importance of clean water storage and the risks of neglecting tank and sump maintenance.' },
                { title: 'Standards', desc: 'To uphold high standards of hygiene, safety, and sustainability in every service we provide.' },
                { title: 'Innovation', desc: 'To continually innovate and adopt the latest techniques in cleaning and water hygiene.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 group">
                  <div className="shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-2.5 group-hover:scale-150 transition-transform"></div>
                  <p className="text-slate-700 leading-relaxed">
                    <span className="font-bold">{item.title}:</span> {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 4. CTA Section */}
      <div className="section-padding">
        <div className="bg-gradient-to-r from-purple-100 via-white to-blue-50 rounded-[40px] p-12 md:p-20 text-center space-y-8 shadow-sm border border-slate-100">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-600 leading-tight">
            Say Goodbye to Impurities, <br className="hidden md:block" /> Hello to Clean Water.
          </h2>
          <p className="text-xl md:text-2xl font-bold text-slate-900">
            Top #1 Sump Water Proofing in Bangalore
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="bg-white border-2 border-blue-600 text-blue-600 px-10 py-4 rounded shadow-lg font-bold hover:bg-blue-600 hover:text-white transition-all uppercase inline-block"
            >
              Book Service Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
