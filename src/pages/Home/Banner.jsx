import React from 'react';
import { motion } from "framer-motion"
import { MdPets } from "react-icons/md";

const Banner = () => {
    return (
        <div
            className='h-[600px] relative flex items-center justify-center text-center lg:py-16 px-6'
            style={{
                background: "linear-gradient(135deg, #827397 60%, #FFFFFF 100%)",
                color: "#fff"
            }}
        >
            <motion.div
                className='max-w-3xl'
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.6 }}
            >
                <h1 className='lg:text-5xl text-3xl font-extrabold leading-tight pt-8'>Welcome Home to
                    <span className='text-yellow-300 flex gap-2 justify-center lg:text-4xl'>  Pet Squad <MdPets className='text-purple-200'/></span></h1>
                <p className='text-lg  text-gray-200 py-6'>Join us in our dedicated efforts to find loving homes for every pet in need. Adoption is not just a choice; it's the essential first step toward providing a brighter and happier future for our furry friends, ensuring they receive the love and care they deserve.</p>
                <motion.button
                    className='px-8 py-2 bg-yellow-300 text-gray-800 font-semibold rounded-full shadow-lg'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1 }}
                >
                    Start Your Journey
                </motion.button>
            </motion.div>

            <motion.div
                className='hidden lg:block w-40 h-40 absolute right-5 bottom-28'
                // initial={{ x: 100, opacity: 0 }}
                whileHover={{scale: 1.1}}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
            >
                <img src="https://i.ibb.co.com/zH1fmj0/banner2.jpg"
                    alt="pet"
                    className='w-full h-full object-cover rounded-full shadow-xl'
                />
            </motion.div>

            <motion.div
                className='hidden lg:block w-40 h-40 absolute right-24 bottom-60 '
                // initial={{ y: 100, opacity: 0 }}
                whileHover={{scale: 1.1}}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "loop", delay: 0.7 }}
            >
                <img src="https://i.ibb.co.com/9GynvHj/banner3.jpg"
                    alt="pet"
                    className='w-full h-full object-cover rounded-full shadow-xl'
                />
            </motion.div>

            <motion.div
                className='absolute md:left-0 top-0 lg:pr-14 lg:w-1/3 w-1/2'
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 0.7 }}
                transition={{ duration: 1.2 }}
            >
                <img src="https://i.ibb.co.com/D9XT2YH/pets-3715733-640-removebg-preview-transformed.png"
                    alt="pet"
                    className="w-full h-full object-cover rounded-full shadow-md"
                />
            </motion.div>

        </div>
    );
};

export default Banner;
