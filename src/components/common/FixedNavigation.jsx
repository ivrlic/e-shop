import { Link } from "react-router-dom";
import ROUTES from "../../utils/constantsRoutes.js";
import { useActivePage } from "../../context/ActivePageContext.jsx";
import { FaUser, FaShoppingCart, FaArrowAltCircleUp, FaArrowCircleUp, FaArrowUp, FaRegArrowAltCircleUp, FaRegCaretSquareDown, FaRegCaretSquareUp, FaLongArrowAltUp, FaPeopleArrows, FaArrowsAltH } from "react-icons/fa";
import { useCart } from "../../context/CartContext.jsx";
import { useEffect } from "react";
import scrollToTop from "../../utils/scrollToTop.js";


const FixedNavigation = () => {
  const { activePage, handlePageChange } = useActivePage();
  const { cart } = useCart();

  // Calculation of the total amount of products in the cart
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const fixedNav = document.querySelector(".fixed-nav");

      // showing or removing fixedNav (animated)
      // depending if it was scrolled at the top of the page
      if (window.scrollY > (header.offsetHeight)) {
        fixedNav.classList.remove("hidden");
        fixedNav.classList.add("show");
      } else {
        fixedNav.classList.add("hidden");
        fixedNav.classList.remove("show");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
    <div className="fixed-nav hidden">

      <div className="icon-cont">

        {cart.length > 0 && <span className="cart-count">{totalQuantity}</span>}
        <div>
          <Link 
            to={ROUTES.CART} 
            onClick={() => {
              handlePageChange(ROUTES.CART)
              localStorage.setItem("activePage", ROUTES.CART)
              scrollToTop(100)
            }}>
              <FaShoppingCart className="cart-icon" />
          </Link>
          
          <FaUser className="user-icon"/>
        </div>
        <FaArrowCircleUp 
          className="arrow-icon"
          onClick={()=>scrollToTop(100)}
        />

      </div>
    </div>

  );
};

export default FixedNavigation;

