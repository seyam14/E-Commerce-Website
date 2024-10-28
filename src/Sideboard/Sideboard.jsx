import { GoChevronRight } from "react-icons/go";
import HeroBanner from "../HeroBanner/HeroBanner";

const Sideboard = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row my-2">
      {/* Sidebar */}
      <div className="w-full lg:w-1/6  lg:static h-auto lg:h-screen lg:flex-shrink-0 p-5 bg-white">
        <div className="flex flex-col space-y-4 p-2">
          <p className="flex items-center">Woman’s Fashion <GoChevronRight /></p>
          <p className="flex items-center">Men’s Fashion <GoChevronRight /></p>
          <p>Electronics</p>
          <p>Home & Lifestyle</p>
          <p>Medicine</p>
          <p>Sports & Outdoor</p>
          <p>Baby’s & Toys</p>
          <p>Groceries & Pets</p>
          <p>Health & Beauty</p>
        </div>
      </div>

      {/* HeroBanner Section */}
      <div className="flex-1 w-full lg:ml-[16%] my-4">
        <HeroBanner />
      </div>
    </div>
  );
};

export default Sideboard;
