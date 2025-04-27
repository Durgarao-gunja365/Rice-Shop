import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { riceData as basmatiRice } from "../rice/BasmatiRice";
import { riceData as brownRice } from "../rice/BrownRice";
import { riceData as jasmineRice } from "../rice/JasmineRice";
import { riceData as organicRice } from "../rice/OrganicRice";
import { riceData as specialtyRice } from "../rice/SpecialtyBlends";
import { riceData as Products } from "../rice/Products";

// Combine all rice data
const allRiceData = [
  ...basmatiRice,
  ...brownRice,
  ...jasmineRice,
  ...organicRice,
  ...specialtyRice,
  ...Products,
];

const BuyPage = () => {
  const { id } = useParams();
  const rice = allRiceData.find((item) => String(item.id) === String(id));

  const [formData, setFormData] = useState({
    quantity: 1,
    name: "",
    contactNumber: "",
  });
  const [orderSuccess, setOrderSuccess] = useState(false);

  useEffect(() => {
    const savedOrder = localStorage.getItem("orderData");
    if (savedOrder) {
      setOrderSuccess(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      ...formData,
      riceTitle: rice.title,
      ricePrice: rice.price,
      riceId: rice.id,
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(order);

    localStorage.setItem("orders", JSON.stringify(existingOrders));
    setOrderSuccess(true);
  };

  if (!rice) {
    return (
      <div className="text-center text-red-500 mt-10 text-2xl font-semibold">
        Rice item not found.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {orderSuccess ? (
        <div className="flex flex-col items-center justify-center mt-16">
          <div className="text-green-600 text-4xl font-bold mb-4 animate-bounce">
            🎉 Order Confirmed!
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Your order for <span className="font-semibold">{rice.title}</span> has been placed successfully.
          </p>
        </div>
      ) : (
        <div className="bg-gradient-to-tr from-yellow-400 via-yellow-300 to-yellow-500 p-1 rounded-3xl shadow-2xl">
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-3xl p-8 flex flex-col lg:flex-row gap-10">

            {/* Left: Image Section */}
            <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition duration-500">
              <img
                src={rice.image}
                alt={rice.title}
                className="w-full h-[320px] object-contain bg-white p-4"
              />
            </div>

            {/* Right: Details and Form Section */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center">
                {rice.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-center">{rice.description}</p>

              <div className="text-2xl text-green-600 dark:text-green-400 text-center font-bold">
                ₹{rice.price} / kg
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Quantity (kg)
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    min="1"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-yellow-400 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g., Rahul"
                    className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-yellow-400 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="e.g., 9876543210"
                    className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-yellow-400 outline-none"
                    required
                  />
                </div>

                <p className="text-xl font-semibold text-center text-gray-900 dark:text-gray-200 mt-4">
                  Total: ₹{rice.price * formData.quantity}
                </p>

                <button
                  type="submit"
                  className="w-full py-3 mt-4 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-full transition-transform transform hover:scale-105 duration-300"
                >
                  Confirm Order
                </button>
              </form>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default BuyPage;
