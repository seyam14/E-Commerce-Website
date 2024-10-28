import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SaleProduct = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showAddToCart, setShowAddToCart] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const countdown = () => {
      const saleEndDate = new Date().setHours(24, 0, 0, 0); // Sale ends at midnight
      const now = new Date();
      const timeRemaining = saleEndDate - now;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
      const seconds = Math.floor((timeRemaining / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const intervalId = setInterval(countdown, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error loading product data:', error));
  }, []);

  return (
    <div className="p-4">
      <h1 className=" p-2 text-xl text-red-700">Today’s</h1>
      
      {/* Flash Sale and Countdown */}
      <div className="flex flex-wrap items-center space-x-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold">Flash Sales</h1>
        </div>
        <div className="flex-grow text-2xl font-semibold flex text-center space-x-4">
          <div>
            <p className="text-sm text-gray-500">Days</p>
            <p>{timeLeft.days}</p>
          </div>
          <span>:</span>
          <div>
            <p className="text-sm text-gray-500">Hours</p>
            <p>{timeLeft.hours}</p>
          </div>
          <span>:</span>
          <div>
            <p className="text-sm text-gray-500">Minutes</p>
            <p>{timeLeft.minutes}</p>
          </div>
          <span>:</span>
          <div>
            <p className="text-sm text-gray-500">Seconds</p>
            <p>{timeLeft.seconds}</p>
          </div>
        </div>
        {/* Icons aligned at end */}
        <div className="ml-auto flex gap-3 p-4">
          <FaArrowLeft className="text-gray-600 cursor-pointer" />
          <FaArrowRight className="text-gray-600 cursor-pointer" />
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.slice(0, 4).map((product) => {
          const discountPercentage = Math.round(((product.normalPrice - product.discountPrice) / product.normalPrice) * 100);
          return (
            <div key={product.id} className="flex flex-col items-center bg-base-100 shadow-lg p-4 max-w-xs mx-auto">
              {/* Product Image with Discount Badge */}
              <div className="relative w-full flex justify-center">
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  -{discountPercentage}%
                </span>
                <img
                  onClick={() => setShowAddToCart(product.id)}
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover cursor-pointer"
                />
              </div>
              {/* Add to Cart Button */}
              {showAddToCart === product.id && (
                <button className="btn btn-neutral mt-2 w-full">Add to Cart</button>
              )}

              {/* Product Details */}
              <div className="mt-2 w-full">
                <h2 className="card-title">{product.title}</h2>
                <div className="flex i space-x-2">
                  <p className="text-red-500 font-bold">${product.discountPrice}</p>
                  <p className="text-gray-500 line-through">${product.normalPrice}</p> 
                </div>
                <div className="rating mt-2">
                  <span>{'⭐'.repeat(Math.floor(product.rating))}</span>
                  <span>{'☆'.repeat(5 - Math.floor(product.rating))}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Products Button */}
      <div className="text-center mt-8">
        <button className="btn btn-outline btn-error">View All Products</button>
      </div>
    </div>
  );
};

export default SaleProduct;
