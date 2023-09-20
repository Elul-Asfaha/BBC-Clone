import { BsArrowRight } from "react-icons/bs";
import ReelCard from "../../components/ReelCard";
const Reel = () => {
    return (
        <div className="bg-[url('https://source.unsplash.com/1700x1000?sunset&snow&mountain')] object-cover bg-no-repeat bg-cover p-5">
            <div className='w-full max-w-[1300px] mx-auto flex flex-col gap-5'>
                <div className='w-full flex justify-between text-white'>
                    <p className='text-3xl'>REEL</p>
                    <button className='flex px-3 py-1 items-center text-xl rounded-full border border-white'>
                        <p>Visit Reel</p>
                        <BsArrowRight />
                    </button>
                </div>
                <p className='text-white text-lg'>
                    The most amazing videos from the BBC
                </p>
                <div className='grid md:grid-cols-3 gap-3'>
                    <ReelCard />
                    <ReelCard />
                    <ReelCard />
                </div>
            </div>
        </div>
    );
};

export default Reel;
