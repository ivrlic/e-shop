import ContactForm from "../components/contact/ContactForm.jsx";
import ContactDetails from "../components/contact/ContactDetails.jsx";
import img1 from "../assets/images/contact/contact2.jpg"
import { Link } from "react-router-dom";
import ROUTES from "../utils/constantsRoutes.js";
import { useActivePage } from "../context/ActivePageContext.jsx";

const Contact = () => {

  const { handlePageChange } = useActivePage();

  return (
    <main className="contact-us-main-cont">
      <h1 className="page-title">CONTACT U<span className="h1-last-letter">S</span></h1>

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
        <span>CONTACT</span>
      </nav>

        <img src={img1} alt="" className="top-image"/>
      <div className="contact-us-intro">
        <h2>CONTACT US</h2>
        <p>Welcome to our contact page. We have a dedicated team here to assist you. If you have any question, comments, or would like to learn more about our products, feel free to contact us using the form or the information below.</p>
      </div>

      <div className="contact-us-form-detail-cont">
        <ContactForm />
        <div>
          <h4>Contact detail about the company:</h4>
          <ContactDetails />
        </div>
      </div>
      
    </main>
  );
};

export default Contact;

