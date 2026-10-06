import ProductCard from "../components/ProductCard";

function ProductsPage({ products, addToCart }) {
    return (
        <section className="products-section">
            <div className="section-heading">
                <p>Our favorites</p>
                <h2>Build your perfect mate setup</h2>
                <span>
                    Thoughtfully selected essentials for beginners and lifelong mate
                    drinkers.
                </span>
            </div>

            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        description={product.description}
                        onAddToCart={addToCart}
                    />
                ))}
            </div>
        </section>
    );
}

export default ProductsPage;