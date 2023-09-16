import Nav from "./components/Nav";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";

const App = () => {
    return (
        <div className='min-h-screen'>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    );
};
export default App;
