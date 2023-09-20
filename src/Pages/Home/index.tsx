import CardHero from "../../components/CardHero";
import Featured from "../../components/Featured";
import DateComponent from "./date";
import Reel from "./reel";
import Weather from "./weather";
import { FeatureDetails, cardDetails } from "../../data";
import Editor from "./editorsPick";

type featuredDataType = {
    type: string;
    featureData: {
        imgUrl: string;
        title: string;
        description: string;
        category: string;
    }[];
};
type cardDetailsType = {
    imgUrl: string;
    title: string;
    link: string;
    category: string;
    main?: boolean;
};

const Home = () => {
    const cardData: cardDetailsType[] = cardDetails;
    const featuredData: featuredDataType[] = FeatureDetails;
    return (
        <div className='w-full flex flex-col gap-5 bg-gray-50'>
            <div className='w-full max-w-[1300px] px-5 mx-auto flex justify-between pt-5 text-xl leading-6'>
                <div className='font-bold text-gray-800'>
                    Welcome to BBC.com
                </div>
                <div className=''>
                    <DateComponent />
                </div>
            </div>
            <div className='w-full max-w-[1300px] px-5 mx-auto grid lg:grid-cols-2 gap-5'>
                <CardHero
                    key={cardData[0].title}
                    imgUrl={cardData[0].imgUrl}
                    title={cardData[0].title}
                    category={cardData[0].category}
                    link={cardData[0].link}
                    main={true}
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia a dolor labore tempore fugit sunt.'
                />
                <div className='grid md:grid-cols-2 md:gap-5'>
                    {cardData.map((items, index) => (
                        <CardHero
                            key={index}
                            imgUrl={items.imgUrl}
                            title={items.title}
                            category={items.category}
                            link={items.link}
                        />
                    ))}
                </div>
            </div>
            <div className='w-full max-w-[1300px] px-5 mx-auto flex flex-col gap-5'>
                {featuredData.map((items, index) => (
                    <Featured
                        key={index}
                        type={items.type}
                        featureData={items.featureData}
                    />
                ))}
            </div>
            <Weather />
            <Reel />
            <div className='w-full max-w-[1300px] px-5 mx-auto flex flex-col gap-5'>
                <Featured
                    type={featuredData[0].type}
                    featureData={featuredData[0].featureData}
                />
            </div>
            <Editor />
        </div>
    );
};

export default Home;
