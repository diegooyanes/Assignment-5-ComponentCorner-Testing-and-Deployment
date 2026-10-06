import { Link, useParams } from "react-router-dom";
import "./ProductDetailsPage.css";

function ProductDetailsPage({ products, addToCart }) {
    const { productId } = useParams();
    const product = products.find((item) => String(item.id) === productId);

    if (!product) {
        return (
            <section className="products-section">
                <h1>Product not found</h1>
                <Link to="/products">Back to products</Link>
            </section>
        );
    }

    return (
        <section className="products-section product-details">
            <Link to="/products">← Back to products</Link>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
            <button type="button" onClick={() => addToCart(product)}>
                Add to cart
            </button>
        </section>
    );
}

export default ProductDetailsPage;