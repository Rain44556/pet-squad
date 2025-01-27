import React from 'react';

const DonatorModal = ({donators, closeModal}) => {

    return (
        <div className="font-bodyFont fixed inset-0 bg-opacity-50 flex justify-center border-2 items-center">
        <div className="p-6 rounded-lg shadow-lg max-w-md w-full">
         <div className='flex justify-between text-colorPrimary'>
         <h2 className="text-xl font-semibold mb-4 ">Donators</h2>
         <h2 className="text-xl font-semibold mb-4">Amount</h2>
         </div>
         <div className='border-b-2 border-colorSecondary mb-3'></div>
          <ul className="space-y-2">
            {donators.map((donator, index) => (
              <li key={index} className="flex justify-between items-center text-colorPrimary">
                <span>{donator.donorName}</span>
                <span className="font-medium">{donator.amount} BDT</span>
              </li>
            ))}
          </ul>
          <button
            onClick={closeModal}
            className="mt-4 w-full px-4 py-2 bg-colorSecondary hover:rounded-xl font-headingFont">
            Close
          </button>
        </div>
      </div>
    );
};

export default DonatorModal;