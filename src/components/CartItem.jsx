function CartItem({ item, onRemoveFromCart }) {
  return (
    <li className="cart-item">
      <span>{item.name}</span>
      <span>${item.price.toFixed(2)}</span>
      <button
        type="button"
        onClick={() => onRemoveFromCart(item.cartId)}
      >
        Remove
      </button>
    </li>
  );
}

export default CartItem;