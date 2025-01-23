import React, { useState } from 'react';
import NotAdoptedPetListingCards from './NotAdoptedPetListingCards';
import { useLoaderData } from 'react-router-dom';
import SectionTitle from '@/components/SectionTitle/SectionTitle';


const NotAdoptedPetListing = () => {
    const listingPets = useLoaderData();
    const [listing, setListing] = useState(listingPets);

    const searchPetName = (e) =>{
        e.preventDefault();

        const searchField = e.target.value;
        const filteredPet = [];

        listingPets.forEach(search => {
            if(search.name.toLowerCase().indexOf(searchField) !== -1){
                filteredPet.push(search);
            }
        })
        setListing(filteredPet);
    }
    return (
       <div>
        <SectionTitle
        subTitle={"Cherished Companions"}
        title={"The Pets We Love"}
        ></SectionTitle>
        <div className='w-3/5 mx-auto flex items-center rounded-xl outline outline-1 -outline-offset-1 outline-colorPrimary has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-colorPrimary'>
            <input 
                  onChange={searchPetName}
                   type="text" 
                   placeholder='Search' 
                   className='block rounded-xl min-w-0 grow py-3 pl-5 pr-3 text-base placeholder:text-colorPrimary focus:outline focus:outline-0 sm:text-sm/6 bg-yellow-300'/>
        </div>
         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6 my-10">
          {listing.map((pet, index) => (
            <NotAdoptedPetListingCards key={index} pet={pet} />
          ))}
        </div>
       </div>
      );
};

export default NotAdoptedPetListing;