import React, { useState } from 'react';
import NotAdoptedPetListingCards from './NotAdoptedPetListingCards';
import { useLoaderData } from 'react-router-dom';


const NotAdoptedPetListing = () => {
    const listingPets = useLoaderData();
    const [listing, setListing] = useState(listingPets);
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
          {listing.map((pet, index) => (
            <NotAdoptedPetListingCards key={index} pet={pet} />
          ))}
        </div>
      );
};

export default NotAdoptedPetListing;