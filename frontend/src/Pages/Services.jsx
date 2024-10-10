import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Services = () => {
  const services = [
    {
      title: '🧠 Machine Learning',
      description: 'Harness the power of data with our machine learning solutions tailored to your business needs.'
    },
    {
      title: '💻 Programming',
      description: 'Expert programming services in various languages to bring your ideas to life.'
    },
    {
      title: '🌐 Web App Development',
      description: 'Build robust web applications that enhance user engagement and business efficiency.'
    },
    {
      title: '📱 Mobile App Development',
      description: 'Create seamless mobile experiences for both Android and iOS platforms.'
    },
    {
      title: '☁️ Cloud Solutions',
      description: 'Leverage cloud technology to scale your business and improve operational efficiency.'
    },
    {
      title: '💼 Consulting',
      description: 'Professional consulting services to guide your technology strategy and implementation.'
    }
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4"
              initial={{ opacity: 0, translateY: 20 }} // Initial state
              animate={{ opacity: 1, translateY: 0 }} // Animation state
              exit={{ opacity: 0, translateY: 20 }} // Exit animation
              transition={{ duration: 0.5 }} // Duration of the animation
            >
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
