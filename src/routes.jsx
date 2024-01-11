import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import ROUTES from "./utils/constantsRoutes.js";

const routes = [
  { path: ROUTES.HOME, element: <Home />},
  { path: ROUTES.SHOP, element: <Shop />},
  { path: ROUTES.ABOUT, element: <About />},
  { path: ROUTES.CONTACT, element: <Contact />},
  { path: ROUTES.PRODUCT, element: <Product />},
  { path: ROUTES.CART, element: <Cart />},
];

export default routes;