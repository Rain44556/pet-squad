import { ModeToggle } from '@/common/ModeToggle';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navMenuLinks = <>
        <NavLink className="px-4" to="/">Home</NavLink>
        <NavLink className="px-4" to="/">Pet Listing</NavLink>
        <NavLink className="px-4" to="/">Donation Campaigns</NavLink>
        <NavLink className="px-4" to="/">Login</NavLink>
    </>
    return (
        <div className='w-full border-b'>
            <div className='flex gap-10 my-10 items-center px-4 justify-between'>


                <div className='nav-start'>
                    <h1>logo</h1>
                </div>

                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            {navMenuLinks}
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>


                <div className='nav-end pt-3'>
                    <ModeToggle></ModeToggle>
                </div>
            </div>
        </div>
    );
};

export default Navbar;