import "./Header.css";
import CartLogo from "../assets/shopping-cart.png";
import { Link } from "react-router";

export default function Header({ carts = {} }) {
  const totalQuantity = Object.values(carts).reduce(
    (sum, cart) => sum + (Number(cart.quantity) || 0),
    0
  );

  return (
    <header>
      <div className="shop-name">
        <p>ShopEase</p>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>

        <Link to="/cart" className="cart-link">
          <span className="cart-label">Cart</span>
          <span className="cart-icon-wrap">
            <img src={CartLogo} alt="Cart" />
            <span className="cart-badge" aria-label={`Items in cart: ${totalQuantity}`}>
              {totalQuantity}
            </span>
          </span>
        </Link>
      </div>
    </header>
  );
}
