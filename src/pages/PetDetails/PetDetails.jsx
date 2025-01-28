import PetsAdoptModal from '@/components/pets/PetsAdoptModal/PetsAdoptModal';
import React from 'react';
import { useState } from "react";
import Modal from 'react-modal';

import { useLoaderData } from 'react-router-dom';

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

const PetDetails = () => {
    const petsData = useLoaderData();
    const { name, image, "short description": shortDescription, "long description": longDescription, "last date": lastDate  } = petsData;
    const [modalIsOpen, setIsOpen] = useState(false);

    const handleAdopt = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <img src={image} alt={name} className="w-full h-48 object-cover rounded-md" />
            <div>
                <h3 className="text-xl font-semibold mt-2">{name}</h3>
                <p className="text-gray-600">{shortDescription}</p>
            </div>
            <button
                onClick={handleAdopt}
                className=" px-4 py-2 mt-4 rounded-md border">
                Adopt
            </button>

           <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal">
           {modalIsOpen && (
                <PetsAdoptModal pet={petsData}
                    closeModal={closeModal} />
            )}
           </Modal>
        </div>
    );
};

export default PetDetails;