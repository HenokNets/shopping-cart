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
  const [quantities, setQuantities] = useState({});
  const [carts, setCart] = useState({});
  useEffect(() => {
    async function fetchStoreData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setShopData(data);
    }

    fetchStoreData();
  }, []);

  function handleInputChange(id, value) {
    const quantity = Math.max(0, Number(value));
    if (value === "") {
      setQuantities((prev) => ({
        ...prev, 
        [id]: 0
      }))
      return;
    }
    setQuantities((prev) => ({
      ...prev,
      [id]: quantity,
    }));
  }

  function handleButtonClick(id, amount) {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] ?? 0) + amount),
    }));
  }

  function handleDeleteButton(id) {
    setCart((prev) => {
      const next = {...prev};
      delete next[id];
      return next
    })

    setQuantities((prev) => {
      const next = {...prev};
      delete next[id];
      return next;
    })
  }

  return (
    <>
      <BrowserRouter>
        <Header carts={carts}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/shop"
            element={
              <Shop
                shopData={shopData}
                quantities={quantities}
                setCart={setCart}
                handleInputChange={handleInputChange}
                handleButtonClick={handleButtonClick}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                carts={carts}
                handleInputChange={handleInputChange}
                handleButtonClick={handleButtonClick}
                quantities={quantities}
                handleDeleteButton={handleDeleteButton}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
