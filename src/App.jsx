import { useEffect } from "react";
import { useState } from "react";
import Shop from "./pages/Shop";

function App() {
  const [shopData, setShopData] = useState([]);
  useEffect(() => {
    async function fetchStoreData() {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setShopData(data);
      console.log(data)
    }


    fetchStoreData();
  }, []);

  return (
    <>
      <Shop shopData={shopData} />
    </>
  )
}

export default App;