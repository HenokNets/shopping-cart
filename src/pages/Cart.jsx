import "./Cart.css";

export default function Cart({
  carts,
  handleInputChange,
  handleButtonClick,
  quantities,
  handleDeleteButton,
}) {
  const cartArray = Object.values(carts || {});

  return (
    <main className="cart-page">
      <header className="cart-header">
        <p className="cart-kicker">Your Cart</p>
        <p className="cart-subtitle">
          Review your items and make changes as needed.
        </p>
      </header>

      <section className="cart-list">
        {cartArray.map((cart) => {
          const quantity = quantities[cart.id] ?? 0;
          const itemTotal = Number((quantity * cart.price).toFixed(2));

          return (
            <article key={cart.title} className="cart-item">
              <img className="cart-image" src={cart.src} alt={cart.title} />

              <div className="cart-details">
                <p className="cart-title">{cart.title}</p>
                <p className="cart-price">${cart.price}</p>
              </div>

              <div className="cart-actions">
                <div className="quantity-controls">
                  <button
                    type="button"
                    onClick={() => handleButtonClick(cart.id, -1)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(event) =>
                      handleInputChange(cart.id, event.target.value)
                    }
                  />
                  <button
                    type="button"
                    onClick={() => handleButtonClick(cart.id, 1)}
                  >
                    +
                  </button>
                </div>

                <p className="cart-total">${itemTotal}</p>
              </div>

              <button
                type="button"
                className="delete-button"
                onClick={() => handleDeleteButton(cart.id)}
              >
                Delete
              </button>
            </article>
          );
        })}
      </section>
    </main>
  );
}
