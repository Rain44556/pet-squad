import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const petData = [
  {
    "id": 1,
    "category": "Cat",
    "name": "Whiskers",
    "age": 3,
    "location": "Chicago, USA",
    "image": "https://i.ibb.co.com/JYFGbKD/cat.png"
  },
    {
    "id": 2,
    "category": "Dog",
    "name": "Buddy",
    "age": 2,
    "location": "New York, USA",
    "image": "https://i.ibb.co.com/JZW1JBT/dog.png"
  },
  {
    "id": 5,
    "category": "Bird",
    "name": "Sunny",
    "age": 1,
    "location": "Austin, USA",
    "image": "https://i.ibb.co.com/23cGw6HQ/bird.png"
  },
  {
    "id": 3,
    "category": "Rabbit",
    "id": "rabbit1",
    "name": "Snowball",
    "age": 1,
    "location": "San Francisco, USA",
    "image": "https://i.ibb.co.com/B5qW83W2/rabbit.png"
  },
  {
    "id": 4,
    "category": "Fish",
    "name": "Goldie",
    "age": 1,
    "location": "Miami, USA",
    "image": "https://i.ibb.co.com/q3Jnkb0y/david-clode-l-Qd-JMZX7-PU-unsplash-removebg-preview.png"
  },
  {
    "id": 6,
    "category": "Hamster",
    "name": "Nibbles",
    "age": 1,
    "location": "Boston, USA",
    "image": "https://i.ibb.co.com/wZyQh8h3/hamster.png"
  },
]


const PetsCategory = () => {
  return (
    <div className="lg:px-20 px-4">
      <SectionTitle
        subTitle={"Category"}
        title={"Find Out Which Furry Friend Fits You Best!"}
      ></SectionTitle>
      <Swiper
      className=""
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2,},
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {petData.map((category) =>

          <SwiperSlide key={category.id}>
            <motion.div
              className="shadow-lg hover:shadow-xl transition-shadow rounded-lg p-4"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)"
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full h-72 overflow-hidden rounded-t-lg">
                <motion.img
                  src={category.image}
                  alt={category.category}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }} 
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="p-4 text-center">
              <p className="mt-2 font-headingFont font-extrabold text-gray-500 hover:text-colorSecondary rounded-lg">
                  {category.category}
                </p>
                <p className=" px-4 py-2 text-xl font-semibold text-colorPrimary hover:text-colorSecondary rounded-lg">
                  {category.name}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        )
        }
      </Swiper>
    </div>
  );
};

export default PetsCategory;
