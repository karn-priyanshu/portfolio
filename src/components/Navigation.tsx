import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/skills', label: 'Skills' },
    { path: '/resume', label: 'Resume' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-lg border-b border-blue-500/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
            >
              <Sparkles className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-xl font-bold font-orbitron bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Algorithm Alchemist
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-blue-500/10 border border-blue-500/30 rounded-lg"
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'text-gray-300 hover:bg-gray-800/50 hover:text-blue-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;