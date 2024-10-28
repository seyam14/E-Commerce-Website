
import SaleProduct from "../SaleProduct/SaleProduct";
import Sideboard from "../Sideboard/Sideboard";


const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
           <Sideboard></Sideboard> 
           <SaleProduct></SaleProduct>
        </div>
    );
};

export default Home;