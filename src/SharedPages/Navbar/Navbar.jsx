import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className="navbar w-full bg-black h-12 md:h-16 lg:h-12 flex flex-col lg:flex-row justify-between items-center">
            <div className="navbar-start"></div>
            
            <div className="navbar-center text-sm md:text-base lg:text-lg text-center p-2">
                <p className="text-white">
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
                    <span className="font-bold pl-2 underline">Shop Now</span>
                </p>
            </div>
            {/*  */}
            <div className="navbar-end pr-4 md:pr-6 flex items-center justify-center space-x-2">
                <p className="text-white text-xs md:text-base">English</p>
                <p className="text-white">
                    <FaAngleDown />
                </p>
            </div>
        </div>
    );
};

export default Navbar;
