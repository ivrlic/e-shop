import { useCart } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ROUTES from "../../utils/constantsRoutes";

const CartItem = ({ product, onRemove }) => {
  const { title, price, quantity, imgSmall } = product;
  const { addToCart, setItemQuantity, decrementItemQuantity } = useCart();

  const handleQuantityChange = (newQuantity) => {
    // if new quantity is less than 1, set to 1
    newQuantity = Math.max(1, newQuantity);
    setItemQuantity(product.id, newQuantity)
  };

  const handleIncrement = () => {
    addToCart(product);
  };

  const handleDecrement = () => {
    decrementItemQuantity(product.id);
  };

  return (
    <tr>
      <td>
          <img className="cart-img-small" src={`../${imgSmall}`} alt="" />
      </td>

      <td>
        <Link to={`${ROUTES.SHOP}/${product.id}`}>
          {title}
        </Link>
      </td>

      <td>${price.toFixed(2)}</td>

      <td>
        <div className="cart-item-quantity-cont">
          <button onClick={handleDecrement} disabled={quantity === 1}>
            -
          </button>

          <input
            type="number"
            inputMode="numeric"
            min="1"
            value={quantity}
            onChange={(e) => handleQuantityChange(e.target.value)}
          />

          <button onClick={handleIncrement}>+</button>
        </div>
      </td>

      <td>${(price * quantity).toFixed(2)}</td>

      <td>
        <button
          onClick={() => onRemove(product.id)}
          className="remove-btn"
        >
          <FontAwesomeIcon icon={faTrash} className="contact-us-icon"/>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
