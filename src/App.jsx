import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Shop from "./pages/Shop";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

function App() {
  const [shopData, setShopData] = useState([]);
  useEffect(() => {
    async function fetchStoreData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setShopData(data);
      console.log(data);
    }

    fetchStoreData();
  }, []);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop shopData={shopData} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
