import { Link } from "react-router-dom";
import ROUTES from "../../utils/constantsRoutes.js";
import SearchBar from "./SearchBar.jsx";
import { useActivePage } from "../../context/ActivePageContext.jsx";
import HeaderNavigation from "./HeaderNavigation.jsx";
import CartUserIcons from "./CartUserIcons.jsx";
import FixedNavigation from "./FixedNavigation.jsx";


const Header = () => {
  const { handlePageChange } = useActivePage();

  return (
    <div>
    <header>

      <div className="header-top-cont">
        <Link 
          to={ROUTES.HOME} 
          className="logo"
          onClick={() => {
            handlePageChange(ROUTES.HOME)
            localStorage.setItem("activePage", ROUTES.HOME);
          }}>
            LittleJoy Kingdom
        </Link>

        <div className="header-right-cont">
          <CartUserIcons />
          <SearchBar/>
        </div>
      </div>

      <HeaderNavigation />

    </header>
    <FixedNavigation />
</div>
  );
};

export default Header;