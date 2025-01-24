import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import PetsCard from '@/components/PetsCard/PetsCard';


const NotAdoptedPetListing = () => {
    const listingPets = useLoaderData();
    const [listing, setListing] = useState(listingPets);


    // search for pets using name
    const searchPetName = (e) => {
        e.preventDefault();

        const searchField = e.target.value;
        const filteredPet = [];

        listingPets.forEach(search => {
            if (search.name.toLowerCase().indexOf(searchField) !== -1) {
                filteredPet.push(search);
            }
        })
        setListing(filteredPet);
    }

    // dropdown for pets specific category 
    const [selectedCategory, setSelectedCategory] = useState("");
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    }
    const filteredPets = listingPets.filter((pet) => pet.category === selectedCategory);

    return (
        <div>
            <Helmet><title>List of Pets | Pet Squad</title></Helmet>

            <SectionTitle
                subTitle={"Cherished Companions"}
                title={"The Pets We Love"}
            ></SectionTitle>

            {/* search */}
            <div className='flex gap-3 justify-center'>
                <div className='w-3/5 flex items-center rounded-xl outline outline-1 -outline-offset-1 outline-colorPrimary has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-colorPrimary'>
                    <input
                        onChange={searchPetName}
                        type="text"
                        placeholder='Search'
                        className='block rounded-xl min-w-0 grow py-3 pl-5 pr-3 text-base placeholder:text-colorPrimary focus:outline focus:outline-0 sm:text-sm/6 bg-yellow-300' />
                </div>

                {/* dropdown */}
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="bg-colorPrimary text-yellow-50 p-6">Select Category </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Pick Your Beloved Pet</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioItem onClick={() => handleCategorySelect("cat")} value="Cat">Cat</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem onClick={() => handleCategorySelect("dog")} value="Dog">Dog</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem onClick={() => handleCategorySelect("bird")} value="Bird">Bird</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem onClick={() => handleCategorySelect("panda")} value="Panda">Panda</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem onClick={() => handleCategorySelect("rabbit")} value="Rabbit">Rabbit</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem onClick={() => handleCategorySelect("fish")} value="Fish">Fish</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem onClick={() => handleCategorySelect("hamster")} value="Hamster">Hamster</DropdownMenuRadioItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 my-10'>
                {
                    selectedCategory ?
                        (filteredPets.length > 0 ?
                            (filteredPets.map(pet =>
                                <PetsCard
                                    key={pet._id}
                                    pet={pet}
                                ></PetsCard>)) :
                            (
                                <p className='col-span-full text-center text-colorPrimary text-3xl'>No pets found in this category!! Check back soon for new arrivals!</p>
                            )
                        ) :
                        (listing.map((pet, index) => (
                            <PetsCard key={index} pet={pet} />)))
                }
            </div>
        </div>
    );
};

export default NotAdoptedPetListing;