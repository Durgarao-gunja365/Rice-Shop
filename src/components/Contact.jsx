import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    emailjs.sendForm(
      'service_vm9lljh',
      'template_75zqh1i',
      form,
      'NrySt4DHEI4mdZq6S'
    ).then(
      (result) => {
        toast.success(' Message sent successfully!');
        form.reset();
      },
      (error) => {
        toast.error('❌ Failed to send message. Please try again!');
      }
    );
  };

  return (
    <section className="min-h-screen mt-18 bg-gradient-to-br from-yellow-100 via-white to-yellow-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl border-4 border-yellow-400 dark:border-yellow-600 transition-all duration-500">
          <h2 className="text-4xl font-bold mb-6 text-yellow-700 dark:text-yellow-400">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">Name</label>
              <input
                name="name"
                type="text"
                className="w-full px-4 py-2 rounded-lg border-2 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-white transition"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">Email</label>
              <input
                name="email"
                type="email"
                className="w-full px-4 py-2 rounded-lg border-2 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-white transition"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">Message</label>
              <textarea
                name="message"
                rows="4"
                className="w-full px-4 py-2 rounded-lg border-2 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-white transition"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-6 py-3 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info + Google Map */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="bg-yellow-50 dark:bg-gray-800 rounded-2xl p-6 border-2 border-yellow-300 dark:border-yellow-600 shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-yellow-700 dark:text-yellow-300">Contact Information</h2>
            <p className="mb-2 text-gray-800 dark:text-gray-200">📍 Durga Rice, Uppu Bazar, Dachepalli,pincode-522414,  Andhra Pradesh,</p>
            <p className="mb-2 text-gray-800 dark:text-gray-200">📞 +91 7601071268</p>
            <p className="mb-2 text-gray-800 dark:text-gray-200">📧 dgunja390@gmail.com</p>
          </div>

          <iframe
            title="Durga Rice Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.404387795832!2d144.9630579511365!3d-37.8136271796514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d44b1d7b6c5%3A0x774e9e2b8b73f8c7!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1621942591857!5m2!1sen!2sus"
            width="100%"
            height="300"
            className="rounded-xl border-4 border-yellow-400 dark:border-yellow-600 shadow-lg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
