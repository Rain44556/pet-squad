import React from 'react';
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaDog, FaHeart, FaHome, FaPaw, FaStethoscope } from 'react-icons/fa';


const AboutUs = () => {

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle
          title={"About Us"}
          subTitle={"We specialize in our Passion Caring for Pets & Sheltering"}
        />
      </motion.h2>

      <div className="grid grid-cols-2 gap-10">
        <div className="py-20 flex flex-col justify-center">

        <motion.div 
            className="flex space-x-4 bg-purple-50 py-4 px-2 mb-6 text-colorPrimary font-medium"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.1 }} 
          >
            <div className="flex items-center gap-2">
              <FaPaw className="text-3xl text-colorSecondary" />
              <span>Helping Homeless Pets</span>
            </div>
            <div className="flex items-center gap-2">
              <FaStethoscope className="text-3xl text-purple-500" />
              <span>Ensuring Pet Welfare</span>
            </div>
            <div className="flex items-center gap-2">
              <FaHome className="text-3xl text-green-500" />
              <span>Finding Forever Homes</span>
            </div>
          </motion.div>

          <motion.p
            className="text-xl mb-8 leading-relaxed text-gray-500 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            Our mission is to connect loving families with pets in need of a home. This
            website was created to make the adoption process simple, transparent, and
            accessible for everyone. We believe every pet deserves a chance at a better
            life, and every family deserves the joy of a furry companion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/about"
              className=" text-colorSecondary rounded-full flex items-center space-x-2 transition duration-300"
            >
              <span>Read More</span>
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>

     
        <div>
          <motion.img
            src="https://i.ibb.co.com/bMnJ5f3m/2150492139.jpg"
            alt="Happy pets and families"
            className="w-full mt-10 rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7}}
            whileHover={{ scale: 0.8}}
          />
        </div>
      </div>
    </div>

  );
};


export default AboutUs;