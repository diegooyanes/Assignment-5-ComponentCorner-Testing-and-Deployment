import CartItem from "../components/CartItem";

function CartPage({ cartItems, removeFromCart }) {
    const cartTotal = cartItems.reduce(
        (total, item) => total + item.price,
        0
    );

    return (
        <section className="cart-section">
            <h2>Your cart</h2>

            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul className="cart-list">
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.cartId}
                                item={item}
                                onRemoveFromCart={removeFromCart}
                            />
                        ))}
                    </ul>
                    <p className="cart-total">Total: ${cartTotal.toFixed(2)}</p>
                </>
            )}
        </section>
    );
}

export default CartPage;