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
        <div className='w-full'>
            <p className='bg-[red] text-white font-semibold px-5 py-2 uppercase flex gap-1'>
                <span className='hidden lg:flex'>from our</span> {title}
            </p>
            <div>
                {data.map((items, index) => (
                    <div
                        key={index}
                        className='flex flex-col lg:flex-row gap-5 text-xl px-5 items-center text-center justify-center even:bg-gray-700 odd:bg-gray-800 py-5 md:py-10'
                    >
                        <div className='w-fit'>
                            {profile ? (
                                <img
                                    src={items.profile}
                                    alt=''
                                    className='h-[30px] w-[30px] rounded-full hidden lg:flex'
                                />
                            ) : (
                                <p className='px-4 py-2 rounded-full bg-[red]  italic text-white'>
                                    {index + 1}
                                </p>
                            )}
                        </div>

                        <div className='flex flex-col gap-1'>
                            <p className='text-gray-300'>{items.news}</p>
                            {authors && (
                                <p className='text-gray-300 italic text-xl'>
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
