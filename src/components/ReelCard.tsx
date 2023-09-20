import ReactPlayer from "react-player";

const ReelCard = () => {
    return (
        <div className='flex flex-col bg-white'>
            <ReactPlayer
                url='https://www.youtube.com/watch?v=X0nbSDQCymM'
                height='200px'
                width='100%'
            />

            <p className='px-5 text-gray-800 font-bold text-xl py-5'>title</p>
        </div>
    );
};

export default ReelCard;
