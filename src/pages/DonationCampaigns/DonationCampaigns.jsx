import DonationCampaignCards from '@/components/donation/DonationCampaignCards';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const DonationCampaigns = () => {
    const donationCampaigns = useLoaderData();
    const [donationCampaign, setDonationCampaign] = useState(donationCampaigns);

    return (
      <div>
          <Helmet><title>Donation Campaigns | Pet Squad</title></Helmet>

<SectionTitle
title={"Donation Campaigns"}
    subTitle={"Simplify the management of your ongoing donation campaigns!"}
    
></SectionTitle>

<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 p-6 my-10'>
{
        (donationCampaign.map((campaign, id) => (
            <DonationCampaignCards key={id} campaign={campaign} />)))
}
</div>
      </div>
    );
};

export default DonationCampaigns;