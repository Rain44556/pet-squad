import { ModeToggle } from '@/common/ModeToggle';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navMenuLinks = <>
        <NavLink className="px-4" to="/">Home</NavLink>
        <NavLink className="px-4" to="/">Pet Listing</NavLink>
        <NavLink className="px-4" to="/">Donation Campaigns</NavLink>
        <NavLink className="px-4" to="/">Login</NavLink>
    </>
    const [open, setOpen] = useState(false);
    return (
        <div className='w-full border-b mt-4'>
            <div className='flex gap-10 items-center lg:px-24 px-8 justify-between'>


                <div className='nav-start'>
                    <img 
                    src="https://i.ibb.co.com/WFjYQYS/Untitled-design.png" 
                    alt="logo"
                    className='w-24 h-24 rounded-full mb-2' />
                </div>

                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            {navMenuLinks}
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>


                <div className='nav-end pt-3 text-[#827397] font-extrabold'>
                    <ModeToggle></ModeToggle>

                        {/* for mobile responsive */}
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden">
                                    <MenuIcon />
                                </Button>
                            </SheetTrigger>

                            <SheetContent side="left">
                                <div className="flex flex-col items-start">
                                    {navMenuLinks}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>

    );
};

export default Navbar;