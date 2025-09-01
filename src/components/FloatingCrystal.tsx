import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const FloatingCrystal = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 10, 0],
        }}
        transition={{
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Crystal Core */}
        <div className="w-32 h-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute inset-4 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-lg" />
          
          {/* Crystal Facets */}
          <motion.div
            className="absolute inset-0 border-2 border-blue-400/40 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute inset-2 border border-purple-400/30 rounded-full"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${50 + 60 * Math.cos((i * 30 * Math.PI) / 180)}px`,
              top: `${50 + 60 * Math.sin((i * 30 * Math.PI) / 180)}px`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default FloatingCrystal;