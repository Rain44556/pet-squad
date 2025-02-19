import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { FaRegComments, FaRegCalendarAlt, FaUser } from "react-icons/fa";
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { motion } from "framer-motion";
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Blog = () => {
    const blogPosts = [{
        title: "Preparing Your Home for a New Pet",
        description: "Learn how to make your home safe and comfortable before bringing in a new furry friend.",
        image: "https://i.ibb.co.com/Jjb2PcBz/81-6-Q-Ps-SDL-AC-UF1000-1000-QL80.jpg",
        author: "Admin",
        date: "January 15, 2025",
        comments: 5,
      },
      {
        title: "Best Foods for Your Adopted Pet",
        description: "A guide to choosing the right diet for your newly adopted cat or dog.",
        image: "https://i.ibb.co.com/tTGWvMW9/Dog-Food-in-Bowl-and-Dog-Biscuits.jpg",
        author: "Sarah P.",
        date: "February 5, 2025",
        comments: 2,
      },
    ];
    return (
        <motion.div 
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        className="max-w-6xl mx-auto p-6 mb-10">
        <SectionTitle title={"Blogs & News"} subTitle={"Tips and Advice"}></SectionTitle>
        <motion.div
        className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <motion.Card
            key={index} 
            className="hover:bg-yellow-50 overflow-hidden shadow-lg rounded-lg">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <CardContent className="p-4">
                <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
                  <span className="flex items-center gap-1">
                    <FaUser className="text-colorSecondary" /> {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaRegCalendarAlt className="text-colorSecondary" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaRegComments className="text-colorSecondary" /> {post.comments} comments
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-colorPrimary">{post.title}</h3>
                <p className="text-gray-400 mt-2">{post.description}</p>
                <Link to="#" className="text-colorPrimary underline flex gap-3 font-semibold mt-4 block">
                  Read More <FaArrowRight className='mt-1'></FaArrowRight>
                </Link>
              </CardContent>
            </motion.Card>
          ))}
        </motion.div>
      </motion.div>
    );
};

export default Blog;