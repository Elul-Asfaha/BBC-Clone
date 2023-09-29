type sideBarType = {
    data: {
        news: string;
        author?: string;
        profile?: string;
    }[];
    profile: boolean;
    title: string;
    authors?: boolean;
};
const SideBar = ({ data, profile = false, title, authors }: sideBarType) => {
    return (
        <div className='w-full  border-2 border-[red]'>
            <p className='bg-[red] text-white font-semibold px-5 py-2 uppercase flex gap-1'>
                <span className='hidden lg:flex'>from our</span> {title}
            </p>
            <div>
                {data.map((items, index) => (
                    <div
                        key={index}
                        className='flex md:flex-col lg:flex-row gap-5 md:border-none text-xl px-5 items-center text-center justify-center even:bg-gray-100 odd:bg-gray-400 md:even:bg-gray-700 md:odd:bg-gray-800 py-5 md:py-10'
                    >
                        <div className='w-fit'>
                            {profile ? (
                                <img
                                    src={
                                        items.profile &&
                                        items.profile +
                                            Math.floor(
                                                Math.random() *
                                                    (1000 - 900 + 1) +
                                                    900
                                            ) +
                                            "?" +
                                            "profile"
                                    }
                                    alt=''
                                    className='h-[60px] w-[60px] object-cover rounded-full hidden lg:flex'
                                />
                            ) : (
                                <p className='px-4 py-2 rounded-full bg-[red] italic text-white'>
                                    {index + 1}
                                </p>
                            )}
                        </div>

                        <div className='flex flex-col gap-1'>
                            <p className='md:text-gray-300 text-black font-bold md:font-normal text-sm'>
                                {items.news}
                            </p>
                            {authors && (
                                <p className='md:text-gray-300 text-black italic text-sm md:text-xl'>
                                    By{" " + items.author}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideBar;
