import { useState, FormEvent } from "react";
import { BsSearch, BsCloudDrizzle } from "react-icons/bs";
const Weather = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [searchWeather, setSearchWeather] = useState("Addis Ababa");
    const [displayWeather, setDisplayWeather] = useState("Addis Ababa");

    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setDisplayWeather(searchWeather);
    };
    return (
        <div className='w-full max-w-[1300px] mx-auto flex flex-col gap-5'>
            <div className='flex items-center gap-5'>
                <p className='text-gray-800 font-bold  p-1'>
                    {displayWeather} WEATHER
                </p>
                <button
                    onClick={() => setOpenSearch(!openSearch)}
                    className='px-5 text-sm bg-gray-200 h-full'
                >
                    {openSearch ? "CLOSE" : "OPEN"}
                </button>
            </div>
            {openSearch && (
                <form onSubmit={(e) => handleSearch(e)}>
                    <div className='flex items-center text-lg border px-3 w-fit'>
                        <input
                            className='outline-none w-[200px] py-1 '
                            onChange={(e) => setSearchWeather(e.target.value)}
                        />
                        <button className='p-1'>
                            <BsSearch />
                        </button>
                    </div>
                </form>
            )}
            <div className='flex gap-3'>
                <div className='flex max-w-fit items-center gap-2'>
                    <div className='flex-1 text-5xl'>
                        <BsCloudDrizzle />
                    </div>
                    <div className='flex-1 flex flex-col'>
                        <p>Tue</p>
                        <p>28C</p>
                        <p>23C</p>
                    </div>
                </div>
                <div className='flex max-w-fit items-center gap-2'>
                    <div className='flex-1 text-5xl'>
                        <BsCloudDrizzle />
                    </div>
                    <div className='flex-1 flex flex-col'>
                        <p>wed</p>
                        <p>28C</p>
                        <p>23C</p>
                    </div>
                </div>
                <div className='flex max-w-fit items-center gap-2'>
                    <div className='flex-1 text-5xl'>
                        <BsCloudDrizzle />
                    </div>
                    <div className='flex-1 flex flex-col'>
                        <p>thur</p>
                        <p>28C</p>
                        <p>23C</p>
                    </div>
                </div>
                <div className='flex max-w-fit items-center gap-2'>
                    <div className='flex-1 text-5xl'>
                        <BsCloudDrizzle />
                    </div>
                    <div className='flex-1 flex flex-col'>
                        <p>fri</p>
                        <p>28C</p>
                        <p>23C</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;
