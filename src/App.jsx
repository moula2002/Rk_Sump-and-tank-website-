import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SumpCleaning from './pages/SumpCleaning';
import TankCleaning from './pages/TankCleaning';
import ComboCleaning from './pages/ComboCleaning';
import Contact from './pages/Contact';
import AboutPage from './pages/AboutPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsappFloatingIcon from './components/WhatsappFloatingIcon';
import CallFloatingButton from './components/CallFloatingButton';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sump-cleaning" element={<SumpCleaning />} />
            <Route path="/tank-cleaning" element={<TankCleaning />} />
            <Route path="/combo-cleaning" element={<ComboCleaning />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>




        <Footer />
        <CallFloatingButton />
        <WhatsappFloatingIcon />
      </div>
    </Router>
  );
}



export default App;