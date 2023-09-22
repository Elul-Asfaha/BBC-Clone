import CardHero from "../../components/CardHero";
import Featured from "../../components/Featured";
import DateComponent from "./date";
import { FeatureDetails, cardDetails } from "../../data";
import Editor from "./editorsPick";
import Weather from "./Weather";
import CustomSection from "../../components/CustomSection";

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
        <div className='w-full flex flex-col'>
            <div className='hidden md:flex w-full max-w-[1300px] px-5 mx-auto justify-between pt-5 text-xl leading-6'>
                <div className='font-bold text-gray-800'>
                    Welcome to BBC.com
                </div>
                <div className=''>
                    <DateComponent />
                </div>
            </div>
            <div className='w-full max-w-[1300px] md:px-5 mx-auto grid lg:grid-cols-2 gap-5'>
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
            <div className='w-full max-w-[1300px] md:px-5 mx-auto flex flex-col gap-5'>
                {featuredData.map((items, index) => (
                    <Featured
                        key={index}
                        type={items.type}
                        featureData={items.featureData}
                    />
                ))}
            </div>
            <Weather />
            <CustomSection
                sectionTitle='Future'
                buttonName='Visit Reel'
                sectionData={[
                    {
                        url: "https://www.youtube.com/watch?v=NW7gnyW1mA8",
                        desctiption:
                            "Manchester United players 'remain upset at De Gea exit' amid Onana struggles",
                    },
                    {
                        url: "https://www.youtube.com/watch?v=AlTYtDaZE6c",
                        desctiption:
                            "Mexico’s non-human 'Alien-like' beings fake?",
                    },
                    {
                        url: "https://www.youtube.com/watch?v=_IsxNr8CSxk",
                        desctiption:
                            "Should We Be Freaking Out About The New COVID Variants?",
                    },
                ]}
                sectionDesctiption='The most amazing videos from the BBC'
                bg_url="[url('https://images.unsplash.com/photo-1507713215125-f3cf87cfbe20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8c3Vuc2V0LHNub3csbW91bnRhaW58fHx8fHwxNjk1NDA2Mjk1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1700')]"
            />

            <div className='w-full max-w-[1300px] md:px-5 mx-auto flex flex-col gap-5'>
                <Featured
                    type={featuredData[0].type}
                    featureData={featuredData[0].featureData}
                />
            </div>
            <Editor />
            <CustomSection
                sectionTitle='Future Planet'
                buttonName='Visit Future Planet'
                sectionData={[
                    {
                        url: "https://www.youtube.com/watch?v=NW7gnyW1mA8",
                        desctiption:
                            "Manchester United players 'remain upset at De Gea exit' amid Onana struggles",
                    },
                    {
                        url: "https://www.youtube.com/watch?v=AlTYtDaZE6c",
                        desctiption:
                            "Mexico’s non-human 'Alien-like' beings fake?",
                    },
                    {
                        url: "https://www.youtube.com/watch?v=_IsxNr8CSxk",
                        desctiption:
                            "Should We Be Freaking Out About The New COVID Variants?",
                    },
                ]}
                sectionDesctiption='Solutions for a sustainable world'
                bg_url="[url('https://images.unsplash.com/photo-1599451699085-12051dd4d85d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8Zm9ycmVzdHx8fHx8fDE2OTU0MDYzMDk&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1700')]"
            />
        </div>
    );
};

export default Home;
