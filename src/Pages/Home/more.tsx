import SideBar from "../../components/SideBar";

const More = () => {
    return (
        <div className='w-full py-8 bg-gray-200'>
            <div className='w-full max-w-[1300px] mx-auto flex flex-col gap-5'>
                <p className='border-l-2 pl-2 border-blue-400 text-gray-800 font-bold text-2xl'>
                    More around the BBC
                </p>
                <div className='grid grid-cols-3'>
                    <SideBar
                        data={[
                            {
                                news: "asdasdsadsadsadasdasd",
                                author: "asdasd",
                                profile: "asdsad",
                            },
                            {
                                news: "asdasdsadsadsadasdasd",
                                author: "asdasd",
                                profile: "asdsad",
                            },
                            {
                                news: "asdasdsadsadsadasdasd",
                                author: "asdasd",
                                profile: "asdsad",
                            },
                            {
                                news: "asdasdsadsadsadasdasd",
                                author: "asdasd",
                                profile: "asdsad",
                            },
                        ]}
                        profile={true}
                        title='correspondents'
                        authors={true}
                    />
                    <div className='col-span-2'></div>
                </div>
            </div>
        </div>
    );
};

export default More;
