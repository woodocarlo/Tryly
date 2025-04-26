import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Correct imports for BrowserRouter and Routes
import Home from './Pages/Home';
import Men from './Pages/Men';
import Women from './Pages/Women';
import ProductPage from './Pages/ProductPage';
import LoginPage from './Pages/LoginPage';
import Cart from './Pages/Cart';
import Skin from './Pages/Skin';
import ShopBySkinTone from './Pages/ShopBySkinTone';

function App() {
  return (
    <Router>
      <div>
        <Routes>  {/* Replacing Switch with Routes in v6+ */}
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Skin" element={<Skin />} />
          <Route path="/shop-by-skintone" element={<ShopBySkinTone />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
