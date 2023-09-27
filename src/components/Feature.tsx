type featureType = {
    imgDisp?: string;
    title?: string;
    description?: string;
    category?: string;
    height?: number;
    background?: boolean;
};
const Feature = ({
    imgDisp,
    title,
    description,
    category,
    height = 200,
    background = false,
}: featureType) => {
    return (
        <div
            className={`flex flex-col justify-between md:gap-1 border-b md:border-none pb-2 md:pb-0 hover:brightness-[90%] ${
                background ? "bg-white" : ""
            }`}
        >
            <img
                src={imgDisp}
                alt={title}
                className='object-cover w-full hidden md:flex bg-gray-300 h-[200px]'
                height={height}
            />
            <div className={`flex flex-col gap-1 ${background ? "p-2" : ""}`}>
                <p className='font-bold text-xl'>{title}</p>
                <p className='text-gray-700'>{description}</p>
                <div className='border-l-2 mt-5 border-red-500 pl-2 leading-5 uppercase text-gray-500'>
                    {category}
                </div>
            </div>
        </div>
    );
};

export default Feature;
