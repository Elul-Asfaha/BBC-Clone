import { Link } from "react-router-dom";
type NavLinkTypes = {
    name: string;
    nav: string;
};
import { FaUserAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
const Nav = () => {
    const [open, setOpen] = useState(false);
    const navLinks: NavLinkTypes[] = [
        {
            name: "Home",
            nav: "/",
        },
        {
            name: "News",
            nav: "/",
        },
        {
            name: "Sport",
            nav: "/",
        },
        {
            name: "Reel",
            nav: "/",
        },

        {
            name: "Worklife",
            nav: "/",
        },
        {
            name: "Travel",
            nav: "/",
        },
        {
            name: "Future",
            nav: "/",
        },
    ];
    const navLinks2: NavLinkTypes[] = [
        {
            name: "Tv",
            nav: "/",
        },
        {
            name: "Weather",
            nav: "/",
        },
        {
            name: "Sounds",
            nav: "/",
        },
    ];

    const mobileNav: NavLinkTypes[] = [
        {
            name: "Home",
            nav: "/",
        },
        {
            name: "News",
            nav: "/",
        },
        {
            name: "Sport",
            nav: "/",
        },
        {
            name: "Reel",
            nav: "/",
        },

        {
            name: "Worklife",
            nav: "/",
        },
        {
            name: "Travel",
            nav: "/",
        },
        {
            name: "Future",
            nav: "/",
        },
        {
            name: "Tv",
            nav: "/",
        },
        {
            name: "Weather",
            nav: "/",
        },
        {
            name: "Sounds",
            nav: "/",
        },
    ];
    return (
        <div className='bg-black text-white'>
            <div className='mx-auto hidden md:flex lg:max-w-[1300px] py-3 gap-5  items-center'>
                <>
                    <div className='flex gap-2'>
                        <p className='bg-white text-black px-3 py-1 font-bold text-2xl'>
                            B
                        </p>
                        <p className='bg-white text-black  px-3 py-1 font-bold text-2xl'>
                            B
                        </p>
                        <p className='bg-white text-black  px-3 py-1 font-bold text-2xl'>
                            C
                        </p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaUserAlt className='text-3xl' />
                        <p className='hidden lg:flex'>Sign in</p>
                    </div>
                </>
                <div className='flex-1 flex gap-5 justify-between items-center'>
                    {navLinks.map((items, index) => (
                        <div key={index} className='text-sm'>
                            <Link to={items.nav}>
                                <p className='hover:border-b hover:border-b-white duration-200 ease-in-out'>
                                    {items.name}
                                </p>
                            </Link>
                        </div>
                    ))}
                    <button className='text-3xl' onClick={() => setOpen(!open)}>
                        <BsThreeDots />
                    </button>
                </div>
                <div className='text-3xl lg:hidden'>
                    <FiSearch />
                </div>
                <div className='hidden lg:flex items-center py-2 px-3 w-[230px] text-sm bg-gray-800 gap-2'>
                    <FiSearch className='text-xl' />
                    <p>Search BBC</p>
                </div>
            </div>

            {open && (
                <div className='hidden md:flex justify-between p-4 mx-auto lg:max-w-[1300px]'>
                    <div className='flex gap-5 items-center'>
                        {navLinks2.map((items, index) => (
                            <div key={index}>
                                <Link to={items.nav}>
                                    <p className='hover:border-b hover:border-b-white duration-200 ease-in-out'>
                                        {items.name}
                                    </p>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <button
                        className='text-3xl '
                        onClick={() => setOpen(!open)}
                    >
                        <AiOutlineClose />
                    </button>
                </div>
            )}
            <div className='md:hidden mx-auto lg:max-w-[1300px] flex gap-5 p-4 items-center justify-between'>
                <>
                    <div className='flex items-center gap-2'>
                        <FaUserAlt className='text-3xl' />
                        <p className='hidden lg:flex'>Sign in</p>
                    </div>
                </>
                <>
                    <div className='flex gap-2'>
                        <p className='bg-white text-black px-3 py-1 font-bold text-2xl'>
                            B
                        </p>
                        <p className='bg-white text-black  px-3 py-1 font-bold text-2xl'>
                            B
                        </p>
                        <p className='bg-white text-black  px-3 py-1 font-bold text-2xl'>
                            C
                        </p>
                    </div>
                </>
                <div className='flex gap-5 items-center w-fit'>
                    <button className='text-3xl' onClick={() => setOpen(!open)}>
                        <RxHamburgerMenu />
                    </button>
                    <div className='text-3xl'>
                        <FiSearch />
                    </div>
                </div>
            </div>

            {open && (
                <div className='flex md:hidden justify-between p-4 mx-auto lg:max-w-[1300px]'>
                    <div className='flex flex-wrap gap-5 items-center'>
                        {mobileNav.map((items, index) => (
                            <div key={index}>
                                <Link to={items.nav}>
                                    <p className='hover:border-b hover:border-b-white duration-200 ease-in-out'>
                                        {items.name}
                                    </p>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <button
                        className='text-3xl '
                        onClick={() => setOpen(!open)}
                    >
                        <AiOutlineClose />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Nav;
