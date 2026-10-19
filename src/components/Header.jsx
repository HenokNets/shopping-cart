import "./Header.css";
import CartLogo from "../assets/shopping-cart.png";
import { Link } from "react-router";
export default function Header() {
  return (
    <header>
      <div className="shop-name">
        <p>ShopEase</p>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
        <img src={CartLogo} />
      </div>
    </header>
  );
}
