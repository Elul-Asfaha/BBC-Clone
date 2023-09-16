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
    return (
        <div className='bg-black text-white'>
            <div className='mx-auto lg:max-w-[1400px] flex gap-5 p-4 items-center'>
                <>
                    <div className='flex gap-2'>
                        <p className='bg-white text-black px-2 py-1 font-bold'>
                            B
                        </p>
                        <p className='bg-white text-black px-2 py-1 font-bold'>
                            B
                        </p>
                        <p className='bg-white text-black px-2 py-1 font-bold'>
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
                        <div key={index}>
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
                <div className='text-3xl'>
                    <FiSearch />
                </div>
            </div>

            <div
                className={`${
                    !open ? "hidden" : "flex"
                } justify-between p-4 mx-auto lg:max-w-[1400px]`}
            >
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

                <button className='text-3xl ' onClick={() => setOpen(false)}>
                    <AiOutlineClose />
                </button>
            </div>
        </div>
    );
};

export default Nav;
