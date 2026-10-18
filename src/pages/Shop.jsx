import "./Shop.css";
import { useState } from "react";

export default function Shop({ shopData }) {
  const [quantities, setQuantities] = useState({});

  function handleInputChange(id, value) {
    const quantity = Math.max(0, Number(value) || 0);

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

  return (
    <div className="product-container">
      {shopData.map((data) => {
        const quantity = quantities[data.id] ?? 0;

        return (
          <div key={data.id} className="cards">
            <img src={data.image} alt={data.title} />

            <div className="image-data">
              <p>{data.title}</p>
              <p>Price: {data.price}</p>
              <p>Rating: {data.rating.rate}</p>
            </div>

            <div className="input-amount">
              <input
                type="number"
                min="0"
                value={quantity}
                onChange={(event) =>
                  handleInputChange(data.id, event.target.value)
                }
              />

              <button
                onClick={() => handleButtonClick(data.id, 1)}
              >
                +
              </button>

              <button
                onClick={() => handleButtonClick(data.id, -1)}
              >
                -
              </button>
            </div>

            <button
              onClick={() =>
                console.log("Added to cart:", {
                  product: data.title,
                  quantity,
                })
              }
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
