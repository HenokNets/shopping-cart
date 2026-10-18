import "./HomePage.css";

export default function HomePage() {
  return (
    <main className="home-page-container">
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO SHOPEASE</p>

          <h1>
            Great Products,
            <br /> Better Days
          </h1>

          <p className="subtitle">
            Discover quality products at unbeatable prices.
            <br />
            Shop your favorites and enjoy a seamless shopping experience.
          </p>

          <button type="button" className="shop-now">
            Shop Now
          </button>
        </div>
      </section>

      <section className="featured-section" aria-label="Featured categories">
        <div className="featured-header">
          <h2>Featured Categories</h2>
          <a href="/shop" className="featured-link">
            Browse Shop
          </a>
        </div>

        <div className="category-grid">
          <article className="category-card">
            <img
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
              alt="Men's Fashion"
            />
            <p>Men's Fashion</p>
          </article>

          <article className="category-card">
            <img
              src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png"
              alt="Women's Fashion"
            />
            <p>Women's Fashion</p>
          </article>

          <article className="category-card">
            <img
              src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png"
              alt="Electronics"
            />
            <p>Electronics</p>
          </article>

          <article className="category-card">
            <img
              src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png"
              alt="Jewelry"
            />
            <p>Jewelry</p>
          </article>
        </div>

        <div className="why-us-section">
          <div className="why-us-header">
            <p>Why Shop With Us?</p>
          </div>

          <div className="why-us-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🚚</div>
              <div>
                <p className="benefit-title">Fast Shipping</p>
                <p className="benefit-text">Get your orders delivered quickly</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">🔒</div>
              <div>
                <p className="benefit-title">Secure Payments</p>
                <p className="benefit-text">Your information is always safe</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">✅</div>
              <div>
                <p className="benefit-title">Quality Products</p>
                <p className="benefit-text">Only the best for our customers</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">💬</div>
              <div>
                <p className="benefit-title">24/7 Support</p>
                <p className="benefit-text">We're here to help you</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
