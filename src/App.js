// import Card from "./components/cardList/card.js";
import CardList from "./components/cardList/cardList.js";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Navbar/Nav.js";
import Cart from "./components/cart/Cart.js";
import Product from "./components/product/product.js";
import { Home } from "./components/Home.js";
import Profile from "./components/profile/Profile.js";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<CardList />}></Route>
        <Route path="/product/:Id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
