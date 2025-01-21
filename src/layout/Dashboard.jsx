import Navbar from '@/pages/Shared/Navbar';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='font-bodyFont'>
            <Navbar></Navbar>
            <div className='flex my-10 gap-10 px-10'>

                {/* side-bar content */}
                <div className='w-72 min-h-full bg-colorPrimary p-10 text-yellow-50'>
                    <ul>
                        <li>
                            <NavLink to="/dashboard/addPet" className="font-headingFont font-extrabold">Add a Pet</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/myAddedPets" className="font-headingFont font-extrabold">My Added Pets</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/adoptionRequest" className="font-headingFont font-extrabold">Adoption Request</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/createDonationCampaign" className="font-headingFont font-extrabold">Create Donation Campaigns</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/myDonationCampaigns" className="font-headingFont font-extrabold">My Donation Campaigns</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/myDonations" className="font-headingFont font-extrabold">My Donations</NavLink>
                        </li>
                    </ul>
                </div>

                {/* middle content */}
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;