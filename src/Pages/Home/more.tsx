import CardHero from "../../components/CardHero";
import Feature from "../../components/Feature";
import SideBar from "../../components/SideBar";
import { editorsPicks } from "../../data";
import { featuresDetail } from "../../data";

type cardDetailsType = {
    imgUrl: string;
    title: string;
    link: string;
    category: string;
    main?: boolean;
};
type featuresDetailsType = {
    imgUrl: string;
    title: string;
    link: string;
    category: string;
    main?: boolean;
};
const More = () => {
    const featuresDetails: featuresDetailsType[] = featuresDetail;

    const cardData: cardDetailsType = editorsPicks;

    return (
        <div className='w-full py-8 bg-gray-200'>
            <div className='w-full max-w-[1300px] mx-auto flex flex-col gap-5'>
                <p className='border-l-2 pl-2 border-blue-400 text-gray-800 font-bold text-2xl'>
                    More around the BBC
                </p>
                <div className='grid md:grid-cols-3 gap-5'>
                    <SideBar
                        data={[
                            {
                                news: "asdasdsadsadsadasdasd",
                                author: "asdasd",
                                profile: "https://source.unsplash.com/1700x",
                            },
                            {
                                news: "asdasdsadsadsadasdasd",
                                author: "asdasd",
                                profile: "https://source.unsplash.com/1700x",
                            },
                            {
                                news: "asdasdsadsadsadasdasd",
                                author: "asdasd",
                                profile: "https://source.unsplash.com/1700x",
                            },
                            {
                                news: "asdasdsadsadsadasdasd",
                                author: "asdasd",
                                profile: "https://source.unsplash.com/1700x",
                            },
                            {
                                news: "asdasdsadsadsadasdasd",
                                author: "asdasd",
                                profile: "https://source.unsplash.com/1700x",
                            },
                            {
                                news: "asdasdsadsadsadasdasd",
                                author: "asdasd",
                                profile: "https://source.unsplash.com/1700x",
                            },
                            {
                                news: "asdasdsadsadsadasdasd",
                                author: "asdasd",
                                profile: "https://source.unsplash.com/1700x",
                            },
                            {
                                news: "asdasdsadsadsadasdasd",
                                author: "asdasd",
                                profile: "https://source.unsplash.com/1700x",
                            },
                        ]}
                        profile={true}
                        title='correspondents'
                        authors={true}
                    />
                    <div className='w-full md:col-span-2 flex flex-col gap-5'>
                        <div>
                            <div className='hidden md:flex'>
                                <CardHero
                                    imgUrl={cardData.imgUrl}
                                    title={cardData.title}
                                    category={cardData.category}
                                    link={cardData.link}
                                    main={true}
                                    description='The aim was to hear rouge nuclear weapons tests. They discovered something else'
                                />
                            </div>
                            <div className='lg:hidden'></div>
                        </div>
                        <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                            {featuresDetails.map((items, index) => (
                                <Feature
                                    key={index}
                                    imgDisp={items.imgUrl}
                                    title={items.title}
                                    description={items.title}
                                    category={items.category}
                                    background={true}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default More;
