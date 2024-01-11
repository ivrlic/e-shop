import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import companyData from "../../assets/data/companyData.js";

const ContactDetails = () => {
  return (
      <div className="contact-us-details-cont">

        <p><FontAwesomeIcon icon={faBuilding} className="contact-us-icon"/>
          <span className="contact-us-detail-label">
            Name: 
          </span> {companyData.name}
        </p>

        <p><FontAwesomeIcon icon={faLocationDot} className="contact-us-icon"/>
          <span className="contact-us-detail-label">
            Adress: 
          </span>
          <span className="contact-us-adress-cont">
            <span> {companyData.street},</span>
            <span> {companyData.city},</span>
            <span> {companyData.country}</span>
          </span>
        </p>

        <p><FontAwesomeIcon icon={faEnvelope} className="contact-us-icon"/>
          <span className="contact-us-detail-label">
            E-mail:
          </span> {companyData.eMail}
        </p>

        <p><FontAwesomeIcon icon={faPhone} className="contact-us-icon"/>
          <span className="contact-us-detail-label">
            Tel: 
          </span> {companyData.tel}
        </p>
      </div>
  );
};

export default ContactDetails;