import { Link } from "react-router-dom";
import "./Footer.css";

function Footer({ storeName, email, year }) {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <h2>{storeName}</h2>
        <p>
          Everything you need to enjoy the perfect mate ritual.
        </p>
      </div>

      <div className="footer__section">
        <h3>Explore</h3>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </div>

      <div className="footer__section">
        <h3>Customer care</h3>
        <a href={`mailto:${email}`}>{email}</a>
      </div>

      <p className="footer__copyright">
        © {year} {storeName}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
