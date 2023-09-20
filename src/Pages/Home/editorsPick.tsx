import CardHero from "../../components/CardHero";
import Feature from "../../components/Feature";
import { cardDetails } from "../../data";
type cardDetailsType = {
    imgUrl: string;
    title: string;
    link: string;
    category: string;
    main?: boolean;
};
type buisnessType = {
    news: string;
};
const Editor = () => {
    const cardData: cardDetailsType[] = cardDetails;
    const buisnessNews: buisnessType[] = [
        {
            news: "Slowing food prices drive surprise inflation fall",
        },
        {
            news: "Parents offered refunds for Fortnite purchases",
        },
        {
            news: "Ford hits out at delay to new pertrol car ban",
        },
        {
            news: "China imports of Japan fish dive over Fukushima release",
        },
    ];
    return (
        <div className='w-full py-8 bg-gray-200'>
            <div className='w-full max-w-[1300px] px-5 flex flex-col gap-5 mx-auto'>
                <p className='border-l-2 pl-2 border-blue-400 text-gray-800 font-bold text-2xl'>
                    Editor's Picks
                </p>
                <div className='grid md:grid-cols-3 gap-5'>
                    <div className='w-full col-span-2'>
                        <div>
                            <div className='hidden lg:flex'>
                                <CardHero
                                    imgUrl={cardData[0].imgUrl}
                                    title={cardData[0].title}
                                    category={cardData[0].category}
                                    link={cardData[0].link}
                                    main={true}
                                />
                            </div>
                            <div className='lg:hidden'>
                                <Feature
                                    imgDisp={cardData[0].imgUrl}
                                    title={cardData[0].title}
                                    description={cardData[0].title}
                                    category={cardData[0].category}
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-3'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className='w-full '>
                        <p className='bg-[red] text-white font-semibold px-5 py-1'>
                            LATEST BUISNESS NEWS
                        </p>
                        <div>
                            {buisnessNews.map((items, index) => (
                                <div
                                    key={index}
                                    className='flex flex-col lg:flex-row gap-5 text-xl px-5 items-center text-center justify-center even:bg-gray-700 odd:bg-gray-800 py-5'
                                >
                                    <div className='rounded-full w-fit px-4 py-2 bg-[red]'>
                                        <p>{index + 1}</p>
                                    </div>

                                    <p className='text-gray-300'>
                                        {items.news}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Editor;
