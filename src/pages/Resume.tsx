import React from 'react';
import { motion } from 'framer-motion';
import { Download, GraduationCap, Award, Code, Database, BarChart3, Brain, Calendar } from 'lucide-react';

const Resume = () => {
  const skills = [
    { name: 'Python', level: 90, icon: Code, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Machine Learning', level: 85, icon: Brain, color: 'from-purple-400 to-purple-600' },
    { name: 'Data Analysis', level: 88, icon: BarChart3, color: 'from-blue-400 to-blue-600' },
    { name: 'SQL', level: 82, icon: Database, color: 'from-green-400 to-green-600' },
    { name: 'Data Visualization', level: 80, icon: BarChart3, color: 'from-pink-400 to-pink-600' },
  ];

  const certifications = [
    {
      title: 'IBM Data Science Professional Certificate',
      issuer: 'IBM',
      date: '2024',
      skills: ['Data Science', 'Machine Learning', 'Python'],
    },
    {
      title: 'Google Analytics Certified',
      issuer: 'Google',
      date: '2023',
      skills: ['Analytics', 'Business Intelligence'],
    },
    {
      title: 'Microsoft Azure Data Fundamentals',
      issuer: 'Microsoft',
      date: '2023',
      skills: ['Cloud Computing', 'Data Engineering'],
    },
  ];

  const education = {
    degree: 'B.Tech Computer Science',
    institution: 'University of Technology',
    year: '2025 (Expected)',
    gpa: '8.5/10',
  };

  return (
    <div className="min-h-screen pt-20 pb-12 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-orbitron mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Resume
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            My journey through the realms of data and algorithms
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            <span className="flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
          </motion.button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold font-orbitron text-white">Education</h2>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-300">{education.degree}</h3>
                <p className="text-gray-400">{education.institution}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {education.year}
                  </span>
                  <span>GPA: {education.gpa}</span>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold font-orbitron text-white">Certifications</h2>
              </div>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="border-l-2 border-purple-500/30 pl-4 hover:border-purple-400/50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
                    <p className="text-purple-300 text-sm mb-2">{cert.issuer} • {cert.date}</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded text-xs text-purple-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold font-orbitron text-white mb-8">Technical Skills</h2>
            
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                        <skill.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  
                  <div className="relative h-3 bg-gray-700/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Featured Projects Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold font-orbitron text-white mb-6">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-300">Academic Excellence</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Led data science research project on predictive analytics</li>
                <li>• Published paper on machine learning optimization techniques</li>
                <li>• Mentored junior students in Python and data analysis</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-purple-300">Industry Impact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Freelance data analysis for local businesses</li>
                <li>• Open-source contributions to ML libraries</li>
                <li>• Competition winnings in data science hackathons</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;