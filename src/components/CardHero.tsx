type CardHeroType = {
    title: string;
    category: string;
    imgUrl: string;
    link: string;
    description?: string;
    main?: boolean;
};
import { Link } from "react-router-dom";
const CardHero = ({
    title,
    category,
    imgUrl,
    link,
    description,
    main,
}: CardHeroType) => {
    return (
        <Link to={link}>
            <div
                className={`w-full relative flex ${
                    main ? "h-[400px]" : "h-[190px]"
                }`}
            >
                <img
                    src={imgUrl + title}
                    alt={title}
                    className='w-full object-cover bg-gray-300'
                />
                <div className='absolute flex flex-col gap-y-2 justify-end py-5 bottom-0 top-0 left-0 right-0 pl-3 text-white text-lg bg-black/40'>
                    <div className='text-xl font-bold'>{title}</div>
                    {main && <div className='text-gray-200'>{description}</div>}
                    <div className='border-l-2 border-red-500 pl-3 leading-5 text-gray-200'>
                        {category}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CardHero;
