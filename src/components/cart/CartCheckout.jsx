// import { Link } from "react-router-dom";
// import { useCart } from "../../context/CartContext.jsx";
// import ROUTES from "../../utils/constantsRoutes.js";

// const CartCheckout = ({ onCheckout }) => {
//   const {clearCart} = useCart()

//   return (
//     <div className="cart-checkout-cont">
//       <button>
//         <Link to={ROUTES.SHOP}>Keep shopping</Link>
//       </button>
//       <button onClick={clearCart}>Clear all</button>
//       <button onClick={onCheckout}>Checkout</button>
//     </div>
//   );
// };

// export default CartCheckout;


import { Link } from "react-router-dom";
import { useState } from "react"; 
import { useCart } from "../../context/CartContext.jsx";
import ROUTES from "../../utils/constantsRoutes.js";

const CartCheckout = () => {
  const { clearCart } = useCart();
  const [checkoutMessageVisible, setCheckoutMessageVisible] = useState(false);

  const handleCheckout = () => {
    setCheckoutMessageVisible(true);
  };

  // Function to hide the checkout message
  const handleHideMessage = () => {
    clearCart();
    setCheckoutMessageVisible(false);
  };

  return (
    <div className="cart-checkout-cont">

      <button>
        <Link to={ROUTES.SHOP}>Keep shopping</Link>
      </button>
      <button onClick={clearCart}>Clear all</button>
      <button onClick={handleCheckout}>Checkout</button>

      {/* Display the checkout message when visible */}
      {checkoutMessageVisible && (
        <div className="checkout-message-background">
          <div className="checkout-message">
            <p>Cart functionality is disabled in this demo mode. Thank you for visiting!</p>
            <button onClick={handleHideMessage}>OK</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default CartCheckout;