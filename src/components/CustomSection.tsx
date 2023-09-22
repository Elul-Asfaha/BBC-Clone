import { BsArrowRight } from "react-icons/bs";
import CustomSectionCard from "./CustomSectionCard";
type customSectionType = {
    sectionTitle: string;
    sectionDesctiption: string;
    sectionData: { desctiption: string; url: string }[];
    buttonName: string;
    bg_url: string;
};
const CustomSection = ({
    sectionTitle,
    sectionDesctiption,
    bg_url,
    sectionData,
    buttonName,
}: customSectionType) => {
    return (
        <div
            className={`bg-[url('${bg_url}')] object-cover bg-no-repeat bg-cover px-5 pt-10 pb-[60px]`}
        >
            <div className='w-full max-w-[1300px] mx-auto flex flex-col gap-5'>
                <div className='w-full flex justify-between text-white'>
                    <p className='text-3xl'>{sectionTitle}</p>
                    <button className='flex px-3 py-1 items-center text-xl rounded-full border border-white'>
                        <p>{buttonName}</p>
                        <BsArrowRight />
                    </button>
                </div>
                <p className='text-white text-lg'>{sectionDesctiption} </p>
                <div className='grid md:grid-cols-3 gap-3'>
                    {sectionData.map((items, index) => (
                        <CustomSectionCard
                            key={index}
                            url={items.url}
                            desctiption={items.desctiption}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomSection;
