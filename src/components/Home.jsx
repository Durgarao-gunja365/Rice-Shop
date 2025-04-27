import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Home() {
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;

    const handleAnimationEnd = () => {
      title.classList.remove('typing-text');
      title.classList.add('after-typing');
    };

    title.addEventListener('animationend', handleAnimationEnd);

    return () => {
      title.removeEventListener('animationend', handleAnimationEnd);
    };
  }, []);

  return (
    <div>
      {/* Home Section */}
      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/durga.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
          <div>
            <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-4 typing-text">
              Welcome to Durga Rice
            </h1>
            <p className="text-lg md:text-2xl mb-6">
              Premium quality rice sourced from trusted mills, ensuring the best for your family.
            </p>
            <Link
  to="/about"
  className="bg-gray-900 py-3 px-8 text-xl rounded-full hover:bg-gray-800 transition duration-300"
>
  Learn More
</Link>
          </div>
        </div>

        {/* Typing Animation Styles */}
        <style>
          {`
            .typing-text {
              display: inline-block;
              white-space: nowrap;
              overflow: hidden;
              border-right: 3px solid #fff;
              font-family: monospace;
              width: 0;
              color: #ffeb3b;
              animation: typing 3s steps(30, end) forwards, blink .75s step-end infinite;
            }

            @keyframes typing {
              from { width: 0 }
              to { width: 100% }
            }

            @keyframes blink {
              50% { border-color: transparent }
            }

            .after-typing {
              color: #ffffff;
              border-right: none;
            }
          `}
        </style>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
  <div className="container mx-auto text-center text-white">
    <h2 className="text-4xl font-bold mb-8 text-shadow">Why Choose Durga Rice?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-100">
        <div className="mb-4">
          <i className="fas fa-check-circle text-4xl text-blue-500"></i>
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Premium Quality</h3>
        <p className="text-gray-600">Our rice is sourced from trusted mills to ensure the best quality for your family.</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-100">
        <div className="mb-4">
          <i className="fas fa-leaf text-4xl text-purple-500"></i>
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Wide Variety</h3>
        <p className="text-gray-600">Choose from a wide range of rice types, suited for different cooking needs.</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:bg-pink-100">
        <div className="mb-4">
          <i className="fas fa-truck text-4xl text-pink-500"></i>
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Quick Delivery</h3>
        <p className="text-gray-600">Get your order delivered quickly and conveniently to your doorstep.</p>
      </div>
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-r from-yellow-400 to-orange-600">
  <div className="container mx-auto text-center text-white">
    <h2 className="text-4xl font-bold mb-8 text-shadow">Customer Testimonials</h2>
    <div className="flex flex-wrap justify-center gap-6">
      {/* Testimonial 1 */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm transform hover:scale-105 transition duration-300 ease-in-out hover:bg-yellow-100">
        <div className="mb-4">
          <i className="fas fa-quote-left text-4xl text-yellow-500"></i>
        </div>
        <p className="text-lg mb-4 text-gray-600">"The rice is always of great quality, and the delivery is always on time. Highly recommend!"</p>
        <div className="mb-4 flex justify-center text-yellow-400">
          {/* Rating - 5 Stars */}
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <p className="font-semibold text-gray-800">- Rajesh Kumar</p>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm transform hover:scale-105 transition duration-300 ease-in-out hover:bg-orange-100">
        <div className="mb-4">
          <i className="fas fa-quote-left text-4xl text-orange-500"></i>
        </div>
        <p className="text-lg mb-4 text-gray-600">"I’ve been buying from Durga Rice for months now, and it’s always the best quality rice in the market."</p>
        <div className="mb-4 flex justify-center text-yellow-400">
          {/* Rating - 4 Stars */}
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <p className="font-semibold text-gray-800">- Priya Sharma</p>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm transform hover:scale-105 transition duration-300 ease-in-out hover:bg-red-100">
        <div className="mb-4">
          <i className="fas fa-quote-left text-4xl text-red-500"></i>
        </div>
        <p className="text-lg mb-4 text-gray-600">"The variety is amazing, and I always find what I need. Great service!"</p>
        <div className="mb-4 flex justify-center text-yellow-400">
          {/* Rating - 4 Stars */}
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <p className="font-semibold text-gray-800">- Anil Singh</p>
      </div>
    </div>
  </div>
</section>



      {/* Call to Action Section */}
      <section id="cta" className="bg-yellow-600 py-20 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Buy?</h2>
        <p className="text-lg mb-6">Order your premium quality rice today and enjoy the best for your family!</p>
        <Link
  to="/products"
  className="bg-gray-900 py-3 px-8 text-xl rounded-full hover:bg-gray-800 transition duration-300"
>
  Learn More
</Link>

      </section>

      {/* Footer */}
     
    </div>
  );
}
