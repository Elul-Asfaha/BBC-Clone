import DateComponent from "./date";

const Home = () => {
    return (
        <div>
            <div className='flex justify-between text-3xl'>
                <div>Welcome to BBC.com</div>
                <div>
                    <DateComponent />
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Home;
