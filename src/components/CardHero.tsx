type CardHeroType = {
    title: string;
    category: string;
    imgUrl: string;
    link: string;
    description?: string;
    main: boolean;
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
    console.log(main);
    return (
        <Link to={link}>
            <div
                className={`w-full relative flex ${
                    main ? "h-[523px]" : "h-[250px]"
                }`}
            >
                <img src={imgUrl} alt={title} className='w-full object-cover' />
                <div className='absolute flex flex-col gap-y-2 justify-end py-5 bottom-0 top-0 left-0 right-0 pl-5 text-white font-bold text-lg bg-black/40'>
                    <div className='text-xl'>{title}</div>
                    {description && <div className=''>description</div>}
                    <div className='border-l-2 border-red-500 pl-3 leading-5'>
                        {category}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CardHero;
