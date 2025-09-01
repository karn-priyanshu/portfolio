import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Beaker, Atom } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentIcon, setCurrentIcon] = useState(0);

  const icons = [Sparkles, Beaker, Atom];
  const phrases = [
    'Brewing digital potions...',
    'Mixing algorithms...',
    'Enchanting data...',
    'Summoning insights...',
  ];

  useEffect(() => {
    const duration = 3000;
    const steps = 100;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const newProgress = (currentStep / steps) * 100;
      setProgress(newProgress);

      // Change icon every 25%
      if (currentStep % 25 === 0) {
        setCurrentIcon(prev => (prev + 1) % icons.length);
      }

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onComplete]);

  const CurrentIcon = icons[currentIcon];
  const currentPhrase = phrases[Math.floor((progress / 100) * phrases.length)] || phrases[0];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center"
      >
        <div className="text-center">
          {/* Animated Icon */}
          <motion.div
            key={currentIcon}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative"
          >
            <div className="w-24 h-24 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse" />
              <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                <CurrentIcon className="w-10 h-10 text-blue-400" />
              </div>
            </div>
            
            {/* Orbiting particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-purple-400 rounded-full"
                style={{
                  left: `${50 + 40 * Math.cos((i * 60 * Math.PI) / 180)}px`,
                  top: `${50 + 40 * Math.sin((i * 60 * Math.PI) / 180)}px`,
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.1,
                }}
              />
            ))}
          </motion.div>

          {/* Loading Text */}
          <motion.h2
            key={currentPhrase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-2xl font-orbitron text-white mb-8"
          >
            {currentPhrase}
          </motion.h2>

          {/* Progress Bar */}
          <div className="w-80 mx-auto">
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
              />
            </div>
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-gray-400 text-sm mt-4"
            >
              {Math.round(progress)}%
            </motion.p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;