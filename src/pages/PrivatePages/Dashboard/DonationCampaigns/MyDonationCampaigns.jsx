import DonatorModal from '@/components/donation/DonatorModal';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import useDonation from '@/hooks/useDonation';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '58%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '550px'
  },
};

const MyDonationCampaigns = () => {
  const [donationCampaign, , refetch] = useDonation();
  const axiosSecure = useAxiosSecure();
  const [donatorsModalIsOpen, setDonatorsModalIsOpen] = useState(false);
  const [donation, setDonation] = useState([]);

  const handlePause = async (id, isPaused) => {
    const pauseStatus = { isPaused };
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



  const handleViewDonators = async (id) => {
    const res = await axiosSecure.get(`/donationCampaign/${id}`)
    setDonation(res.data);
   openModal();
  }

  const closeModal = () => {
    setDonatorsModalIsOpen(false);
  }

  const openModal = () => {
    setDonatorsModalIsOpen(true);
  }



  return (
    <div className='my-10 text-center'>
      <Helmet><title>My Donation Campaigns | Pet Squad</title></Helmet>

      <table className="min-w-full border border-colorPrimary rounded-lg shadow-sm">
        <thead>
          <tr className="bg-purple-300 ">
            <th className="py-2 px-4 font-semibold">Pet Name</th>
            <th className="py-2 px-4 font-semibold">Maximum donation amount</th>
            <th className="py-2 px-4 font-semibold">Progress</th>
            <th className="py-2 px-4 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {donationCampaign.map((campaign) => (
            <tr key={campaign._id} className="border-t">
              <td className="py-2 px-4">{campaign.petName}</td>
              <td className="py-2 px-4">{campaign.amount} BDT</td>
              <td className="py-2 px-4">
               progress
              </td>

              <td className="py-2 px-4">
                <button
                  onClick={() => handlePause(campaign._id, !campaign.isPaused)}
                  className='px-3 py-1 border-2 hover:bg-purple-400 hover:text-white border-purple-500 rounded hover:rounded-lg w-28'>
                  {campaign.isPaused ? "Unpause" : "Pause"}
                </button>

                <Link to={`/dashboard/updateDonationCampaign/${campaign._id}`}>
                  <button
                    className="px-3 py-1 border-2 border-yellow-500 hover:bg-yellow-400 mx-2 hover:text-white rounded hover:rounded-lg">
                    Edit
                  </button>
                </Link>

                <button
                  onClick={()=>handleViewDonators(campaign._id)}
                  className='px-3 py-1 border-2 hover:bg-green-500 hover:text-white border-green-500 rounded hover:rounded-lg'>
                  View Donators
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={donatorsModalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        {donatorsModalIsOpen && (
          <DonatorModal donators={donationCampaign}
          
            closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
};

export default MyDonationCampaigns;