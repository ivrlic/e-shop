import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import ROUTES from "../../utils/constantsRoutes.js";
import { useCart } from "../../context/CartContext.jsx";
import { useActivePage } from "../../context/ActivePageContext.jsx";


const CartUserIcons = () => {
  const { cart } = useCart();
  const { handlePageChange } = useActivePage();

  // Calculation of the total amount of products in the cart
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      {cart.length > 0 && <span className="cart-count">{totalQuantity}</span>}
      
      <Link 
        to={ROUTES.CART} 
        onClick={() => {
          handlePageChange(ROUTES.CART)
          localStorage.setItem("activePage", ROUTES.CART);
        }}>
          <FaShoppingCart  className="cart-icon" />
      </Link>
      
      <FaUser className="user-icon" />
    </div>
  );
};

export default CartUserIcons;