import './Header.css';
import CartLogo from '../assets/shopping-cart.png';
export default function Header() {
    return (
        <header>
            <div className='shop-name'>
                <p>ShopEase</p>
            </div>
            
            <div className="nav-links">
                <a href="/" >Home</a>
                <a href="/shop" >Shop</a>
                <a href="/cart" >Cart</a>
                <img src={CartLogo}/>
            </div>
        </header>
    )
}