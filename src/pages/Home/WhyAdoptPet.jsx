import SectionTitle from '@/components/SectionTitle/SectionTitle';
import React from 'react';
import { motion } from "framer-motion";
import { FaCheckCircle, FaGlobe, FaHeart } from 'react-icons/fa';

const WhyAdoptPet = () => {
    return (
        <div className="mb-10 py-16 px-6">
        <div className=" mx-auto max-w-5xl text-center">
          <motion.div
            className="text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle
            title={" Why Adopt?"}
            subTitle={"  Adopting a pet not only changes their life but enriches yours too. Discover the benefits of giving a loving home to a pet in need."}
            ></SectionTitle>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <FaHeart className="text-red-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Save Lives</h3>
              <p className="text-gray-600">
                By adopting, you give a homeless pet a second chance at life.
              </p>
            </motion.div>
  
            <motion.div
              className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <FaCheckCircle className="text-green-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Health Benefits</h3>
              <p className="text-gray-600">
                Pets reduce stress, boost happiness, and improve well-being.
              </p>
            </motion.div>
  
            <motion.div
              className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <FaGlobe className="text-blue-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Support Community</h3>
              <p className="text-gray-600">
                Help shelters and communities by adopting instead of buying.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    );
};

export default WhyAdoptPet;