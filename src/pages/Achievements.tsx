import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Star, GitBranch, Award, TrendingUp } from 'lucide-react';

const Achievements = () => {
  const [counters, setCounters] = useState({
    leetcodeSolved: 0,
    leetcodeRating: 0,
    kaggleRank: 0,
    githubRepos: 0,
    githubStars: 0,
    competitions: 0,
  });

  const targetValues = {
    leetcodeSolved: 150,
    leetcodeRating: 1800,
    kaggleRank: 15,
    githubRepos: 50,
    githubStars: 200,
    competitions: 10,
  };

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);

        setCounters({
          leetcodeSolved: Math.floor(targetValues.leetcodeSolved * easeOutProgress),
          leetcodeRating: Math.floor(targetValues.leetcodeRating * easeOutProgress),
          kaggleRank: Math.floor(targetValues.kaggleRank * easeOutProgress),
          githubRepos: Math.floor(targetValues.githubRepos * easeOutProgress),
          githubStars: Math.floor(targetValues.githubStars * easeOutProgress),
          competitions: Math.floor(targetValues.competitions * easeOutProgress),
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounters(targetValues);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  const achievements = [
    {
      platform: 'LeetCode',
      icon: Target,
      color: 'from-orange-400 to-red-500',
      stats: [
        { label: 'Problems Solved', value: `${counters.leetcodeSolved}+`, suffix: '' },
        { label: 'Rating', value: `${counters.leetcodeRating}+`, suffix: '' },
        { label: 'Ranking', value: 'Top', suffix: `${counters.kaggleRank}%` },
      ],
      description: 'Consistent problem-solving and algorithmic thinking',
    },
    {
      platform: 'Kaggle',
      icon: Award,
      color: 'from-blue-400 to-cyan-500',
      stats: [
        { label: 'Expert Rank', value: 'Expert', suffix: '' },
        { label: 'Medals', value: '5+', suffix: '' },
        { label: 'Competitions', value: `${counters.competitions}+`, suffix: '' },
      ],
      description: 'Machine learning competitions and data science challenges',
    },
    {
      platform: 'GitHub',
      icon: GitBranch,
      color: 'from-purple-400 to-pink-500',
      stats: [
        { label: 'Repositories', value: `${counters.githubRepos}+`, suffix: '' },
        { label: 'Stars Earned', value: `${counters.githubStars}+`, suffix: '' },
        { label: 'Status', value: 'Active', suffix: 'Open Source' },
      ],
      description: 'Contributing to the developer community',
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-orbitron mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Achievements
          </h1>
          <p className="text-2xl text-gray-400 font-orbitron">
            Code. Compete. Conquer.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
              }}
              className="group relative bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-500 transform-gpu perspective-1000"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/20 rounded-2xl" />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold font-orbitron mb-4 text-white group-hover:text-blue-300 transition-colors">
                  {achievement.platform}
                </h3>
                
                <div className="space-y-4 mb-6">
                  {achievement.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">{stat.label}</span>
                      <span className="text-white font-bold">
                        {stat.value} {stat.suffix && <span className="text-gray-400 text-sm">{stat.suffix}</span>}
                      </span>
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl p-8"
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mr-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold font-orbitron text-white">Additional Honors</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-emerald-300 mb-3">Academic Excellence</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3" />
                  Dean's List for 3 consecutive semesters
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3" />
                  Best Data Science Project Award 2024
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3" />
                  Research paper published in IEEE conference
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-300 mb-3">Community Impact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                  Tech lead for university coding club
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                  Volunteer data analyst for NGO projects
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                  Workshop instructor for Python basics
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;