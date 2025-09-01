import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:priyanshu@example.com',
      color: 'from-red-400 to-red-600',
      handle: 'priyanshu@example.com',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/priyanshu-karn',
      color: 'from-blue-400 to-blue-600',
      handle: '/in/priyanshu-karn',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/priyanshu-karn',
      color: 'from-gray-400 to-gray-600',
      handle: '@priyanshu-karn',
    },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
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
            Contact
          </h1>
          <p className="text-xl text-gray-400">
            Let's create something magical together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold font-orbitron text-white mb-8">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 bg-gray-700/50 border ${
                    errors.name ? 'border-red-500/50' : 'border-gray-600/50'
                  } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
                  placeholder="Your Name"
                />
                <motion.label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    formData.name
                      ? 'text-blue-300 text-sm -top-2 bg-gray-800 px-2'
                      : 'text-gray-400 top-4'
                  }`}
                >
                  {!formData.name && 'Your Name'}
                </motion.label>
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="relative">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 bg-gray-700/50 border ${
                    errors.email ? 'border-red-500/50' : 'border-gray-600/50'
                  } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
                  placeholder="Your Email"
                />
                <motion.label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    formData.email
                      ? 'text-blue-300 text-sm -top-2 bg-gray-800 px-2'
                      : 'text-gray-400 top-4'
                  }`}
                >
                  {!formData.email && 'Your Email'}
                </motion.label>
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="relative">
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className={`w-full px-4 py-4 bg-gray-700/50 border ${
                    errors.message ? 'border-red-500/50' : 'border-gray-600/50'
                  } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none`}
                  placeholder="Your Message"
                />
                <motion.label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    formData.message
                      ? 'text-blue-300 text-sm -top-2 bg-gray-800 px-2'
                      : 'text-gray-400 top-4'
                  }`}
                >
                  {!formData.message && 'Your Message'}
                </motion.label>
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="flex items-center justify-center space-x-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl p-8">
              <h2 className="text-2xl font-bold font-orbitron text-white mb-8">Connect With Me</h2>
              
              <div className="space-y-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="group flex items-center space-x-4 p-4 bg-gray-700/30 border border-gray-600/30 rounded-lg hover:border-gray-500/50 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${link.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <link.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                        {link.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{link.handle}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl p-8">
              <h3 className="text-xl font-bold font-orbitron text-white mb-4">Let's Collaborate</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm always excited to work on innovative data science projects, contribute to open-source initiatives, 
                or discuss the latest trends in machine learning and AI.
              </p>
              <p className="text-blue-300 font-semibold">
                Response time: Usually within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;