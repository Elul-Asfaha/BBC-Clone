import CardHero from "../../components/CardHero";
import Featured from "../../components/Featured";
import DateComponent from "./date";
import Weather from "./Weather";

const Home = () => {
    const cardFirst = [
        {
            imgUrl: "https://source.unsplash.com/1700x1000?",
            category: "africa",
            title: "news",

            link: "https://www.bbc.com/news/live/world-africa-66815068",
        },
    ];
    const FeatureDetails = [
        {
            type: "News",
            featureData: [
                {
                    imgUrl: "https://source.unsplash.com/1700x1000?",
                    title: "news",
                    description:
                        "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
                    category: "asdasdd",
                },
                {
                    imgUrl: "https://source.unsplash.com/1700x1000?",
                    title: "news",
                    description:
                        "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
                    category: "asdasdd",
                },
                {
                    imgUrl: "https://source.unsplash.com/1700x1000?",
                    title: "new",
                    description:
                        "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
                    category: "asdasdd",
                },
            ],
        },
        {
            type: "Sports",
            featureData: [
                {
                    imgUrl: "https://source.unsplash.com/1700x1000?",
                    title: "basketball",
                    description:
                        "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
                    category: "asdasdd",
                },
                {
                    imgUrl: "https://source.unsplash.com/1700x1000?",
                    title: "soccer",
                    description:
                        "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
                    category: "asdasdd",
                },
                {
                    imgUrl: "https://source.unsplash.com/1700x1000?",
                    title: "tennis",
                    description:
                        "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
                    category: "asdasdd",
                },
            ],
        },
        {
            type: "Weather",
            featureData: [
                {
                    imgUrl: "https://source.unsplash.com/1700x1000?",
                    title: "india weather",
                    description:
                        "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
                    category: "africa",
                },
                {
                    imgUrl: "https://source.unsplash.com/1700x1000?",
                    title: "africa weather",
                    description:
                        "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
                    category: "asdasdd",
                },
                {
                    imgUrl: "https://source.unsplash.com/1700x1000?",
                    title: "america weather",
                    description:
                        "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
                    category: "asdasdd",
                },
            ],
        },
    ];
    return (
        <div className='max-w-[1300px] mx-auto p-5 flex flex-col gap-5'>
            <div className='flex justify-between pt-5 text-xl leading-6'>
                <div className='font-bold text-gray-800 '>
                    Welcome to BBC.com
                </div>
                <div>
                    <DateComponent />
                </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-5'>
                <CardHero
                    key={1}
                    imgUrl={cardFirst[0].imgUrl}
                    title={cardFirst[0].title}
                    category={cardFirst[0].category}
                    link={cardFirst[0].link}
                    main={true}
                />
                <div className='grid sm:grid-cols-2 gap-5'>
                    <CardHero
                        key={1}
                        imgUrl={cardFirst[0].imgUrl}
                        title={cardFirst[0].title}
                        category={cardFirst[0].category}
                        link={cardFirst[0].link}
                        main={false}
                    />
                    <CardHero
                        key={1}
                        imgUrl={cardFirst[0].imgUrl}
                        title={cardFirst[0].title}
                        category={cardFirst[0].category}
                        link={cardFirst[0].link}
                        main={false}
                    />
                    <CardHero
                        key={1}
                        imgUrl={cardFirst[0].imgUrl}
                        title={cardFirst[0].title}
                        category={cardFirst[0].category}
                        link={cardFirst[0].link}
                        main={false}
                    />
                    <CardHero
                        key={1}
                        imgUrl={cardFirst[0].imgUrl}
                        title={cardFirst[0].title}
                        category={cardFirst[0].category}
                        link={cardFirst[0].link}
                        main={false}
                    />
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                {FeatureDetails.map((items, index) => (
                    <Featured
                        key={index}
                        type={items.type}
                        featureData={items.featureData}
                    />
                ))}
            </div>
            <Weather />
        </div>
    );
};

export default Home;
