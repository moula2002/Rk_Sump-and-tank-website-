import React from 'react';
import BookingForm from '../components/BookingForm';

const Contact = () => {
  return (
    <div className="pt-32 min-h-screen bg-slate-50">
      <div className="section-padding grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <div className="space-y-4">
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm text-gradient">Get In Touch</h4>
            <h1 className="text-5xl font-bold text-slate-900 leading-tight">
              Ready to <span className="text-blue-600">Sanitize</span> Your Water?
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Fill out the form, or call us directly. Our team is ready to serve you with the best water hygiene solutions in Bangalore.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-4 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Call Us</h4>
                <p className="text-slate-500 text-sm font-semibold">+91 97416 17916</p>
              </div>
            </div>

            <div className="space-y-4 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Email Us</h4>
                <p className="text-slate-500 text-sm font-semibold">info@rksumpcleaning.com</p>
              </div>
            </div>

            <div className="space-y-4 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Office</h4>
                <p className="text-slate-500 text-sm font-semibold leading-relaxed">
                  Shop No:2first, floor, Sy No 1/4, 2, Channasandra Main Rd, Nagondanahalli, Whitefield, <br /> Bengaluru, Karnataka 560066
                </p>
              </div>
            </div>

            <div className="space-y-4 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Work Hours</h4>
                <p className="text-slate-500 text-sm font-semibold">Mon - Sun: 24 Hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-blue-600/5 rounded-[40px] rotate-3 blur-2xl"></div>
          <div className="relative bg-white p-2 rounded-[32px] shadow-2xl glass-card">
            <BookingForm />
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="section-padding pb-32">
        <div className="h-[400px] w-full rounded-[40px] bg-slate-200 overflow-hidden shadow-inner transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2961.5092496314874!2d77.7710968!3d12.976323100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0ffdb79c2e47%3A0x2f51039fe5152674!2sR%20K%20sump%20and%20tank%20cleaning%20services!5e1!3m2!1sen!2sin!4v1776422478961!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default Contact;
