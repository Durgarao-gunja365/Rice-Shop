import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // All social media icons

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info and Social Media Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Durga Rice</h3>
            <p className="text-sm mb-4">
              Providing premium quality rice from trusted mills across the country. Join us for healthy eating.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100056403026735" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={24} />
              </a>
              <a href="https://x.com/GunjaDurgarao" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/durgadurga8777/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/durgaraogunja365/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/Durgarao-gunja365" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
            </div>
          </div>

          

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 mb-6">
              <li><a href="/" className="text-sm hover:text-yellow-600">Home</a></li>
              <li><a href="/about" className="text-sm hover:text-yellow-600">About</a></li>
              <li><a href="/health" className="text-sm hover:text-yellow-600">Health</a></li>
              <li><a href="/recipes" className="text-sm hover:text-yellow-600">Recipes</a></li>
              <li><a href="/contact" className="text-sm hover:text-yellow-600">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">
              <strong>Email:</strong> durga390@gmail.com
            </p>
            <p className="text-sm mb-2">
              <strong>Phone:</strong> +91 7601071268
            </p>
            <p className="text-sm">
              <strong>Address:</strong> Durga Rice, Uppu Bazar, Dachepalli,pincode-522414,  Andhra Pradesh, 
            </p>
          </div>
          {/* Map Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Find Us On The Map</h3>
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0214670403587!2d90.39281701504556!3d23.810264984586704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9ba0e9f7bf9%3A0x928fb3e831e50d7f!2sDurga%20Rice!5e0!3m2!1sen!2sin!4v1632908031352!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Durga Rice. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
