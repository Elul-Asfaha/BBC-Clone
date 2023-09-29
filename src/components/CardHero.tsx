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
        <Link to={link} className='w-full'>
            <div
                className={`w-full relative flex hover:brightness-50 ${
                    main ? "min-h-[200px]" : "md:h-[190px]"
                }`}
            >
                <img
                    src={
                        imgUrl +
                        Math.floor(Math.random() * (1000 - 900 + 1) + 900) +
                        "?" +
                        title
                    }
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
                            ? "absolute flex flex-col justify-end inset-0 p-5 bg-black/30 text-white gap-2"
                            : "w-full md:p-5 md:absolute flex flex-col md:justify-end md:inset-0 gap-2 md:bg-black/30 md:text-white border-b pb-3 md:border-none"
                    }`}
                >
                    <div className='text-lg md:text-2xl font-bold'>{title}</div>
                    {main && (
                        <div className='text-gray-200 hidden md:flex'>
                            {description}
                        </div>
                    )}
                    <div
                        className={`border-l-[2.5px] border-red-500 pl-3 leading-4 uppercase text-sm ${
                            main
                                ? "text-gray-300"
                                : "text-gray-800 md:text-gray-300"
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
