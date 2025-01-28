import DonateModal from '@/components/donation/DonateModal';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
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

const DonationDetails = () => {
       const donationsData = useLoaderData();
        const { petName, image, amount, "short description": shortDescription, "long description": longDescription, "last date": lastDate } = donationsData;
        const [donateModalIsOpen, setDonateModalIsOpen] = useState(false);
    
    const handleDonateNow  = () => {
        setDonateModalIsOpen(true);
    };

    const closeModal = () => {
        setDonateModalIsOpen(false);
    };

    return (
        <div className="p-4 my-10 shadow-md rounded-lg">
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-md" />
        <div>
            <h3 className="text-xl font-semibold mt-2">Pet Name: {petName}</h3>
            <p className="text-gray-600">Amount: {amount}</p>
            <p className="text-gray-600">Overview: {shortDescription}</p>
            <p className="text-gray-600">Description: {longDescription}</p>
            <p className="text-gray-600">Last Date: {lastDate}</p>
        </div>
        <button
            onClick={handleDonateNow}
            className=" px-4 py-2 mt-4 rounded-md border">
            Donate Now
        </button>

       <Modal
        isOpen={donateModalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
       {setDonateModalIsOpen && (
            <DonateModal donation={donationsData}
                closeModal={closeModal} />
        )}
       </Modal>
    </div>
    );
};

export default DonationDetails;