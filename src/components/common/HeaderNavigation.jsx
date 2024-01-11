import { Link } from "react-router-dom";
import ROUTES from "../../utils/constantsRoutes.js";
import { useActivePage } from "../../context/ActivePageContext.jsx";


const HeaderNavigation = () => {
  const { activePage, handlePageChange } = useActivePage();

  return (
    <nav>
      <ul>
        <li 
          className={activePage === ROUTES.HOME ? "active-page" : ""}
          onClick={() => {
            handlePageChange(ROUTES.HOME)
            localStorage.setItem("activePage", ROUTES.HOME);
          }}>
              <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li 
          className={activePage === ROUTES.SHOP ? "active-page" : ""}
          onClick={() => {
            handlePageChange(ROUTES.SHOP)
            localStorage.setItem("activePage", ROUTES.SHOP);
          }}>
              <Link to={ROUTES.SHOP}>Shop</Link>
        </li>
        <li 
          className={activePage === ROUTES.ABOUT ? "active-page" : ""}
          onClick={() => {
            handlePageChange(ROUTES.ABOUT)
            localStorage.setItem("activePage", ROUTES.ABOUT);
          }}>
              <Link to={ROUTES.ABOUT}>About</Link>
        </li>
        <li 
          className={activePage === ROUTES.CONTACT ? "active-page" : ""}
          onClick={() => {
            handlePageChange(ROUTES.CONTACT)
            localStorage.setItem("activePage", ROUTES.CONTACT);
          }}>
              <Link to={ROUTES.CONTACT}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavigation;