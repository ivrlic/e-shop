import aboutData from "../../assets/data/aboutData.js";
import { Link } from "react-router-dom";
import ROUTES from "../../utils/constantsRoutes.js";
import { useActivePage } from "../../context/ActivePageContext.jsx";
import scrollToTop from "../../utils/scrollToTop.js";

const AboutSection = () => {

  const { handlePageChange } = useActivePage();
  
  return (
    <section className="home-about-us-section">
        <h2>WHO WE ARE?</h2>
        <p>{aboutData.description.a}</p>
        <p>{aboutData.description.b}</p>

        <Link 
          to={ROUTES.ABOUT}
          onClick={() => {
            handlePageChange(ROUTES.ABOUT)
            scrollToTop(0, "instant")
            }}>
          <button className="home-link-btn">Learn More</button>
        </Link>
    </section>
  );
};

export default AboutSection;