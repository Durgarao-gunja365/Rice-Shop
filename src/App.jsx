import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Recipes from './components/Recipes';
import BasmatiRice from './rice/BasmatiRice';
import BrownRice from './rice/BrownRice';
import JasmineRice from './rice/JasmineRice';
import OrganicRice from './rice/OrganicRice';
import SpecialtyBlends from './rice/SpecialtyBlends';
import BuyPage from './components/BuyPage';
import MyOrdersPage from './components/MyOrdersPage';
import Products from './rice/Products';

function App() {
  return (
    <Router>
      <div className="bg-white dark:bg-gray-950 min-h-screen flex flex-col">
        <Navbar />

        {/* Main content area */}
        <main className="flex-grow pt-16">
          <Routes>
            {/* Define your routes */}
            <Route path="/" element={<Home />} />
            {/* <Route path="/products" element={<Products />} />
            <Route path="/wholesale" element={<Wholesale />} />*/}
            <Route path="/about" element={<About />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/our-rice/basmati" element={<BasmatiRice />} />
            <Route path="/our-rice/brown" element={<BrownRice />} />
            <Route path="/our-rice/jasmine" element={<JasmineRice />} />
            <Route path="/our-rice/organic" element={<OrganicRice />} />
            <Route path="/our-rice/specialty" element={<SpecialtyBlends />} />
            <Route path="/my-orders" element={<MyOrdersPage />} />
            <Route path="/buy/:id" element={<BuyPage />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
