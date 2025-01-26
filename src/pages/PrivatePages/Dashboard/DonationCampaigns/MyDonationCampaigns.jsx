import SectionTitle from '@/components/SectionTitle/SectionTitle';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import useDonation from '@/hooks/useDonation';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyDonationCampaigns = () => {
    const [donationCampaign, , refetch] = useDonation();
    const axiosSecure = useAxiosSecure();

    const handlePause = async (id, isPaused) =>{
        const pauseStatus = {isPaused};
        console.log(pauseStatus);
        const res = await axiosSecure.put(`/donationCampaign/${id}`, pauseStatus)
    
        console.log(res);
        if (res.data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                    title: `${isPaused ? "Unpaused" : "Paused"} the campaign`,
                    icon: "success",
                    draggable: true
                });
            }
    
    }

    return (
        <div className='my-10'>
            <Helmet><title>My Donation Campaigns | Pet Squad</title></Helmet>
            {/* <SectionTitle title={"Join Hands with My Donation Campaigns!!"}></SectionTitle> */}
      
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-left">Pet Name</th>
            <th className="py-2 px-4 text-left">Maximum donation amount</th>
            <th className="py-2 px-4 text-left">Progress</th>
            <th className="py-2 px-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {donationCampaign.map((campaign) => (
            <tr key={campaign._id} className="border-t">
              <td className="py-2 px-4">{campaign.petName}</td>
              <td className="py-2 px-4">${campaign.amount}</td>
              <td className="py-2 px-4">

                {/* Donation Progress Bar */}
                <div className="relative w-full bg-gray-200 rounded-lg h-4">
                  <div
                    className="absolute top-0 left-0 h-4 bg-green-500 rounded-lg"
                    // style={{
                    //   width: `${(campaign.currentDonation / campaign.maxDonation) * 100}%`,
                    // }}
                  ></div>
                </div>
              </td>
              <td className="py-2 px-4 text-center">

                <button 
                onClick={()=>handlePause(campaign._id,!campaign.isPaused)}
                className='px-3 py-1 border-2 hover:bg-purple-400 hover:text-white border-purple-500 rounded hover:rounded-lg'>
                  {campaign.isPaused ? "Unpause" : "Pause"}
                </button>

              <Link to={`/dashboard/updateDonationCampaign/${campaign._id}`}>  <button
                  className="px-3 py-1 border-2 border-yellow-500 hover:bg-yellow-400 mx-2 hover:text-white rounded hover:rounded-lg"
                >Edit</button></Link>

                <button
                  className='px-3 py-1 border-2 hover:bg-green-500 hover:text-white border-green-500 rounded hover:rounded-lg'
                >
                  View Donators
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default MyDonationCampaigns;