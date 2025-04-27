import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders"));
    if (storedOrders) {
      setOrders(storedOrders);
    }
  }, []);

  const handleClearOrders = () => {
    localStorage.removeItem("orders");
    setOrders([]);
  };

  const handlePrint = () => {
    window.print();
  };

  // Calculate total bill
  const totalBill = orders.reduce((total, order) => {
    const orderTotal = parseFloat(order.ricePrice) * parseFloat(order.quantity);
    return total + orderTotal;
  }, 0);

  return (
    <div className="max-w-5xl mx-auto mt-0 px-6 print:bg-white">
      <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 p-[2px] rounded-xl shadow-2xl print:shadow-none print:bg-white">
        <div className="bg-white dark:bg-gray-900 rounded-xl py-10 px-6 print:bg-white">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-8 underline decoration-yellow-400 print:text-black">
            My Orders
          </h2>

          {orders.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-300 text-lg print:text-black">No orders found.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {orders.map((order, index) => {
                const total = parseFloat(order.ricePrice) * parseFloat(order.quantity);

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="rounded-xl border-2 border-yellow-300 bg-yellow-50 dark:bg-gray-800 p-5 shadow-md hover:shadow-lg transition-all duration-300 print:shadow-none print:border-black"
                  >
                    <h3 className="text-xl font-bold text-yellow-700 dark:text-yellow-300 mb-2">{order.riceTitle}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">Price: ₹{order.ricePrice} per kg</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">Quantity: {order.quantity} kg</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">Total Cost: ₹{total.toFixed(2)}</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">Name: {order.name}</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">Contact: {order.contactNumber}</p>
                  </motion.div>
                );
              })}
            </div>
          )}

          {orders.length > 0 && (
            <div>
              {/* Display Total Bill */}
              <div className="mt-8 text-xl font-bold text-right text-yellow-700 dark:text-yellow-400">
                <p>Total Bill: ₹{totalBill.toFixed(2)}</p>
              </div>

              <div className="text-center mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={handleClearOrders}
                  className="px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 shadow-lg transition-all print:hidden"
                >
                  Clear Orders
                </button>

                <button
                  onClick={handlePrint}
                  className="px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 shadow-lg transition-all print:hidden"
                >
                  Download as PDF / Print
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrdersPage;
