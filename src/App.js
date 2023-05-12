// import Card from "./components/cardList/card.js";
import CardList from "./components/cardList/cardList.js";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Navbar/Nav.js";
import Cart from "./components/cart/Cart.js";
import Product from "./components/product/product.js";
import { Home } from "./components/Home.js";
import Profile, { OTPConfirm } from "./components/profile/Profile.js";
import Address from "./components/cart/Address.js";
import Payment from "./components/cart/payment.js";
import Checkout from "./components/cart/Checkout.js";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/product" element={<CardList />} exact ></Route>
        <Route path="/product/:Id" element={<Product />} />
        <Route path="cart" element={<Cart />} >
        </Route>
        <Route path="cart/address" element={<Address />} />
        <Route path="cart/address/payment" element={<Payment />} />
        <Route path="cart/address/payment/checkout" element={<Checkout />} />
        <Route path="profile" element={<Profile />} exact />
        <Route path="profile/otp" element={<OTPConfirm />} exact />

      </Routes>
    </>
  );
}

export default App;
