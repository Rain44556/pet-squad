import { ModeToggle } from '@/common/ModeToggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import AuthContext from '@/provider/AuthContext';
import { MenuIcon } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, logoutUser } = useContext(AuthContext);


    const navMenuLinks = <>
        <NavLink className="px-4" to="/">Home</NavLink>
        <NavLink className="px-4" to="/peListing">Pet Listing</NavLink>
        <NavLink className="px-4" to="/donationCampaigns">Donation Campaigns</NavLink>
    </>

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                toast.success("Sign Out Successfully");
            })
            .catch(err => {
                toast.error('Failed to Sign Out');
            })
    }

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

                        {/* Login/Logout */}
                        {user && user?.email ?
                            (<DropdownMenu>
                                <DropdownMenuTrigger>
                                    <img
                                        src={user?.photoURL}
                                        alt={user?.displayName}
                                        className="w-10 h-10 rounded-full cursor-pointer"
                                    />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        <NavLink to="/dashboard">Dashboard</NavLink>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>)
                            :
                            <NavLink className="px-4" to="/login">Login</NavLink>
                        }
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

                            {/* Login/Logout */}
                            {user && user?.email ?
                                (
                                <ul>
                                    <li>
                                    <NavLink className='px-4' to="/dashboard">Dashboard</NavLink>
                                    </li>
                                    <li>
                                    <NavLink className='px-4' onClick={handleLogout}>Logout</NavLink>
                                    </li>
                                </ul>)
                                :
                                <NavLink className="px-4" to="/login">Login</NavLink>
                            }
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div >

    );
};

export default Navbar;