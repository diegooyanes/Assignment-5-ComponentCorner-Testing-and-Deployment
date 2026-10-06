import "./Hero.css";
import { Link } from "react-router-dom";

function Hero({ title, subtitle, ctaText }) {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">
          Authentic South American tradition
        </p>

        <h1>{title}</h1>

        <p className="hero__subtitle">
          {subtitle}
        </p>

        <Link className="hero__button" to="/products">
          {ctaText}
        </Link>
      </div>
    </section>
  );
}

export default Hero;