import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="pt-28 pb-20 px-6 min-h-screen bg-gradient-to-br from-yellow-50 to-white dark:from-gray-900 dark:to-gray-950 transition-all duration-500">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <h1 className="text-5xl font-bold text-yellow-700 dark:text-yellow-400 text-center mb-10">About Durga Rice</h1>

        {/* Intro */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border-4 border-yellow-300 dark:border-yellow-600 mb-12">
          <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
            Durga Rice is a trusted name in the rice industry, delivering quality grains across the region. 
            From traditional varieties to modern packaging, we ensure every grain speaks of purity and heritage.
            Founded with passion and built with honesty, our journey continues with your trust and support.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-yellow-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md border-2 border-yellow-300 dark:border-yellow-600">
            <h2 className="text-2xl font-bold mb-3 text-yellow-700 dark:text-yellow-300">🌟 Our Vision</h2>
            <p className="text-gray-800 dark:text-gray-200">
              To become the leading supplier of premium quality rice in India, upholding traditions while embracing innovation.
            </p>
          </div>
          <div className="bg-yellow-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md border-2 border-yellow-300 dark:border-yellow-600">
            <h2 className="text-2xl font-bold mb-3 text-yellow-700 dark:text-yellow-300">🎯 Our Mission</h2>
            <p className="text-gray-800 dark:text-gray-200">
              To deliver top-quality rice products with honesty, consistency, and respect for our farmers and customers.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-yellow-700 dark:text-yellow-400 mb-6">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[ 
              { icon: '🌾', title: 'High-Quality Grains', desc: 'We handpick only the finest grains for you.' },
              { icon: '⚖️', title: 'Fair Pricing', desc: 'Affordable rates with no compromise on quality.' },
              { icon: '🚚', title: 'Reliable Delivery', desc: 'Prompt and dependable service to all partners.' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-yellow-200 dark:border-yellow-600 hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-yellow-700 dark:text-yellow-300 mb-2">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline of Achievements */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-yellow-700 dark:text-yellow-400 text-center mb-10">Our Journey</h2>
          <div className="border-l-4 border-yellow-400 dark:border-yellow-600 pl-6 space-y-8">
            {[
              { year: '2010', desc: 'Durga Rice was founded with a vision to supply quality rice locally.' },
              { year: '2014', desc: 'Opened second warehouse and introduced new rice varieties.' },
              { year: '2018', desc: 'Expanded to neighboring states and started online sales.' },
              { year: '2023', desc: 'Crossed 1 million+ happy customers milestone.' },
            ].map((item, index) => (
              <div key={index} className="relative" data-aos="fade-up">
                <div className="absolute -left-7 top-1.5 w-4 h-4 bg-yellow-500 rounded-full border-4 border-white dark:border-gray-800"></div>
                <h3 className="text-xl font-semibold text-yellow-700 dark:text-yellow-300">{item.year}</h3>
                <p className="text-gray-700 dark:text-gray-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Member Cards */}
        <div className="mb-16">
  <h2 className="text-4xl font-bold text-yellow-700 dark:text-yellow-400 text-center mb-10">
    Meet the Team
  </h2>
  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        name: 'Durgarao',
        role: 'Founder & CEO',
        img: '/my_photo-1.jpg',
        socials: {
          facebook: 'https://www.facebook.com/profile.php?id=100056403026735',
          twitter: 'https://x.com/GunjaDurgarao',
          linkedin: 'https://www.linkedin.com/in/durgaraogunja365/',
        },
      },
      {
        name: 'Radha Devi',
        role: 'Logistics Head',
        img: 'https://i.pravatar.cc/150?img=47',
        socials: {
          facebook: 'https://facebook.com/radhadevi',
          twitter: 'https://www.linkedin.com/in/durgaraogunja365/',
          linkedin: 'https://linkedin.com/in/radhadevi',
        },
      },
      {
        name: 'Anil Verma',
        role: 'Sales Manager',
        img: 'https://i.pravatar.cc/150?img=15',
        socials: {
          facebook: 'https://facebook.com/anilverma',
          twitter: 'https://twitter.com/anilverma',
          linkedin: 'https://linkedin.com/in/anilverma',
        },
      },
    ].map((member, index) => (
      <div
        key={index}
        className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        data-aos="zoom-in"
      >
        {/* Image */}
        <div className="relative">
          <img
            src={member.img}
            alt={member.name}
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-yellow-400"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30 rounded-full"></div> {/* Overlay */}
        </div>

        {/* Member Info */}
        <h3 className="text-xl font-bold text-yellow-700 dark:text-yellow-300">{member.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-3">{member.role}</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 text-yellow-500 text-xl">
          {member.socials.facebook && (
            <a
              href={member.socials.facebook}
              className="transform hover:scale-110 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          )}
          {member.socials.twitter && (
            <a
              href={member.socials.twitter}
              className="transform hover:scale-110 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          )}
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              className="transform hover:scale-110 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
</div>


      </div>
    </section>
  );
}
