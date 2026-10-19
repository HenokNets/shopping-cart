import { Fragment } from "react";

export default function Cart({ carts, handleInputChange, handleButtonClick, quantities }) {
  const cartArray = Object.values(carts);
  console.log(cartArray)
  return (
    <>
      <p>Your Cart</p>
      <p>Review your items and make change as needed.</p>

      {cartArray.map((cart) => {
        const quantity = quantities[cart.id] ?? 0;
        return (
          <Fragment key={cart.title}>
            <img src={cart.src}></img>
            <p>{cart.title}</p>
            <p>{cart.price}</p>
            <div>
              <button onClick={() => handleButtonClick(cart.id, -1)}>-</button>
              <input value={quantity} onChange={(event) => handleInputChange(cart.id, event.target.value)}></input>
              <button onClick={() => handleButtonClick(cart.id, 1)}>+</button>
            </div>
            <p>{cart.quantity * cart.price}</p>
            <button>Delete</button>
          </Fragment>
        );
      })}
    </>
  );
}
