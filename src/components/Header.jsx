import { Link } from "react-router-dom";
import "./Header.css";

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      <Link className="header__brand" to="/">
        {storeName}
      </Link>

      <nav className="header__nav" aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <Link
        className="header__button"
        to="/cart"
        aria-label={`Cart, ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
      >
        <div className="cart-container">
          <span className="cart-icon">🛒</span>
          <span>Cart</span>
          <span className="cart-count">{cartCount}</span>
        </div>
      </Link>
    </header>
  );
}

export default Header;