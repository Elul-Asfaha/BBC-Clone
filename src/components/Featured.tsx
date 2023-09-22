import Feature from "./Feature";

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
            <p className='border-l-2 text-gray-800 hover:text-black border-red-500 pl-2 leading-6 text-3xl font-bold'>
                {type}
            </p>
            <div className='grid md:grid-cols-3 gap-5'>
                {featureData.map((items, index) => (
                    <Feature
                        key={index}
                        imgDisp={
                            items.imgUrl +
                            Math.floor(Math.random() * (1000 - 900 + 1) + 900) +
                            "?" +
                            items.title
                        }
                        title={items.title}
                        description={items.description}
                        category={items.category}
                    />
                ))}
            </div>
        </div>
    );
};

export default Featured;
