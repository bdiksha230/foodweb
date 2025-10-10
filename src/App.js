
import './App.css';
import {HashRouter, Routes, Route } from 'react-router-dom';
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
// import women_banner from './component/assets/img/banner/shop_banner.jpg';
// import kids_banner from './component/assets/img/banner/contactus.jpg'
import Allproducts from './pages/Allproducts';



function App() {
  return (
    <div className="App">
      <HashRouter  >
        <Nav />
        <Routes>
          <Route exact path="/foodweb" element={<Shop />} />
          <Route path="/foodweb/allproduct" element={<Allproducts banner={men_banner} category="allproduct" />} /> 
          <Route path="/foodweb/contact" element={<ShopCategory  category="contact" />} />
          <Route path="/foodweb/product" element={<Product />}>
            <Route path=":productid" element={<Product />} />
          </Route>
          <Route path="/foodweb/cart" element={<Cart />} />
          <Route path="/foodweb/login" element={<LoginSinup />} />
        </Routes>
        <Footer />
      </HashRouter>

      {/*db username - bdiksha230_db_user */}
      {/* pass-  w30SI17otg7tcJFi */}
      {/* mongodb+srv://bdiksha230_db_user:w30SI17otg7tcJFi@carts.xxorq9c.mongodb.net/?retryWrites=true&w=majority&appName=carts */}
      

    </div>
  );
}

export default App;
