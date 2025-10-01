
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import Nav from './component/Nav/Nav';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import LoginSinup from './pages/LoginSinup';
import Cart from './pages/Cart';
import Footer from './component/Footer/Footer';
import men_banner from './component/assets/img/banner/offer_banner.webp';
import women_banner from './component/assets/img/banner/shop_banner.jpg';
import kids_banner from './component/assets/img/banner/contactus.jpg'
import Allproducts from './pages/Allproducts';



function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/foodweb">
        <Nav />
        <Routes>
          <Route exact path="/foodweb" element={<Shop />} />
          <Route path="/allproduct" element={<Allproducts banner={men_banner} category="allproduct" />} /> 
          <Route path="/contact" element={<ShopCategory  category="contact" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productid" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSinup />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
