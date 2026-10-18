import Twitter from "../assets/twitter.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <p className="brand-name">ShopEase</p>
        <p className="brand-tagline">Simple shopping. Better Living</p>

        <div className="social-links" aria-label="Social media links">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link" aria-label="Facebook">
            <img src="https://img.icons8.com/?size=100&id=118467&format=png&color=000000" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
            <img src="https://img.icons8.com/?size=100&id=32309&format=png&color=000000" alt="Instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link" aria-label="Twitter">
            <img src={Twitter} alt="Twitter" />
          </a>
        </div>
      </div>

      <nav className="footer-nav" aria-label="Footer navigation">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/cart">Cart</a>
      </nav>
    </footer>
  );
}
