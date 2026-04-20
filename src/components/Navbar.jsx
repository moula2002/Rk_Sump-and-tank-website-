import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/RK-logo.png';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 300); // 300ms delay
  };
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const showBackground = isScrolled || !isHome;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showBackground ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 group">
          <img
            src={logoImg}
            alt="RK Sump & Tank Cleaning"
            className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-14'}`}
          />
          <div className="flex flex-col">
            <span className={`font-black tracking-tight leading-none ${isScrolled ? 'text-lg' : 'text-2xl'}`}>
              RK <span className="text-blue-600">SUMP & TANK</span>
            </span>
            <span className={`font-bold tracking-[0.2em] uppercase text-blue-500/80 ${isScrolled ? 'text-[8px]' : 'text-[10px]'}`}>
              Cleaning Services
            </span>
          </div>
        </Link>



        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">Home</Link>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1">
              Services
              <svg className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showDropdown && (
              <div
                className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl p-4 mt-2 border border-slate-100 animate-in fade-in slide-in-from-top-2 duration-200"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/tank-cleaning"
                  className="block p-3 hover:bg-blue-50 rounded-xl transition-colors group/item"
                  onClick={() => {
                    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                    setShowDropdown(false);
                  }}
                >
                  <p className="font-bold text-slate-900 focus:outline-none">Tank Cleaning</p>
                  <p className="text-xs text-slate-500">Overhead water tank sterilization</p>
                </Link>
                <Link
                  to="/sump-cleaning"
                  className="block p-3 hover:bg-blue-50 rounded-xl transition-colors mt-2 group/item"
                  onClick={() => {
                    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                    setShowDropdown(false);
                  }}
                >
                  <p className="font-bold text-slate-900">Sump Cleaning</p>
                  <p className="text-xs text-slate-500">Underground water storage cleaning</p>
                </Link>
                <Link
                  to="/combo-cleaning"
                  className="block p-3 hover:bg-amber-50 rounded-xl transition-colors mt-2 group/item border border-transparent hover:border-amber-200"
                  onClick={() => {
                    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                    setShowDropdown(false);
                  }}
                >
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-slate-900">Sump & Tank (Combo)</p>
                    <span className="text-[10px] bg-amber-500 text-white px-2 py-0.5 rounded-full font-bold">15% OFF</span>
                  </div>
                  <p className="text-xs text-slate-500">Complete home water hygiene solution</p>
                </Link>
              </div>
            )}
          </div>



          <Link to="/about" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">About Us</Link>


          <Link to="/contact" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">Contact Us</Link>

          <a
            href="tel:+918123432009"

            className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-600/20 hover:scale-105 transition-transform"
          >
            Call: +91 8123432009
          </a>
        </div>


        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-slate-900 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[90vh] opacity-100 visible shadow-2xl' : 'max-h-0 opacity-0 invisible'
        }`}>
        <div className="p-8 space-y-8">
          <nav className="flex flex-col gap-6">
            <Link to="/" className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Home</Link>

            <div className="space-y-4">
              <p className="text-[11px] font-black uppercase tracking-widest text-slate-400">Our Services</p>
              <div className="flex flex-col gap-4 pl-1">
                <Link to="/tank-cleaning" className="text-base font-semibold text-slate-700 hover:text-blue-600" onClick={toggleMenu}>Tank Cleaning</Link>
                <Link to="/sump-cleaning" className="text-base font-semibold text-slate-700 hover:text-blue-600" onClick={toggleMenu}>Sump Cleaning</Link>
                <Link to="/combo-cleaning" className="group flex items-center justify-between p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50" onClick={toggleMenu}>
                  <span className="font-bold text-blue-700">Sump & Tank Combo</span>
                  <span className="text-[10px] bg-blue-600 text-white px-2.5 py-1 rounded-full font-black uppercase">15% OFF</span>
                </Link>
              </div>
            </div>

            <Link to="/about" className="text-lg font-bold text-slate-900 hover:text-blue-600" onClick={toggleMenu}>About Us</Link>
            <Link to="/contact" className="text-lg font-bold text-slate-900 hover:text-blue-600" onClick={toggleMenu}>Contact Us</Link>
          </nav>

          <div className="pt-4 border-t border-slate-100">
            <a
              href="tel:+918123432009"
              className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all"
            >
              <svg className="w-5 h-5 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5l1.5 1.5M10.5 7.5L9 6m6 0l-1.5 1.5m3.75 3a.75.75 0 011.5 0v3a.75.75 0 01-1.5 0v-3zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              BOOK NOW: +91 8123432009
            </a>
            <p className="text-center text-[10px] font-bold text-slate-400 mt-4 uppercase tracking-widest">Available 24/7 for Emergencies</p>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
