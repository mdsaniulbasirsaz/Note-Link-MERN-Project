import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <>
        <Navbar/>
        <div className="max-w-4xl mx-auto p-6 mb-10">
        <motion.h1
            className="text-4xl font-bold text-center mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            About Us 🌟
        </motion.h1>
        <motion.p
            className="text-lg text-gray-700 mb-4"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            Welcome to Link Note (Note Sharing), your go-to platform for sharing ideas and notes with friends and colleagues! ✍️
        </motion.p>
        <motion.p
            className="text-lg text-gray-700 mb-4"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            Our mission is to make note-sharing easy and efficient for everyone. 🚀 Whether you're a student, a professional, or just someone who loves to jot down thoughts, we’ve got you covered!
        </motion.p>
        <motion.p
            className="text-lg text-gray-700 mb-4"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
        >
            With our user-friendly interface, you can quickly create, share, and collaborate on notes. 🤝
        </motion.p>
        <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
        >
            <a
            href="/contact"
            className="bg-blue-500 text-white py-2 px-4 rounded transition-transform transform hover:scale-105 hover:bg-blue-600"
            >
            Contact Us 📩
            </a>
        </motion.div>
        </div>
        <Footer/>
    </>
  );
};

export default About;
