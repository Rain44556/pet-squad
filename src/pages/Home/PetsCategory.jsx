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
        "category": "Cats",
        "pets": [
          {
            "id": "cat1",
            "name": "Whiskers",
            "age": 3,
            "location": "Chicago, USA",
            "image": "/images/cat1.jpg"
          },
          {
            "id": "cat2",
            "name": "Mittens",
            "age": 1,
            "location": "Houston, USA",
            "image": "/images/cat2.jpg"
          }
        ]
      },
    {
      "id": 2,
      "category": "Dogs",
      "pets": [
        {
          "id": "dog1",
          "name": "Buddy",
          "age": 2,
          "location": "New York, USA",
          "image": "/images/dog1.jpg"
        },
        {
          "id": "dog2",
          "name": "Max",
          "age": 4,
          "location": "Los Angeles, USA",
          "image": "/images/dog2.jpg"
        }
      ]
    },
    {
      "id": 3,
      "category": "Rabbits",
      "pets": [
        {
          "id": "rabbit1",
          "name": "Snowball",
          "age": 1,
          "location": "San Francisco, USA",
          "image": "/images/rabbit1.jpg"
        },
        {
          "id": "rabbit2",
          "name": "Thumper",
          "age": 2,
          "location": "Seattle, USA",
          "image": "/images/rabbit2.jpg"
        }
      ]
    },
    {
      "id": 4,
      "category": "Fish",
      "pets": [
        {
          "id": "fish1",
          "name": "Goldie",
          "age": 1,
          "location": "Miami, USA",
          "image": "/images/fish1.jpg"
        },
        {
          "id": "fish2",
          "name": "Bubbles",
          "age": 2,
          "location": "San Diego, USA",
          "image": "/images/fish2.jpg"
        }
      ]
    },
    {
      "id": 5,
      "category": "Birds",
      "pets": [
        {
          "id": "bird1",
          "name": "Sunny",
          "age": 1,
          "location": "Austin, USA",
          "image": "/images/bird1.jpg"
        },
        {
          "id": "bird2",
          "name": "Chirpy",
          "age": 2,
          "location": "Denver, USA",
          "image": "/images/bird2.jpg"
        }
      ]
    },
    {
      "id": 6,
      "category": "Hamsters",
      "pets": [
        {
          "id": "hamster1",
          "name": "Nibbles",
          "age": 1,
          "location": "Boston, USA",
          "image": "/images/hamster1.jpg"
        },
        {
          "id": "hamster2",
          "name": "Peanut",
          "age": 2,
          "location": "Dallas, USA",
          "image": "/images/hamster2.jpg"
        }
      ]
    },
    {
      "id": 7,
      "category": "Turtles",
      "pets": [
        {
          "id": "turtle1",
          "name": "Shelly",
          "age": 5,
          "location": "Orlando, USA",
          "image": "/images/turtle1.jpg"
        },
        {
          "id": "turtle2",
          "name": "Speedy",
          "age": 3,
          "location": "Phoenix, USA",
          "image": "/images/turtle2.jpg"
        }
      ]
    }
  ]
  

const PetsCategory = () => {
  return (
    <div className="p-8">
        <SectionTitle
        subTitle={"Category"}
        title={"Find Out Which Furry Friend Fits You Best!"}
      ></SectionTitle>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {petData.map((category) =>

            <SwiperSlide key={category.id}>
              <motion.div 
              className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg p-4"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)"
              }}
              >  
                <div className="w-full h-40 overflow-hidden rounded-t-lg">
                  <motion.img
                    src={category.pets.image}
                    alt={category.category}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }} // Zoom-in effect on the image
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-4 text-center">
                    <p className="mt-2 px-4 py-2 font-headingFont text-xl font-extrabold text-yellow-300 hover:text-yellow-400  rounded-lg">
                      {category.category}
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
