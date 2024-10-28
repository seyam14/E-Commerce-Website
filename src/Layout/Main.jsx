import { Outlet } from "react-router-dom";
import Navbar from "../SharedPages/Navbar/Navbar";
import Footer from "../SharedPages/Footer/Footer";
import Navbar2 from "../SharedPages/Navbar2/Navbar2";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto">
            <Navbar2></Navbar2>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;