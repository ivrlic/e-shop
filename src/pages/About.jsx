import { Link } from "react-router-dom";
import aboutData from "../assets/data/aboutData.js";
import img1 from "../assets/images/about/team1.jpg"
import img2 from "../assets/images/about/team2.jpg"
import img3 from "../assets/images/about/team3.jpg"
import img4 from "../assets/images/about/team4.jpg"
import img5 from "../assets/images/about/team5.jpg"
import ROUTES from "../utils/constantsRoutes.js";
import { useActivePage } from "../context/ActivePageContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBinoculars, faBullseye, faPersonHiking } from "@fortawesome/free-solid-svg-icons";

const About = () => {

  const { handlePageChange } = useActivePage();

  const goalListHtml = aboutData.goals.map((goal, index) => {
    return (
      <li key={`goal-${index}`}>{goal}</li>
    )
  })

  return (
    <main className="about-main-cont">
      <h1 className="page-title">OUR STOR<span className="h1-last-letter">Y</span></h1>
      
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
        <span>ABOUT</span>
      </nav>

      <img src={img1} alt="" className="top-image"/>
      <h2>WHO WE ARE?</h2>

      <section>
        <p>{aboutData.description.a}</p>
        <p>{aboutData.description.b}</p>
        <img src={img2} alt="" className="about-img2"/>
        <p>{aboutData.description.c}</p>
        <p>{aboutData.description.d}</p>
        <p>{aboutData.description.e}</p>
        <p>{aboutData.description.f}</p>
      </section>

      <div className="about-mission-vision-cont">
        <div>
          <h3>
            <FontAwesomeIcon icon={faPersonHiking} className="about-icon"/>
             MISSION
          </h3>
          <section>
              <img src={img3}  alt="" className="about-img3"/>
              <p>{aboutData.mission}</p>
          </section>
        </div>

        <div>
          <h3>
            <FontAwesomeIcon icon={faBinoculars} className="about-icon"/>
            VISION
          </h3>
          <section>
              <img src={img4} alt="" className="about-img4"/>
              <p>{aboutData.vision}</p>
          </section>
        </div>
      </div>

      <div className="about-goal-cont">
        <h3>
          <FontAwesomeIcon icon={faBullseye} className="about-icon"/>
          GOALS
        </h3>
        <section>
            <img src={img5} alt="" className="about-img5"/>
            <ol>{goalListHtml}</ol>
        </section>
      </div>

    </main>
  );
};

export default About;

