import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Phone as Python, Database, BarChart3, Brain, TrendingUp } from 'lucide-react';

const Skills = () => {
  const skillSections = [
    {
      id: 'data-analysis',
      title: 'Data Analysis',
      subtitle: 'I decode data to reveal stories, trends, and actionable insights.',
      icon: BarChart3,
      color: 'blue',
      tools: ['Python (Pandas, Matplotlib, Seaborn)', 'SQL', 'Excel', 'Power BI', 'Tableau'],
      projects: [
        {
          title: 'Customer Churn Dashboard',
          description: 'Interactive dashboard analyzing customer behavior patterns and churn prediction.',
          tech: ['Python', 'Pandas', 'Plotly', 'SQL'],
          github: '#',
          demo: '#',
        },
        {
          title: 'Sales Performance Analysis',
          description: 'Comprehensive sales analytics with trend forecasting and KPI tracking.',
          tech: ['Power BI', 'SQL', 'Excel'],
          github: '#',
          demo: '#',
        },
      ],
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      subtitle: 'Building models that predict, classify, and evolve with data.',
      icon: Brain,
      color: 'purple',
      tools: ['Scikit-learn', 'TensorFlow', 'XGBoost', 'NLP', 'Model Evaluation'],
      projects: [
        {
          title: 'Fake News Classifier',
          description: 'NLP model to detect misinformation with 94% accuracy using transformer architecture.',
          tech: ['TensorFlow', 'BERT', 'Python', 'NLP'],
          github: '#',
          demo: '#',
        },
        {
          title: 'House Price Predictor',
          description: 'Regression model predicting real estate prices with advanced feature engineering.',
          tech: ['Scikit-learn', 'XGBoost', 'Pandas'],
          github: '#',
          demo: '#',
        },
      ],
    },
    {
      id: 'data-science',
      title: 'Data Science',
      subtitle: 'Combining math, code, and domain logic to solve complex problems.',
      icon: TrendingUp,
      color: 'emerald',
      tools: ['Statistical Analysis', 'Hypothesis Testing', 'EDA', 'Jupyter', 'R'],
      projects: [
        {
          title: 'Titanic Survival Analysis',
          description: 'Statistical analysis and survival prediction with comprehensive EDA.',
          tech: ['Python', 'Jupyter', 'Statistics', 'Seaborn'],
          github: '#',
          demo: '#',
        },
        {
          title: 'Air Quality Insights',
          description: 'Environmental data analysis revealing pollution patterns and health impacts.',
          tech: ['R', 'Python', 'Time Series', 'Visualization'],
          github: '#',
          demo: '#',
        },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        gradient: 'from-blue-500 to-cyan-500',
        border: 'border-blue-500/30',
        text: 'text-blue-400',
        glow: 'shadow-blue-500/20',
      },
      purple: {
        gradient: 'from-purple-500 to-pink-500',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        glow: 'shadow-purple-500/20',
      },
      emerald: {
        gradient: 'from-emerald-500 to-teal-500',
        border: 'border-emerald-500/30',
        text: 'text-emerald-400',
        glow: 'shadow-emerald-500/20',
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen pt-20 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-orbitron mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Projects
          </h1>
          <p className="text-xl text-gray-400">
            A showcase of my technical alchemy and project wizardry
          </p>
        </motion.div>

        {skillSections.map((section, sectionIndex) => {
          const colorClasses = getColorClasses(section.color);
          
          return (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: sectionIndex * 0.2 }}
              className="mb-20"
            >
              <div className="flex items-center mb-12">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${colorClasses.gradient} flex items-center justify-center mr-6`}>
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold font-orbitron text-white mb-2">
                    {section.title}
                  </h2>
                  <p className="text-gray-400 text-lg">
                    {section.subtitle}
                  </p>
                </div>
              </div>

              {/* Tools */}
              <div className="mb-12">
                <h3 className={`text-xl font-semibold mb-4 ${colorClasses.text}`}>
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {section.tools.map((tool, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className={`px-4 py-2 bg-gray-800/50 border ${colorClasses.border} rounded-full text-sm text-gray-300 hover:text-white transition-colors`}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="grid md:grid-cols-2 gap-8">
                {section.projects.map((project, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className={`group bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 hover:border-gray-600/50 transition-all duration-300 hover:shadow-xl ${colorClasses.glow}`}
                  >
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.demo}
                        className={`flex items-center space-x-2 text-gray-400 hover:${colorClasses.text} transition-colors`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Demo</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;