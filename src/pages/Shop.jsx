import "./Shop.css";
export default function Shop({
  shopData,
  quantities,
  setCart,
  handleInputChange,
  handleButtonClick,
}) {
  function handleAddToCart(id, title, price, quantity, src) {
    if (quantity <= 0) return;

    setCart((prev) => ({
      ...prev,
      [id]: {
        id,
        title,
        price,
        quantity,
        src,
      },
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
                value={quantity === 0 ? "" : quantity}
                onChange={(event) =>
                  handleInputChange(data.id, event.target.value)
                }
              />

              <button onClick={() => handleButtonClick(data.id, 1)}>+</button>

              <button onClick={() => handleButtonClick(data.id, -1)}>-</button>
            </div>

            <button
              onClick={() =>
                handleAddToCart(
                  data.id,
                  data.title,
                  data.price,
                  quantity,
                  data.image,
                )
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
