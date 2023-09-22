import ReactPlayer from "react-player";
type CustomSectionCardType = {
    url: string;
    desctiption: string;
};
const CustomSectionCard = ({ url, desctiption }: CustomSectionCardType) => {
    return (
        <div className='flex flex-col bg-white'>
            <ReactPlayer url={url} height='200px' width='100%' />

            <p className='px-5 text-gray-800 font-bold text-xl py-5'>
                {desctiption}
            </p>
        </div>
    );
};

export default CustomSectionCard;
