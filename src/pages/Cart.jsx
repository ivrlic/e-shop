
import { useCart } from "../context/CartContext.jsx";
import CartTable from "../components/cart/CartTable.jsx";
import CartSummary from "../components/cart/CartSummary.jsx";
import CartCheckout from "../components/cart/CartCheckout.jsx";
import ROUTES from "../utils/constantsRoutes.js";
import { Link } from "react-router-dom";
import { useActivePage } from "../context/ActivePageContext.jsx";

const Cart = () => {

  const { cart, removeFromCart, setCart } = useCart();
  const { handlePageChange } = useActivePage();

  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = parseFloat((subtotal * 0.25).toFixed(2));
  const shipping = 0;
  const total = parseFloat(subtotal + tax + shipping.toFixed(2));

  const onUpdateQuantity = (productId, newQuantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    });
  };

  if (cart.length === 0) {
    return (
      <p className="cart-empty-msg">
        Your cart is empty. Feel free to search our
        <Link to={ROUTES.SHOP}> webshop</Link>.
      </p>)
  }

  return (
    <main>
      <h1 className="page-title">CAR<span className="h1-last-letter">T</span></h1>

      <nav className="second-nav">
        <Link 
          to={ROUTES.HOME}
          onClick={() => {
            handlePageChange(ROUTES.HOME)
            localStorage.setItem("activePage", ROUTES.HOME);
          }}>
            HOME
        </Link>
        {" / "}
        <Link 
          to={ROUTES.SHOP}
          onClick={() => {
            handlePageChange(ROUTES.SHOP)
            localStorage.setItem("activePage", ROUTES.SHOP);
          }}>
            SHOP
        </Link>
        {" / "}
        <span>CART</span>
      </nav>

      <CartTable cart={cart} onRemove={removeFromCart} onUpdateQuantity={onUpdateQuantity}/>
      <CartSummary subtotal={subtotal} tax={tax} shipping={shipping} total={total} />
      <CartCheckout />

    </main>
  );
};

export default Cart;