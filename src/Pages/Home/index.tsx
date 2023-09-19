import CardHero from "../../components/CardHero";
import Featured from "../../components/Featured";
import DateComponent from "./date";

const Home = () => {
    const cardFirst = [
        {
            imgUrl: "https://images.unsplash.com/photo-1588230115883-df1aaae8f9b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
            category: "africa",
            title: "Lorem ipsum dolor sit amet.",

            link: "https://www.bbc.com/news/live/world-africa-66815068",
        },
    ];
    const FeatureDetails = [
        {
            type: "News",
            featureData: [
                {
                    imgUrl: "https://images.unsplash.com/photo-1588230115883-df1aaae8f9b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                    title: "asdasds",
                    description:
                        "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
                    category: "asdasdd",
                },
                {
                    imgUrl: "https://images.unsplash.com/photo-1588230115883-df1aaae8f9b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                    title: "asdasds",
                    description:
                        "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
                    category: "asdasdd",
                },
                {
                    imgUrl: "https://images.unsplash.com/photo-1588230115883-df1aaae8f9b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                    title: "asdasds",
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
                    imgUrl: "https://images.unsplash.com/photo-1588230115883-df1aaae8f9b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                    title: "asdasds",
                    description:
                        "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
                    category: "asdasdd",
                },
                {
                    imgUrl: "https://images.unsplash.com/photo-1588230115883-df1aaae8f9b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                    title: "asdasds",
                    description:
                        "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
                    category: "asdasdd",
                },
                {
                    imgUrl: "https://images.unsplash.com/photo-1588230115883-df1aaae8f9b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                    title: "asdasds",
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
                    imgUrl: "https://images.unsplash.com/photo-1588230115883-df1aaae8f9b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                    title: "asdasds",
                    description:
                        "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
                    category: "asdasdd",
                },
                {
                    imgUrl: "https://images.unsplash.com/photo-1588230115883-df1aaae8f9b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                    title: "asdasds",
                    description:
                        "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
                    category: "asdasdd",
                },
                {
                    imgUrl: "https://images.unsplash.com/photo-1588230115883-df1aaae8f9b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                    title: "asdasds",
                    description:
                        "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
                    category: "asdasdd",
                },
            ],
        },
    ];
    return (
        <div className='max-w-[1650px] mx-auto p-5 flex flex-col gap-5'>
            <div className='flex justify-between text-2xl leading-6'>
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
        </div>
    );
};

export default Home;
