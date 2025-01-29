import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useState } from 'react';
import { Accordion, AccordionItem } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I adopt a pet?",
      answer:
        "To adopt a pet, browse our listings, choose a pet, and submit an adoption application. Our team will review it and guide you through the process.",
    },
    {
      question: "What are the adoption fees?",
      answer:
        "Adoption fees vary based on the pet's age, breed, and care requirements. Fees cover vaccinations, spaying/neutering, and other medical needs.",
    },
    {
      question: "Do I need a home check before adoption?",
      answer:
        "Yes, a home check ensures that the environment is safe and suitable for the pet. This step helps us match the right pet with the right home.",
    },
    {
      question: "Can I return a pet if it doesn’t work out?",
      answer:
        "Yes, we offer a return policy within a specified time frame. We always prioritize the pet’s well-being and will assist in rehoming if needed.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  return (
<div>
      <div className="relative bg-cover bg-center py-16 px-6 my-10"
      style={{ backgroundImage: "url('https://i.ibb.co.com/5xzGm3Tk/2151850076.jpg')" }}>
      <div className="text-center mb-10">
        <motion.h2
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your Guide to Pet Adoption
        </motion.h2>
      </div>

      <Accordion type="single" collapsible className="max-w-3xl mx-auto bg-slate-300 bg-opacity-30 p-6 rounded-xl shadow-lg">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <AccordionItem
              key={index}
              value={`${index}`}
              className="border-b border-gray-300 py-4 cursor-pointer"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-lg font-semibold text-colorSecondary">{faq.question}</h3>
                {isOpen ? (
                  <FaMinus className="text-colorSecondary" />) : (<FaPlus className="text-colorSecondary" />)}
              </div>

              {isOpen && (
                <motion.p
                  className="text-white mt-2"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </AccordionItem>
          );
        })}
      </Accordion>

      <motion.button
        className="fixed bottom-5 right-5 bg-colorSecondary text-colorPrimary p-3 rounded-full shadow-lg hover:bg-colorSecondary transition duration-300"
        whileHover={{ scale: 1.1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ⬆
      </motion.button>
    </div>
</div>
  );
};

export default FAQ;