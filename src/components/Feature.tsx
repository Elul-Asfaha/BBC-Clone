type featureType = {
    imgDisp?: string;
    title?: string;
    description?: string;
    category?: string;
    height?: number;
};
const Feature = ({
    imgDisp,
    title,
    description,
    category,
    height = 200,
}: featureType) => {
    return (
        <div className='flex flex-col justify-between md:gap-2 border-b md:border-none pb-2 md:pb-0'>
            <img
                src={imgDisp}
                alt={title}
                className='object-cover w-full hidden md:flex bg-gray-300'
                height={height}
            />
            <p className='font-bold text-xl'>{title}</p>
            <p className='text-gray-700'>{description}</p>
            <div className='border-l-2 mt-5 border-red-500 pl-2 leading-5'>
                {category}
            </div>
        </div>
    );
};

export default Feature;
