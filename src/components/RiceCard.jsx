// src/components/RiceCard.jsx
import { Link } from "react-router-dom";

const RiceCard = ({ id, image, title, description, label, price }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-transform transform hover:-translate-y-2 duration-300 flex flex-col">
      
      <div className="relative w-full h-60">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain bg-gray-100 dark:bg-gray-700 p-4"
        />
        {label && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {label}
          </span>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2 text-center">{title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3 text-center">
            {description}
          </p>
          <div className="text-lg font-semibold text-green-600 dark:text-green-400 text-center">
            ₹{price} / kg
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <Link
            to={`/buy/${id}`}
            className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-bold py-2 px-6 rounded-full transition duration-300"
          >
            Buy Now
          </Link>
        </div>
      </div>

    </div>
  );
};

export default RiceCard;
