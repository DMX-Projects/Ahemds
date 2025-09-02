import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { SearchProvider } from './contexts/SearchContext';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import SearchModal from './components/Search/SearchModal';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Partnerships from './pages/Partnerships/Partnerships';
import Solutions from './pages/Solutions/Solutions';
import CaseStudies from './pages/CaseStudies/CaseStudies';
import Contact from './pages/Contact/Contact';
import './styles/globals.css';

function App() {
  return (
    <ThemeProvider>
      <SearchProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
            <Navigation />
            <SearchModal />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/partnerships" element={<Partnerships />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
            <Footer />
          </div>
        </Router>
      </SearchProvider>
    </ThemeProvider>
  );
}

export default App;