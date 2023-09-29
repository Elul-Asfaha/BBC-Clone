import { BsPlayFill } from "react-icons/bs";
import ReactPlayer from "react-player";

const FeaturedVideo = () => {
    return (
        <div className='w-full py-8 bg-gray-200'>
            <div className='w-full max-w-[1300px] px-5 flex flex-col gap-5 mx-auto'>
                <p className='border-l-2 pl-2 border-blue-400 text-gray-800 font-bold text-2xl'>
                    Featured video
                </p>
                <div className='w-full relative'>
                    <div className='w-full h-[215px] md:h-[600px]'>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=NW7gnyW1mA8'
                            height='100%'
                            width='100%'
                        />
                    </div>
                    <div className='absolute inset-0 bg-black/40 top-0 bottom-0 right-0 left-0 flex flex-col justify-between text-white'>
                        <div className='bg-black h-[50px] w-[50px] flex items-center justify-center text-2xl'>
                            <BsPlayFill />
                        </div>
                        <div className='flex flex-col gap-3 px-3 py-4'>
                            <div className='text-3xl font-bold'>title</div>
                            <div>description</div>
                            <div className='border-l-2 pl-2 border-blue-400 text-lg'>
                                category
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedVideo;
