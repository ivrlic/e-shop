import CartItem from "./CartItem.jsx";

const CartTable = ({ cart, onRemove }) => {
  console.log(cart)
  return (
    <table className="cart-table">
      
      <thead>
        <tr>
          <th></th>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Amount</th>
        </tr>
      </thead>

      <tbody>
        {cart.map((product) => (
          <CartItem key={product.id} product={product} onRemove={onRemove} />
        ))}
      </tbody>

    </table>
  );
};

export default CartTable;