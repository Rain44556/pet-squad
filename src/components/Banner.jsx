import React from 'react';
import { motion } from "framer-motion"

const Banner = () => {
    return (
        <div
            className='relative flex items-center justify-center text-center py-16 px-6'
            style={{
                background: "linear-gradient(135deg, #827397 60%, #FFFFFF 100%)",
                color: "#fff"
            }}
        >
            <motion.div
                className='max-w-lg'
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.6 }}
            >
                <h1 className='text-5xl font-extrabold leading-tight'>Welcome to
                    <span className='text-yellow-300'>  Pet Squad</span></h1>
                <p className='text-lg text-gray-200'>Join us in our dedicated efforts to find loving homes for every pet in need. Adoption is not just a choice; it's the essential first step toward providing a brighter and happier future for our furry friends, ensuring they receive the love and care they deserve.</p>
                <motion.button
                    className='px-8 py-2 bg-yellow-300 text-gray-800 font-semibold rounded-full shadow-lg'
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1 }}
                >
                    Start Your Journey
                </motion.button>
            </motion.div>

            <motion.div
                className='w-56 h-56 absolute right-14 bottom-10 '
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.8 }}
            >
                <img src="https://i.ibb.co.com/zH1fmj0/banner2.jpg"
                    alt="pet"
                    className='w-full h-full object-cover rounded-full shadow-xl'
                />
            </motion.div>

            <motion.div
                className='w-56 h-56 absolute right-60 bottom-40 '
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.8 }}
            >
                <img src="https://i.ibb.co.com/9GynvHj/banner3.jpg"
                    alt="pet"
                    className='w-full h-full object-cover rounded-full shadow-xl'
                />
            </motion.div>

            <motion.div
                className='absolute left-10 top-10 w-96'
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 0.2 }}
                transition={{ duration: 1.2 }}
            >
                <img src="https://i.ibb.co.com/D9XT2YH/pets-3715733-640-removebg-preview-transformed.png"
                    alt="pet"
                    className="w-full h-full object-cover"
                />
            </motion.div>

        </div>
    );
};

export default Banner;
