import React from 'react';
import { motion } from "framer-motion";

const NotAdoptedPetListingCards = ({pet}) => {
    return (
        <motion.div
          className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto transition-transform transform hover:scale-105 hover:shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={pet.image}
            alt={pet.name}
            className="w-full h-56 object-cover"
          />
          <div className="p-5 text-center">
            <h2 className="text-xl font-bold text-colorPrimary">{pet.name}</h2>
            <p className="text-colorSecondary">Age: {pet.age}</p>
            <p className="text-colorSecondary">Location: {pet.location}</p>
            <button className="mt-4 bg-yellow-400 text-sm py-2 px-4 rounded-lg shadow-md">
              View Details
            </button>
          </div>
        </motion.div>
      );
};

export default NotAdoptedPetListingCards;