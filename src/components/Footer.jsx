import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/RK-logo.png';

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 border-t border-slate-200">
      <div className="section-padding grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-slate-600">
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-white p-3 rounded-2xl shadow-lg border border-slate-100 flex-shrink-0">
              <img
                src={logoImg}
                alt="RK Sump & Tank Cleaning"
                className="h-12 w-auto"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tight leading-none text-slate-900">
                RK <span className="text-blue-600">SUMP & TANK</span>
              </span>
              <span className="font-bold text-[9px] tracking-[0.2em] uppercase text-blue-400">
                Cleaning Services
              </span>
            </div>
          </div>

          <p className="text-sm leading-relaxed">
            Bangalore's leading water tank cleaning experts. We provide professional, eco-friendly, and high-tech cleaning solutions for residential and commercial properties.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all duration-300">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition-all duration-300">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#000000] hover:bg-[#000000] hover:text-white transition-all duration-300">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" /></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-all duration-300">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </a>
          </div>

        </div>

        <div>
          <h4 className="text-slate-900 font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
            <li><a href="#services" className="hover:text-blue-600 transition-colors">Our Services</a></li>
            <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li className="hover:text-blue-600 transition-colors cursor-pointer group">
              <span className="block font-bold">Tank Cleaning</span>
            </li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer group">
              <span className="block font-bold">Sump Cleaning</span>
            </li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer group">
              <span className="block font-bold">Sump & Tank (Combo)</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">📍</span>
              <span className="font-medium text-slate-500">Shop No:2first, floor, Sy No 1/4, 2, Channasandra Main Rd, Nagondanahalli, Whitefield, Bengaluru, Karnataka 560066</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">📞</span>
              <span className="font-bold text-slate-900">+91 97416 17916</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✉️</span>
              <span className="font-medium">info@rksumpcleaning.com</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:row justify-between items-center gap-4 text-xs font-semibold text-slate-400">
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} RK Sump & Tank Cleaning Services. All Rights Reserved.</p>
            <p className="mt-2 text-slate-400 flex items-center justify-center md:justify-start gap-1.5">
              Developed with  by 
              <a 
                href="https://innomatrics.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Innomatrics Technologies
              </a>
            </p>
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
