type featured = {
    type: string;
    featureData: {
        imgUrl: string;
        title: string;
        description: string;
        category: string;
    }[];
};
const Featured = ({ type, featureData }: featured) => {
    return (
        <div className='flex flex-col gap-5'>
            <p className='border-l-2 text-gray-700 hover:text-black border-red-500 pl-2 leading-6 text-3xl font-bold'>
                {type}
            </p>
            <div className='grid md:grid-cols-3 gap-5'>
                {featureData.map((items, index) => (
                    <div
                        key={index}
                        className='flex flex-col md:gap-5 border-b md:border-none pb-2 md:pb-0'
                    >
                        <img
                            src={items.imgUrl}
                            alt={items.title}
                            className='h-[200px] object-cover w-full hidden md:flex'
                        />
                        <p className='font-bold text-xl'>{items.title}</p>
                        <p className='text-gray-700'>{items.description}</p>
                        <div className='border-l-2 border-red-500 pl-2 leading-5'>
                            {items.category}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Featured;
