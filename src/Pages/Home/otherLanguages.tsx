import { languages } from "../../data";

const OtherLanguages = () => {
    const data = languages;
    return (
        <div className='w-full py-8 bg-gray-200'>
            <div className='w-full max-w-[1300px] px-5 flex flex-col gap-4 mx-auto'>
                <p className='font-bold text-2xl text-gray-900 hover:text-black'>
                    BBC IN OTHER LANGUAGES
                </p>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-10'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-xl font-semibold'>language</p>
                        <p className='hover:underline'>note</p>
                    </div>
                    <div className='lg:col-span-2'>
                        <p className='text-xl font-semibold'>More Languages</p>
                        <div className='grid grid-cols-4 text-sm'>
                            {data.map((items, index) => (
                                <div key={index} className='flex pb-3 gap-1'>
                                    <p>{items.language}</p>
                                    <p className='text-blue-900'>
                                        {items.translation}
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

export default OtherLanguages;
