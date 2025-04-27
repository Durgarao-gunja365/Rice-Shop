import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu, X, Moon, Sun, MessageCircle,
  ShoppingCart, User, Search, Package, ChevronDown
} from "lucide-react";



const dropdownMenus = [
  {
    title: "Our Rice",
    key: "rice",
    items: [
      { name: "Basmati Rice", to: "/our-rice/basmati" },
      { name: "Brown Rice", to: "/our-rice/brown" },
      { name: "Jasmine Rice", to: "/our-rice/jasmine" },
      { name: "Organic Rice", to: "/our-rice/organic" },
      { name: "Specialty Blends", to: "/our-rice/specialty", label: "New" },
    ],
  },
];

const allSearchItems = [
  { name: "Basmati Rice", to: "/our-rice/basmati" },
  { name: "Brown Rice", to: "/our-rice/brown" },
  { name: "Jasmine Rice", to: "/our-rice/jasmine" },
  { name: "Organic Rice", to: "/our-rice/organic" },
  { name: "Specialty Blends", to: "/our-rice/specialty" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const [searchQuery, setSearchQuery] = useState(""); 
  const [searchOpen, setSearchOpen] = useState(false); 

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleMobileDropdown = (key) => {
    setMobileDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredResults = allSearchItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (searchOpen) {
        setSearchOpen(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [searchOpen]);

  return (
    <nav className="fixed top-0 w-full bg-yellow-500 dark:bg-gray-900 text-gray-800 dark:text-white shadow-lg backdrop-blur-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
      <div className="flex items-center">
  <div className="relative rounded-full overflow-hidden h-16 w-16"> 
    {/* Adjust h-16 w-16 to change the size */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="h-full w-full object-cover" // Ensures video fills the circle
    >
      <source src="/dr logo.mp4" type="video/mp4" />
      {/* Fallback image if video fails */}
      <img 
        src="/assets/durga-rice-fallback.png" 
        alt="Durga Rice Logo" 
        className="h-14 w-14"
      />
    </video>
  </div>
</div>
        {/* Nav Links & Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          <Link to="/" className="hover:text-yellow-600 transition duration-300">Home</Link>

          {dropdownMenus.map((menu, i) => (
            <div key={i} className="relative group">
              <button className="flex items-center hover:text-yellow-600 transition duration-300">
                {menu.title}
                <ChevronDown className="ml-1 w-4 h-4 transition-all duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded shadow-md opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transform origin-top transition-all duration-300 z-50">
                {menu.items.map((item, j) => (
                  <Link key={j} to={item.to} className="block px-4 py-2 text-sm hover:bg-yellow-100 dark:hover:bg-gray-700 rounded transition duration-300">
                    {item.name}
                    {item.label && <span className="text-xs bg-red-500 text-white ml-2 px-2 rounded">{item.label}</span>}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* <Link to="/recipes" className="hover:text-yellow-600 transition duration-300">Recipes</Link> */}
          <Link to="/about" className="hover:text-yellow-600 transition duration-300">About</Link>
          <Link to="/contact" className="hover:text-yellow-600 transition duration-300">Contact</Link>
          <Link to="/my-orders" className="hover:text-yellow-600 transition duration-300">My Orders</Link>

          <div className="flex items-center space-x-4">
            <button onClick={() => setSearchOpen(!searchOpen)} className="transition-all duration-300">
              <Search className="cursor-pointer hover:text-yellow-600" size={20} />
            </button>
            {/* <Link to="/profile">
              <User className="cursor-pointer hover:text-yellow-600" size={20} />
            </Link>
            <Link to="/cart">
              <ShoppingCart className="cursor-pointer hover:text-yellow-600" size={20} />
            </Link>
            <Link to="/orders">
              <Package className="cursor-pointer hover:text-yellow-600" size={20} />
            </Link>
            <button onClick={() => setDarkMode(!darkMode)} className="transition-all duration-300">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button> */}
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={() => setDarkMode(!darkMode)} className="transition-all duration-300">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="transition-all duration-300">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Search Input */}
      {searchOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 p-4 shadow-lg z-50">
          <form onSubmit={handleSearch} className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 w-full rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 text-gray-800 dark:text-white"
            />
            <button type="submit" className="p-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md">
              Search
            </button>
          </form>

          {/* Search Results Dropdown */}
          {searchQuery && (
            <div className="mt-2 bg-white dark:bg-gray-900 rounded-md shadow-md max-h-60 overflow-y-auto animate-dropdown">
              {filteredResults.length > 0 ? (
                filteredResults.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    className="block px-4 py-2 hover:bg-yellow-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white"
                    onClick={() => {
                      setSearchQuery("");
                      setSearchOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-500">No results found</div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-yellow-50 dark:bg-gray-800 space-y-3 text-sm font-medium">
          <Link to="/" className="block">Home</Link>

          {dropdownMenus.map((menu, i) => (
            <div key={i}>
              <button
                onClick={() => toggleMobileDropdown(menu.key)}
                className="flex justify-between w-full"
              >
                {menu.title}
                <ChevronDown className={`transition-transform ${mobileDropdowns[menu.key] ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdowns[menu.key] && (
                <div className="ml-4 mt-1 space-y-1">
                  {menu.items.map((item, j) => (
                    <Link key={j} to={item.to} className="block">
                      {item.name}
                      {item.label && <span className="text-xs bg-red-500 text-white ml-2 px-2 rounded">{item.label}</span>}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/recipes" className="block">Recipes</Link>
          <Link to="/about" className="block">About</Link>
          <Link to="/contact" className="block">Contact</Link>
          <Link to="/my-orders" className="block">My Orders</Link>
        </div>
      )}
    </nav>
  );
}
