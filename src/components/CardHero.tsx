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
    main = false,
}: CardHeroType) => {
    return (
        <Link to={link}>
            <div
                className={`w-full relative flex ${
                    main ? "min-h-[400px]" : "md:h-[190px]"
                }`}
            >
                <img
                    src={imgUrl + title}
                    alt={title}
                    className={
                        main
                            ? `w-full object-container bg-gray-300`
                            : "hidden md:flex md:w-full md:object-cover "
                    }
                />
                <div
                    className={`${
                        main
                            ? "absolute flex flex-col justify-end inset-0 p-5 bg-black/30 text-white"
                            : "w-full md:p-5 md:absolute flex flex-col md:justify-end md:inset-0 gap-2 md:bg-black/30 md:text-white border-b pb-3 md:border-none"
                    }`}
                >
                    <div className='text-2xl font-bold'>{title}</div>
                    {main && <div className='text-gray-200'>{description}</div>}
                    <div
                        className={`border-l-2 border-red-500 pl-3 leading-4 uppercase text-sm ${
                            main
                                ? "text-gray-400"
                                : "text-gray-800 md:text-gray-400"
                        }`}
                    >
                        {category}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CardHero;
