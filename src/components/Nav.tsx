import { Link } from "react-router-dom";
type NavLinkTypes = {
    name: string;
    nav: string;
};
const Nav = () => {
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
    return (
        <div className='flex gap-5 bg-black text-white p-5 items-center'>
            <>
                <div className='flex gap-2'>
                    <p className='bg-white text-black px-2 py-1 font-bold'>B</p>
                    <p className='bg-white text-black px-2 py-1 font-bold'>B</p>
                    <p className='bg-white text-black px-2 py-1 font-bold'>C</p>
                </div>
            </>
            {navLinks.map((items, index) => (
                <div key={index}>
                    <Link to={items.nav}>
                        <p>{items.name}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Nav;
