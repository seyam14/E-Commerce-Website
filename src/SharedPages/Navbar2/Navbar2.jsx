import { NavLink } from "react-router-dom";
import { IoCartOutline, IoSearchOutline, IoHeartOutline } from "react-icons/io5";

const Navbar2 = () => {
    const navLinks = <>
        <li>
            <NavLink className="font-bold" to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink className="font-bold" to='/contact'>Contact</NavLink>
        </li>
        <li>
            <NavLink className="font-bold" to='/about'>About</NavLink>
        </li>
        <li>
            <NavLink className="font-bold" to='/signUp'>Sign Up</NavLink>
        </li>
    </>;

    return (
        <div className={`navbar bg-white shadow-md md:px-10 top-0 z-10`}>
            <div className="navbar-start">
                {/* mobile view */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navLinks}
                    </ul>
                </div>
                {/* project type name */}
                <h1 className="text-xl md:text-3xl font-bold">Exclusive</h1>
            </div>

            {/*  larger screens */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end">
                {/* Search Input and Icon */}
                <div className="flex items-center gap-2">
                    <div className="form-control relative">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="input input-bordered w-24 h-8 md:w-auto md:h-10 text-sm"
                        />
                        <button className="absolute right-2 top-2 text-lg md:top-2.5 text-gray-500">
                            <IoSearchOutline />
                        </button>
                    </div>
                </div>

                {/*  Icons */}
                <div className="flex items-center space-x-4 ml-3">
                    {/* Love rating */}
                    <div className="p-1 text-xl">
                        <IoHeartOutline />
                    </div>
                    {/* Cart */}
                    <div className="p-1 text-xl">
                        <IoCartOutline />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar2;
