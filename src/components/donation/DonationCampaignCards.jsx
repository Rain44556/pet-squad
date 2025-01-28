import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const DonationCampaignCards = ({ campaign }) => {
    return (


        <motion.div
            whileHover={{ y: -6 }}
            className="shadow-lg rounded-3xl p-6 flex flex-col items-center relative bg-purple-100 hover:bg-yellow-50">

          <div className='relative -top-14'>
          <div className="w-24 h-24 rounded-full overflow-hidden border-y-4 border-colorSecondary">
                <img
                    src={campaign.image}
                    alt={campaign.petName}
                    className="w-full h-full object-cover"
                />
            </div>
          </div>

            <div className='text-center text-colorPrimary'>
                <h2 className="text-2xl font-semibold mb-2 border-b-2 border-colorSecondary">
                    {campaign.petName}
                </h2>


                <ul className=" mb-4">
                    <li className="py-1 border-b-2 mb-2 border-colorSecondary">
                        <span className="font-medium ">Contribution Limit:</span>
                        {campaign.maxDonation} BDT
                    </li>
                    <li className="py-1 border-b-2 border-colorSecondary">
                        <span className="font-medium">Donated Amount:</span>
                        {campaign.donatedAmount} BDT
                    </li>
                </ul>

                <Link to={`/donationDetails/${campaign._id}`}> <button
                    className="mt-4 w-full bg-colorPrimary text-white py-2 px-4 rounded-lg transition-colors">
                    View Details
                </button></Link>
            </div>



        </motion.div>



    );
};

export default DonationCampaignCards;