import { Link } from "react-router-dom";
import ROUTES from "../../utils/constantsRoutes.js";
import ContactDetails from "../contact/ContactDetails.jsx";

const Footer = () => {
  return (

    <footer>
      <div className="footer-content">

        <div className="footer-section">
          <h4>Help</h4>
          <p><Link to={ROUTES.HOME}>Terms of service</Link></p>
          <p><Link to={ROUTES.HOME}>Shipping and returns</Link></p>
          <p><Link to={ROUTES.HOME}>FAQ</Link></p>
        </div>

        <div className="footer-section">
          <h4>Contact us</h4>
          <ContactDetails />
        </div>
      </div>

      <div className="footer-bottom">
        <p><a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash images</a></p>
        <p>&copy; 2023 LittleJoy Kingdoms.</p>
        <p>made by ivrlic</p>
      </div>
    </footer>
  );
};

export default Footer;