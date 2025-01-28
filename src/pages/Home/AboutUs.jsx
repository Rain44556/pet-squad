import React from 'react';
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/SectionTitle/SectionTitle';


const AboutUs = () => {

      return (
        <section className="bg-gradient-to-r from-purple-100 to-blue-200 py-16 px-6 text-center">
          <div className="container mx-auto max-w-5xl">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
              title={"About Us"}></SectionTitle>
            </motion.h2>
            <motion.p
              className="text-xl font-headingFont mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
              <Button className="px-8 py-4 text-md font-semibold bg-colorPrimary rounded-3xl shadow-xl">
                Learn More About Us
              </Button>
            </motion.div>
            <motion.img
              src="/images/about_us_banner.jpg"
              alt="Happy pets and families"
              className="w-full mt-10 rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            />
          </div>
        </section>
      );
    };


export default AboutUs;