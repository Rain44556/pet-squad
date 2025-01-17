import React from 'react';
import { LuCopyright } from "react-icons/lu";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
      <div className="mx-auto bg-[#534764] text-gray-100 py-10 px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
          <div>
            <h2 className="text-2xl font-bold text-yellow-400">Pet Squad</h2>
            <p className="mt-2 text-gray-300 max-w-sm">
              Bringing pets and their future families together with love and care.
            </p>
            <h2 className="text-2xl font-bold text-yellow-400 pt-4">About Us</h2>
            <p className="mt-2 text-gray-300 max-w-sm">
            We believe that every pet deserves a loving home and every pet owner deserves a loyal companion. Our mission is to connect furry friends with their forever families, creating bonds that last a lifetime!
            </p>

            <div className="flex space-x-4 mt-4">
              <Link to="https://facebook.com" className="hover:text-yellow-400">
              <FaFacebook />
              </Link>
              <Link to="https://twitter.com" className="hover:text-yellow-400">
              <FaXTwitter />
              </Link>
              <Link to="https://instagram.com" className="hover:text-yellow-400">
              <FaInstagramSquare />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-yellow-300">Links</h3>
            <ul className="mt-4 space-y-2">
              
              <li>
                <Link to="/peListing" className="hover:text-yellow-400">
                  Pet Listing
                </Link>
              </li>
              <li>
                <Link to="/donationCampaigns" className="hover:text-yellow-400">
                  Donation Campaigns
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-yellow-300 flex">Contact Info</h3>
            <p className="mt-2 text-gray-300 flex gap-2">
            <FaHome className='mt-1'/> Chittagong, Bangladesh
            </p>
            <p className="mt-2 text-gray-300 flex gap-2">
            <FaPhoneAlt className='mt-1'/>  1234567890
            </p>
            <p className="mt-2 text-gray-300 flex gap-2">
            <IoMdTime className='mt-1'/> 9.00am - 7.00pm
            </p>
            <p className="mt-2 text-gray-300 flex gap-2">
            <IoMdMail className='mt-1'/> mail@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-purple-600 pt-6 text-center justify-center text-sm text-gray-400 flex gap-1">
        <LuCopyright className='' size={18}/> {new Date().getFullYear()} Pet Squad. All rights reserved.
        </div>
      </div>
  );
};

export default Footer;
