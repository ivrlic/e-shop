const CartSummary = ({ subtotal, tax, shipping, total }) => {
  return (
    <div className="cart-summary-cont">
      <div>
        <span className="cart-summary-label">Subtotal: </span>
        <span className="cart-summary-value">${subtotal.toFixed(2)}</span>
      </div>
      <div>
        <span className="cart-summary-label">Tax 25%: </span>
        <span className="cart-summary-value">${tax}</span>
      </div>
      <div>
        <span className="cart-summary-label">Shipping: </span>
        <span className="cart-summary-value">${shipping}</span>
      </div>
      <div>
        <span className="cart-summary-label">Total: </span>
        <span className="cart-summary-value">${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartSummary;