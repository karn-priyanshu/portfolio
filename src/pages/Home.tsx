import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BarChart3, Brain, Microscope, ChevronDown } from 'lucide-react';
import TypeWriter from '../components/TypeWriter';
import FloatingCrystal from '../components/FloatingCrystal';

const Home = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);

  const projectCards = [
    {
      icon: BarChart3,
      title: 'Data Analyst Projects',
      description: 'From raw data to clear insights — dashboards, trends, and business intelligence.',
      route: '/skills',
      gradient: 'from-blue-500 to-cyan-500',
      glow: 'shadow-blue-500/20',
    },
    {
      icon: Brain,
      title: 'Machine Learning Projects',
      description: 'Training models that learn, predict, and surprise — one epoch at a time.',
      route: '/skills',
      gradient: 'from-purple-500 to-pink-500',
      glow: 'shadow-purple-500/20',
    },
    {
      icon: Microscope,
      title: 'Data Science Projects',
      description: 'Where statistics, code, and curiosity meet to uncover hidden patterns.',
      route: '/skills',
      gradient: 'from-emerald-500 to-teal-500',
      glow: 'shadow-emerald-500/20',
    },
  ];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <FloatingCrystal />
        
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <h1 className="text-6xl md:text-8xl font-bold font-orbitron mb-6 relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Priyanshu Karn
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent opacity-30 blur-sm"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Priyanshu Karn
              </motion.div>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl mb-6 text-gray-300"
          >
            <TypeWriter
              text="Algorithm Alchemist | Crafting coding potions with Python"
              speed={80}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed"
          >
            Transforming data into insights, models into magic, and ideas into intelligent systems.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            onClick={scrollToProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center space-x-2">
              <span>Explore My Digital Potions</span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
          </motion.button>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Digital Potions
            </h2>
            <p className="text-xl text-gray-400">
              Each project is a carefully crafted formula for solving real-world challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projectCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  rotateX: 5,
                }}
                onClick={() => navigate(card.route)}
                className={`group relative cursor-pointer bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-500 transform-gpu perspective-1000 ${card.glow} hover:shadow-2xl`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/20 rounded-2xl" />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${card.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold font-orbitron mb-4 text-white group-hover:text-blue-300 transition-colors">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {card.description}
                  </p>
                </div>

                <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <button
              onClick={() => navigate('/skills')}
              className="group relative px-8 py-4 border border-blue-500/30 rounded-full hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                View All Projects
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;